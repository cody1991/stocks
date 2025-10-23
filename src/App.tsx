import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { StockOutlined, BarChartOutlined } from '@ant-design/icons';
import StockNavigation from './components/StockNavigation';
import StockInfo from './components/StockInfo';
import NewsPanel from './components/NewsPanel';
import FundamentalAnalysis from './components/FundamentalAnalysis';
import PriceChart from './components/PriceChart';
import SectorInfo from './components/SectorInfo';
import InvestmentAdvice from './components/InvestmentAdvice';
import RelatedStocks from './components/RelatedStocks';
import ApiTestComponent from './components/ApiTestComponent';
import { getAllStockSymbols } from './data/stocksData';
import './App.css';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const stockSymbols = getAllStockSymbols();
  const [selectedStock, setSelectedStock] = useState<string>(stockSymbols[0] || 'NVDA');
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: 'overview',
      icon: <StockOutlined />,
      label: '股票概览',
    },
    {
      key: 'news',
      icon: <BarChartOutlined />,
      label: '新闻消息',
    },
    {
      key: 'analysis',
      icon: <BarChartOutlined />,
      label: '基本面分析',
    },
    {
      key: 'chart',
      icon: <BarChartOutlined />,
      label: '价格走势',
    },
    {
      key: 'sector',
      icon: <BarChartOutlined />,
      label: '板块信息',
    },
    {
      key: 'advice',
      icon: <BarChartOutlined />,
      label: '投资建议',
    },
    {
      key: 'related',
      icon: <BarChartOutlined />,
      label: '关联股票',
    },
    {
      key: 'api-test',
      icon: <BarChartOutlined />,
      label: 'API测试',
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState('overview');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return <StockInfo symbol={selectedStock} />;
      case 'news':
        return <NewsPanel symbol={selectedStock} />;
      case 'analysis':
        return <FundamentalAnalysis symbol={selectedStock} />;
      case 'chart':
        return <PriceChart symbol={selectedStock} />;
      case 'sector':
        return <SectorInfo symbol={selectedStock} />;
      case 'advice':
        return <InvestmentAdvice symbol={selectedStock} />;
      case 'related':
        return <RelatedStocks symbol={selectedStock} />;
      case 'api-test':
        return <ApiTestComponent />;
      default:
        return <StockInfo symbol={selectedStock} />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={250}
        style={{
          background: '#fff',
          boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
          <Title level={4} style={{ margin: 0, textAlign: 'center' }}>
            {collapsed ? '股票' : '股票分析平台'}
          </Title>
        </div>

        <StockNavigation
          selectedStock={selectedStock}
          onStockChange={setSelectedStock}
          collapsed={collapsed}
        />

        <Menu
          mode="inline"
          selectedKeys={[selectedMenu]}
          style={{ borderRight: 0, marginTop: '16px' }}
          items={menuItems}
          onClick={({ key }) => setSelectedMenu(key)}
        />
      </Sider>

      <Layout>
        <Header style={{
          background: '#fff',
          padding: '0 24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Title level={3} style={{ margin: 0 }}>
            {selectedStock} - {menuItems.find(item => item.key === selectedMenu)?.label}
          </Title>
        </Header>

        <Content style={{
          margin: '24px',
          padding: '24px',
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          minHeight: 'calc(100vh - 112px)',
          overflow: 'auto'
        }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;