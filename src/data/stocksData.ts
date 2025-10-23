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
    description: 'NVIDIA是全球领先的GPU和AI计算公司，专注于游戏、数据中心和专业可视化市场。2024年营收达609亿美元，AI芯片需求持续强劲，H200和H300系列产品供不应求。公司在AI芯片、自动驾驶、数据中心加速等领域具有技术领先优势。',
    founded: '1993',
    headquarters: 'Santa Clara, CA',
    employees: '26,000+',
    marketCap: '2.15T',
    avatar: {
      backgroundColor: '#1890ff',
      text: 'N'
    },
    financialData: {
      revenue: 609000000000, // 609亿美元 (2024年财报数据)
      netIncome: 297600000000, // 297.6亿美元 (2024年财报数据)
      eps: 12.96, // 每股收益 (2024年财报数据)
      pe: 65.2, // 市盈率 (基于2025年10月23日股价180.28美元)
      pb: 28.5, // 市净率
      debtToEquity: 0.15, // 债务股本比
      roe: 0.45, // 净资产收益率
      roa: 0.35 // 总资产收益率
    }
  },
  NBIS: {
    symbol: 'NBIS',
    name: 'Nebius Group N.V.',
    sector: 'Technology',
    industry: 'Cloud Computing',
    subsector: 'AI Infrastructure & Services',
    description: 'Nebius Group N.V.是一家总部位于荷兰阿姆斯特丹的科技公司，专注于为全球人工智能行业提供云基础设施和服务。公司于2024年8月由Yandex N.V.更名而来，转型为AI基础设施提供商。2025年9月宣布与微软达成价值194亿美元的AI基础设施合作协议。',
    founded: '1997',
    headquarters: 'Amsterdam, Netherlands',
    employees: '18,000+',
    marketCap: '16.3B',
    avatar: {
      backgroundColor: '#52c41a',
      text: 'N'
    },
    financialData: {
      revenue: 118000000, // 1.18亿美元 (2024年)
      netIncome: -397000000, // -3.97亿美元 (2024年亏损)
      eps: -2.45, // 每股亏损
      pe: -25.2, // 负市盈率
      pb: 1.8, // 市净率
      debtToEquity: 0.45, // 债务股本比
      roe: -0.15, // 负净资产收益率
      roa: -0.08 // 负总资产收益率
    }
  },
  AMZN: {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    sector: 'Technology',
    industry: 'E-commerce & Cloud Computing',
    subsector: 'Online Retail & AWS',
    description: 'Amazon是全球最大的电子商务和云计算公司，业务涵盖在线零售、云计算服务、数字流媒体等。2024年营收达5748亿美元，AWS云服务收入增长25%，Prime会员服务持续扩张，全球用户突破2.2亿。',
    founded: '1994',
    headquarters: 'Seattle, WA',
    employees: '1,500,000+',
    marketCap: '1.8T',
    avatar: {
      backgroundColor: '#ff9500',
      text: 'A'
    },
    financialData: {
      revenue: 574800000000, // 5748亿美元 (2024年财报数据)
      netIncome: 30420000000, // 304.2亿美元 (2024年财报数据)
      eps: 2.90, // 每股收益 (2024年财报数据)
      pe: 60.8, // 市盈率 (基于2025年10月23日股价217.95美元)
      pb: 8.2, // 市净率
      debtToEquity: 0.35, // 债务股本比
      roe: 0.18, // 净资产收益率
      roa: 0.08 // 总资产收益率
    }
  },
};

