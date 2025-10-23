import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, Typography, Space } from 'antd';
import { ReloadOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import stockApi from '../services/stockApi';

const { Text } = Typography;

const ApiTestComponent: React.FC = () => {
  const [testResult, setTestResult] = useState<{
    status: 'loading' | 'success' | 'error' | 'idle';
    message: string;
    data?: any;
  }>({ status: 'idle', message: '' });

  const testAPI = async () => {
    setTestResult({ status: 'loading', message: '正在测试API连接...' });

    try {
      const data = await stockApi.getStockQuote('NVDA');
      setTestResult({
        status: 'success',
        message: 'API连接成功！',
        data: data
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误';
      setTestResult({
        status: 'error',
        message: `API连接失败: ${errorMessage}`
      });
    }
  };

  useEffect(() => {
    testAPI();
  }, []);

  const getStatusIcon = () => {
    switch (testResult.status) {
      case 'loading':
        return <ReloadOutlined spin />;
      case 'success':
        return <CheckCircleOutlined style={{ color: '#52c41a' }} />;
      case 'error':
        return <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />;
      default:
        return null;
    }
  };

  return (
    <Card title="API连接测试" style={{ margin: '20px' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Space size="middle">
            {getStatusIcon()}
            <Text strong>{testResult.message}</Text>
          </Space>
        </div>

        {testResult.status === 'success' && testResult.data && (
          <Alert
            message="API数据获取成功"
            description={
              <div>
                <p><strong>股票代码:</strong> {testResult.data.symbol}</p>
                <p><strong>公司名称:</strong> {testResult.data.longName}</p>
                <p><strong>当前价格:</strong> ${testResult.data.price}</p>
                <p><strong>涨跌幅:</strong> {testResult.data.changePercent}%</p>
              </div>
            }
            type="success"
            showIcon
          />
        )}

        {testResult.status === 'error' && (
          <Alert
            message="API连接失败"
            description="系统将使用备用数据源，功能仍然可用"
            type="warning"
            showIcon
          />
        )}

        <div style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            icon={<ReloadOutlined />}
            onClick={testAPI}
            loading={testResult.status === 'loading'}
          >
            重新测试
          </Button>
        </div>
      </Space>
    </Card>
  );
};

export default ApiTestComponent;
