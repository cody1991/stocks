# 如何添加新股票

## 步骤说明

要添加新股票到系统中，你只需要在 `src/data/stocksData.ts` 文件中添加相应的数据，无需修改任何组件代码。

## 示例：添加苹果公司(AAPL)

### 1. 在 STOCKS_DATA 中添加基础信息

```typescript
AAPL: {
  symbol: 'AAPL',
  name: 'Apple Inc.',
  sector: 'Technology',
  industry: 'Consumer Electronics',
  subsector: 'Smartphones & Computing',
  description: 'Apple是全球领先的科技公司，专注于设计、开发和销售消费电子产品、计算机软件和在线服务。',
  founded: '1976',
  headquarters: 'Cupertino, CA',
  employees: '164,000+',
  marketCap: '3.0T',
  avatar: {
    backgroundColor: '#52c41a',
    text: 'A'
  }
}
```

### 2. 在 SECTOR_DATA 中添加板块信息

```typescript
AAPL: {
  sector: 'Technology',
  industry: 'Consumer Electronics',
  subsector: 'Smartphones & Computing',
  marketCap: '3.0T',
  description: 'Apple是全球领先的科技公司...',
  competitors: [
    { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0.8 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 1.2 },
    // ... 更多竞争对手
  ],
  marketShare: 60,
  growthRate: 8.5,
  peRatio: 28.5,
  sectorTrend: 'bullish',
  keyDrivers: [
    'iPhone持续创新',
    '服务业务增长',
    '中国市场扩张',
    // ... 更多驱动因素
  ],
  risks: [
    '智能手机市场饱和',
    '监管压力增加',
    // ... 更多风险因素
  ]
}
```

### 3. 在 NEWS_DATA 中添加新闻数据

```typescript
AAPL: [
  {
    title: "苹果发布iPhone 16系列，AI功能大幅升级",
    summary: "苹果公司发布了最新的iPhone 16系列，搭载了全新的AI芯片和功能。",
    url: "https://example.com/news5",
    publishedAt: "2024-01-15T11:00:00Z",
    source: "Apple News",
  },
  // ... 更多新闻
];
```

### 4. 在 ANALYST_RATINGS 中添加分析师评级

```typescript
AAPL: [
  {
    rating: "Strong Buy",
    targetPrice: 220,
    analyst: "Goldman Sachs",
    date: "2024-01-15",
  },
  {
    rating: "Buy",
    targetPrice: 210,
    analyst: "Morgan Stanley",
    date: "2024-01-14",
  },
  // ... 更多评级
];
```

### 5. 在 RELATED_STOCKS 中添加关联股票

```typescript
AAPL: [
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 415.8,
    change: 3.2,
    changePercent: 0.78,
    marketCap: "3.1T",
    sector: "Technology",
    correlation: 0.75,
    reason: "科技巨头，生态系统竞争",
    rating: "Strong Buy",
  },
  // ... 更多关联股票
];
```

## 完成！

添加完这些数据后，新股票就会自动出现在导航栏中，所有功能模块都会使用这些结构化数据。

## 数据更新

如果需要更新股票数据，只需要修改 `stocksData.ts` 文件中对应的数据即可，所有组件会自动使用最新的数据。

## 注意事项

1. **symbol**: 必须与对象的 key 保持一致
2. **数据类型**: 确保所有数据类型与接口定义匹配
3. **完整性**: 建议为所有字段提供数据，避免显示"Unknown"
4. **一致性**: 确保不同数据源中的信息保持一致

## 扩展功能

如果需要添加新的数据字段或功能，可以：

1. 在 `stocksData.ts` 中扩展接口定义
2. 在相应的数据对象中添加新字段
3. 在组件中使用新字段（可选）

这样的设计使得系统具有很好的可扩展性和维护性。
