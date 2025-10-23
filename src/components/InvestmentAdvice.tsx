import React from 'react';
import { Card, Row, Col, Typography, Tag, Progress, Alert, Timeline, Statistic } from 'antd';
import { getFinancialData, getAnalystRatings } from '../data/stocksData';

const { Title, Text, Paragraph } = Typography;

interface InvestmentAdviceProps {
  symbol: string;
}

const InvestmentAdvice: React.FC<InvestmentAdviceProps> = ({ symbol }) => {
  const financialData = getFinancialData(symbol);
  const analystRatings = getAnalystRatings(symbol);

  if (!financialData) {
    return (
      <Alert
        message="数据加载失败"
        description="无法获取投资建议数据"
        type="error"
        showIcon
      />
    );
  }

  const calculateInvestmentScore = () => {
    if (!financialData) return { score: 0, level: 'N/A', color: 'gray' };

    let score = 50; // 基础分

    // 盈利能力评分
    if (financialData.roe > 0.2) score += 20;
    else if (financialData.roe > 0.15) score += 15;
    else if (financialData.roe > 0.1) score += 10;
    else score -= 10;

    // 估值评分
    if (financialData.pe > 0 && financialData.pe < 20) score += 15;
    else if (financialData.pe > 0 && financialData.pe < 30) score += 10;
    else if (financialData.pe > 0 && financialData.pe < 50) score += 5;
    else if (financialData.pe > 100) score -= 20;

    // 成长性评分
    if (financialData.netIncome > 0) score += 10;
    else score -= 15;

    // 债务水平评分
    if (financialData.debtToEquity < 0.3) score += 10;
    else if (financialData.debtToEquity < 0.5) score += 5;
    else score -= 5;

    score = Math.max(0, Math.min(100, score));

    let level, color;
    if (score >= 80) { level = '强烈推荐'; color = 'green'; }
    else if (score >= 70) { level = '推荐'; color = 'blue'; }
    else if (score >= 60) { level = '中性偏多'; color = 'orange'; }
    else if (score >= 50) { level = '中性'; color = 'gray'; }
    else if (score >= 40) { level = '中性偏空'; color = 'orange'; }
    else { level = '不推荐'; color = 'red'; }

    return { score, level, color };
  };

  const getRiskLevel = () => {
    if (!financialData) return { level: 'N/A', color: 'gray' };

    let riskScore = 0;

    // 估值风险
    if (financialData.pe > 50) riskScore += 30;
    else if (financialData.pe > 30) riskScore += 20;
    else if (financialData.pe > 20) riskScore += 10;

    // 债务风险
    if (financialData.debtToEquity > 1) riskScore += 30;
    else if (financialData.debtToEquity > 0.5) riskScore += 20;
    else if (financialData.debtToEquity > 0.3) riskScore += 10;

    // 盈利能力风险
    if (financialData.netIncome < 0) riskScore += 25;
    else if (financialData.roe < 0.1) riskScore += 15;

    // 波动性风险（基于价格变化）
    // 由于我们不再有实时价格数据，这里使用财务数据来评估风险
    if (financialData.pe > 50) riskScore += 15;

    let level, color;
    if (riskScore >= 70) { level = '高风险'; color = 'red'; }
    else if (riskScore >= 50) { level = '中高风险'; color = 'orange'; }
    else if (riskScore >= 30) { level = '中等风险'; color = 'yellow'; }
    else if (riskScore >= 15) { level = '中低风险'; color = 'blue'; }
    else { level = '低风险'; color = 'green'; }

    return { level, color };
  };

  const getInvestmentStrategy = () => {
    const investmentScore = calculateInvestmentScore();
    const riskLevel = getRiskLevel();

    if (investmentScore.score >= 70 && riskLevel.level.includes('低')) {
      return {
        strategy: '积极投资',
        description: '基本面良好，风险较低，建议加大配置比例',
        allocation: '15-25%',
        timeframe: '长期持有'
      };
    } else if (investmentScore.score >= 60) {
      return {
        strategy: '适度投资',
        description: '基本面尚可，建议适度配置',
        allocation: '5-15%',
        timeframe: '中期持有'
      };
    } else if (investmentScore.score >= 50) {
      return {
        strategy: '谨慎投资',
        description: '基本面一般，建议小仓位试探',
        allocation: '1-5%',
        timeframe: '短期持有'
      };
    } else {
      return {
        strategy: '观望',
        description: '基本面较差，建议暂时观望',
        allocation: '0%',
        timeframe: '等待时机'
      };
    }
  };

  const investmentScore = calculateInvestmentScore();
  const riskLevel = getRiskLevel();
  const strategy = getInvestmentStrategy();
  const averageTargetPrice = analystRatings.length > 0
    ? analystRatings.reduce((sum, rating) => sum + rating.targetPrice, 0) / analystRatings.length
    : 0; // 如果没有分析师评级，使用0作为默认目标价

  // 估算当前价格（基于财务数据）
  const estimatedPrice = financialData.pe > 0 ? financialData.eps * financialData.pe : 0;

  return (
    <div>
      <Row gutter={[16, 16]}>
        {/* 投资评分 */}
        <Col xs={24} lg={8}>
          <Card title="投资评分" size="small">
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: investmentScore.color }}>
                {investmentScore.score}
              </div>
              <Text type="secondary">/ 100</Text>
            </div>
            <Progress
              percent={investmentScore.score}
              strokeColor={investmentScore.color}
              showInfo={false}
            />
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <Tag color={investmentScore.color} style={{ fontSize: '14px' }}>
                {investmentScore.level}
              </Tag>
            </div>
          </Card>
        </Col>

        {/* 风险评级 */}
        <Col xs={24} lg={8}>
          <Card title="风险评级" size="small">
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: riskLevel.color }}>
                {riskLevel.level}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Tag color={riskLevel.color} style={{ fontSize: '14px' }}>
                {riskLevel.level}
              </Tag>
            </div>
          </Card>
        </Col>

        {/* 分析师目标价 */}
        <Col xs={24} lg={8}>
          <Card title="分析师目标价" size="small">
            <Statistic
              title="平均目标价"
              value={averageTargetPrice}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#1890ff' }}
            />
            <div style={{ marginTop: '8px' }}>
              <Text type="secondary">
                当前价格: ${estimatedPrice.toFixed(2)}
              </Text>
              <br />
              <Text type={averageTargetPrice > estimatedPrice ? 'success' : 'danger'}>
                上涨空间: {averageTargetPrice > 0 ? ((averageTargetPrice - estimatedPrice) / estimatedPrice * 100).toFixed(1) : 0}%
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 投资策略 */}
        <Col xs={24} lg={12}>
          <Card title="投资策略建议" size="small">
            <div style={{ marginBottom: '16px' }}>
              <Title level={4} style={{ color: investmentScore.color }}>
                {strategy.strategy}
              </Title>
              <Paragraph>{strategy.description}</Paragraph>
            </div>

            <Row gutter={16}>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1890ff' }}>
                    {strategy.allocation}
                  </div>
                  <Text type="secondary">建议配置</Text>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#52c41a' }}>
                    {strategy.timeframe}
                  </div>
                  <Text type="secondary">持有期限</Text>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#fa8c16' }}>
                    {investmentScore.score >= 70 ? '高' : investmentScore.score >= 50 ? '中' : '低'}
                  </div>
                  <Text type="secondary">投资优先级</Text>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 分析师评级 */}
        <Col xs={24} lg={12}>
          <Card title="分析师评级" size="small">
            {analystRatings.length > 0 ? (
              <Timeline
                items={analystRatings.slice(0, 5).map((rating, index) => ({
                  children: (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text strong>{rating.analyst}</Text>
                        <Tag color={
                          rating.rating === 'Strong Buy' ? 'green' :
                            rating.rating === 'Buy' ? 'blue' :
                              rating.rating === 'Hold' ? 'orange' :
                                rating.rating === 'Sell' ? 'red' : 'red'
                        }>
                          {rating.rating}
                        </Tag>
                      </div>
                      <div style={{ marginTop: '4px' }}>
                        <Text type="secondary">目标价: ${rating.targetPrice}</Text>
                        <Text type="secondary" style={{ marginLeft: '16px' }}>
                          {rating.date}
                        </Text>
                      </div>
                    </div>
                  )
                }))}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                <Text>暂无分析师评级数据</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  目标价基于技术分析估算: ${averageTargetPrice.toFixed(2)}
                </Text>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 投资要点 */}
        <Col xs={24} lg={12}>
          <Card title="投资要点" size="small">
            <Timeline
              items={[
                {
                  color: 'green',
                  children: (
                    <div>
                      <Text strong>优势</Text>
                      <ul style={{ marginTop: '8px', marginBottom: 0 }}>
                        <li>ROE: {(financialData.roe * 100).toFixed(1)}%</li>
                        <li>债务水平: {financialData.debtToEquity < 0.5 ? '健康' : '偏高'}</li>
                        <li>分析师平均目标价: ${averageTargetPrice.toFixed(2)}</li>
                      </ul>
                    </div>
                  )
                },
                {
                  color: 'red',
                  children: (
                    <div>
                      <Text strong>风险</Text>
                      <ul style={{ marginTop: '8px', marginBottom: 0 }}>
                        <li>P/E: {financialData.pe.toFixed(1)} {financialData.pe > 50 ? '(估值偏高)' : ''}</li>
                        <li>净利润: {financialData.netIncome > 0 ? '盈利' : '亏损'}</li>
                        <li>风险等级: {riskLevel.level}</li>
                      </ul>
                    </div>
                  )
                }
              ]}
            />
          </Card>
        </Col>

        {/* 操作建议 */}
        <Col xs={24} lg={12}>
          <Card title="操作建议" size="small">
            <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '6px' }}>
              <Text>
                <strong>当前建议：</strong>
                <br />
                • <strong>买入时机</strong>：{investmentScore.score >= 70 ? '当前价格相对合理，可考虑分批买入' :
                  investmentScore.score >= 50 ? '等待回调至支撑位再考虑买入' : '建议观望，等待更好的买入时机'}
                <br />
                • <strong>止损位</strong>：建议设置在${(estimatedPrice * 0.85).toFixed(2)}附近
                <br />
                • <strong>止盈位</strong>：建议设置在${averageTargetPrice.toFixed(2)}附近
                <br />
                • <strong>仓位管理</strong>：建议配置{strategy.allocation}的仓位
                <br />
                • <strong>持有期限</strong>：{strategy.timeframe}
                <br />
                <br />
                <strong>风险提示：</strong>投资有风险，入市需谨慎。以上建议仅供参考，不构成投资建议。
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InvestmentAdvice;
