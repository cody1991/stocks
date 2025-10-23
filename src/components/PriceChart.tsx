import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Select, Spin, Alert, Typography, Statistic } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { BarChartOutlined } from '@ant-design/icons';
import stockApi, { PriceData } from '../services/stockApi';

const { Title, Text } = Typography;
const { Option } = Select;

interface PriceChartProps {
  symbol: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ symbol }) => {
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [chartType, setChartType] = useState<'line' | 'area'>('line');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await stockApi.getPriceHistory(symbol);
        setPriceData(data);
      } catch (err) {
        setError('获取价格数据失败');
        console.error('Error fetching price data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceData();
  }, [symbol]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTooltipDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN');
  };

  const calculateChange = () => {
    if (priceData.length < 2) return { change: 0, changePercent: 0 };
    const first = priceData[priceData.length - 1].close;
    const last = priceData[0].close;
    const change = last - first;
    const changePercent = (change / first) * 100;
    return { change, changePercent };
  };

  const calculateVolume = () => {
    return priceData.reduce((sum, day) => sum + day.volume, 0);
  };

  const calculateHighLow = () => {
    const highs = priceData.map(day => day.high);
    const lows = priceData.map(day => day.low);
    return {
      high: Math.max(...highs),
      low: Math.min(...lows)
    };
  };

  const getPriceChangeColor = (change: number) => {
    return change >= 0 ? '#52c41a' : '#ff4d4f';
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '6px',
          padding: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{formatTooltipDate(label)}</p>
          <p style={{ margin: '4px 0', color: '#1890ff' }}>
            开盘: ${data.open.toFixed(2)}
          </p>
          <p style={{ margin: '4px 0', color: '#52c41a' }}>
            最高: ${data.high.toFixed(2)}
          </p>
          <p style={{ margin: '4px 0', color: '#ff4d4f' }}>
            最低: ${data.low.toFixed(2)}
          </p>
          <p style={{ margin: '4px 0', fontWeight: 'bold' }}>
            收盘: ${data.close.toFixed(2)}
          </p>
          <p style={{ margin: '4px 0', color: '#666' }}>
            成交量: {data.volume.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
        <div style={{ marginTop: '16px' }}>正在加载价格数据...</div>
      </div>
    );
  }

  if (error || !priceData.length) {
    return (
      <Alert
        message="数据加载失败"
        description={error || '无法获取价格数据'}
        type="error"
        showIcon
      />
    );
  }

  const { change, changePercent } = calculateChange();
  const totalVolume = calculateVolume();
  const { high, low } = calculateHighLow();
  const changeColor = getPriceChangeColor(change);

  const chartData = priceData.map(day => ({
    ...day,
    formattedDate: formatDate(day.date)
  }));

  return (
    <div>
      {/* 控制面板 */}
      <Card style={{ marginBottom: '16px' }}>
        <Row gutter={16} align="middle">
          <Col>
            <Title level={4} style={{ margin: 0 }}>
              <BarChartOutlined style={{ marginRight: '8px' }} />
              {symbol} 价格走势
            </Title>
          </Col>
          <Col>
            <Select
              value={chartType}
              onChange={setChartType}
              style={{ width: 120 }}
            >
              <Option value="line">线图</Option>
              <Option value="area">面积图</Option>
            </Select>
          </Col>
          <Col>
            <Select
              value={timeRange}
              onChange={setTimeRange}
              style={{ width: 120 }}
            >
              <Option value="7d">7天</Option>
              <Option value="30d">30天</Option>
              <Option value="90d">90天</Option>
            </Select>
          </Col>
        </Row>
      </Card>

      <Row gutter={[16, 16]}>
        {/* 价格统计 */}
        <Col xs={24} lg={6}>
          <Card size="small">
            <Statistic
              title="期间涨跌"
              value={change}
              precision={2}
              prefix="$"
              valueStyle={{ color: changeColor }}
              suffix={
                <div style={{ fontSize: '12px', color: changeColor }}>
                  ({changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%)
                </div>
              }
            />
          </Card>
        </Col>
        <Col xs={24} lg={6}>
          <Card size="small">
            <Statistic
              title="期间最高"
              value={high}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} lg={6}>
          <Card size="small">
            <Statistic
              title="期间最低"
              value={low}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col xs={24} lg={6}>
          <Card size="small">
            <Statistic
              title="总成交量"
              value={totalVolume}
              formatter={(value) => `${(value as number / 1e6).toFixed(1)}M`}
            />
          </Card>
        </Col>
      </Row>

      {/* 价格图表 */}
      <Card style={{ marginTop: '16px' }}>
        <div style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="formattedDate"
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  domain={['dataMin - 5', 'dataMax + 5']}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `$${value.toFixed(0)}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="close"
                  stroke="#1890ff"
                  strokeWidth={2}
                  dot={{ fill: '#1890ff', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#1890ff', strokeWidth: 2 }}
                />
              </LineChart>
            ) : (
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="formattedDate"
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  domain={['dataMin - 5', 'dataMax + 5']}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `$${value.toFixed(0)}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="close"
                  stroke="#1890ff"
                  fill="#1890ff"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 技术指标 */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24} lg={12}>
          <Card title="移动平均线" size="small">
            <Row gutter={16}>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    ${(priceData.slice(0, 5).reduce((sum, day) => sum + day.close, 0) / 5).toFixed(2)}
                  </div>
                  <Text type="secondary">MA5</Text>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    ${(priceData.slice(0, 10).reduce((sum, day) => sum + day.close, 0) / 10).toFixed(2)}
                  </div>
                  <Text type="secondary">MA10</Text>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    ${(priceData.reduce((sum, day) => sum + day.close, 0) / priceData.length).toFixed(2)}
                  </div>
                  <Text type="secondary">MA30</Text>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="波动性分析" size="small">
            <Row gutter={16}>
              <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1890ff' }}>
                    {((high - low) / low * 100).toFixed(1)}%
                  </div>
                  <Text type="secondary">价格波动</Text>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: changeColor }}>
                    {changePercent >= 0 ? '+' : ''}{changePercent.toFixed(1)}%
                  </div>
                  <Text type="secondary">期间收益</Text>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PriceChart;
