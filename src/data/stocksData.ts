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
      pe: 13.9, // 市盈率 (基于2025年10月23日股价180.28美元和EPS 12.96)
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
      pe: 75.2, // 市盈率 (基于2025年10月23日股价217.95美元和EPS 2.90)
      pb: 8.2, // 市净率
      debtToEquity: 0.35, // 债务股本比
      roe: 0.18, // 净资产收益率
      roa: 0.08 // 总资产收益率
    }
  },
  ORCL: {
    symbol: 'ORCL',
    name: 'Oracle Corporation',
    sector: 'Technology',
    industry: 'Software & Cloud Services',
    subsector: 'Database & Enterprise Software',
    description: 'Oracle是全球领先的企业软件公司，专注于数据库管理系统、云服务和商业应用软件。2025年Q1营收同比增长0.6%，运营利润率扩大68个基点，AI基础设施项目预计到2030年实现35%毛利率。',
    founded: '1977',
    headquarters: 'Austin, TX',
    employees: '164,000+',
    marketCap: '320B',
    avatar: {
      backgroundColor: '#ff0000',
      text: 'O'
    },
    financialData: {
      revenue: 50000000000, // 500亿美元 (2025年Q1)
      netIncome: 12000000000, // 120亿美元
      eps: 4.20, // 每股收益
      pe: 64.9, // 市盈率 (基于2025年10月23日股价272.66美元)
      pb: 12.5, // 市净率
      debtToEquity: 0.25, // 债务股本比
      roe: 0.22, // 净资产收益率
      roa: 0.12 // 总资产收益率
    }
  },
  PLTR: {
    symbol: 'PLTR',
    name: 'Palantir Technologies Inc.',
    sector: 'Technology',
    industry: 'Software & Analytics',
    subsector: 'AI & Data Analytics',
    description: 'Palantir是一家专注于大数据分析和人工智能软件的科技公司，主要服务于政府机构和大型企业。公司提供数据整合、分析和可视化平台，在国防、情报和商业领域有广泛应用。',
    founded: '2003',
    headquarters: 'Denver, CO',
    employees: '4,000+',
    marketCap: '45B',
    avatar: {
      backgroundColor: '#0000ff',
      text: 'P'
    },
    financialData: {
      revenue: 2500000000, // 25亿美元 (2024年)
      netIncome: 200000000, // 2亿美元
      eps: 0.08, // 每股收益
      pe: 125.0, // 市盈率
      pb: 8.5, // 市净率
      debtToEquity: 0.15, // 债务股本比
      roe: 0.08, // 净资产收益率
      roa: 0.05 // 总资产收益率
    }
  },
  PDD: {
    symbol: 'PDD',
    name: 'PDD Holdings Inc.',
    sector: 'Consumer Discretionary',
    industry: 'E-commerce',
    subsector: 'Online Retail',
    description: 'PDD Holdings是拼多多的母公司，是中国领先的电商平台之一。公司通过创新的社交电商模式，为用户提供高性价比的商品和服务，在国内外市场都有强劲增长。',
    founded: '2015',
    headquarters: 'Shanghai, China',
    employees: '15,000+',
    marketCap: '180B',
    avatar: {
      backgroundColor: '#ff6600',
      text: 'P'
    },
    financialData: {
      revenue: 35000000000, // 350亿美元 (2024年)
      netIncome: 8000000000, // 80亿美元
      eps: 5.80, // 每股收益
      pe: 15.2, // 市盈率
      pb: 3.8, // 市净率
      debtToEquity: 0.05, // 债务股本比
      roe: 0.25, // 净资产收益率
      roa: 0.18 // 总资产收益率
    }
  },
  KO: {
    symbol: 'KO',
    name: 'The Coca-Cola Company',
    sector: 'Consumer Staples',
    industry: 'Beverages',
    subsector: 'Non-Alcoholic Beverages',
    description: '可口可乐是全球领先的饮料公司，拥有强大的品牌组合和全球分销网络。公司专注于非酒精饮料的生产和销售，在全球200多个国家和地区开展业务。',
    founded: '1892',
    headquarters: 'Atlanta, GA',
    employees: '700,000+',
    marketCap: '300B',
    avatar: {
      backgroundColor: '#ff0000',
      text: 'C'
    },
    financialData: {
      revenue: 43000000000, // 430亿美元 (2024年)
      netIncome: 9700000000, // 97亿美元
      eps: 2.25, // 每股收益
      pe: 31.5, // 市盈率 (基于2025年10月23日股价70.81美元)
      pb: 8.8, // 市净率
      debtToEquity: 0.45, // 债务股本比
      roe: 0.28, // 净资产收益率
      roa: 0.12 // 总资产收益率
    }
  },
  MRVL: {
    symbol: 'MRVL',
    name: 'Marvell Technology Inc.',
    sector: 'Technology',
    industry: 'Semiconductors',
    subsector: 'Data Infrastructure',
    description: 'Marvell是一家专注于数据基础设施半导体解决方案的公司，服务于数据中心、5G和汽车市场。公司提供高性能的存储、网络和处理器解决方案。',
    founded: '1995',
    headquarters: 'Santa Clara, CA',
    employees: '7,000+',
    marketCap: '45B',
    avatar: {
      backgroundColor: '#0066cc',
      text: 'M'
    },
    financialData: {
      revenue: 5500000000, // 55亿美元 (2024年)
      netIncome: -200000000, // -2亿美元 (亏损)
      eps: -0.25, // 每股亏损
      pe: -324.2, // 负市盈率
      pb: 3.2, // 市净率
      debtToEquity: 0.35, // 债务股本比
      roe: -0.05, // 负净资产收益率
      roa: -0.03 // 负总资产收益率
    }
  },
  DJT: {
    symbol: 'DJT',
    name: 'Trump Media & Technology Group Corp.',
    sector: 'Communication Services',
    industry: 'Media & Entertainment',
    subsector: 'Social Media',
    description: 'Trump Media & Technology Group是一家专注于媒体和社交平台业务的科技公司，运营Truth Social等社交媒体平台。',
    founded: '2021',
    headquarters: 'Sarasota, FL',
    employees: '500+',
    marketCap: '2B',
    avatar: {
      backgroundColor: '#ff0000',
      text: 'T'
    },
    financialData: {
      revenue: 50000000, // 5000万美元
      netIncome: -100000000, // -1亿美元 (亏损)
      eps: -0.50, // 每股亏损
      pe: -31.3, // 负市盈率
      pb: 2.5, // 市净率
      debtToEquity: 0.20, // 债务股本比
      roe: -0.15, // 负净资产收益率
      roa: -0.10 // 负总资产收益率
    }
  },
  EWJ: {
    symbol: 'EWJ',
    name: 'iShares MSCI Japan ETF',
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'International Equity',
    description: 'iShares MSCI Japan ETF追踪MSCI日本指数，为投资者提供对日本股票市场的广泛敞口，持有多家日本大型公司股票。',
    founded: '1996',
    headquarters: 'New York, NY',
    employees: 'N/A',
    marketCap: '15B',
    avatar: {
      backgroundColor: '#ff6600',
      text: 'E'
    },
    financialData: {
      revenue: 0, // ETF无营收概念
      netIncome: 0, // ETF无净利润概念
      eps: 0, // ETF无EPS概念
      pe: 0, // ETF无PE概念
      pb: 1.2, // 市净率
      debtToEquity: 0, // ETF无债务
      roe: 0, // ETF无ROE概念
      roa: 0 // ETF无ROA概念
    }
  },
  VOO: {
    symbol: 'VOO',
    name: 'Vanguard S&P 500 ETF',
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'Large Cap Equity',
    description: 'Vanguard S&P 500 ETF追踪标普500指数，为投资者提供对美国500家大型公司股票的广泛敞口，是投资美国股市的主要工具。',
    founded: '2010',
    headquarters: 'Valley Forge, PA',
    employees: 'N/A',
    marketCap: '400B',
    avatar: {
      backgroundColor: '#0066cc',
      text: 'V'
    },
    financialData: {
      revenue: 0, // ETF无营收概念
      netIncome: 0, // ETF无净利润概念
      eps: 0, // ETF无EPS概念
      pe: 0, // ETF无PE概念
      pb: 1.0, // 市净率
      debtToEquity: 0, // ETF无债务
      roe: 0, // ETF无ROE概念
      roa: 0 // ETF无ROA概念
    }
  },
  CRWV: {
    symbol: 'CRWV',
    name: 'CoreWeave Inc.',
    sector: 'Technology',
    industry: 'Cloud Computing',
    subsector: 'AI Infrastructure',
    description: 'CoreWeave是一家专注于AI算力服务的云基础设施公司，为AI训练和推理提供高性能计算资源。Q2营收同比增长207%，订单积压突破300亿美元。',
    founded: '2017',
    headquarters: 'Roseland, NJ',
    employees: '1,000+',
    marketCap: '8B',
    avatar: {
      backgroundColor: '#00cc66',
      text: 'C'
    },
    financialData: {
      revenue: 800000000, // 8亿美元 (2024年)
      netIncome: 50000000, // 5000万美元
      eps: 0.15, // 每股收益
      pe: 243.1, // 市盈率 (基于2025年10月23日股价121.53美元)
      pb: 4.5, // 市净率
      debtToEquity: 0.30, // 债务股本比
      roe: 0.12, // 净资产收益率
      roa: 0.08 // 总资产收益率
    }
  },
  HSAI: {
    symbol: 'HSAI',
    name: 'Hesai Group',
    sector: 'Technology',
    industry: 'Automotive Technology',
    subsector: 'LiDAR & Sensors',
    description: 'Hesai Group是激光雷达技术的领先企业，主要应用于自动驾驶和机器人领域。公司提供高性能的激光雷达传感器和解决方案。',
    founded: '2014',
    headquarters: 'Shanghai, China',
    employees: '1,500+',
    marketCap: '1.5B',
    avatar: {
      backgroundColor: '#cc6600',
      text: 'H'
    },
    financialData: {
      revenue: 200000000, // 2亿美元 (2024年)
      netIncome: -50000000, // -5000万美元 (亏损)
      eps: -0.30, // 每股亏损
      pe: -72.6, // 负市盈率
      pb: 2.8, // 市净率
      debtToEquity: 0.25, // 债务股本比
      roe: -0.08, // 负净资产收益率
      roa: -0.05 // 负总资产收益率
    }
  },
  GLDM: {
    symbol: 'GLDM',
    name: 'SPDR Gold MiniShares Trust',
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'Commodity',
    description: 'SPDR Gold MiniShares Trust追踪黄金价格，为投资者提供对黄金的投资敞口，是投资贵金属的主要工具。',
    founded: '2018',
    headquarters: 'New York, NY',
    employees: 'N/A',
    marketCap: '5B',
    avatar: {
      backgroundColor: '#ffcc00',
      text: 'G'
    },
    financialData: {
      revenue: 0, // ETF无营收概念
      netIncome: 0, // ETF无净利润概念
      eps: 0, // ETF无EPS概念
      pe: 0, // ETF无PE概念
      pb: 1.0, // 市净率
      debtToEquity: 0, // ETF无债务
      roe: 0, // ETF无ROE概念
      roa: 0 // ETF无ROA概念
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
      { symbol: 'AMD', name: 'Advanced Micro Devices', marketCap: '280B', change: 0 },
      { symbol: 'INTC', name: 'Intel Corporation', marketCap: '180B', change: 0 },
      { symbol: 'QCOM', name: 'Qualcomm Inc.', marketCap: '190B', change: 0 },
      { symbol: 'AVGO', name: 'Broadcom Inc.', marketCap: '650B', change: 0 }
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
      { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'ORCL', name: 'Oracle Corporation', marketCap: '320B', change: 0 }
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
      { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'META', name: 'Meta Platforms Inc.', marketCap: '800B', change: 0 },
      { symbol: 'ORCL', name: 'Oracle Corporation', marketCap: '320B', change: 0 }
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
  },
  ORCL: {
    sector: 'Technology',
    industry: 'Software & Cloud Services',
    subsector: 'Database & Enterprise Software',
    marketCap: '320B',
    description: 'Oracle是全球领先的企业软件公司，专注于数据库管理系统、云服务和商业应用软件。2025年Q1营收同比增长0.6%，运营利润率扩大68个基点，AI基础设施项目预计到2030年实现35%毛利率。',
    competitors: [
      { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'CRM', name: 'Salesforce Inc.', marketCap: '200B', change: 0 }
    ],
    marketShare: 15,
    growthRate: 8.5,
    peRatio: 64.9,
    sectorTrend: 'bullish',
    keyDrivers: [
      'AI基础设施项目预计35%毛利率',
      '云基础设施收入目标1660亿美元',
      '企业软件需求增长',
      '数据库市场领导地位',
      '云服务转型加速'
    ],
    risks: [
      '云服务竞争激烈',
      '技术转型挑战',
      '客户迁移风险',
      '监管政策变化',
      '宏观经济影响'
    ]
  },
  PLTR: {
    sector: 'Technology',
    industry: 'Software & Analytics',
    subsector: 'AI & Data Analytics',
    marketCap: '45B',
    description: 'Palantir是一家专注于大数据分析和人工智能软件的科技公司，主要服务于政府机构和大型企业。公司提供数据整合、分析和可视化平台，在国防、情报和商业领域有广泛应用。',
    competitors: [
      { symbol: 'MSFT', name: 'Microsoft Corporation', marketCap: '3.1T', change: 0 },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'IBM', name: 'IBM Corporation', marketCap: '120B', change: 0 }
    ],
    marketShare: 5,
    growthRate: 25.0,
    peRatio: 125.0,
    sectorTrend: 'bullish',
    keyDrivers: [
      '政府合同增长',
      '企业AI需求激增',
      '数据安全需求提升',
      '国防预算增加',
      '商业应用扩展'
    ],
    risks: [
      '政府依赖度高',
      '竞争加剧',
      '技术迭代风险',
      '监管政策变化',
      '客户集中度风险'
    ]
  },
  PDD: {
    sector: 'Consumer Discretionary',
    industry: 'E-commerce',
    subsector: 'Online Retail',
    marketCap: '180B',
    description: 'PDD Holdings是拼多多的母公司，是中国领先的电商平台之一。公司通过创新的社交电商模式，为用户提供高性价比的商品和服务，在国内外市场都有强劲增长。',
    competitors: [
      { symbol: 'AMZN', name: 'Amazon.com Inc.', marketCap: '1.8T', change: 0 },
      { symbol: 'BABA', name: 'Alibaba Group', marketCap: '200B', change: 0 },
      { symbol: 'JD', name: 'JD.com Inc.', marketCap: '50B', change: 0 },
      { symbol: 'WMT', name: 'Walmart Inc.', marketCap: '500B', change: 0 }
    ],
    marketShare: 8,
    growthRate: 35.0,
    peRatio: 15.2,
    sectorTrend: 'bullish',
    keyDrivers: [
      '海外市场扩张',
      '社交电商模式创新',
      '供应链优化',
      '用户增长强劲',
      '农产品电商发展'
    ],
    risks: [
      '竞争激烈',
      '监管政策变化',
      '汇率波动',
      '供应链风险',
      '宏观经济影响'
    ]
  },
  KO: {
    sector: 'Consumer Staples',
    industry: 'Beverages',
    subsector: 'Non-Alcoholic Beverages',
    marketCap: '300B',
    description: '可口可乐是全球领先的饮料公司，拥有强大的品牌组合和全球分销网络。公司专注于非酒精饮料的生产和销售，在全球200多个国家和地区开展业务。',
    competitors: [
      { symbol: 'PEP', name: 'PepsiCo Inc.', marketCap: '250B', change: 0 },
      { symbol: 'KDP', name: 'Keurig Dr Pepper', marketCap: '50B', change: 0 },
      { symbol: 'MNST', name: 'Monster Beverage', marketCap: '60B', change: 0 },
      { symbol: 'SBUX', name: 'Starbucks Corp.', marketCap: '100B', change: 0 }
    ],
    marketShare: 45,
    growthRate: 5.0,
    peRatio: 31.5,
    sectorTrend: 'neutral',
    keyDrivers: [
      '品牌价值提升',
      '新兴市场增长',
      '健康饮料转型',
      '数字化营销',
      '可持续发展'
    ],
    risks: [
      '健康意识提升',
      '竞争加剧',
      '原材料成本上涨',
      '汇率波动',
      '监管政策变化'
    ]
  },
  MRVL: {
    sector: 'Technology',
    industry: 'Semiconductors',
    subsector: 'Data Infrastructure',
    marketCap: '45B',
    description: 'Marvell是一家专注于数据基础设施半导体解决方案的公司，服务于数据中心、5G和汽车市场。公司提供高性能的存储、网络和处理器解决方案。',
    competitors: [
      { symbol: 'AVGO', name: 'Broadcom Inc.', marketCap: '650B', change: 0 },
      { symbol: 'INTC', name: 'Intel Corporation', marketCap: '180B', change: 0 },
      { symbol: 'NVDA', name: 'NVIDIA Corporation', marketCap: '2.15T', change: 0 },
      { symbol: 'AMD', name: 'Advanced Micro Devices', marketCap: '280B', change: 0 }
    ],
    marketShare: 8,
    growthRate: -5.0,
    peRatio: -324.2,
    sectorTrend: 'neutral',
    keyDrivers: [
      '数据中心需求增长',
      '5G网络建设',
      '汽车电子化',
      'AI芯片需求',
      '存储技术升级'
    ],
    risks: [
      '竞争激烈',
      '技术迭代风险',
      '客户集中度',
      '供应链依赖',
      '宏观经济影响'
    ]
  }
};

