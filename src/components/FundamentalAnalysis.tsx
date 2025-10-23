import React from 'react';
import { Card, Row, Col, Statistic, Alert, Progress, Typography, Table, Tag } from 'antd';
import { DollarOutlined, TrophyOutlined } from '@ant-design/icons';
import { getFinancialData } from '../data/stocksData';

const { Text } = Typography;

interface FundamentalAnalysisProps {
  symbol: string;
}

const FundamentalAnalysis: React.FC<FundamentalAnalysisProps> = ({ symbol }) => {
  const financialData = getFinancialData(symbol);

  if (!financialData) {
    return (
      <Alert
        message="数据加载失败"
        description="无法获取财务数据"
        type="error"
        showIcon
      />
    );
  }

  const formatCurrency = (value: number) => {
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)}B`;
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)}M`;
    } else if (value >= 1e3) {
      return `$${(value / 1e3).toFixed(2)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  const getRating = (value: number, thresholds: { excellent: number; good: number; fair: number }) => {
    if (value >= thresholds.excellent) return { rating: '优秀', color: 'green' };
    if (value >= thresholds.good) return { rating: '良好', color: 'blue' };
    if (value >= thresholds.fair) return { rating: '一般', color: 'orange' };
    return { rating: '较差', color: 'red' };
  };

  const getPEAnalysis = (pe: number) => {
    if (pe <= 15) return { analysis: '被低估', color: 'green' };
    if (pe <= 25) return { analysis: '合理估值', color: 'blue' };
    if (pe <= 40) return { analysis: '高估值', color: 'orange' };
    return { analysis: '严重高估', color: 'red' };
  };

  const profitabilityRating = getRating(financialData.roe, { excellent: 0.2, good: 0.15, fair: 0.1 });
  const efficiencyRating = getRating(financialData.roa, { excellent: 0.15, good: 0.1, fair: 0.05 });
  const peAnalysis = getPEAnalysis(financialData.pe);

  const profitabilityData = [
    { metric: '净资产收益率 (ROE)', value: `${(financialData.roe * 100).toFixed(2)}%`, rating: profitabilityRating },
    { metric: '总资产收益率 (ROA)', value: `${(financialData.roa * 100).toFixed(2)}%`, rating: efficiencyRating },
    { metric: '每股收益 (EPS)', value: `$${financialData.eps.toFixed(2)}`, rating: { rating: 'N/A', color: 'blue' } },
  ];

  const valuationData = [
    { metric: '市盈率 (P/E)', value: financialData.pe.toFixed(2), rating: peAnalysis },
    { metric: '市净率 (P/B)', value: financialData.pb.toFixed(2), rating: { rating: 'N/A', color: 'blue' } },
    { metric: '债务股本比', value: financialData.debtToEquity.toFixed(2), rating: { rating: 'N/A', color: 'blue' } },
  ];

  const columns = [
    {
      title: '指标',
      dataIndex: 'metric',
      key: 'metric',
    },
    {
      title: '数值',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: '评级',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating: any) => (
        <Tag color={rating.color}>{rating.rating}</Tag>
      ),
    },
  ];

  return (
    <div>
      <Row gutter={[16, 16]}>
        {/* 收入与利润 */}
        <Col xs={24} lg={12}>
          <Card title="收入与利润" size="small">
            <Row gutter={16}>
              <Col span={12}>
                <Statistic
                  title="年收入"
                  value={formatCurrency(financialData.revenue)}
                  prefix={<DollarOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="净利润"
                  value={formatCurrency(financialData.netIncome)}
                  prefix={<TrophyOutlined />}
                  valueStyle={{ color: financialData.netIncome >= 0 ? '#52c41a' : '#ff4d4f' }}
                />
              </Col>
            </Row>
            <div style={{ marginTop: '16px' }}>
              <Text type="secondary">
                净利润率: {((financialData.netIncome / financialData.revenue) * 100).toFixed(2)}%
              </Text>
            </div>
          </Card>
        </Col>

        {/* 盈利能力指标 */}
        <Col xs={24} lg={12}>
          <Card title="盈利能力" size="small">
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: profitabilityRating.color }}>
                    {(financialData.roe * 100).toFixed(1)}%
                  </div>
                  <Text type="secondary">ROE</Text>
                  <div>
                    <Tag color={profitabilityRating.color}>
                      {profitabilityRating.rating}
                    </Tag>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: efficiencyRating.color }}>
                    {(financialData.roa * 100).toFixed(1)}%
                  </div>
                  <Text type="secondary">ROA</Text>
                  <div>
                    <Tag color={efficiencyRating.color}>
                      {efficiencyRating.rating}
                    </Tag>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 估值指标 */}
        <Col xs={24} lg={12}>
          <Card title="估值指标" size="small">
            <Row gutter={16}>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: peAnalysis.color }}>
                    {financialData.pe.toFixed(1)}
                  </div>
                  <Text type="secondary">P/E</Text>
                  <div>
                    <Tag color={peAnalysis.color}>
                      {peAnalysis.analysis}
                    </Tag>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {financialData.pb.toFixed(1)}
                  </div>
                  <Text type="secondary">P/B</Text>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    {financialData.debtToEquity.toFixed(1)}
                  </div>
                  <Text type="secondary">D/E</Text>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 财务健康度 */}
        <Col xs={24} lg={12}>
          <Card title="财务健康度" size="small">
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Text>盈利能力</Text>
                <Text>{profitabilityRating.rating}</Text>
              </div>
              <Progress
                percent={Math.min(financialData.roe * 500, 100)}
                strokeColor={profitabilityRating.color}
                size="small"
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Text>运营效率</Text>
                <Text>{efficiencyRating.rating}</Text>
              </div>
              <Progress
                percent={Math.min(financialData.roa * 500, 100)}
                strokeColor={efficiencyRating.color}
                size="small"
              />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Text>债务水平</Text>
                <Text>{financialData.debtToEquity < 0.5 ? '健康' : '偏高'}</Text>
              </div>
              <Progress
                percent={Math.min(financialData.debtToEquity * 200, 100)}
                strokeColor={financialData.debtToEquity < 0.5 ? '#52c41a' : '#ff4d4f'}
                size="small"
              />
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 详细指标表格 */}
        <Col xs={24} lg={12}>
          <Card title="盈利能力指标" size="small">
            <Table
              dataSource={profitabilityData}
              columns={columns}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="估值指标" size="small">
            <Table
              dataSource={valuationData}
              columns={columns}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
      </Row>

      {/* 分析总结 */}
      <Card title="基本面分析总结" style={{ marginTop: '16px' }}>
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '6px' }}>
          <Text>
            <strong>{symbol}</strong> 的基本面分析显示：
            <br />
            • 盈利能力：{profitabilityRating.rating} (ROE: {(financialData.roe * 100).toFixed(2)}%)
            <br />
            • 运营效率：{efficiencyRating.rating} (ROA: {(financialData.roa * 100).toFixed(2)}%)
            <br />
            • 估值水平：{peAnalysis.analysis} (P/E: {financialData.pe.toFixed(2)})
            <br />
            • 财务健康度：{financialData.debtToEquity < 0.5 ? '债务水平健康' : '债务水平偏高'}
            <br />
            <br />
            总体而言，该公司在{symbol === 'NVDA' ? 'AI芯片和GPU领域' : '生物技术领域'}具有较强的市场地位，
            {financialData.netIncome > 0 ? '盈利能力良好' : '目前处于投资期，盈利能力有待提升'}。
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default FundamentalAnalysis;
