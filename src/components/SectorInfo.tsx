import React from 'react';
import { Card, Row, Col, Typography, Tag, Progress, List, Avatar, Statistic, Alert } from 'antd';
import { BankOutlined, TrophyOutlined } from '@ant-design/icons';
import { getSectorData } from '../data/stocksData';

const { Title, Text, Paragraph } = Typography;

interface SectorInfoProps {
  symbol: string;
}

const SectorInfo: React.FC<SectorInfoProps> = ({ symbol }) => {
  const sectorData = getSectorData(symbol);

  if (!sectorData) {
    return (
      <Alert
        message="数据加载失败"
        description="无法获取板块数据"
        type="error"
        showIcon
      />
    );
  }
  const trendColor = sectorData.sectorTrend === 'bullish' ? '#52c41a' :
    sectorData.sectorTrend === 'bearish' ? '#ff4d4f' : '#1890ff';

  return (
    <div>
      <Row gutter={[16, 16]}>
        {/* 板块概览 */}
        <Col xs={24} lg={16}>
          <Card>
            <Row gutter={16}>
              <Col span={12}>
                <div>
                  <Title level={3} style={{ margin: 0 }}>
                    <BankOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                    {sectorData.sector}
                  </Title>
                  <Text type="secondary" style={{ fontSize: '16px' }}>
                    {sectorData.industry} - {sectorData.subsector}
                  </Text>
                  <div style={{ marginTop: '12px' }}>
                    <Tag color="blue" style={{ marginRight: '8px' }}>{sectorData.sector}</Tag>
                    <Tag color="green">{sectorData.industry}</Tag>
                    <Tag color="orange">{sectorData.subsector}</Tag>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ textAlign: 'right' }}>
                  <Statistic
                    title="板块市值"
                    value={sectorData.marketCap}
                    prefix={<TrophyOutlined />}
                    valueStyle={{ fontSize: '24px', color: '#1890ff' }}
                  />
                  <div style={{ marginTop: '8px' }}>
                    <Tag color={trendColor}>
                      {sectorData.sectorTrend === 'bullish' ? '看涨' :
                        sectorData.sectorTrend === 'bearish' ? '看跌' : '中性'}
                    </Tag>
                  </div>
                </div>
              </Col>
            </Row>

            <div style={{ marginTop: '16px' }}>
              <Paragraph>{sectorData.description}</Paragraph>
            </div>
          </Card>
        </Col>

        {/* 板块指标 */}
        <Col xs={24} lg={8}>
          <Card title="板块指标" size="small">
            <Row gutter={[8, 16]}>
              <Col span={12}>
                <Statistic
                  title="市场份额"
                  value={sectorData.marketShare}
                  suffix="%"
                  valueStyle={{ color: '#52c41a' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="增长率"
                  value={sectorData.growthRate}
                  suffix="%"
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="平均P/E"
                  value={sectorData.peRatio}
                  valueStyle={{ color: sectorData.peRatio > 0 ? '#52c41a' : '#ff4d4f' }}
                />
              </Col>
              <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: trendColor }}>
                    {sectorData.sectorTrend === 'bullish' ? '看涨' :
                      sectorData.sectorTrend === 'bearish' ? '看跌' : '中性'}
                  </div>
                  <Text type="secondary">板块趋势</Text>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 竞争对手分析 */}
        <Col xs={24} lg={12}>
          <Card title="主要竞争对手" size="small">
            <List
              dataSource={sectorData.competitors}
              renderItem={(competitor) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#1890ff' }}>{competitor.name[0]}</Avatar>}
                    title={competitor.name}
                    description={
                      <div>
                        <Text type="secondary">市值: {competitor.marketCap}</Text>
                        <div style={{ marginTop: '4px' }}>
                          <Text type="secondary">
                            涨跌幅数据需要实时API支持
                          </Text>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* 市场份额 */}
        <Col xs={24} lg={12}>
          <Card title="市场份额分析" size="small">
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Text>{symbol}</Text>
                <Text>{sectorData.marketShare}%</Text>
              </div>
              <Progress
                percent={sectorData.marketShare}
                strokeColor="#1890ff"
                size="small"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Text>竞争对手</Text>
                <Text>{100 - sectorData.marketShare}%</Text>
              </div>
              <Progress
                percent={100 - sectorData.marketShare}
                strokeColor="#52c41a"
                size="small"
              />
            </div>

            <div style={{ marginTop: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '6px' }}>
              <Text type="secondary">
                {symbol}在{sectorData.industry}行业中占据{sectorData.marketShare}%的市场份额，
                {sectorData.marketShare > 50 ? '处于行业领先地位' : '仍有较大增长空间'}。
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 增长驱动因素 */}
        <Col xs={24} lg={12}>
          <Card title="增长驱动因素" size="small">
            <List
              dataSource={sectorData.keyDrivers}
              renderItem={(driver, index) => (
                <List.Item>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#52c41a',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <Text>{driver}</Text>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* 风险因素 */}
        <Col xs={24} lg={12}>
          <Card title="风险因素" size="small">
            <List
              dataSource={sectorData.risks}
              renderItem={(risk, index) => (
                <List.Item>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#ff4d4f',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <Text>{risk}</Text>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* 板块总结 */}
      <Card title="板块分析总结" style={{ marginTop: '16px' }}>
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '6px' }}>
          <Text>
            <strong>{sectorData.sector}</strong> 板块分析：
            <br />
            • <strong>行业地位</strong>：{symbol}在{sectorData.industry}行业中{sectorData.marketShare > 50 ? '处于领先地位' : '具有发展潜力'}，
            市场份额为{sectorData.marketShare}%
            <br />
            • <strong>增长前景</strong>：板块年增长率为{sectorData.growthRate}%，
            {sectorData.sectorTrend === 'bullish' ? '整体趋势向好' :
              sectorData.sectorTrend === 'bearish' ? '面临挑战' : '保持稳定'}
            <br />
            • <strong>竞争环境</strong>：主要竞争对手包括{sectorData.competitors.slice(0, 2).map(c => c.name).join('、')}等
            <br />
            • <strong>投资建议</strong>：{sectorData.sectorTrend === 'bullish' ? '建议关注板块内优质标的' :
              sectorData.sectorTrend === 'bearish' ? '需谨慎投资，关注风险控制' : '可适度配置，关注个股基本面'}
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default SectorInfo;