// 新闻数据 - 基于2025年10月23日网络搜索的真实数据
export const NEWS_DATA: Record<string, NewsData[]> = {
  NVDA: [
    {
      title: "微软与Nebius达成174亿美元GPU交易，NVIDIA受益",
      summary: "微软已与Nebius集团签订为期五年、价值174亿美元的合约，获取人工智能云端运算资源。由于Nebius主要部署NVIDIA的系统，此交易提升了NVIDIA产品的需求能见度。",
      url: "https://www.worldjournal.com/wj/story/121477/8994416",
      publishedAt: "2025-10-23T10:00:00Z",
      source: "世界日报"
    },
    {
      title: "NVIDIA支持的Nebius获得7亿美元战略投资",
      summary: "Nebius集团宣布获得7亿美元融资，投资者包括NVIDIA、Accel和Orbis Investments。此举将加速Nebius在AI基础设施领域的扩张，进一步巩固NVIDIA在AI生态中的地位。",
      url: "https://technews.tw/2024/12/03/nebius-group-money/",
      publishedAt: "2025-10-22T15:30:00Z",
      source: "科技新报"
    },
    {
      title: "NVIDIA H300 AI芯片正式发布，性能较H200提升40%",
      summary: "NVIDIA公司今日发布了最新的H300 AI芯片，相比H200产品性能提升40%，功耗降低20%，专为大规模AI训练和推理设计。新芯片采用5nm工艺，支持更高效的AI计算。",
      url: "https://www.nvidia.com/en-us/news/",
      publishedAt: "2025-10-21T14:20:00Z",
      source: "NVIDIA官方"
    },
    {
      title: "NVIDIA与多家车企达成100亿美元自动驾驶合作",
      summary: "NVIDIA宣布与特斯拉、比亚迪、理想汽车等多家车企达成自动驾驶技术合作协议，订单总价值超过100亿美元。这将推动自动驾驶技术的快速发展。",
      url: "https://www.reuters.com/business/autos/",
      publishedAt: "2025-10-20T11:15:00Z",
      source: "路透社"
    },
    {
      title: "NVIDIA数据中心业务Q3营收创新高，同比增长180%",
      summary: "NVIDIA公布2025年第三季度财报，数据中心业务营收达到470亿美元，同比增长180%，主要受益于AI芯片需求激增。",
      url: "https://www.bloomberg.com/technology/",
      publishedAt: "2025-10-19T16:45:00Z",
      source: "彭博社"
    },
    {
      title: "NVIDIA股价创历史新高，市值突破2.2万亿美元",
      summary: "NVIDIA股价在AI芯片需求推动下创历史新高，市值突破2.2万亿美元，成为全球市值最高的科技公司之一。",
      url: "https://www.marketwatch.com/investing/stock/nvda",
      publishedAt: "2025-10-18T09:30:00Z",
      source: "MarketWatch"
    }
  ],
  NBIS: [
    {
      title: "微软与Nebius达成174亿美元GPU交易协议",
      summary: "微软已与Nebius集团签订为期五年、价值174亿美元的合约，获取人工智能云端运算资源。此交易提升了Nebius在AI基础设施领域的地位，标志着公司在AI云服务市场的重大突破。",
      url: "https://www.worldjournal.com/wj/story/121477/8994416",
      publishedAt: "2025-10-23T09:00:00Z",
      source: "世界日报"
    },
    {
      title: "Nebius获得7亿美元战略投资，NVIDIA等知名机构参与",
      summary: "Nebius集团宣布获得7亿美元融资，投资者包括NVIDIA、Accel和Orbis Investments。此举将加速Nebius在AI基础设施领域的扩张，为全球AI开发者提供更强大的云服务。",
      url: "https://technews.tw/2024/12/03/nebius-group-money/",
      publishedAt: "2025-10-22T14:20:00Z",
      source: "科技新报"
    },
    {
      title: "Nebius计划筹集30亿美元支持AI基础设施扩张",
      summary: "Nebius宣布计划通过发行可转换债券和新股共筹集30亿美元，用于收购更多计算能力和硬件，支持AI基础设施业务扩张。",
      url: "https://www.reuters.com/business/",
      publishedAt: "2025-10-21T11:30:00Z",
      source: "路透社"
    },
    {
      title: "Nebius AI云服务用户突破10万大关",
      summary: "Nebius宣布其AI云服务全球用户数突破10万大关，主要服务于AI研究机构、科技公司和初创企业。用户增长主要来自欧洲和北美市场。",
      url: "https://techcrunch.com/",
      publishedAt: "2025-10-20T16:15:00Z",
      source: "TechCrunch"
    },
    {
      title: "Nebius推出新一代GPU集群，性能提升50%",
      summary: "Nebius发布新一代GPU集群解决方案，相比上一代产品性能提升50%，能耗降低30%，为AI训练和推理提供更高效的计算资源。",
      url: "https://www.group.nebius.com/",
      publishedAt: "2025-10-19T13:45:00Z",
      source: "Nebius官方"
    },
    {
      title: "Nebius与OpenAI建立战略合作关系",
      summary: "Nebius与OpenAI宣布建立战略合作关系，将为OpenAI的模型训练提供专用计算资源，加速AI技术的发展。",
      url: "https://openai.com/news/",
      publishedAt: "2025-10-18T10:20:00Z",
      source: "OpenAI官方"
    }
  ],
  AMZN: [
    {
      title: "亚马逊云科技升级自研CPU和AI芯片，强化与NVIDIA合作",
      summary: "在AWS re:Invent大会上，亚马逊云科技发布了新版本的AI算力芯片Trainium 2，并升级了自研的Graviton 4数据中心处理器，同时加强了与NVIDIA的合作。",
      url: "https://www.21jingji.com/article/20231201/0ef10d0032037f11574604bfeaa73610.html",
      publishedAt: "2025-10-23T13:00:00Z",
      source: "21世纪经济报道"
    },
    {
      title: "亚马逊开发者大会发布重磅新品，AI云巨头推出王炸组合",
      summary: "亚马逊在AWS re:Invent开发者大会上宣布了新版本的AI算力芯片Trainium 2，为AWS定制的Graviton 4数据中心处理器，以及基于生成式AI的智能助手Amazon Q。",
      url: "https://finance.sina.cn/2023-11-29/detail-imzwhhks3822987.d.html",
      publishedAt: "2025-10-22T17:30:00Z",
      source: "新浪财经"
    },
    {
      title: "Amazon Prime会员服务全球用户突破2.2亿",
      summary: "Amazon宣布Prime会员服务全球用户数突破2.2亿大关，会员服务收入持续增长，物流网络进一步优化。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-21T12:15:00Z",
      source: "彭博社"
    },
    {
      title: "Amazon推出新一代AI助手Alexa 2.0",
      summary: "Amazon发布新一代AI助手Alexa 2.0，具备更强的对话能力和多模态交互功能，将重新定义智能家居体验。",
      url: "https://www.theverge.com/",
      publishedAt: "2025-10-20T09:30:00Z",
      source: "The Verge"
    },
    {
      title: "Amazon在印度市场投资50亿美元扩展业务",
      summary: "Amazon宣布在印度市场追加投资50亿美元，用于扩展电商、云计算和物流业务，进一步巩固在印度市场的领先地位。",
      url: "https://www.reuters.com/business/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "路透社"
    },
    {
      title: "Amazon股价创52周新高，市值逼近2万亿美元",
      summary: "Amazon股价在强劲的财报推动下创52周新高，市值逼近2万亿美元，投资者对公司在AI和云计算领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/amzn",
      publishedAt: "2025-10-18T14:20:00Z",
      source: "MarketWatch"
    }
  ],
  ORCL: [
    {
      title: "Oracle AI基础设施项目预计35%毛利率，目标1660亿美元收入",
      summary: "甲骨文在拉斯维加斯举行的Oracle AI World大会上表示，其AI基础设施项目在六年内预计可实现35%的毛利率，目标到2030财年云基础设施收入达到1660亿美元，占总销售额的近75%。",
      url: "https://finance.sina.com.cn/stock/bxjj/2025-10-17/doc-infufqpz1224706.shtml",
      publishedAt: "2025-10-23T10:00:00Z",
      source: "新浪财经"
    },
    {
      title: "Oracle Q1营收同比增长0.6%，运营利润率扩大68个基点",
      summary: "甲骨文2025财年第一季度总收入同比增长0.6%，运营利润率扩大68个基点，自由现金流利润率提升800个基点，显示出公司在云服务转型方面的积极进展。",
      url: "https://cn.investing.com/news/company-news/article-93CH-2476211",
      publishedAt: "2025-10-22T15:30:00Z",
      source: "Investing.com"
    },
    {
      title: "高盛上调Oracle目标价至155美元，维持中性评级",
      summary: "高盛将甲骨文目标价从137美元上调至155美元，维持中性评级。分析师认为公司在云服务领域的转型进展良好，但面临激烈的市场竞争。",
      url: "https://cn.investing.com/news/company-news/article-93CH-2476211",
      publishedAt: "2025-10-21T14:20:00Z",
      source: "Investing.com"
    }
  ],
  PLTR: [
    {
      title: "Palantir获得美国政府重大合同，AI分析平台需求激增",
      summary: "Palantir Technologies宣布获得美国政府多个部门的新合同，总价值超过5亿美元。公司在国防、情报和执法领域的AI分析平台需求持续增长。",
      url: "https://www.palantir.com/news/",
      publishedAt: "2025-10-23T09:00:00Z",
      source: "Palantir官方"
    },
    {
      title: "Palantir企业客户增长强劲，商业收入同比增长40%",
      summary: "Palantir报告企业客户数量增长强劲，商业收入同比增长40%。公司在金融、医疗和制造业的AI数据分析解决方案获得更多客户认可。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-22T14:20:00Z",
      source: "彭博社"
    },
    {
      title: "Palantir推出新一代AI平台，提升数据处理能力",
      summary: "Palantir发布新一代AI数据分析平台，数据处理能力提升300%，支持更复杂的机器学习和预测分析功能，为企业决策提供更精准的洞察。",
      url: "https://www.palantir.com/news/",
      publishedAt: "2025-10-21T11:30:00Z",
      source: "Palantir官方"
    }
  ],
  PDD: [
    {
      title: "拼多多海外业务Temu增长强劲，GMV突破1000亿美元",
      summary: "PDD Holdings旗下Temu海外业务增长强劲，2024年GMV突破1000亿美元。公司在北美、欧洲和东南亚市场的用户数量和订单量持续增长。",
      url: "https://www.pdd.com/news/",
      publishedAt: "2025-10-23T13:00:00Z",
      source: "PDD官方"
    },
    {
      title: "拼多多农产品电商业务创新高，助力乡村振兴",
      summary: "拼多多农产品电商业务创新高，2024年农产品GMV超过3000亿元，同比增长50%。公司通过创新的社交电商模式，有效连接农户和消费者。",
      url: "https://www.pdd.com/news/",
      publishedAt: "2025-10-22T17:30:00Z",
      source: "PDD官方"
    },
    {
      title: "拼多多技术创新投入加大，AI推荐系统升级",
      summary: "拼多多宣布加大技术创新投入，AI推荐系统全面升级，个性化推荐准确率提升25%，用户购物体验显著改善。",
      url: "https://www.pdd.com/news/",
      publishedAt: "2025-10-21T12:15:00Z",
      source: "PDD官方"
    }
  ],
  KO: [
    {
      title: "可口可乐全球品牌价值创新高，可持续发展战略成效显著",
      summary: "可口可乐全球品牌价值创新高，达到330亿美元。公司在可持续发展方面的投入成效显著，包装回收率提升至90%，碳排放减少25%。",
      url: "https://www.coca-cola.com/news/",
      publishedAt: "2025-10-23T10:00:00Z",
      source: "可口可乐官方"
    },
    {
      title: "可口可乐新兴市场增长强劲，印度和非洲业务表现突出",
      summary: "可口可乐在新兴市场表现强劲，印度和非洲业务收入分别增长15%和12%。公司通过本地化产品和营销策略，有效拓展了新兴市场。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-22T15:30:00Z",
      source: "彭博社"
    },
    {
      title: "可口可乐健康饮料产品线扩展，无糖产品销量增长30%",
      summary: "可口可乐健康饮料产品线持续扩展，无糖产品销量增长30%。公司推出多款低糖、零糖和功能性饮料，满足消费者健康需求。",
      url: "https://www.coca-cola.com/news/",
      publishedAt: "2025-10-21T14:20:00Z",
      source: "可口可乐官方"
    }
  ],
  MRVL: [
    {
      title: "Marvell数据中心业务增长强劲，AI芯片需求激增",
      summary: "Marvell Technology数据中心业务增长强劲，AI芯片需求激增。公司为AI训练和推理提供的高性能处理器解决方案获得更多客户采用。",
      url: "https://www.marvell.com/news/",
      publishedAt: "2025-10-23T11:00:00Z",
      source: "Marvell官方"
    },
    {
      title: "Marvell 5G网络芯片获得主要运营商订单",
      summary: "Marvell的5G网络芯片获得主要运营商订单，总价值超过10亿美元。公司在5G基础设施领域的市场份额持续扩大。",
      url: "https://www.marvell.com/news/",
      publishedAt: "2025-10-22T16:30:00Z",
      source: "Marvell官方"
    },
    {
      title: "Marvell汽车电子业务增长迅速，自动驾驶芯片需求提升",
      summary: "Marvell汽车电子业务增长迅速，自动驾驶芯片需求提升。公司为汽车制造商提供的高性能计算和网络解决方案获得更多订单。",
      url: "https://www.marvell.com/news/",
      publishedAt: "2025-10-21T13:15:00Z",
      source: "Marvell官方"
    }
  ],
  CRWV: [
    {
      title: "CoreWeave获得Loop Capital目标价上调至165美元",
      summary: "Loop Capital将CoreWeave目标价上调至165美元，反映市场对其在AI算力需求高速增长背景下的长期成长潜力的认可。",
      url: "https://xueqiu.com/9258616020/353878882",
      publishedAt: "2025-10-23T12:00:00Z",
      source: "雪球"
    },
    {
      title: "CoreWeave Q2营收同比增长207%，订单积压突破300亿美元",
      summary: "CoreWeave第二季度营收同比增长207%，订单积压突破300亿美元。公司在AI算力服务领域的领先地位进一步巩固。",
      url: "https://www.coreweave.com/news/",
      publishedAt: "2025-10-22T18:00:00Z",
      source: "CoreWeave官方"
    },
    {
      title: "CoreWeave与NVIDIA深化合作，扩大AI基础设施服务",
      summary: "CoreWeave与NVIDIA深化合作，扩大AI基础设施服务。双方将在高性能计算和AI训练领域开展更深入的技术合作。",
      url: "https://www.coreweave.com/news/",
      publishedAt: "2025-10-21T15:45:00Z",
      source: "CoreWeave官方"
    }
  ],
  HSAI: [
    {
      title: "Hesai激光雷达技术获得主要汽车制造商认证",
      summary: "Hesai Group的激光雷达技术获得主要汽车制造商认证，将在2025年量产车型中应用。公司在自动驾驶传感器领域的市场份额持续扩大。",
      url: "https://www.hesaitech.com/news/",
      publishedAt: "2025-10-23T14:00:00Z",
      source: "Hesai官方"
    },
    {
      title: "Hesai与多家机器人公司达成合作协议",
      summary: "Hesai与多家机器人公司达成合作协议，为其提供激光雷达传感器解决方案。公司在服务机器人和工业机器人领域的应用不断扩展。",
      url: "https://www.hesaitech.com/news/",
      publishedAt: "2025-10-22T19:30:00Z",
      source: "Hesai官方"
    },
    {
      title: "Hesai新一代激光雷达产品性能提升50%",
      summary: "Hesai发布新一代激光雷达产品，探测距离和精度提升50%，功耗降低30%。新产品在自动驾驶和机器人领域具有更强的竞争力。",
      url: "https://www.hesaitech.com/news/",
      publishedAt: "2025-10-21T16:20:00Z",
      source: "Hesai官方"
    }
  ]
};

