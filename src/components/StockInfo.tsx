import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Statistic, Spin, Alert, Tag, Descriptions, Typography } from 'antd';
import { RiseOutlined, FallOutlined, DollarOutlined } from '@ant-design/icons';
import stockApi, { StockQuote } from '../services/stockApi';
import { getStockData } from '../data/stocksData';

const { Title, Text } = Typography;

interface StockInfoProps {
  symbol: string;
}

const StockInfo: React.FC<StockInfoProps> = ({ symbol }) => {
  const [stockData, setStockData] = useState<StockQuote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchStockData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await stockApi.getStockQuote(symbol);

        // 只有在组件没有被取消时才更新状态
        if (!isCancelled) {
          setStockData(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError('获取股票数据失败');
          console.error('Error fetching stock data:', err);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchStockData();

    // 清理函数，用于取消未完成的请求
    return () => {
      isCancelled = true;
    };
  }, [symbol]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
        <div style={{ marginTop: '16px' }}>正在加载股票数据...</div>
      </div>
    );
  }

  if (error || !stockData) {
    return (
      <Alert
        message="数据加载失败"
        description={error || '无法获取股票数据'}
        type="error"
        showIcon
      />
    );
  }

  const isPositive = stockData.change >= 0;
  const changeColor = isPositive ? '#52c41a' : '#ff4d4f';
  const ChangeIcon = isPositive ? RiseOutlined : FallOutlined;

  const formatNumber = (num: number) => {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toFixed(2);
  };

  const getCompanyInfo = (symbol: string) => {
    const stockData = getStockData(symbol);
    if (!stockData) {
      return {
        name: symbol,
        sector: 'Unknown',
        industry: 'Unknown',
        description: 'No information available',
        founded: 'Unknown',
        headquarters: 'Unknown',
        employees: 'Unknown'
      };
    }
    return stockData;
  };

  const companyInfo = getCompanyInfo(symbol);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {/* 主要价格信息 */}
        <Col xs={24} lg={16}>
          <Card>
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ textAlign: 'left' }}>
                  <Title level={2} style={{ margin: 0 }}>
                    {stockData.symbol}
                  </Title>
                  <Text type="secondary" style={{ fontSize: '16px' }}>
                    {companyInfo.name}
                  </Text>
                  <div style={{ marginTop: '8px' }}>
                    <Tag color="blue">{companyInfo.sector}</Tag>
                    <Tag color="green">{companyInfo.industry}</Tag>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ textAlign: 'right' }}>
                  <Title level={1} style={{ margin: 0, color: changeColor }}>
                    ${stockData.price.toFixed(2)}
                  </Title>
                  <div style={{ fontSize: '18px', color: changeColor, marginTop: '8px' }}>
                    <ChangeIcon />
                    <span style={{ marginLeft: '8px' }}>
                      {isPositive ? '+' : ''}{stockData.change.toFixed(2)} ({isPositive ? '+' : ''}{stockData.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* 关键指标 */}
        <Col xs={24} lg={8}>
          <Card title="关键指标" size="small">
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <Statistic
                  title="成交量"
                  value={formatNumber(stockData.volume)}
                  prefix={<DollarOutlined />}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="市值"
                  value={stockData.marketCap > 0 ? formatNumber(stockData.marketCap) : 'N/A'}
                  prefix="$"
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="最高价"
                  value={stockData.high.toFixed(2)}
                  prefix="$"
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="最低价"
                  value={stockData.low.toFixed(2)}
                  prefix="$"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 公司信息 */}
        <Col xs={24} lg={12}>
          <Card title="公司信息" size="small">
            <Descriptions column={1} size="small">
              <Descriptions.Item label="公司名称">{companyInfo.name}</Descriptions.Item>
              <Descriptions.Item label="所属板块">{companyInfo.sector}</Descriptions.Item>
              <Descriptions.Item label="行业">{companyInfo.industry}</Descriptions.Item>
              <Descriptions.Item label="成立时间">{companyInfo.founded}</Descriptions.Item>
              <Descriptions.Item label="总部">{companyInfo.headquarters}</Descriptions.Item>
              <Descriptions.Item label="员工数量">{companyInfo.employees}</Descriptions.Item>
            </Descriptions>
            <div style={{ marginTop: '16px' }}>
              <Text>{companyInfo.description}</Text>
            </div>
          </Card>
        </Col>

        {/* 交易信息 */}
        <Col xs={24} lg={12}>
          <Card title="交易信息" size="small">
            <Descriptions column={1} size="small">
              <Descriptions.Item label="开盘价">${stockData.open.toFixed(2)}</Descriptions.Item>
              <Descriptions.Item label="收盘价">${stockData.price.toFixed(2)}</Descriptions.Item>
              <Descriptions.Item label="前收盘价">${stockData.previousClose.toFixed(2)}</Descriptions.Item>
              <Descriptions.Item label="日涨跌额">
                <span style={{ color: changeColor }}>
                  {isPositive ? '+' : ''}${stockData.change.toFixed(2)}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="日涨跌幅">
                <span style={{ color: changeColor }}>
                  {isPositive ? '+' : ''}{stockData.changePercent.toFixed(2)}%
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="成交量">{formatNumber(stockData.volume)}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StockInfo;
