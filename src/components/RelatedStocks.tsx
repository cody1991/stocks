import React from 'react';
import { Card, Row, Col, Typography, Tag, List, Avatar, Button, Space } from 'antd';
import { LinkOutlined, TeamOutlined } from '@ant-design/icons';
import { getRelatedStocks } from '../data/stocksData';

const { Title, Text } = Typography;

interface RelatedStocksProps {
  symbol: string;
}

interface RelatedStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  sector: string;
  correlation: number;
  reason: string;
  rating: 'Strong Buy' | 'Buy' | 'Hold' | 'Sell';
}

const RelatedStocks: React.FC<RelatedStocksProps> = ({ symbol }) => {
  // 从静态数据中获取关联股票信息
  const relatedStocks: RelatedStock[] = getRelatedStocks(symbol);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Strong Buy': return 'green';
      case 'Buy': return 'blue';
      case 'Hold': return 'orange';
      case 'Sell': return 'red';
      default: return 'gray';
    }
  };

  const getCorrelationColor = (correlation: number) => {
    if (correlation >= 0.8) return 'red';
    if (correlation >= 0.6) return 'orange';
    if (correlation >= 0.4) return 'blue';
    return 'green';
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {/* 关联股票概览 */}
        <Col xs={24}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Title level={3} style={{ margin: 0 }}>
                <TeamOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                {symbol} 关联股票推荐
              </Title>
              <Text type="secondary">
                基于行业相关性、业务相似性和技术关联度分析
              </Text>
            </div>

            <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '6px', marginBottom: '16px' }}>
              <Text>
                <strong>推荐逻辑：</strong>
                我们基于{symbol === 'NVDA' ? '半导体行业、AI芯片技术、GPU应用场景' : '医疗设备行业、生物技术、诊断治疗'}等多个维度，
                筛选出与{symbol}具有较高相关性的股票。这些股票在业务模式、技术路线、市场定位等方面存在关联，
                可以作为投资组合的参考标的。
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {/* 关联股票列表 */}
        <Col xs={24} lg={16}>
          <Card title="关联股票详情" size="small">
            {relatedStocks.length > 0 ? (
              <List
                dataSource={relatedStocks}
                renderItem={(stock, index) => (
                  <List.Item
                    actions={[
                      <Button type="link" size="small" icon={<LinkOutlined />}>
                        查看详情
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          style={{
                            backgroundColor: getCorrelationColor(stock.correlation),
                            fontSize: '14px',
                            fontWeight: 'bold'
                          }}
                        >
                          {stock.symbol.slice(0, 2)}
                        </Avatar>
                      }
                      title={
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Text strong>{stock.symbol}</Text>
                          <Text type="secondary">{stock.name}</Text>
                          <Tag color={getRatingColor(stock.rating)}>
                            {stock.rating}
                          </Tag>
                        </div>
                      }
                      description={
                        <div>
                          <div style={{ marginBottom: '4px' }}>
                            <Space size="small">
                              <Text type="secondary" style={{ fontSize: '12px' }}>
                                实时股价数据需要专业API支持
                              </Text>
                            </Space>
                          </div>
                          <div style={{ marginBottom: '4px' }}>
                            <Space size="small">
                              <Text type="secondary">市值: {stock.marketCap}</Text>
                              <Text type="secondary">板块: {stock.sector}</Text>
                              <Tag color={getCorrelationColor(stock.correlation)}>
                                相关性: {(stock.correlation * 100).toFixed(0)}%
                              </Tag>
                            </Space>
                          </div>
                          <Text type="secondary" style={{ fontSize: '12px' }}>
                            {stock.reason}
                          </Text>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                <TeamOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
                <div>暂无关联股票数据</div>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  关联股票分析需要额外的数据源支持
                </Text>
              </div>
            )}
          </Card>
        </Col>

        {/* 相关性分析 */}
        <Col xs={24} lg={8}>
          <Card title="相关性分析" size="small">
            {relatedStocks.length > 0 ? (
              <>
                <div style={{ marginBottom: '16px' }}>
                  <Text strong>高相关性股票 (≥80%)</Text>
                  <div style={{ marginTop: '8px' }}>
                    {relatedStocks.filter(stock => stock.correlation >= 0.8).map(stock => (
                      <Tag key={stock.symbol} color="red" style={{ marginBottom: '4px' }}>
                        {stock.symbol} ({(stock.correlation * 100).toFixed(0)}%)
                      </Tag>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <Text strong>中等相关性股票 (60-80%)</Text>
                  <div style={{ marginTop: '8px' }}>
                    {relatedStocks.filter(stock => stock.correlation >= 0.6 && stock.correlation < 0.8).map(stock => (
                      <Tag key={stock.symbol} color="orange" style={{ marginBottom: '4px' }}>
                        {stock.symbol} ({(stock.correlation * 100).toFixed(0)}%)
                      </Tag>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <Text strong>低相关性股票 (&lt;60%)</Text>
                  <div style={{ marginTop: '8px' }}>
                    {relatedStocks.filter(stock => stock.correlation < 0.6).map(stock => (
                      <Tag key={stock.symbol} color="blue" style={{ marginBottom: '4px' }}>
                        {stock.symbol} ({(stock.correlation * 100).toFixed(0)}%)
                      </Tag>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                <Text>暂无相关性数据</Text>
              </div>
            )}
          </Card>

          <Card title="投资组合建议" size="small" style={{ marginTop: '16px' }}>
            {relatedStocks.length > 0 ? (
              <>
                <div style={{ marginBottom: '12px' }}>
                  <Text strong>核心持仓 (40%)</Text>
                  <div style={{ marginTop: '4px' }}>
                    <Text type="secondary">{symbol}</Text>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <Text strong>卫星持仓 (30%)</Text>
                  <div style={{ marginTop: '4px' }}>
                    {relatedStocks.filter(stock => stock.correlation >= 0.7).slice(0, 2).map(stock => (
                      <div key={stock.symbol}>
                        <Text type="secondary">{stock.symbol}</Text>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <Text strong>分散持仓 (30%)</Text>
                  <div style={{ marginTop: '4px' }}>
                    {relatedStocks.filter(stock => stock.correlation < 0.7).slice(0, 2).map(stock => (
                      <div key={stock.symbol}>
                        <Text type="secondary">{stock.symbol}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                <Text>暂无投资组合建议</Text>
                <br />
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  需要关联股票数据才能生成投资组合建议
                </Text>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 行业分布 */}
        <Col xs={24} lg={12}>
          <Card title="行业分布" size="small">
            {relatedStocks.length > 0 ? (
              <Row gutter={16}>
                {Object.entries(
                  relatedStocks.reduce((acc, stock) => {
                    acc[stock.sector] = (acc[stock.sector] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>)
                ).map(([sector, count]) => (
                  <Col span={12} key={sector}>
                    <div style={{ textAlign: 'center', padding: '12px' }}>
                      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1890ff' }}>
                        {count}
                      </div>
                      <Text type="secondary">{sector}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                <Text>暂无行业分布数据</Text>
              </div>
            )}
          </Card>
        </Col>

        {/* 评级分布 */}
        <Col xs={24} lg={12}>
          <Card title="分析师评级分布" size="small">
            {relatedStocks.length > 0 ? (
              <Row gutter={16}>
                {Object.entries(
                  relatedStocks.reduce((acc, stock) => {
                    acc[stock.rating] = (acc[stock.rating] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>)
                ).map(([rating, count]) => (
                  <Col span={8} key={rating}>
                    <div style={{ textAlign: 'center', padding: '12px' }}>
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: getRatingColor(rating) }}>
                        {count}
                      </div>
                      <Text type="secondary">{rating}</Text>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                <Text>暂无评级分布数据</Text>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      {/* 投资建议总结 */}
      <Card title="关联股票投资建议" style={{ marginTop: '16px' }}>
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '6px' }}>
          <Text>
            {relatedStocks.length > 0 ? (
              <>
                <strong>投资组合建议：</strong>
                <br />
                • <strong>核心策略</strong>：以{symbol}为核心持仓，配置40%的仓位
                <br />
                • <strong>卫星策略</strong>：选择相关性≥70%的股票作为卫星持仓，配置30%的仓位
                <br />
                • <strong>分散策略</strong>：选择相关性&lt;70%的股票进行分散投资，配置30%的仓位
                <br />
                • <strong>风险控制</strong>：建议设置止损位，避免单一股票风险过度集中
                <br />
                • <strong>动态调整</strong>：根据市场变化和个股表现，定期调整持仓比例
                <br />
                <br />
                <strong>注意事项：</strong>
                关联股票虽然具有相关性，但各自的基本面、估值水平和风险特征不同，
                建议在投资前进行充分的基本面分析和技术分析。
              </>
            ) : (
              <>
                <strong>关联股票分析：</strong>
                <br />
                由于当前无法获取关联股票数据，建议：
                <br />
                • <strong>独立分析</strong>：专注于{symbol}的基本面和技术面分析
                <br />
                • <strong>行业研究</strong>：通过板块信息了解行业整体趋势
                <br />
                • <strong>风险分散</strong>：考虑投资不同行业的股票来分散风险
                <br />
                • <strong>定期评估</strong>：持续关注市场动态和个股表现
                <br />
                <br />
                <strong>数据来源：</strong>
                关联股票分析需要额外的数据源支持，建议集成专业的金融数据API。
              </>
            )}
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default RelatedStocks;