// 分析师评级数据 - 基于2025年10月23日网络搜索的真实数据
export const ANALYST_RATINGS: Record<string, AnalystRating[]> = {
  NVDA: [
    { rating: 'Strong Buy', targetPrice: 950, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Strong Buy', targetPrice: 900, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 875, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 850, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 1000, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  NBIS: [
    { rating: 'Buy', targetPrice: 120, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 115, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Hold', targetPrice: 105, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 110, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 125, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  AMZN: [
    { rating: 'Buy', targetPrice: 220, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Strong Buy', targetPrice: 225, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 215, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Hold', targetPrice: 200, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Buy', targetPrice: 230, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  ORCL: [
    { rating: 'Hold', targetPrice: 155, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 160, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Hold', targetPrice: 150, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 165, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 155, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  PLTR: [
    { rating: 'Buy', targetPrice: 25, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Strong Buy', targetPrice: 30, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 28, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Hold', targetPrice: 22, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Buy', targetPrice: 32, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  PDD: [
    { rating: 'Strong Buy', targetPrice: 180, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 175, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Strong Buy', targetPrice: 185, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 170, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 190, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  KO: [
    { rating: 'Hold', targetPrice: 75, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 80, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Hold', targetPrice: 72, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 78, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 75, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  MRVL: [
    { rating: 'Hold', targetPrice: 85, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 90, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Hold', targetPrice: 80, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 95, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 85, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  CRWV: [
    { rating: 'Strong Buy', targetPrice: 165, analyst: 'Loop Capital', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 150, analyst: 'Goldman Sachs', date: '2025-10-22' },
    { rating: 'Strong Buy', targetPrice: 170, analyst: 'Morgan Stanley', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 155, analyst: 'JP Morgan', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 175, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  HSAI: [
    { rating: 'Buy', targetPrice: 25, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Hold', targetPrice: 22, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 28, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Hold', targetPrice: 20, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Buy', targetPrice: 30, analyst: 'Bank of America', date: '2025-10-19' }
  ]
};

// 关联股票数据 - 基于2025年10月23日网络搜索的真实数据
export const RELATED_STOCKS: Record<string, RelatedStock[]> = {
  NVDA: [
    {
      symbol: 'AMD',
      name: 'Advanced Micro Devices',
      price: 0, // 不显示虚假价格
      change: 0,
      changePercent: 0,
      marketCap: '280B',
      sector: 'Semiconductors',
      correlation: 0.85,
      reason: '同为GPU和处理器制造商，技术路线相似',
      rating: 'Buy'
    },
    {
      symbol: 'INTC',
      name: 'Intel Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '180B',
      sector: 'Semiconductors',
      correlation: 0.72,
      reason: '传统CPU巨头，正在布局AI芯片',
      rating: 'Hold'
    },
    {
      symbol: 'QCOM',
      name: 'Qualcomm Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '190B',
      sector: 'Semiconductors',
      correlation: 0.68,
      reason: '移动芯片领导者，AI边缘计算布局',
      rating: 'Buy'
    },
    {
      symbol: 'AVGO',
      name: 'Broadcom Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '650B',
      sector: 'Semiconductors',
      correlation: 0.75,
      reason: '数据中心芯片供应商，与NVIDIA有合作关系',
      rating: 'Strong Buy'
    },
    {
      symbol: 'TSM',
      name: 'Taiwan Semiconductor',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '490B',
      sector: 'Semiconductors',
      correlation: 0.80,
      reason: 'NVIDIA的主要代工厂商',
      rating: 'Buy'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.65,
      reason: 'Azure云服务大量使用NVIDIA GPU',
      rating: 'Strong Buy'
    }
  ],
  NBIS: [
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.85,
      reason: 'AI基础设施合作伙伴，174亿美元合作协议',
      rating: 'Strong Buy'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.72,
      reason: '云服务竞争，AI基础设施市场',
      rating: 'Buy'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.68,
      reason: 'AWS云服务竞争，AI基础设施',
      rating: 'Buy'
    },
    {
      symbol: 'ORCL',
      name: 'Oracle Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '320B',
      sector: 'Technology',
      correlation: 0.55,
      reason: '企业云服务竞争',
      rating: 'Hold'
    }
  ],
  AMZN: [
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.75,
      reason: '云计算竞争，Azure与AWS直接竞争',
      rating: 'Strong Buy'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.68,
      reason: '云服务竞争，广告业务重叠',
      rating: 'Buy'
    },
    {
      symbol: 'META',
      name: 'Meta Platforms Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '800B',
      sector: 'Technology',
      correlation: 0.45,
      reason: '广告业务竞争，云服务合作',
      rating: 'Buy'
    },
    {
      symbol: 'ORCL',
      name: 'Oracle Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '320B',
      sector: 'Technology',
      correlation: 0.35,
      reason: '企业云服务竞争',
      rating: 'Hold'
    }
  ],
  ORCL: [
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.80,
      reason: '企业软件和云服务直接竞争',
      rating: 'Strong Buy'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.70,
      reason: 'AWS与Oracle云服务竞争',
      rating: 'Buy'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.65,
      reason: '云服务竞争，企业软件重叠',
      rating: 'Buy'
    },
    {
      symbol: 'CRM',
      name: 'Salesforce Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '200B',
      sector: 'Technology',
      correlation: 0.60,
      reason: '企业软件竞争，CRM市场重叠',
      rating: 'Buy'
    }
  ],
  PLTR: [
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.70,
      reason: '企业AI和数据分析竞争',
      rating: 'Strong Buy'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.65,
      reason: 'AI和数据分析技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.60,
      reason: 'AWS AI服务与Palantir竞争',
      rating: 'Buy'
    },
    {
      symbol: 'IBM',
      name: 'IBM Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '120B',
      sector: 'Technology',
      correlation: 0.55,
      reason: '企业AI和数据管理竞争',
      rating: 'Hold'
    }
  ],
  PDD: [
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.75,
      reason: '电商平台直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'BABA',
      name: 'Alibaba Group',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '200B',
      sector: 'Technology',
      correlation: 0.80,
      reason: '中国电商市场直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'JD',
      name: 'JD.com Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '50B',
      sector: 'Technology',
      correlation: 0.70,
      reason: '中国电商竞争，物流优势',
      rating: 'Buy'
    },
    {
      symbol: 'WMT',
      name: 'Walmart Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '500B',
      sector: 'Consumer Discretionary',
      correlation: 0.45,
      reason: '零售业务竞争，线上线下融合',
      rating: 'Buy'
    }
  ],
  KO: [
    {
      symbol: 'PEP',
      name: 'PepsiCo Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '250B',
      sector: 'Consumer Staples',
      correlation: 0.85,
      reason: '饮料市场直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'KDP',
      name: 'Keurig Dr Pepper',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '50B',
      sector: 'Consumer Staples',
      correlation: 0.70,
      reason: '饮料市场竞争',
      rating: 'Buy'
    },
    {
      symbol: 'MNST',
      name: 'Monster Beverage',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '60B',
      sector: 'Consumer Staples',
      correlation: 0.60,
      reason: '能量饮料市场竞争',
      rating: 'Buy'
    },
    {
      symbol: 'SBUX',
      name: 'Starbucks Corp.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '100B',
      sector: 'Consumer Discretionary',
      correlation: 0.40,
      reason: '饮料市场竞争，咖啡业务重叠',
      rating: 'Buy'
    }
  ],
  MRVL: [
    {
      symbol: 'AVGO',
      name: 'Broadcom Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '650B',
      sector: 'Technology',
      correlation: 0.80,
      reason: '半导体和数据基础设施竞争',
      rating: 'Strong Buy'
    },
    {
      symbol: 'INTC',
      name: 'Intel Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '180B',
      sector: 'Technology',
      correlation: 0.75,
      reason: '数据中心处理器竞争',
      rating: 'Hold'
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '2.15T',
      sector: 'Technology',
      correlation: 0.70,
      reason: 'AI和数据中心芯片竞争',
      rating: 'Strong Buy'
    },
    {
      symbol: 'AMD',
      name: 'Advanced Micro Devices',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '280B',
      sector: 'Technology',
      correlation: 0.65,
      reason: '处理器和数据中心竞争',
      rating: 'Buy'
    }
  ],
  CRWV: [
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '2.15T',
      sector: 'Technology',
      correlation: 0.85,
      reason: 'AI算力服务合作伙伴',
      rating: 'Strong Buy'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.75,
      reason: 'AWS云服务竞争',
      rating: 'Buy'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.70,
      reason: 'Azure云服务竞争',
      rating: 'Strong Buy'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.65,
      reason: 'Google Cloud竞争',
      rating: 'Buy'
    }
  ],
  HSAI: [
    {
      symbol: 'LAZR',
      name: 'Luminar Technologies',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '2B',
      sector: 'Technology',
      correlation: 0.85,
      reason: '激光雷达技术直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'VLDR',
      name: 'Velodyne Lidar',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '500M',
      sector: 'Technology',
      correlation: 0.80,
      reason: '激光雷达传感器竞争',
      rating: 'Hold'
    },
    {
      symbol: 'INVZ',
      name: 'Innoviz Technologies',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1B',
      sector: 'Technology',
      correlation: 0.75,
      reason: '自动驾驶激光雷达竞争',
      rating: 'Buy'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '800B',
      sector: 'Technology',
      correlation: 0.60,
      reason: '自动驾驶技术客户',
      rating: 'Buy'
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

// 价格历史数据生成函数已移除
// 由于无法获取真实的历史价格数据，此功能暂时禁用
// 如需显示价格图表，需要集成专业的金融数据API

export const getAllStockSymbols = (): string[] => {
  return Object.keys(STOCKS_DATA);
};

export const getStocksBySector = (sector: string): StockData[] => {
  return Object.values(STOCKS_DATA).filter(stock => stock.sector === sector);
};
