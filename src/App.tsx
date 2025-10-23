import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { StockOutlined, BarChartOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import StockNavigation from './components/StockNavigation';
import StockInfo from './components/StockInfo';
import NewsPanel from './components/NewsPanel';
import FundamentalAnalysis from './components/FundamentalAnalysis';
import SectorInfo from './components/SectorInfo';
import InvestmentAdvice from './components/InvestmentAdvice';
import RelatedStocks from './components/RelatedStocks';
import ApiTestComponent from './components/ApiTestComponent';
import { getAllStockSymbols } from './data/stocksData';
import './App.css';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

// 主布局组件
const AppLayout: React.FC = () => {
  const stockSymbols = getAllStockSymbols();
  const navigate = useNavigate();
  const { symbol = stockSymbols[0] || 'NVDA', page = 'overview' } = useParams<{ symbol: string; page: string }>();

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

  // 处理股票选择
  const handleStockChange = (newSymbol: string) => {
    navigate(`/stock/${newSymbol}/${page}`);
  };

  // 处理菜单选择
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(`/stock/${symbol}/${key}`);
  };

  // 获取当前页面的标题
  const getPageTitle = () => {
    const menuItem = menuItems.find(item => item.key === page);
    return menuItem ? menuItem.label : '股票概览';
  };

  // 渲染内容组件
  const renderContent = () => {
    switch (page) {
      case 'overview':
        return <StockInfo symbol={symbol} />;
      case 'news':
        return <NewsPanel symbol={symbol} />;
      case 'analysis':
        return <FundamentalAnalysis symbol={symbol} />;
      case 'sector':
        return <SectorInfo symbol={symbol} />;
      case 'advice':
        return <InvestmentAdvice symbol={symbol} />;
      case 'related':
        return <RelatedStocks symbol={symbol} />;
      case 'api-test':
        return <ApiTestComponent symbol={symbol} />;
      default:
        return <StockInfo symbol={symbol} />;
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
          selectedStock={symbol}
          onStockChange={handleStockChange}
          collapsed={collapsed}
        />

        <Menu
          mode="inline"
          selectedKeys={[page]}
          style={{ borderRight: 0, marginTop: '16px' }}
          items={menuItems}
          onClick={handleMenuClick}
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
            {symbol} - {getPageTitle()}
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

// 主App组件
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 默认重定向到NVDA概览 */}
        <Route path="/" element={<Navigate to="/stock/NVDA/overview" replace />} />
        {/* 所有股票页面 */}
        <Route path="/stock/:symbol/:page" element={<AppLayout />} />
        <Route path="/stock/:symbol" element={<AppLayout />} />
        {/* 404重定向 */}
        <Route path="*" element={<Navigate to="/stock/NVDA/overview" replace />} />
      </Routes>
    </Router>
  );
};

export default App;