// 股票数据配置文件
export interface StockData {
  symbol: string;
  name: string;
  sector: string;
  industry: string;
  subsector: string;
  description: string;
  founded: string;
  headquarters: string;
  employees: string;
  marketCap: string;
  avatar: {
    backgroundColor: string;
    text: string;
  };
  financialData?: {
    revenue: number;
    netIncome: number;
    eps: number;
    pe: number;
    pb: number;
    debtToEquity: number;
    roe: number;
    roa: number;
  };
}

export interface CompetitorData {
  symbol: string;
  name: string;
  marketCap: string;
  change: number;
}

export interface NewsData {
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  source: string;
}

export interface AnalystRating {
  rating: 'Strong Buy' | 'Buy' | 'Hold' | 'Sell' | 'Strong Sell';
  targetPrice: number;
  analyst: string;
  date: string;
}

export interface RelatedStock {
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

export interface SectorData {
  sector: string;
  industry: string;
  subsector: string;
  marketCap: string;
  description: string;
  competitors: CompetitorData[];
  marketShare: number;
  growthRate: number;
  peRatio: number;
  sectorTrend: 'bullish' | 'bearish' | 'neutral';
  keyDrivers: string[];
  risks: string[];
}

// 股票基础数据
export const STOCKS_DATA: Record<string, StockData> = {
  NVDA: {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    sector: 'Technology',
    industry: 'Semiconductors',
    subsector: 'GPU & AI Computing',
    description: 'NVIDIA是全球领先的GPU和AI计算公司，专注于游戏、数据中心和专业可视化市场。公司在AI芯片、自动驾驶、数据中心加速等领域具有技术领先优势。2024年Q3营收达206亿美元，同比增长206%，主要受益于AI芯片需求激增。',
    founded: '1993',
    headquarters: 'Santa Clara, CA',
    employees: '29,600+',
    marketCap: '2.15T',
    avatar: {
      backgroundColor: '#1890ff',
      text: 'N'
    },
    financialData: {
      revenue: 206000000000, // 206亿美元
      netIncome: 92400000000, // 924亿美元
      eps: 37.32, // 每股收益
      pe: 67.5, // 市盈率
      pb: 45.2, // 市净率
      debtToEquity: 0.15, // 债务股本比
      roe: 0.89, // 净资产收益率
      roa: 0.45 // 总资产收益率
    }
  },
  NBIS: {
    symbol: 'NBIS',
    name: 'NBI Systems Inc.',
    sector: 'Healthcare',
    industry: 'Biotechnology',
    subsector: 'Medical Devices & Diagnostics',
    description: 'NBI Systems是一家专注于生物技术和医疗设备研发的创新公司，主要业务包括诊断设备、治疗器械和生物制药研发。',
    founded: '2018',
    headquarters: 'San Francisco, CA',
    employees: '150+',
    marketCap: '890M',
    avatar: {
      backgroundColor: '#52c41a',
      text: 'N'
    }
  },
  AAPL: {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    sector: 'Technology',
    industry: 'Consumer Electronics',
    subsector: 'Smartphones & Computing',
    description: 'Apple是全球领先的科技公司，专注于设计、开发和销售消费电子产品、计算机软件和在线服务。2024年Q4营收达948亿美元，iPhone销量强劲，服务业务收入创新高，同比增长15%。',
    founded: '1976',
    headquarters: 'Cupertino, CA',
    employees: '164,000+',
    marketCap: '3.0T',
    avatar: {
      backgroundColor: '#52c41a',
      text: 'A'
    },
    financialData: {
      revenue: 948000000000, // 948亿美元
      netIncome: 236000000000, // 236亿美元
      eps: 6.13, // 每股收益
      pe: 28.5, // 市盈率
      pb: 39.8, // 市净率
      debtToEquity: 1.73, // 债务股本比
      roe: 1.47, // 净资产收益率
      roa: 0.25 // 总资产收益率
    }
  },
  TSLA: {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    sector: 'Automotive',
    industry: 'Electric Vehicles',
    subsector: 'EV & Energy Storage',
    description: 'Tesla是电动汽车和清洁能源公司，专注于电动汽车、能源存储和太阳能产品的设计、制造和销售。2024年Q4营收达252亿美元，Cybertruck开始交付，全球超级充电站网络持续扩展。',
    founded: '2003',
    headquarters: 'Austin, TX',
    employees: '127,855+',
    marketCap: '800B',
    avatar: {
      backgroundColor: '#ff4d4f',
      text: 'T'
    },
    financialData: {
      revenue: 252000000000, // 252亿美元
      netIncome: 15000000000, // 150亿美元
      eps: 4.73, // 每股收益
      pe: 45.8, // 市盈率
      pb: 8.2, // 市净率
      debtToEquity: 0.17, // 债务股本比
      roe: 0.19, // 净资产收益率
      roa: 0.08 // 总资产收益率
    }
  }
};

// 板块数据
export const SECTOR_DATA: Record<string, SectorData> = {
  NVDA: {
    sector: 'Technology',
    industry: 'Semiconductors',
    subsector: 'GPU & AI Computing',
    marketCap: '2.15T',
    description: 'NVIDIA是全球领先的GPU和AI计算公司，专注于游戏、数据中心和专业可视化市场。公司在AI芯片、自动驾驶、数据中心加速等领域具有技术领先优势。',
    competitors: [
      { symbol: 'AMD', name: 'Advanced Micro Devices', marketCap: '280B', change: 2.5 },
      { symbol: 'INTC', name: 'Intel Corporation', marketCap: '180B', change: -1.2 },
      { symbol: 'QCOM', name: 'Qualcomm Inc.', marketCap: '190B', change: 0.8 },
      { symbol: 'AVGO', name: 'Broadcom Inc.', marketCap: '650B', change: 1.5 }
    ],
    marketShare: 85,
    growthRate: 12.5,
    peRatio: 67.5,
    sectorTrend: 'bullish',
    keyDrivers: [
      'AI和机器学习需求激增',
      '数据中心GPU需求增长',
      '自动驾驶技术发展',
      '游戏市场持续增长',
      '专业可视化应用扩展'
    ],
    risks: [
      '竞争加剧',
      '技术迭代风险',
      '供应链依赖',
      '监管政策变化',
      '宏观经济影响'
    ]
  },
  NBIS: {
    sector: 'Healthcare',
    industry: 'Biotechnology',
    subsector: 'Medical Devices & Diagnostics',
    marketCap: '890M',
    description: 'NBI Systems是一家专注于生物技术和医疗设备研发的创新公司，主要业务包括诊断设备、治疗器械和生物制药研发。',
    competitors: [
      { symbol: 'JNJ', name: 'Johnson & Johnson', marketCap: '450B', change: 0.5 },
      { symbol: 'MDT', name: 'Medtronic', marketCap: '120B', change: -0.8 },
      { symbol: 'ABT', name: 'Abbott', marketCap: '180B', change: 1.2 },
      { symbol: 'BSX', name: 'Boston Scientific', marketCap: '70B', change: 0.3 }
    ],
    marketShare: 2.5,
    growthRate: 8.2,
    peRatio: -101.5,
    sectorTrend: 'neutral',
    keyDrivers: [
      '人口老龄化趋势',
      '医疗技术进步',
      '慢性病发病率上升',
      '新兴市场需求增长',
      '政府医疗支出增加'
    ],
    risks: [
      '监管审批风险',
      '研发投入巨大',
      '专利到期风险',
      '医疗政策变化',
      '临床试验失败风险'
    ]
  },
  AAPL: {
    sector: 'Technology',
    industry: 'Consumer Electronics',
    subsector: 'Smartphones & Computing',
    marketCap: '3.0T',
    description: 'Apple是全球领先的科技公司，专注于设计、开发和销售消费电子产品、计算机软件和在线服务。',
    competitors: [
      { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0.8 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 1.2 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', marketCap: '1.5T', change: 0.5 },
      { symbol: 'META', name: 'Meta Platforms Inc.', marketCap: '800B', change: 2.1 }
    ],
    marketShare: 60,
    growthRate: 8.5,
    peRatio: 28.5,
    sectorTrend: 'bullish',
    keyDrivers: [
      'iPhone持续创新',
      '服务业务增长',
      '中国市场扩张',
      'AR/VR技术发展',
      '生态系统优势'
    ],
    risks: [
      '智能手机市场饱和',
      '监管压力增加',
      '供应链风险',
      '竞争加剧',
      '地缘政治风险'
    ]
  },
  TSLA: {
    sector: 'Automotive',
    industry: 'Electric Vehicles',
    subsector: 'EV & Energy Storage',
    marketCap: '800B',
    description: 'Tesla是电动汽车和清洁能源公司，专注于电动汽车、能源存储和太阳能产品的设计、制造和销售。',
    competitors: [
      { symbol: 'BYD', name: 'BYD Company', marketCap: '90B', change: 3.2 },
      { symbol: 'NIO', name: 'NIO Inc.', marketCap: '15B', change: 1.8 },
      { symbol: 'LCID', name: 'Lucid Group', marketCap: '8B', change: -2.1 },
      { symbol: 'RIVN', name: 'Rivian Automotive', marketCap: '12B', change: 0.5 }
    ],
    marketShare: 25,
    growthRate: 15.2,
    peRatio: 45.8,
    sectorTrend: 'bullish',
    keyDrivers: [
      '电动汽车市场快速增长',
      '自动驾驶技术',
      '能源存储业务',
      '全球工厂扩张',
      '充电网络建设'
    ],
    risks: [
      '竞争加剧',
      '监管变化',
      '供应链挑战',
      '技术风险',
      '市场波动'
    ]
  }
};

// 新闻数据
export const NEWS_DATA: Record<string, NewsData[]> = {
  NVDA: [
    {
      title: "NVIDIA发布新一代AI芯片，性能提升40%",
      summary: "NVIDIA公司今日发布了最新的H200 AI芯片，相比前代产品性能提升40%，功耗降低20%。",
      url: "https://example.com/news1",
      publishedAt: "2024-01-15T10:00:00Z",
      source: "TechNews"
    },
    {
      title: "NVIDIA与多家车企达成自动驾驶合作",
      summary: "NVIDIA宣布与特斯拉、比亚迪等多家车企达成自动驾驶技术合作协议。",
      url: "https://example.com/news2",
      publishedAt: "2024-01-14T15:30:00Z",
      source: "AutoNews"
    }
  ],
  NBIS: [
    {
      title: "NBIS生物技术突破，新药临床试验成功",
      summary: "NBIS公司宣布其新型抗癌药物在二期临床试验中取得突破性进展。",
      url: "https://example.com/news3",
      publishedAt: "2024-01-15T09:00:00Z",
      source: "BioNews"
    },
    {
      title: "NBIS获得FDA快速通道认证",
      summary: "美国FDA授予NBIS公司新药快速通道认证，加速审批流程。",
      url: "https://example.com/news4",
      publishedAt: "2024-01-13T14:20:00Z",
      source: "FDA News"
    }
  ],
  AAPL: [
    {
      title: "苹果发布iPhone 16系列，AI功能大幅升级",
      summary: "苹果公司发布了最新的iPhone 16系列，搭载了全新的AI芯片和功能。",
      url: "https://example.com/news5",
      publishedAt: "2024-01-15T11:00:00Z",
      source: "Apple News"
    },
    {
      title: "苹果服务业务收入创新高",
      summary: "苹果公司服务业务季度收入达到历史新高，同比增长15%。",
      url: "https://example.com/news6",
      publishedAt: "2024-01-14T16:00:00Z",
      source: "Financial News"
    }
  ],
  TSLA: [
    {
      title: "特斯拉Cybertruck开始交付",
      summary: "特斯拉开始向客户交付备受期待的Cybertruck电动皮卡。",
      url: "https://example.com/news7",
      publishedAt: "2024-01-15T12:00:00Z",
      source: "EV News"
    },
    {
      title: "特斯拉超级充电站网络扩展至全球",
      summary: "特斯拉宣布其超级充电站网络已覆盖全球主要城市。",
      url: "https://example.com/news8",
      publishedAt: "2024-01-13T10:00:00Z",
      source: "Tesla News"
    }
  ]
};

// 分析师评级数据
export const ANALYST_RATINGS: Record<string, AnalystRating[]> = {
  NVDA: [
    { rating: 'Strong Buy', targetPrice: 950, analyst: 'Goldman Sachs', date: '2024-01-15' },
    { rating: 'Buy', targetPrice: 900, analyst: 'Morgan Stanley', date: '2024-01-14' },
    { rating: 'Buy', targetPrice: 875, analyst: 'JP Morgan', date: '2024-01-13' },
    { rating: 'Hold', targetPrice: 800, analyst: 'Credit Suisse', date: '2024-01-12' },
    { rating: 'Strong Buy', targetPrice: 1000, analyst: 'Bank of America', date: '2024-01-11' }
  ],
  NBIS: [
    { rating: 'Buy', targetPrice: 55, analyst: 'Wells Fargo', date: '2024-01-15' },
    { rating: 'Hold', targetPrice: 45, analyst: 'Deutsche Bank', date: '2024-01-14' },
    { rating: 'Buy', targetPrice: 60, analyst: 'UBS', date: '2024-01-13' },
    { rating: 'Hold', targetPrice: 42, analyst: 'Barclays', date: '2024-01-12' },
    { rating: 'Buy', targetPrice: 58, analyst: 'Citigroup', date: '2024-01-11' }
  ],
  AAPL: [
    { rating: 'Strong Buy', targetPrice: 220, analyst: 'Goldman Sachs', date: '2024-01-15' },
    { rating: 'Buy', targetPrice: 210, analyst: 'Morgan Stanley', date: '2024-01-14' },
    { rating: 'Buy', targetPrice: 205, analyst: 'JP Morgan', date: '2024-01-13' },
    { rating: 'Hold', targetPrice: 190, analyst: 'Credit Suisse', date: '2024-01-12' },
    { rating: 'Strong Buy', targetPrice: 230, analyst: 'Bank of America', date: '2024-01-11' }
  ],
  TSLA: [
    { rating: 'Buy', targetPrice: 300, analyst: 'Wells Fargo', date: '2024-01-15' },
    { rating: 'Hold', targetPrice: 250, analyst: 'Deutsche Bank', date: '2024-01-14' },
    { rating: 'Buy', targetPrice: 320, analyst: 'UBS', date: '2024-01-13' },
    { rating: 'Hold', targetPrice: 240, analyst: 'Barclays', date: '2024-01-12' },
    { rating: 'Buy', targetPrice: 310, analyst: 'Citigroup', date: '2024-01-11' }
  ]
};

// 关联股票数据
export const RELATED_STOCKS: Record<string, RelatedStock[]> = {
  NVDA: [
    {
      symbol: 'AMD',
      name: 'Advanced Micro Devices',
      price: 185.50,
      change: 4.20,
      changePercent: 2.32,
      marketCap: '280B',
      sector: 'Semiconductors',
      correlation: 0.85,
      reason: '同为GPU和处理器制造商，技术路线相似',
      rating: 'Buy'
    },
    {
      symbol: 'INTC',
      name: 'Intel Corporation',
      price: 45.80,
      change: -0.65,
      changePercent: -1.40,
      marketCap: '180B',
      sector: 'Semiconductors',
      correlation: 0.72,
      reason: '传统CPU巨头，正在布局AI芯片',
      rating: 'Hold'
    },
    {
      symbol: 'QCOM',
      name: 'Qualcomm Inc.',
      price: 165.30,
      change: 1.25,
      changePercent: 0.76,
      marketCap: '190B',
      sector: 'Semiconductors',
      correlation: 0.68,
      reason: '移动芯片领导者，AI边缘计算布局',
      rating: 'Buy'
    },
    {
      symbol: 'AVGO',
      name: 'Broadcom Inc.',
      price: 1285.60,
      change: 8.40,
      changePercent: 0.66,
      marketCap: '650B',
      sector: 'Semiconductors',
      correlation: 0.75,
      reason: '数据中心芯片供应商，与NVIDIA有合作关系',
      rating: 'Strong Buy'
    },
    {
      symbol: 'TSM',
      name: 'Taiwan Semiconductor',
      price: 95.20,
      change: 2.10,
      changePercent: 2.26,
      marketCap: '490B',
      sector: 'Semiconductors',
      correlation: 0.80,
      reason: 'NVIDIA的主要代工厂商',
      rating: 'Buy'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 415.80,
      change: 3.20,
      changePercent: 0.78,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.65,
      reason: 'Azure云服务大量使用NVIDIA GPU',
      rating: 'Strong Buy'
    }
  ],
  NBIS: [
    {
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      price: 168.50,
      change: 0.85,
      changePercent: 0.51,
      marketCap: '450B',
      sector: 'Healthcare',
      correlation: 0.45,
      reason: '医疗设备行业龙头，业务模式相似',
      rating: 'Buy'
    },
    {
      symbol: 'MDT',
      name: 'Medtronic PLC',
      price: 88.20,
      change: -0.70,
      changePercent: -0.79,
      marketCap: '120B',
      sector: 'Healthcare',
      correlation: 0.52,
      reason: '医疗器械制造商，技术领域重叠',
      rating: 'Hold'
    },
    {
      symbol: 'ABT',
      name: 'Abbott Laboratories',
      price: 105.60,
      change: 1.25,
      changePercent: 1.20,
      marketCap: '180B',
      sector: 'Healthcare',
      correlation: 0.48,
      reason: '诊断设备制造商，业务互补',
      rating: 'Buy'
    },
    {
      symbol: 'BSX',
      name: 'Boston Scientific',
      price: 48.90,
      change: 0.15,
      changePercent: 0.31,
      marketCap: '70B',
      sector: 'Healthcare',
      correlation: 0.55,
      reason: '医疗设备创新公司，成长性相似',
      rating: 'Buy'
    },
    {
      symbol: 'ISRG',
      name: 'Intuitive Surgical',
      price: 385.40,
      change: 2.80,
      changePercent: 0.73,
      marketCap: '140B',
      sector: 'Healthcare',
      correlation: 0.42,
      reason: '医疗机器人技术领先，创新驱动',
      rating: 'Strong Buy'
    },
    {
      symbol: 'ZBH',
      name: 'Zimmer Biomet',
      price: 125.30,
      change: -0.45,
      changePercent: -0.36,
      marketCap: '25B',
      sector: 'Healthcare',
      correlation: 0.38,
      reason: '骨科医疗器械，细分市场相关',
      rating: 'Hold'
    }
  ],
  AAPL: [
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 415.80,
      change: 3.20,
      changePercent: 0.78,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.75,
      reason: '科技巨头，生态系统竞争',
      rating: 'Strong Buy'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 145.60,
      change: 1.80,
      changePercent: 1.25,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.68,
      reason: '移动操作系统竞争，广告业务',
      rating: 'Buy'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 155.20,
      change: 0.75,
      changePercent: 0.49,
      marketCap: '1.5T',
      sector: 'Technology',
      correlation: 0.55,
      reason: '云服务竞争，电商业务',
      rating: 'Buy'
    },
    {
      symbol: 'META',
      name: 'Meta Platforms Inc.',
      price: 385.40,
      change: 8.20,
      changePercent: 2.17,
      marketCap: '800B',
      sector: 'Technology',
      correlation: 0.45,
      reason: '社交媒体平台，AR/VR竞争',
      rating: 'Buy'
    }
  ],
  TSLA: [
    {
      symbol: 'BYD',
      name: 'BYD Company',
      price: 28.50,
      change: 0.90,
      changePercent: 3.26,
      marketCap: '90B',
      sector: 'Automotive',
      correlation: 0.65,
      reason: '电动汽车制造商，中国市场竞争',
      rating: 'Buy'
    },
    {
      symbol: 'NIO',
      name: 'NIO Inc.',
      price: 8.20,
      change: 0.15,
      changePercent: 1.86,
      marketCap: '15B',
      sector: 'Automotive',
      correlation: 0.70,
      reason: '中国电动汽车制造商，高端市场',
      rating: 'Buy'
    },
    {
      symbol: 'LCID',
      name: 'Lucid Group',
      price: 3.40,
      change: -0.07,
      changePercent: -2.02,
      marketCap: '8B',
      sector: 'Automotive',
      correlation: 0.60,
      reason: '豪华电动汽车制造商',
      rating: 'Hold'
    },
    {
      symbol: 'RIVN',
      name: 'Rivian Automotive',
      price: 12.80,
      change: 0.06,
      changePercent: 0.47,
      marketCap: '12B',
      sector: 'Automotive',
      correlation: 0.55,
      reason: '电动皮卡和商用车制造商',
      rating: 'Hold'
    }
  ]
};

// 获取股票数据的工具函数
export const getStockData = (symbol: string): StockData | undefined => {
  return STOCKS_DATA[symbol];
};

export const getSectorData = (symbol: string): SectorData | undefined => {
  return SECTOR_DATA[symbol];
};

export const getNewsData = (symbol: string): NewsData[] => {
  return NEWS_DATA[symbol] || [];
};

export const getAnalystRatings = (symbol: string): AnalystRating[] => {
  return ANALYST_RATINGS[symbol] || [];
};

export const getRelatedStocks = (symbol: string): RelatedStock[] => {
  return RELATED_STOCKS[symbol] || [];
};

export const getFinancialData = (symbol: string) => {
  const stockData = STOCKS_DATA[symbol];
  return stockData?.financialData || null;
};

// 生成模拟价格历史数据
export const generatePriceHistory = (symbol: string, days: number = 30) => {
  const basePrice = symbol === 'NVDA' ? 800 : symbol === 'AAPL' ? 180 : symbol === 'TSLA' ? 250 : 50;
  const data = [];
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // 生成随机波动
    const volatility = 0.02; // 2% 日波动
    const randomChange = (Math.random() - 0.5) * volatility;
    const price = basePrice * (1 + randomChange * (days - i) / days);
    
    data.push({
      date: date.toISOString().split('T')[0],
      open: price * (1 + (Math.random() - 0.5) * 0.01),
      high: price * (1 + Math.random() * 0.02),
      low: price * (1 - Math.random() * 0.02),
      close: price,
      volume: Math.floor(Math.random() * 50000000) + 10000000
    });
  }
  
  return data;
};

export const getAllStockSymbols = (): string[] => {
  return Object.keys(STOCKS_DATA);
};

export const getStocksBySector = (sector: string): StockData[] => {
  return Object.values(STOCKS_DATA).filter(stock => stock.sector === sector);
};
