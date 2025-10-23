import React from 'react';
import { Menu, Avatar } from 'antd';
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
            <div style={{ 
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              <div style={{ 
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '1.4',
                marginBottom: '2px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {stock!.label}
              </div>
              {!collapsed && (
                <div style={{ 
                  fontSize: '11px', 
                  color: '#999',
                  lineHeight: '1.3',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
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