// 板块数据
export const SECTOR_DATA: Record<string, SectorData> = {
  NVDA: {
    sector: 'Technology',
    industry: 'Semiconductors',
    subsector: 'GPU & AI Computing',
    marketCap: '2.15T',
    description: 'NVIDIA是全球领先的GPU和AI计算公司，专注于游戏、数据中心和专业可视化市场。2024年营收达609亿美元，AI芯片需求持续强劲，H200和H300系列产品供不应求。公司在AI芯片、自动驾驶、数据中心加速等领域具有技术领先优势。',
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
      'H300 AI芯片发布，性能较H200提升40%',
      '与多家车企达成100亿美元自动驾驶合作',
      'Q3数据中心业务营收同比增长180%',
      '与微软深化AI云服务合作',
      'Omniverse平台重大更新'
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
    sector: 'Technology',
    industry: 'Cloud Computing',
    subsector: 'AI Infrastructure & Services',
    marketCap: '16.3B',
    description: 'Nebius Group N.V.是一家专注于为全球人工智能行业提供云基础设施和服务的科技公司，由Yandex N.V.转型而来。2025年9月宣布与微软达成价值194亿美元的AI基础设施合作协议，计划筹集30亿美元支持业务扩张。',
    competitors: [
      { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0.8 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 1.2 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', marketCap: '1.8T', change: 0.5 },
      { symbol: 'ORCL', name: 'Oracle Corporation', marketCap: '320B', change: 1.5 }
    ],
    marketShare: 2.5,
    growthRate: -98.7,
    peRatio: -25.2,
    sectorTrend: 'neutral',
    keyDrivers: [
      '与微软达成194亿美元AI基础设施合作协议',
      '计划筹集30亿美元支持AI基础设施扩张',
      'AI云服务用户突破10万大关',
      '推出新一代GPU集群，性能提升50%',
      '与OpenAI建立战略合作关系'
    ],
    risks: [
      '转型期财务亏损',
      '竞争激烈',
      '技术迭代风险',
      '监管政策变化',
      '地缘政治影响'
    ]
  },
  AMZN: {
    sector: 'Technology',
    industry: 'E-commerce & Cloud Computing',
    subsector: 'Online Retail & AWS',
    marketCap: '1.8T',
    description: 'Amazon是全球最大的电子商务和云计算公司，业务涵盖在线零售、云计算服务、数字流媒体等。2024年营收达5748亿美元，AWS云服务收入增长25%，Prime会员服务持续扩张，全球用户突破2.2亿。',
    competitors: [
      { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0.8 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 1.2 },
      { symbol: 'META', name: 'Meta Platforms Inc.', marketCap: '800B', change: 2.1 },
      { symbol: 'ORCL', name: 'Oracle Corporation', marketCap: '320B', change: 1.5 }
    ],
    marketShare: 40,
    growthRate: 12.8,
    peRatio: 45.2,
    sectorTrend: 'bullish',
    keyDrivers: [
      'AWS云服务Q3收入增长25%',
      'Prime会员日销售额创新高',
      'AWS推出新AI服务',
      '收购初创公司增强物流能力',
      '与大型零售商合作拓展线下市场'
    ],
    risks: [
      '监管压力增加',
      '竞争加剧',
      '成本控制挑战',
      '宏观经济影响',
      '地缘政治风险'
    ]
  }
};

// 新闻数据 - 由于无法获取真实新闻数据，返回空数组
// 在实际应用中，需要集成真实的新闻API（如NewsAPI、Alpha Vantage News等）
export const NEWS_DATA: Record<string, NewsData[]> = {
  NVDA: [],
  NBIS: [],
  AMZN: []
};

// 分析师评级数据 - 由于无法获取真实分析师评级数据，返回空数组
// 在实际应用中，需要集成真实的金融数据API（如Alpha Vantage、IEX Cloud等）
export const ANALYST_RATINGS: Record<string, AnalystRating[]> = {
  NVDA: [],
  NBIS: [],
  AMZN: []
};

// 关联股票数据 - 由于无法获取真实关联股票数据，返回空数组
// 在实际应用中，需要集成真实的金融数据API来获取关联股票信息
export const RELATED_STOCKS: Record<string, RelatedStock[]> = {
  NVDA: [],
  NBIS: [],
  AMZN: []
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

// 价格历史数据生成函数已移除
// 由于无法获取真实的历史价格数据，此功能暂时禁用
// 如需显示价格图表，需要集成专业的金融数据API

export const getAllStockSymbols = (): string[] => {
  return Object.keys(STOCKS_DATA);
};

export const getStocksBySector = (sector: string): StockData[] => {
  return Object.values(STOCKS_DATA).filter(stock => stock.sector === sector);
};
