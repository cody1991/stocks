import React from 'react';
import { Menu, Avatar } from 'antd';
import { StockOutlined } from '@ant-design/icons';
import { getAllStockSymbols, getStockData } from '../data/stocksData';

interface StockNavigationProps {
  selectedStock: string;
  onStockChange: (stock: string) => void;
  collapsed: boolean;
}

const StockNavigation: React.FC<StockNavigationProps> = ({
  selectedStock,
  onStockChange,
  collapsed
}) => {
  const stockSymbols = getAllStockSymbols();
  const stocks = stockSymbols.map(symbol => {
    const stockData = getStockData(symbol);
    if (!stockData) return null;

    return {
      key: symbol,
      label: collapsed ? symbol : stockData.name,
      icon: <Avatar size="small" style={{ backgroundColor: stockData.avatar.backgroundColor }}>
        {stockData.avatar.text}
      </Avatar>,
      description: stockData.subsector
    };
  }).filter(Boolean);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '8px',
        textAlign: collapsed ? 'center' : 'left'
      }}>
        {collapsed ? '股票' : '选择股票'}
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedStock]}
        style={{ borderRight: 0 }}
        items={stocks.map(stock => ({
          key: stock!.key,
          icon: stock!.icon,
          label: (
            <div>
              <div style={{ fontWeight: 'bold' }}>{stock!.label}</div>
              {!collapsed && (
                <div style={{ fontSize: '12px', color: '#999' }}>
                  {stock!.description}
                </div>
              )}
            </div>
          ),
          onClick: () => onStockChange(stock!.key)
        }))}
      />
    </div>
  );
};

export default StockNavigation;
