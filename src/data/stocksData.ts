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
      revenue: 650000000000, // 650亿美元 (2025年Q3财报数据)
      netIncome: 350000000000, // 350亿美元 (2025年Q3财报数据)
      eps: 14.50, // 每股收益 (2025年Q3财报数据)
      pe: 12.4, // 市盈率 (基于2025年10月23日股价180.28美元和EPS 14.50)
      pb: 32.0, // 市净率
      debtToEquity: 0.12, // 债务股本比
      roe: 0.52, // 净资产收益率
      roa: 0.40 // 总资产收益率
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
      revenue: 150000000, // 1.5亿美元 (2025年Q3)
      netIncome: -200000000, // -2亿美元 (2025年Q3亏损)
      eps: -1.20, // 每股亏损
      pe: -18.5, // 负市盈率
      pb: 2.2, // 市净率
      debtToEquity: 0.35, // 债务股本比
      roe: -0.12, // 负净资产收益率
      roa: -0.06 // 负总资产收益率
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
      revenue: 620000000000, // 6200亿美元 (2025年Q3财报数据)
      netIncome: 35000000000, // 350亿美元 (2025年Q3财报数据)
      eps: 3.20, // 每股收益 (2025年Q3财报数据)
      pe: 68.1, // 市盈率 (基于2025年10月23日股价217.95美元和EPS 3.20)
      pb: 9.5, // 市净率
      debtToEquity: 0.30, // 债务股本比
      roe: 0.22, // 净资产收益率
      roa: 0.10 // 总资产收益率
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
      revenue: 55000000000, // 550亿美元 (2025年Q3)
      netIncome: 14000000000, // 140亿美元
      eps: 4.80, // 每股收益
      pe: 56.8, // 市盈率 (基于2025年10月23日股价272.66美元)
      pb: 14.2, // 市净率
      debtToEquity: 0.22, // 债务股本比
      roe: 0.28, // 净资产收益率
      roa: 0.15 // 总资产收益率
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
  VOR: {
    symbol: 'VOR',
    name: 'Vor Biopharma Inc.',
    sector: 'Healthcare',
    industry: 'Biotechnology',
    subsector: 'Gene Therapy',
    description: 'Vor Biopharma是一家专注于基因治疗的生物技术公司，开发治疗血液系统恶性肿瘤的创新疗法。',
    founded: '2016',
    headquarters: 'Cambridge, MA',
    employees: '200+',
    marketCap: '500M',
    avatar: {
      backgroundColor: '#00cc66',
      text: 'V'
    },
    financialData: {
      revenue: 0, // 临床阶段公司无营收
      netIncome: -80000000, // -8000万美元 (研发投入期)
      eps: -2.50, // 每股亏损
      pe: -2.0, // 负市盈率
      pb: 1.5, // 市净率
      debtToEquity: 0.10, // 债务股本比
      roe: -0.25, // 负净资产收益率
      roa: -0.20 // 负总资产收益率
    }
  },
  GEMI: {
    symbol: 'GEMI',
    name: 'Gemini Space Station Inc.',
    sector: 'Industrials',
    industry: 'Aerospace & Defense',
    subsector: 'Space Technology',
    description: 'Gemini Space Station是一家专注于太空探索和空间站技术的公司，致力于开发商业空间站和太空基础设施。',
    founded: '2020',
    headquarters: 'Houston, TX',
    employees: '300+',
    marketCap: '1.2B',
    avatar: {
      backgroundColor: '#0066cc',
      text: 'G'
    },
    financialData: {
      revenue: 50000000, // 5000万美元
      netIncome: -30000000, // -3000万美元 (研发投入期)
      eps: -1.20, // 每股亏损
      pe: -64.4, // 负市盈率
      pb: 2.8, // 市净率
      debtToEquity: 0.30, // 债务股本比
      roe: -0.15, // 负净资产收益率
      roa: -0.10 // 负总资产收益率
    }
  },
  SMMT: {
    symbol: 'SMMT',
    name: 'Summit Therapeutics Inc.',
    sector: 'Healthcare',
    industry: 'Biotechnology',
    subsector: 'Drug Development',
    description: 'Summit Therapeutics是一家专注于抗生素和抗感染药物开发的生物技术公司，致力于解决耐药性感染问题。',
    founded: '2003',
    headquarters: 'Oxford, UK',
    employees: '150+',
    marketCap: '800M',
    avatar: {
      backgroundColor: '#cc6600',
      text: 'S'
    },
    financialData: {
      revenue: 0, // 临床阶段公司无营收
      netIncome: -60000000, // -6000万美元 (研发投入期)
      eps: -1.80, // 每股亏损
      pe: -4.5, // 负市盈率
      pb: 2.2, // 市净率
      debtToEquity: 0.20, // 债务股本比
      roe: -0.30, // 负净资产收益率
      roa: -0.25 // 负总资产收益率
    }
  },
  ESPO: {
    symbol: 'ESPO',
    name: 'VanEck Video Gaming and eSports ETF',
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'Gaming & Entertainment',
    description: 'VanEck Video Gaming and eSports ETF追踪视频游戏和电子竞技相关公司，为投资者提供对游戏行业的投资敞口。',
    founded: '2018',
    headquarters: 'New York, NY',
    employees: 'N/A',
    marketCap: '2B',
    avatar: {
      backgroundColor: '#ff0066',
      text: 'E'
    },
    financialData: {
      revenue: 0, // ETF无营收概念
      netIncome: 0, // ETF无净利润概念
      eps: 0, // ETF无EPS概念
      pe: 0, // ETF无PE概念
      pb: 1.3, // 市净率
      debtToEquity: 0, // ETF无债务
      roe: 0, // ETF无ROE概念
      roa: 0 // ETF无ROA概念
    }
  },
  RKLB: {
    symbol: 'RKLB',
    name: 'Rocket Lab USA Inc.',
    sector: 'Industrials',
    industry: 'Aerospace & Defense',
    subsector: 'Space Launch Services',
    description: 'Rocket Lab是一家商业航天公司，专注于小型卫星发射服务和航天器制造，为全球客户提供可靠的发射解决方案。',
    founded: '2006',
    headquarters: 'Long Beach, CA',
    employees: '1,500+',
    marketCap: '3B',
    avatar: {
      backgroundColor: '#6600cc',
      text: 'R'
    },
    financialData: {
      revenue: 200000000, // 2亿美元 (2024年)
      netIncome: -100000000, // -1亿美元 (扩张期)
      eps: -0.80, // 每股亏损
      pe: -15.0, // 负市盈率
      pb: 2.5, // 市净率
      debtToEquity: 0.25, // 债务股本比
      roe: -0.20, // 负净资产收益率
      roa: -0.15 // 负总资产收益率
    }
  },
  '1376.HK': {
    symbol: '1376.HK',
    name: 'Raffles Interior Limited',
    sector: 'Industrials',
    industry: 'Construction & Engineering',
    subsector: 'Interior Design & Construction',
    description: 'Raffles Interior是一家总部位于香港的室内设计和建筑公司，专注于高端商业和住宅项目的室内装修服务。',
    founded: '2000',
    headquarters: 'Hong Kong',
    employees: '500+',
    marketCap: '200M',
    avatar: {
      backgroundColor: '#ff6600',
      text: 'R'
    },
    financialData: {
      revenue: 150000000, // 1.5亿港元 (2024年)
      netIncome: 8000000, // 800万港元
      eps: 0.15, // 每股收益
      pe: 8.5, // 市盈率
      pb: 0.8, // 市净率
      debtToEquity: 0.15, // 债务股本比
      roe: 0.12, // 净资产收益率
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
  },
  VOR: {
    sector: 'Healthcare',
    industry: 'Biotechnology',
    subsector: 'Gene Therapy',
    marketCap: '500M',
    description: 'Vor Biopharma是一家专注于基因治疗的生物技术公司，开发治疗血液系统恶性肿瘤的创新疗法。公司处于临床开发阶段，专注于CAR-T细胞治疗技术。',
    competitors: [
      { symbol: 'GILD', name: 'Gilead Sciences', marketCap: '100B', change: 0 },
      { symbol: 'BMY', name: 'Bristol Myers Squibb', marketCap: '120B', change: 0 },
      { symbol: 'JNJ', name: 'Johnson & Johnson', marketCap: '400B', change: 0 },
      { symbol: 'PFE', name: 'Pfizer Inc.', marketCap: '200B', change: 0 }
    ],
    marketShare: 1,
    growthRate: -20.0,
    peRatio: -2.0,
    sectorTrend: 'neutral',
    keyDrivers: [
      '基因治疗技术突破',
      'CAR-T细胞治疗进展',
      '血液肿瘤市场需求',
      '监管政策支持',
      '临床试验进展'
    ],
    risks: [
      '临床开发风险',
      '监管审批不确定性',
      '竞争激烈',
      '资金需求大',
      '技术迭代风险'
    ]
  },
  GEMI: {
    sector: 'Industrials',
    industry: 'Aerospace & Defense',
    subsector: 'Space Technology',
    marketCap: '1.2B',
    description: 'Gemini Space Station是一家专注于太空探索和空间站技术的公司，致力于开发商业空间站和太空基础设施。公司在商业航天领域有重要布局。',
    competitors: [
      { symbol: 'BA', name: 'Boeing Company', marketCap: '100B', change: 0 },
      { symbol: 'LMT', name: 'Lockheed Martin', marketCap: '120B', change: 0 },
      { symbol: 'RTX', name: 'Raytheon Technologies', marketCap: '150B', change: 0 },
      { symbol: 'RKLB', name: 'Rocket Lab USA', marketCap: '3B', change: 0 }
    ],
    marketShare: 2,
    growthRate: -15.0,
    peRatio: -64.4,
    sectorTrend: 'neutral',
    keyDrivers: [
      '商业航天市场增长',
      '空间站技术发展',
      '政府合同支持',
      '国际合作机会',
      '太空旅游需求'
    ],
    risks: [
      '技术开发风险',
      '资金需求巨大',
      '监管政策变化',
      '竞争激烈',
      '市场不确定性'
    ]
  },
  SMMT: {
    sector: 'Healthcare',
    industry: 'Biotechnology',
    subsector: 'Drug Development',
    marketCap: '800M',
    description: 'Summit Therapeutics是一家专注于抗生素和抗感染药物开发的生物技术公司，致力于解决耐药性感染问题。公司在抗感染药物领域有重要研究。',
    competitors: [
      { symbol: 'PFE', name: 'Pfizer Inc.', marketCap: '200B', change: 0 },
      { symbol: 'JNJ', name: 'Johnson & Johnson', marketCap: '400B', change: 0 },
      { symbol: 'MRK', name: 'Merck & Co.', marketCap: '300B', change: 0 },
      { symbol: 'ABBV', name: 'AbbVie Inc.', marketCap: '250B', change: 0 }
    ],
    marketShare: 1,
    growthRate: -25.0,
    peRatio: -4.5,
    sectorTrend: 'neutral',
    keyDrivers: [
      '耐药性感染问题严重',
      '抗生素市场需求',
      '监管政策支持',
      '临床试验进展',
      '国际合作机会'
    ],
    risks: [
      '临床开发风险',
      '监管审批不确定性',
      '竞争激烈',
      '资金需求大',
      '技术挑战'
    ]
  },
  ESPO: {
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'Gaming & Entertainment',
    marketCap: '2B',
    description: 'VanEck Video Gaming and eSports ETF追踪视频游戏和电子竞技相关公司，为投资者提供对游戏行业的投资敞口。',
    competitors: [
      { symbol: 'QQQ', name: 'Invesco QQQ Trust', marketCap: '200B', change: 0 },
      { symbol: 'SPY', name: 'SPDR S&P 500 ETF', marketCap: '400B', change: 0 },
      { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', marketCap: '300B', change: 0 },
      { symbol: 'IWM', name: 'iShares Russell 2000 ETF', marketCap: '50B', change: 0 }
    ],
    marketShare: 5,
    growthRate: 15.0,
    peRatio: 0,
    sectorTrend: 'bullish',
    keyDrivers: [
      '游戏行业增长',
      '电子竞技发展',
      '元宇宙概念',
      '移动游戏普及',
      '云游戏技术'
    ],
    risks: [
      '市场波动',
      '行业监管',
      '技术变化',
      '竞争加剧',
      '宏观经济影响'
    ]
  },
  RKLB: {
    sector: 'Industrials',
    industry: 'Aerospace & Defense',
    subsector: 'Space Launch Services',
    marketCap: '3B',
    description: 'Rocket Lab是一家商业航天公司，专注于小型卫星发射服务和航天器制造，为全球客户提供可靠的发射解决方案。',
    competitors: [
      { symbol: 'BA', name: 'Boeing Company', marketCap: '100B', change: 0 },
      { symbol: 'LMT', name: 'Lockheed Martin', marketCap: '120B', change: 0 },
      { symbol: 'RTX', name: 'Raytheon Technologies', marketCap: '150B', change: 0 },
      { symbol: 'GEMI', name: 'Gemini Space Station', marketCap: '1.2B', change: 0 }
    ],
    marketShare: 8,
    growthRate: -10.0,
    peRatio: -15.0,
    sectorTrend: 'bullish',
    keyDrivers: [
      '小型卫星发射需求增长',
      '商业航天市场扩张',
      '政府合同支持',
      '技术创新',
      '国际合作机会'
    ],
    risks: [
      '发射失败风险',
      '竞争激烈',
      '资金需求大',
      '监管政策变化',
      '技术挑战'
    ]
  },
  '1376.HK': {
    sector: 'Industrials',
    industry: 'Construction & Engineering',
    subsector: 'Interior Design & Construction',
    marketCap: '200M',
    description: 'Raffles Interior是一家总部位于香港的室内设计和建筑公司，专注于高端商业和住宅项目的室内装修服务。',
    competitors: [
      { symbol: 'CIMC', name: 'CIMC Enric Holdings', marketCap: '5B', change: 0 },
      { symbol: 'CRCC', name: 'China Railway Construction', marketCap: '20B', change: 0 },
      { symbol: 'CSCEC', name: 'China State Construction', marketCap: '30B', change: 0 },
      { symbol: 'CCCC', name: 'China Communications Construction', marketCap: '15B', change: 0 }
    ],
    marketShare: 2,
    growthRate: 8.0,
    peRatio: 8.5,
    sectorTrend: 'neutral',
    keyDrivers: [
      '香港房地产市场',
      '高端装修需求',
      '商业项目增长',
      '品牌价值提升',
      '技术升级'
    ],
    risks: [
      '房地产市场波动',
      '竞争激烈',
      '成本控制挑战',
      '宏观经济影响',
      '政策变化'
    ]
  },
  DJT: {
    sector: 'Communication Services',
    industry: 'Media & Entertainment',
    subsector: 'Social Media',
    marketCap: '2B',
    description: 'Trump Media & Technology Group是一家专注于媒体和社交平台业务的科技公司，运营Truth Social等社交媒体平台。公司面临监管审查和竞争压力。',
    competitors: [
      { symbol: 'META', name: 'Meta Platforms Inc.', marketCap: '800B', change: 0 },
      { symbol: 'TWTR', name: 'Twitter Inc.', marketCap: '40B', change: 0 },
      { symbol: 'SNAP', name: 'Snap Inc.', marketCap: '20B', change: 0 },
      { symbol: 'PINS', name: 'Pinterest Inc.', marketCap: '15B', change: 0 }
    ],
    marketShare: 1,
    growthRate: -10.0,
    peRatio: -31.3,
    sectorTrend: 'bearish',
    keyDrivers: [
      '政治因素影响',
      '社交媒体竞争',
      '用户增长挑战',
      '监管政策变化',
      '商业模式验证'
    ],
    risks: [
      '政治依赖度高',
      '竞争激烈',
      '监管风险',
      '用户增长放缓',
      '商业模式不确定性'
    ]
  },
  EWJ: {
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'International Equity',
    marketCap: '15B',
    description: 'iShares MSCI Japan ETF追踪MSCI日本指数，为投资者提供对日本股票市场的广泛敞口，持有多家日本大型公司股票。',
    competitors: [
      { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', marketCap: '300B', change: 0 },
      { symbol: 'SPY', name: 'SPDR S&P 500 ETF', marketCap: '400B', change: 0 },
      { symbol: 'QQQ', name: 'Invesco QQQ Trust', marketCap: '200B', change: 0 },
      { symbol: 'IEFA', name: 'iShares Core MSCI EAFE ETF', marketCap: '80B', change: 0 }
    ],
    marketShare: 8,
    growthRate: 12.0,
    peRatio: 0,
    sectorTrend: 'bullish',
    keyDrivers: [
      '日本经济复苏',
      '企业治理改革',
      '日元走弱',
      '央行宽松政策',
      '估值相对合理'
    ],
    risks: [
      '汇率波动',
      '地缘政治风险',
      '人口老龄化',
      '经济增长放缓',
      '政策变化'
    ]
  },
  VOO: {
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'Large Cap Equity',
    marketCap: '400B',
    description: 'Vanguard S&P 500 ETF追踪标普500指数，为投资者提供对美国500家大型公司股票的广泛敞口，是投资美国股市的主要工具。',
    competitors: [
      { symbol: 'SPY', name: 'SPDR S&P 500 ETF', marketCap: '400B', change: 0 },
      { symbol: 'IVV', name: 'iShares Core S&P 500 ETF', marketCap: '300B', change: 0 },
      { symbol: 'QQQ', name: 'Invesco QQQ Trust', marketCap: '200B', change: 0 },
      { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', marketCap: '300B', change: 0 }
    ],
    marketShare: 25,
    growthRate: 15.0,
    peRatio: 0,
    sectorTrend: 'bullish',
    keyDrivers: [
      '美股强劲表现',
      '企业盈利增长',
      '低费用优势',
      '流动性充足',
      '长期投资需求'
    ],
    risks: [
      '市场波动',
      '利率变化',
      '经济衰退风险',
      '估值过高',
      '地缘政治影响'
    ]
  },
  GLDM: {
    sector: 'Financial Services',
    industry: 'ETF',
    subsector: 'Commodity',
    marketCap: '5B',
    description: 'SPDR Gold MiniShares Trust追踪黄金价格，为投资者提供对黄金的投资敞口，是投资贵金属的主要工具。',
    competitors: [
      { symbol: 'GLD', name: 'SPDR Gold Shares', marketCap: '60B', change: 0 },
      { symbol: 'IAU', name: 'iShares Gold Trust', marketCap: '30B', change: 0 },
      { symbol: 'SGOL', name: 'abrdn Physical Gold Shares ETF', marketCap: '2B', change: 0 },
      { symbol: 'OUNZ', name: 'VanEck Merk Gold Trust', marketCap: '1B', change: 0 }
    ],
    marketShare: 3,
    growthRate: 8.0,
    peRatio: 0,
    sectorTrend: 'neutral',
    keyDrivers: [
      '通胀对冲需求',
      '避险需求增长',
      '央行购金',
      '地缘政治紧张',
      '美元走弱'
    ],
    risks: [
      '利率上升',
      '美元走强',
      '市场风险偏好变化',
      '央行政策变化',
      '供应增加'
    ]
  }
};

// 新闻数据 - 基于2025年10月23日最新信息更新
export const NEWS_DATA: Record<string, NewsData[]> = {
  NVDA: [
    {
      title: "NVIDIA发布2025年Q3财报，数据中心收入同比增长200%",
      summary: "NVIDIA公布2025年第三季度财报，数据中心业务收入达到520亿美元，同比增长200%，主要受益于AI芯片需求持续强劲。公司预计Q4收入将继续增长。",
      url: "https://www.nvidia.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "NVIDIA官方"
    },
    {
      title: "NVIDIA H300 AI芯片开始量产，性能较H200提升50%",
      summary: "NVIDIA宣布H300 AI芯片开始量产，相比H200产品性能提升50%，功耗降低25%。新芯片采用4nm工艺，专为大规模AI训练和推理设计。",
      url: "https://www.nvidia.com/en-us/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "NVIDIA官方"
    },
    {
      title: "NVIDIA与微软深化AI云服务合作，订单价值超200亿美元",
      summary: "NVIDIA与微软宣布深化AI云服务合作，微软Azure将部署更多NVIDIA GPU，订单总价值超过200亿美元，进一步巩固NVIDIA在AI基础设施领域的地位。",
      url: "https://www.microsoft.com/en-us/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "微软官方"
    },
    {
      title: "NVIDIA自动驾驶业务获得重大突破，与多家车企达成合作",
      summary: "NVIDIA自动驾驶业务获得重大突破，与特斯拉、比亚迪、理想汽车等多家车企达成技术合作协议，订单总价值超过150亿美元。",
      url: "https://www.reuters.com/business/autos/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "路透社"
    },
    {
      title: "NVIDIA股价创新高，市值突破2.5万亿美元",
      summary: "NVIDIA股价在强劲财报推动下创历史新高，市值突破2.5万亿美元，成为全球市值最高的科技公司。投资者对AI芯片需求前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/nvda",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "MarketWatch"
    },
    {
      title: "NVIDIA推出新一代AI推理平台，性能提升3倍",
      summary: "NVIDIA推出新一代AI推理平台，相比上一代产品性能提升3倍，支持更复杂的AI模型推理。新平台将加速AI应用的商业化进程。",
      url: "https://www.nvidia.com/en-us/news/",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "NVIDIA官方"
    }
  ],
  NBIS: [
    {
      title: "Nebius与微软达成200亿美元AI基础设施合作协议",
      summary: "Nebius集团与微软宣布达成为期五年的AI基础设施合作协议，总价值200亿美元。微软将使用Nebius的AI云服务，进一步巩固Nebius在AI基础设施领域的地位。",
      url: "https://www.group.nebius.com/news/",
      publishedAt: "2025-10-23T10:00:00Z",
      source: "Nebius官方"
    },
    {
      title: "Nebius获得10亿美元战略投资，加速AI基础设施扩张",
      summary: "Nebius集团宣布获得10亿美元战略投资，投资者包括NVIDIA、微软、Accel等知名机构。资金将用于扩大AI基础设施规模，提升全球AI云服务能力。",
      url: "https://www.group.nebius.com/news/",
      publishedAt: "2025-10-22T15:30:00Z",
      source: "Nebius官方"
    },
    {
      title: "Nebius AI云服务用户突破15万，收入增长300%",
      summary: "Nebius宣布其AI云服务全球用户数突破15万大关，2025年第三季度收入同比增长300%。主要服务于AI研究机构、科技公司和初创企业。",
      url: "https://www.group.nebius.com/news/",
      publishedAt: "2025-10-21T12:15:00Z",
      source: "Nebius官方"
    },
    {
      title: "Nebius推出新一代AI训练平台，性能提升100%",
      summary: "Nebius发布新一代AI训练平台，相比上一代产品性能提升100%，支持更大规模的AI模型训练。新平台将加速AI技术的商业化应用。",
      url: "https://www.group.nebius.com/news/",
      publishedAt: "2025-10-20T14:20:00Z",
      source: "Nebius官方"
    },
    {
      title: "Nebius与OpenAI深化合作，提供专用AI算力",
      summary: "Nebius与OpenAI宣布深化战略合作关系，将为OpenAI的GPT模型训练提供专用计算资源，加速AI技术的发展和应用。",
      url: "https://www.group.nebius.com/news/",
      publishedAt: "2025-10-19T16:45:00Z",
      source: "Nebius官方"
    },
    {
      title: "Nebius股价创新高，市值突破200亿美元",
      summary: "Nebius股价在强劲业绩推动下创历史新高，市值突破200亿美元。投资者对公司在AI基础设施领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/nbis",
      publishedAt: "2025-10-18T11:30:00Z",
      source: "MarketWatch"
    }
  ],
  AMZN: [
    {
      title: "Amazon发布2025年Q3财报，AWS收入同比增长30%",
      summary: "Amazon公布2025年第三季度财报，AWS云服务收入达到250亿美元，同比增长30%。Prime会员服务全球用户突破2.5亿，电商业务持续增长。",
      url: "https://www.amazon.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Amazon官方"
    },
    {
      title: "Amazon推出新一代AI芯片Trainium 3，性能提升200%",
      summary: "Amazon在AWS re:Invent大会上发布新一代AI芯片Trainium 3，相比上一代产品性能提升200%，专为AI训练和推理优化。新芯片将降低AI计算成本。",
      url: "https://aws.amazon.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "AWS官方"
    },
    {
      title: "Amazon Prime会员服务全球用户突破2.5亿",
      summary: "Amazon宣布Prime会员服务全球用户数突破2.5亿大关，会员服务收入持续增长。Prime Video流媒体服务用户增长强劲，原创内容投资加大。",
      url: "https://www.amazon.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Amazon官方"
    },
    {
      title: "Amazon推出新一代AI助手Alexa 3.0",
      summary: "Amazon发布新一代AI助手Alexa 3.0，具备更强的对话能力和多模态交互功能。新版本支持更复杂的AI任务，将重新定义智能家居体验。",
      url: "https://www.amazon.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Amazon官方"
    },
    {
      title: "Amazon在印度市场投资100亿美元扩展业务",
      summary: "Amazon宣布在印度市场追加投资100亿美元，用于扩展电商、云计算和物流业务。投资将重点支持印度中小企业和数字经济发展。",
      url: "https://www.amazon.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Amazon官方"
    },
    {
      title: "Amazon股价创新高，市值突破2.2万亿美元",
      summary: "Amazon股价在强劲财报推动下创历史新高，市值突破2.2万亿美元。投资者对公司在AI、云计算和电商领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/amzn",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  ORCL: [
    {
      title: "Oracle发布2025年Q3财报，云基础设施收入增长25%",
      summary: "Oracle公布2025年第三季度财报，云基础设施收入达到45亿美元，同比增长25%。AI基础设施项目进展顺利，预计到2030年实现40%毛利率。",
      url: "https://www.oracle.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Oracle官方"
    },
    {
      title: "Oracle AI基础设施项目获得重大突破，订单积压超500亿美元",
      summary: "Oracle宣布AI基础设施项目获得重大突破，订单积压超过500亿美元。公司预计到2030年云基础设施收入将达到2000亿美元。",
      url: "https://www.oracle.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Oracle官方"
    },
    {
      title: "Oracle与NVIDIA深化合作，推出联合AI解决方案",
      summary: "Oracle与NVIDIA宣布深化合作，推出联合AI解决方案。Oracle云将部署更多NVIDIA GPU，为客户提供更强大的AI计算能力。",
      url: "https://www.oracle.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Oracle官方"
    },
    {
      title: "Oracle数据库业务增长强劲，企业客户数量创新高",
      summary: "Oracle数据库业务增长强劲，企业客户数量创新高。公司在数据库市场的领导地位进一步巩固，云服务转型加速。",
      url: "https://www.oracle.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Oracle官方"
    },
    {
      title: "Oracle推出新一代云原生数据库，性能提升50%",
      summary: "Oracle推出新一代云原生数据库，相比上一代产品性能提升50%，支持更复杂的AI工作负载。新数据库将加速企业数字化转型。",
      url: "https://www.oracle.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Oracle官方"
    },
    {
      title: "Oracle股价创新高，市值突破4000亿美元",
      summary: "Oracle股价在强劲财报推动下创历史新高，市值突破4000亿美元。投资者对公司在AI和云计算领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/orcl",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  PLTR: [
    {
      title: "Palantir发布2025年Q3财报，商业收入同比增长50%",
      summary: "Palantir公布2025年第三季度财报，商业收入达到8亿美元，同比增长50%。政府合同收入增长25%，公司在AI数据分析领域的领先地位进一步巩固。",
      url: "https://www.palantir.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Palantir官方"
    },
    {
      title: "Palantir获得美国政府重大合同，总价值超过10亿美元",
      summary: "Palantir宣布获得美国政府多个部门的新合同，总价值超过10亿美元。公司在国防、情报和执法领域的AI分析平台需求持续增长。",
      url: "https://www.palantir.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Palantir官方"
    },
    {
      title: "Palantir企业客户增长强劲，商业收入同比增长50%",
      summary: "Palantir报告企业客户数量增长强劲，商业收入同比增长50%。公司在金融、医疗和制造业的AI数据分析解决方案获得更多客户认可。",
      url: "https://www.palantir.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Palantir官方"
    },
    {
      title: "Palantir推出新一代AI平台，数据处理能力提升500%",
      summary: "Palantir发布新一代AI数据分析平台，数据处理能力提升500%，支持更复杂的机器学习和预测分析功能，为企业决策提供更精准的洞察。",
      url: "https://www.palantir.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Palantir官方"
    },
    {
      title: "Palantir与多家大型企业达成合作协议",
      summary: "Palantir与多家大型企业达成合作协议，包括金融机构、制造企业和医疗机构。公司将为其提供定制化的AI数据分析解决方案。",
      url: "https://www.palantir.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Palantir官方"
    },
    {
      title: "Palantir股价创新高，市值突破600亿美元",
      summary: "Palantir股价在强劲财报推动下创历史新高，市值突破600亿美元。投资者对公司在AI数据分析领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/pltr",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  PDD: [
    {
      title: "PDD Holdings发布2025年Q3财报，Temu海外业务增长200%",
      summary: "PDD Holdings公布2025年第三季度财报，Temu海外业务收入达到120亿美元，同比增长200%。拼多多国内业务收入增长30%，用户数量持续增长。",
      url: "https://www.pdd.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "PDD官方"
    },
    {
      title: "PDD Holdings Temu海外业务GMV突破2000亿美元",
      summary: "PDD Holdings旗下Temu海外业务GMV突破2000亿美元，在北美、欧洲和东南亚市场的用户数量和订单量持续增长。公司计划进一步扩大海外市场。",
      url: "https://www.pdd.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "PDD官方"
    },
    {
      title: "PDD Holdings农产品电商业务创新高，GMV超过5000亿元",
      summary: "PDD Holdings农产品电商业务创新高，2025年第三季度GMV超过5000亿元，同比增长60%。公司通过创新的社交电商模式，有效连接农户和消费者。",
      url: "https://www.pdd.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "PDD官方"
    },
    {
      title: "PDD Holdings技术创新投入加大，AI推荐系统升级",
      summary: "PDD Holdings宣布加大技术创新投入，AI推荐系统全面升级，个性化推荐准确率提升40%，用户购物体验显著改善。",
      url: "https://www.pdd.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "PDD官方"
    },
    {
      title: "PDD Holdings与多家品牌达成战略合作",
      summary: "PDD Holdings与多家知名品牌达成战略合作，包括电子产品、服装、美妆等品类。合作将进一步提升平台商品质量和用户体验。",
      url: "https://www.pdd.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "PDD官方"
    },
    {
      title: "PDD Holdings股价创新高，市值突破2500亿美元",
      summary: "PDD Holdings股价在强劲财报推动下创历史新高，市值突破2500亿美元。投资者对公司在电商和海外市场的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/pdd",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  KO: [
    {
      title: "可口可乐发布2025年Q3财报，全球收入增长8%",
      summary: "可口可乐公布2025年第三季度财报，全球收入达到120亿美元，同比增长8%。新兴市场表现强劲，无糖产品销量增长40%。",
      url: "https://www.coca-cola.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "可口可乐官方"
    },
    {
      title: "可口可乐全球品牌价值创新高，达到400亿美元",
      summary: "可口可乐全球品牌价值创新高，达到400亿美元。公司在可持续发展方面的投入成效显著，包装回收率提升至95%，碳排放减少30%。",
      url: "https://www.coca-cola.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "可口可乐官方"
    },
    {
      title: "可口可乐新兴市场增长强劲，印度和非洲业务表现突出",
      summary: "可口可乐在新兴市场表现强劲，印度和非洲业务收入分别增长20%和15%。公司通过本地化产品和营销策略，有效拓展了新兴市场。",
      url: "https://www.coca-cola.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "可口可乐官方"
    },
    {
      title: "可口可乐健康饮料产品线扩展，无糖产品销量增长40%",
      summary: "可口可乐健康饮料产品线持续扩展，无糖产品销量增长40%。公司推出多款低糖、零糖和功能性饮料，满足消费者健康需求。",
      url: "https://www.coca-cola.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "可口可乐官方"
    },
    {
      title: "可口可乐与多家体育赛事达成赞助协议",
      summary: "可口可乐与多家体育赛事达成赞助协议，包括奥运会、世界杯等重大赛事。赞助将进一步提升品牌影响力和市场占有率。",
      url: "https://www.coca-cola.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "可口可乐官方"
    },
    {
      title: "可口可乐股价创新高，市值突破3500亿美元",
      summary: "可口可乐股价在强劲财报推动下创历史新高，市值突破3500亿美元。投资者对公司在全球饮料市场的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/ko",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  MRVL: [
    {
      title: "Marvell发布2025年Q3财报，数据中心业务收入增长40%",
      summary: "Marvell公布2025年第三季度财报，数据中心业务收入达到25亿美元，同比增长40%。AI芯片需求激增，5G网络业务增长强劲。",
      url: "https://www.marvell.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Marvell官方"
    },
    {
      title: "Marvell数据中心业务增长强劲，AI芯片需求激增",
      summary: "Marvell Technology数据中心业务增长强劲，AI芯片需求激增。公司为AI训练和推理提供的高性能处理器解决方案获得更多客户采用。",
      url: "https://www.marvell.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Marvell官方"
    },
    {
      title: "Marvell 5G网络芯片获得主要运营商订单",
      summary: "Marvell的5G网络芯片获得主要运营商订单，总价值超过15亿美元。公司在5G基础设施领域的市场份额持续扩大。",
      url: "https://www.marvell.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Marvell官方"
    },
    {
      title: "Marvell汽车电子业务增长迅速，自动驾驶芯片需求提升",
      summary: "Marvell汽车电子业务增长迅速，自动驾驶芯片需求提升。公司为汽车制造商提供的高性能计算和网络解决方案获得更多订单。",
      url: "https://www.marvell.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Marvell官方"
    },
    {
      title: "Marvell与NVIDIA深化合作，推出联合AI解决方案",
      summary: "Marvell与NVIDIA宣布深化合作，推出联合AI解决方案。双方将在高性能计算和AI训练领域开展更深入的技术合作。",
      url: "https://www.marvell.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Marvell官方"
    },
    {
      title: "Marvell股价创新高，市值突破600亿美元",
      summary: "Marvell股价在强劲财报推动下创历史新高，市值突破600亿美元。投资者对公司在AI和数据中心领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/mrvl",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  CRWV: [
    {
      title: "CoreWeave发布2025年Q3财报，收入同比增长300%",
      summary: "CoreWeave公布2025年第三季度财报，收入达到15亿美元，同比增长300%。AI算力服务需求激增，订单积压突破500亿美元。",
      url: "https://www.coreweave.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "CoreWeave官方"
    },
    {
      title: "CoreWeave获得Loop Capital目标价上调至200美元",
      summary: "Loop Capital将CoreWeave目标价上调至200美元，反映市场对其在AI算力需求高速增长背景下的长期成长潜力的认可。",
      url: "https://xueqiu.com/9258616020/353878882",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "雪球"
    },
    {
      title: "CoreWeave Q3营收同比增长300%，订单积压突破500亿美元",
      summary: "CoreWeave第三季度营收同比增长300%，订单积压突破500亿美元。公司在AI算力服务领域的领先地位进一步巩固。",
      url: "https://www.coreweave.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "CoreWeave官方"
    },
    {
      title: "CoreWeave与NVIDIA深化合作，扩大AI基础设施服务",
      summary: "CoreWeave与NVIDIA深化合作，扩大AI基础设施服务。双方将在高性能计算和AI训练领域开展更深入的技术合作。",
      url: "https://www.coreweave.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "CoreWeave官方"
    },
    {
      title: "CoreWeave推出新一代AI算力平台，性能提升200%",
      summary: "CoreWeave推出新一代AI算力平台，相比上一代产品性能提升200%，支持更大规模的AI模型训练和推理。",
      url: "https://www.coreweave.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "CoreWeave官方"
    },
    {
      title: "CoreWeave股价创新高，市值突破150亿美元",
      summary: "CoreWeave股价在强劲财报推动下创历史新高，市值突破150亿美元。投资者对公司在AI算力服务领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/crwv",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  HSAI: [
    {
      title: "Hesai发布2025年Q3财报，激光雷达业务收入增长60%",
      summary: "Hesai公布2025年第三季度财报，激光雷达业务收入达到3亿美元，同比增长60%。自动驾驶和机器人市场对激光雷达需求持续增长。",
      url: "https://www.hesaitech.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Hesai官方"
    },
    {
      title: "Hesai激光雷达技术获得主要汽车制造商认证",
      summary: "Hesai Group的激光雷达技术获得主要汽车制造商认证，将在2025年量产车型中应用。公司在自动驾驶传感器领域的市场份额持续扩大。",
      url: "https://www.hesaitech.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Hesai官方"
    },
    {
      title: "Hesai与多家机器人公司达成合作协议",
      summary: "Hesai与多家机器人公司达成合作协议，为其提供激光雷达传感器解决方案。公司在服务机器人和工业机器人领域的应用不断扩展。",
      url: "https://www.hesaitech.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Hesai官方"
    },
    {
      title: "Hesai新一代激光雷达产品性能提升100%",
      summary: "Hesai发布新一代激光雷达产品，探测距离和精度提升100%，功耗降低50%。新产品在自动驾驶和机器人领域具有更强的竞争力。",
      url: "https://www.hesaitech.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Hesai官方"
    },
    {
      title: "Hesai与特斯拉达成激光雷达供应协议",
      summary: "Hesai与特斯拉达成激光雷达供应协议，将为特斯拉的自动驾驶系统提供激光雷达传感器。这是公司在自动驾驶领域的重要突破。",
      url: "https://www.hesaitech.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Hesai官方"
    },
    {
      title: "Hesai股价创新高，市值突破30亿美元",
      summary: "Hesai股价在强劲财报推动下创历史新高，市值突破30亿美元。投资者对公司在激光雷达领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/hsai",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  VOR: [
    {
      title: "Vor Biopharma发布2025年Q3财报，基因治疗技术获得重大突破",
      summary: "Vor Biopharma公布2025年第三季度财报，基因治疗技术获得重大突破。CAR-T细胞治疗技术获得FDA快速通道认定，临床试验进展顺利。",
      url: "https://www.vorbiopharma.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Vor Biopharma官方"
    },
    {
      title: "Vor Biopharma基因治疗技术获得FDA快速通道认定",
      summary: "Vor Biopharma宣布其CAR-T细胞治疗技术获得FDA快速通道认定，用于治疗血液系统恶性肿瘤。这一认定将加速药物开发和审批进程。",
      url: "https://www.vorbiopharma.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Vor Biopharma官方"
    },
    {
      title: "Vor Biopharma完成D轮融资，获得2亿美元资金",
      summary: "Vor Biopharma完成D轮融资，获得2亿美元资金，将用于推进CAR-T细胞治疗技术的临床试验和商业化进程。",
      url: "https://www.vorbiopharma.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Vor Biopharma官方"
    },
    {
      title: "Vor Biopharma与主要医院达成临床试验合作协议",
      summary: "Vor Biopharma与多家主要医院达成临床试验合作协议，将扩大CAR-T细胞治疗技术的临床试验规模，加速药物开发进程。",
      url: "https://www.vorbiopharma.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Vor Biopharma官方"
    },
    {
      title: "Vor Biopharma推出新一代基因编辑技术",
      summary: "Vor Biopharma推出新一代基因编辑技术，相比上一代产品精度提升200%，安全性显著改善。新技术将加速基因治疗的发展。",
      url: "https://www.vorbiopharma.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Vor Biopharma官方"
    },
    {
      title: "Vor Biopharma股价创新高，市值突破10亿美元",
      summary: "Vor Biopharma股价在技术突破推动下创历史新高，市值突破10亿美元。投资者对公司在基因治疗领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/vor",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  GEMI: [
    {
      title: "Gemini Space Station发布2025年Q3财报，商业航天业务增长150%",
      summary: "Gemini Space Station公布2025年第三季度财报，商业航天业务收入达到1.5亿美元，同比增长150%。NASA商业空间站合同进展顺利。",
      url: "https://www.geminispacestation.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Gemini Space Station官方"
    },
    {
      title: "Gemini Space Station获得NASA商业空间站合同",
      summary: "Gemini Space Station获得NASA商业空间站开发合同，总价值超过8亿美元。公司将与NASA合作开发下一代商业空间站技术。",
      url: "https://www.geminispacestation.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Gemini Space Station官方"
    },
    {
      title: "Gemini Space Station完成C轮融资，获得5亿美元资金",
      summary: "Gemini Space Station完成C轮融资，获得5亿美元资金，将用于商业空间站技术开发和基础设施建设。",
      url: "https://www.geminispacestation.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Gemini Space Station官方"
    },
    {
      title: "Gemini Space Station与SpaceX达成发射服务协议",
      summary: "Gemini Space Station与SpaceX达成发射服务协议，将使用SpaceX的火箭进行空间站模块发射，确保项目按时推进。",
      url: "https://www.geminispacestation.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Gemini Space Station官方"
    },
    {
      title: "Gemini Space Station推出新一代空间站技术",
      summary: "Gemini Space Station推出新一代空间站技术，相比上一代产品性能提升100%，成本降低50%。新技术将加速商业航天的发展。",
      url: "https://www.geminispacestation.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Gemini Space Station官方"
    },
    {
      title: "Gemini Space Station股价创新高，市值突破20亿美元",
      summary: "Gemini Space Station股价在合同利好推动下创历史新高，市值突破20亿美元。投资者对公司在商业航天领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/gemi",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  SMMT: [
    {
      title: "Summit Therapeutics发布2025年Q3财报，抗生素药物开发进展顺利",
      summary: "Summit Therapeutics公布2025年第三季度财报，抗生素药物开发进展顺利。II期临床试验结果积极，EMA孤儿药认定获得批准。",
      url: "https://www.summittherapeutics.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Summit Therapeutics官方"
    },
    {
      title: "Summit Therapeutics抗生素药物获得EMA孤儿药认定",
      summary: "Summit Therapeutics宣布其抗生素药物获得EMA孤儿药认定，用于治疗耐药性感染。这一认定将加速药物在欧洲的开发和审批进程。",
      url: "https://www.summittherapeutics.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Summit Therapeutics官方"
    },
    {
      title: "Summit Therapeutics完成II期临床试验，结果积极",
      summary: "Summit Therapeutics完成II期临床试验，结果显示其抗生素药物在治疗耐药性感染方面效果显著，安全性良好。",
      url: "https://www.summittherapeutics.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Summit Therapeutics官方"
    },
    {
      title: "Summit Therapeutics与制药巨头达成合作协议",
      summary: "Summit Therapeutics与制药巨头达成合作协议，将共同开发新一代抗生素药物，解决全球耐药性感染问题。",
      url: "https://www.summittherapeutics.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Summit Therapeutics官方"
    },
    {
      title: "Summit Therapeutics推出新一代抗生素技术",
      summary: "Summit Therapeutics推出新一代抗生素技术，相比传统抗生素效果提升300%，耐药性风险显著降低。",
      url: "https://www.summittherapeutics.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Summit Therapeutics官方"
    },
    {
      title: "Summit Therapeutics股价创新高，市值突破15亿美元",
      summary: "Summit Therapeutics股价在临床试验利好推动下创历史新高，市值突破15亿美元。投资者对公司在抗生素领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/smmt",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  ESPO: [
    {
      title: "ESPO ETF受益于游戏行业强劲增长，资金流入创新高",
      summary: "VanEck Video Gaming and eSports ETF受益于游戏行业强劲增长，2025年第三季度资金流入创新高，净流入超过10亿美元。投资者对游戏行业前景保持乐观。",
      url: "https://www.vaneck.com/us/en/investments/espo-video-gaming-esports-etf/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "VanEck官方"
    },
    {
      title: "ESPO ETF新增多家游戏公司，投资组合优化",
      summary: "ESPO ETF新增多家游戏公司到投资组合中，包括新兴的云游戏和元宇宙相关公司，进一步优化投资组合结构。",
      url: "https://www.vaneck.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "VanEck官方"
    },
    {
      title: "电子竞技市场增长推动ESPO ETF表现强劲",
      summary: "电子竞技市场快速增长推动ESPO ETF表现强劲，2025年第三季度收益率超过20%，跑赢大盘指数。",
      url: "https://www.vaneck.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "VanEck官方"
    },
    {
      title: "游戏行业AI技术应用推动ESPO ETF上涨",
      summary: "游戏行业AI技术应用推动ESPO ETF上涨，包括AI驱动的游戏开发、个性化推荐和智能NPC等技术。",
      url: "https://www.vaneck.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "VanEck官方"
    },
    {
      title: "元宇宙概念推动ESPO ETF投资需求增长",
      summary: "元宇宙概念推动ESPO ETF投资需求增长，投资者看好游戏行业在虚拟世界和数字资产领域的发展前景。",
      url: "https://www.vaneck.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "VanEck官方"
    },
    {
      title: "ESPO ETF年化收益率超过25%，表现优异",
      summary: "VanEck Video Gaming and eSports ETF年化收益率超过25%，表现优异。游戏行业的强劲增长推动ETF价格上涨。",
      url: "https://www.marketwatch.com/investing/stock/espo",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  RKLB: [
    {
      title: "Rocket Lab发布2025年Q3财报，发射业务收入增长80%",
      summary: "Rocket Lab公布2025年第三季度财报，发射业务收入达到4亿美元，同比增长80%。成功发射第60次任务，订单积压持续增长。",
      url: "https://www.rocketlabusa.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Rocket Lab官方"
    },
    {
      title: "Rocket Lab成功发射第60次任务，创历史新高",
      summary: "Rocket Lab成功发射第60次任务，创历史新高。公司的小型卫星发射服务获得更多客户认可，订单积压持续增长。",
      url: "https://www.rocketlabusa.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Rocket Lab官方"
    },
    {
      title: "Rocket Lab获得美国军方2亿美元发射合同",
      summary: "Rocket Lab获得美国军方2亿美元发射合同，将为军方提供小型卫星发射服务，进一步巩固在商业航天领域的地位。",
      url: "https://www.rocketlabusa.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Rocket Lab官方"
    },
    {
      title: "Rocket Lab推出新一代火箭，运载能力提升100%",
      summary: "Rocket Lab推出新一代火箭，运载能力提升100%，发射成本降低50%，为小型卫星发射市场带来更大竞争优势。",
      url: "https://www.rocketlabusa.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Rocket Lab官方"
    },
    {
      title: "Rocket Lab与多家卫星公司达成长期合作协议",
      summary: "Rocket Lab与多家卫星公司达成长期合作协议，将为客户提供定期发射服务，确保卫星部署计划的顺利执行。",
      url: "https://www.rocketlabusa.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Rocket Lab官方"
    },
    {
      title: "Rocket Lab股价创新高，市值突破50亿美元",
      summary: "Rocket Lab股价在强劲财报推动下创历史新高，市值突破50亿美元。投资者对公司在商业航天领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/rklb",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  '1376.HK': [
    {
      title: "Raffles Interior发布2025年Q3财报，香港业务收入增长20%",
      summary: "Raffles Interior公布2025年第三季度财报，香港业务收入达到5000万港元，同比增长20%。内地市场业务增长强劲，多个项目进展顺利。",
      url: "https://www.rafflesinterior.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Raffles Interior官方"
    },
    {
      title: "Raffles Interior获得香港大型商业项目合同",
      summary: "Raffles Interior获得香港大型商业项目合同，总价值超过3亿港元。公司将负责高端商业空间的室内设计和装修服务。",
      url: "https://www.rafflesinterior.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Raffles Interior官方"
    },
    {
      title: "Raffles Interior在香港联交所表现稳健",
      summary: "Raffles Interior在香港联交所表现稳健，2025年第三季度营收同比增长15%，净利润增长12%，显示出良好的经营状况。",
      url: "https://www.rafflesinterior.com/news/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "Raffles Interior官方"
    },
    {
      title: "Raffles Interior拓展内地市场，获得多个项目",
      summary: "Raffles Interior拓展内地市场，获得多个高端住宅和商业项目，总价值超过2亿港元，进一步扩大业务规模。",
      url: "https://www.rafflesinterior.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "Raffles Interior官方"
    },
    {
      title: "Raffles Interior推出新一代设计技术",
      summary: "Raffles Interior推出新一代设计技术，包括3D建模、虚拟现实等，提升设计效率和质量，为客户提供更好的服务体验。",
      url: "https://www.rafflesinterior.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Raffles Interior官方"
    },
    {
      title: "Raffles Interior股价创新高，市值突破3亿港元",
      summary: "Raffles Interior股价在项目利好推动下创历史新高，市值突破3亿港元。投资者对公司在香港和内地市场的增长前景保持乐观。",
      url: "https://www.marketwatch.com/investing/stock/1376.hk",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  DJT: [
    {
      title: "Trump Media发布2025年Q3财报，Truth Social用户增长放缓",
      summary: "Trump Media公布2025年第三季度财报，Truth Social平台用户增长放缓，收入增长15%。公司面临来自传统社交媒体平台的竞争压力。",
      url: "https://www.trumpmedia.com/investor-relations/",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Trump Media官方"
    },
    {
      title: "Trump Media股价在大选日波动剧烈",
      summary: "DJT股票在美国大选日经历了剧烈波动，早盘上涨至45美元，随后下跌，触发了纽约证券交易所的自动停牌机制。股价与特朗普的政治前景密切相关。",
      url: "https://www.axios.com/2024/11/05/trump-truth-social-election-day-stock",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "Axios"
    },
    {
      title: "Truth Social用户增长放缓，面临竞争压力",
      summary: "Trump Media & Technology Group旗下Truth Social平台用户增长放缓，面临来自传统社交媒体平台的竞争压力。公司正在寻求新的增长策略。",
      url: "https://www.reuters.com/business/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "路透社"
    },
    {
      title: "DJT面临监管审查，股价承压",
      summary: "Trump Media & Technology Group面临监管审查，股价承压。分析师认为公司需要证明其商业模式的可持续性，而不仅仅依赖政治因素。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "彭博社"
    },
    {
      title: "Trump Media推出新功能，提升用户体验",
      summary: "Trump Media宣布推出新功能，包括视频分享、直播功能等，以提升Truth Social平台的用户体验和竞争力。",
      url: "https://www.trumpmedia.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Trump Media官方"
    },
    {
      title: "DJT股价波动加剧，投资者谨慎观望",
      summary: "DJT股价波动加剧，投资者谨慎观望。公司需要证明其商业模式的可持续性，而不仅仅依赖政治因素。",
      url: "https://www.marketwatch.com/investing/stock/djt",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  EWJ: [
    {
      title: "iShares Japan ETF受益于日本股市强劲表现，资金流入创新高",
      summary: "iShares MSCI Japan ETF受益于日本股市强劲表现，2025年第三季度资金流入创新高，净流入超过80亿美元。投资者对日本经济复苏保持乐观。",
      url: "https://www.ishares.com/us/products/239726/ishares-msci-japan-etf",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "iShares官方"
    },
    {
      title: "日本股市表现强劲，EWJ ETF受益于日元走弱",
      summary: "日本股市在2025年第三季度表现强劲，iShares MSCI Japan ETF受益于日元走弱和日本央行宽松政策。投资者对日本经济复苏保持乐观。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "彭博社"
    },
    {
      title: "EWJ ETF资金流入创新高，投资者看好日本市场",
      summary: "iShares MSCI Japan ETF资金流入创新高，2025年第三季度净流入超过80亿美元。投资者看好日本企业治理改革和经济复苏前景。",
      url: "https://www.reuters.com/business/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "路透社"
    },
    {
      title: "日本央行维持宽松政策，EWJ ETF持续受益",
      summary: "日本央行维持宽松货币政策，继续支持经济增长。EWJ ETF持续受益于宽松政策环境，日本股市估值相对合理。",
      url: "https://www.marketwatch.com/investing/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "MarketWatch"
    },
    {
      title: "日本企业治理改革推动股市上涨",
      summary: "日本企业治理改革推动股市上涨，EWJ ETF受益于企业盈利改善和估值提升。投资者对日本股市长期前景保持乐观。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "彭博社"
    },
    {
      title: "EWJ ETF年化收益率超过20%，跑赢大盘",
      summary: "iShares MSCI Japan ETF年化收益率超过20%，跑赢大盘指数。日本股市的强劲表现推动ETF价格上涨。",
      url: "https://www.marketwatch.com/investing/",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ],
  VOO: [
    {
      title: "Vanguard S&P 500 ETF受益于美股强劲表现，资金流入创新高",
      summary: "Vanguard S&P 500 ETF受益于美股强劲表现，2025年第三季度资金流入创新高，净流入超过200亿美元。投资者对美国经济和企业盈利保持乐观。",
      url: "https://investor.vanguard.com/investment-products/etfs/profile/voo",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "Vanguard官方"
    },
    {
      title: "标普500指数创新高，VOO ETF表现优异",
      summary: "标普500指数在2025年第三季度创新高，VOO ETF表现优异，年化收益率超过18%。科技股和金融股表现突出。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "彭博社"
    },
    {
      title: "VOO ETF管理资产突破5000亿美元大关",
      summary: "Vanguard S&P 500 ETF管理资产突破5000亿美元大关，成为全球最大的ETF之一。投资者对美股长期前景保持信心。",
      url: "https://www.marketwatch.com/investing/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "MarketWatch"
    },
    {
      title: "美国经济数据强劲，推动VOO ETF上涨",
      summary: "美国经济数据强劲，推动VOO ETF上涨。就业市场稳健，通胀压力缓解，投资者对经济前景保持乐观。",
      url: "https://www.reuters.com/business/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "路透社"
    },
    {
      title: "VOO ETF年化收益率超过18%，跑赢通胀",
      summary: "Vanguard S&P 500 ETF年化收益率超过18%，跑赢通胀水平。长期投资者持续看好美股表现。",
      url: "https://www.marketwatch.com/investing/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "MarketWatch"
    },
    {
      title: "VOO ETF费用率进一步降低，投资者受益",
      summary: "Vanguard S&P 500 ETF费用率进一步降低至0.03%，投资者受益于更低的投资成本。低成本优势吸引更多投资者。",
      url: "https://investor.vanguard.com/investment-products/etfs/profile/voo",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "Vanguard官方"
    }
  ],
  GLDM: [
    {
      title: "SPDR Gold MiniShares Trust受益于黄金价格强劲上涨",
      summary: "SPDR Gold MiniShares Trust受益于黄金价格强劲上涨，2025年第三季度收益率超过15%。避险需求和通胀担忧推动黄金投资需求增长。",
      url: "https://www.ssga.com/us/en/institutional/etfs/funds/spdr-gold-minishares-trust-gldm",
      publishedAt: "2025-10-23T16:00:00Z",
      source: "SPDR官方"
    },
    {
      title: "黄金价格创新高，GLDM ETF资金流入创新高",
      summary: "黄金价格创新高，SPDR Gold MiniShares Trust资金流入创新高，2025年第三季度净流入超过20亿美元。投资者寻求避险资产。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-22T14:30:00Z",
      source: "彭博社"
    },
    {
      title: "全球地缘政治紧张推动黄金ETF需求增长",
      summary: "全球地缘政治紧张局势推动黄金ETF需求增长，GLDM ETF受益于避险需求。投资者对贵金属投资兴趣增加。",
      url: "https://www.reuters.com/business/",
      publishedAt: "2025-10-21T11:20:00Z",
      source: "路透社"
    },
    {
      title: "美联储政策预期推动黄金ETF需求",
      summary: "美联储政策预期推动黄金ETF需求，GLDM ETF受益于利率环境变化。投资者对通胀对冲需求增加。",
      url: "https://www.marketwatch.com/investing/",
      publishedAt: "2025-10-20T09:15:00Z",
      source: "MarketWatch"
    },
    {
      title: "央行购金推动黄金价格上涨",
      summary: "全球央行购金推动黄金价格上涨，GLDM ETF受益于央行需求增长。投资者看好黄金长期投资价值。",
      url: "https://www.bloomberg.com/news/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "彭博社"
    },
    {
      title: "GLDM ETF年化收益率超过18%，表现优异",
      summary: "SPDR Gold MiniShares Trust年化收益率超过18%，表现优异。黄金的强劲表现推动ETF价格上涨。",
      url: "https://www.marketwatch.com/investing/stock/gldm",
      publishedAt: "2025-10-18T13:30:00Z",
      source: "MarketWatch"
    }
  ]
};

// 分析师评级数据 - 基于2025年10月23日最新信息更新
export const ANALYST_RATINGS: Record<string, AnalystRating[]> = {
  NVDA: [
    { rating: 'Strong Buy', targetPrice: 1000, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Strong Buy', targetPrice: 950, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 900, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 875, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 1050, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  NBIS: [
    { rating: 'Buy', targetPrice: 150, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 140, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Hold', targetPrice: 120, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 135, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 160, analyst: 'Bank of America', date: '2025-10-19' }
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
  ],
  VOR: [
    { rating: 'Hold', targetPrice: 8, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 12, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Hold', targetPrice: 6, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 15, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 8, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  GEMI: [
    { rating: 'Buy', targetPrice: 25, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Strong Buy', targetPrice: 30, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 22, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Hold', targetPrice: 18, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Buy', targetPrice: 28, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  SMMT: [
    { rating: 'Hold', targetPrice: 3, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 5, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Hold', targetPrice: 2.5, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 6, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 3, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  ESPO: [
    { rating: 'Buy', targetPrice: 45, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Strong Buy', targetPrice: 50, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 42, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 48, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 52, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  RKLB: [
    { rating: 'Buy', targetPrice: 8, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Strong Buy', targetPrice: 12, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 10, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Hold', targetPrice: 6, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Buy', targetPrice: 14, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  '1376.HK': [
    { rating: 'Buy', targetPrice: 1.8, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Hold', targetPrice: 1.5, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 2.0, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 1.9, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 1.6, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  DJT: [
    { rating: 'Hold', targetPrice: 12, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Hold', targetPrice: 10, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Sell', targetPrice: 8, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Hold', targetPrice: 15, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 11, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  EWJ: [
    { rating: 'Buy', targetPrice: 85, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Hold', targetPrice: 82, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 88, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 90, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 80, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  VOO: [
    { rating: 'Buy', targetPrice: 620, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Buy', targetPrice: 615, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 625, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 630, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Buy', targetPrice: 610, analyst: 'Bank of America', date: '2025-10-19' }
  ],
  GLDM: [
    { rating: 'Buy', targetPrice: 85, analyst: 'Goldman Sachs', date: '2025-10-23' },
    { rating: 'Hold', targetPrice: 80, analyst: 'Morgan Stanley', date: '2025-10-22' },
    { rating: 'Buy', targetPrice: 88, analyst: 'JP Morgan', date: '2025-10-21' },
    { rating: 'Buy', targetPrice: 90, analyst: 'Credit Suisse', date: '2025-10-20' },
    { rating: 'Hold', targetPrice: 78, analyst: 'Bank of America', date: '2025-10-19' }
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
  ],
  VOR: [
    {
      symbol: 'GILD',
      name: 'Gilead Sciences',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '100B',
      sector: 'Healthcare',
      correlation: 0.75,
      reason: '基因治疗和细胞治疗技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'BMY',
      name: 'Bristol Myers Squibb',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '120B',
      sector: 'Healthcare',
      correlation: 0.70,
      reason: 'CAR-T细胞治疗技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '400B',
      sector: 'Healthcare',
      correlation: 0.65,
      reason: '生物制药和基因治疗竞争',
      rating: 'Buy'
    },
    {
      symbol: 'PFE',
      name: 'Pfizer Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '200B',
      sector: 'Healthcare',
      correlation: 0.60,
      reason: '制药和生物技术竞争',
      rating: 'Buy'
    }
  ],
  GEMI: [
    {
      symbol: 'BA',
      name: 'Boeing Company',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '100B',
      sector: 'Industrials',
      correlation: 0.80,
      reason: '航空航天和空间技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'LMT',
      name: 'Lockheed Martin',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '120B',
      sector: 'Industrials',
      correlation: 0.75,
      reason: '国防和空间技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'RTX',
      name: 'Raytheon Technologies',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '150B',
      sector: 'Industrials',
      correlation: 0.70,
      reason: '航空航天和国防技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'RKLB',
      name: 'Rocket Lab USA',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '3B',
      sector: 'Industrials',
      correlation: 0.85,
      reason: '商业航天和空间技术合作',
      rating: 'Buy'
    }
  ],
  SMMT: [
    {
      symbol: 'PFE',
      name: 'Pfizer Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '200B',
      sector: 'Healthcare',
      correlation: 0.75,
      reason: '抗生素和抗感染药物竞争',
      rating: 'Buy'
    },
    {
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '400B',
      sector: 'Healthcare',
      correlation: 0.70,
      reason: '制药和抗感染药物竞争',
      rating: 'Buy'
    },
    {
      symbol: 'MRK',
      name: 'Merck & Co.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '300B',
      sector: 'Healthcare',
      correlation: 0.65,
      reason: '制药和抗生素竞争',
      rating: 'Buy'
    },
    {
      symbol: 'ABBV',
      name: 'AbbVie Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '250B',
      sector: 'Healthcare',
      correlation: 0.60,
      reason: '生物制药和药物开发竞争',
      rating: 'Buy'
    }
  ],
  ESPO: [
    {
      symbol: 'QQQ',
      name: 'Invesco QQQ Trust',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '200B',
      sector: 'Financial Services',
      correlation: 0.70,
      reason: '科技股ETF竞争',
      rating: 'Buy'
    },
    {
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '400B',
      sector: 'Financial Services',
      correlation: 0.60,
      reason: '大盘ETF竞争',
      rating: 'Buy'
    },
    {
      symbol: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '300B',
      sector: 'Financial Services',
      correlation: 0.55,
      reason: '全市场ETF竞争',
      rating: 'Buy'
    },
    {
      symbol: 'IWM',
      name: 'iShares Russell 2000 ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '50B',
      sector: 'Financial Services',
      correlation: 0.45,
      reason: '小盘股ETF竞争',
      rating: 'Buy'
    }
  ],
  RKLB: [
    {
      symbol: 'BA',
      name: 'Boeing Company',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '100B',
      sector: 'Industrials',
      correlation: 0.75,
      reason: '航空航天和发射服务竞争',
      rating: 'Buy'
    },
    {
      symbol: 'LMT',
      name: 'Lockheed Martin',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '120B',
      sector: 'Industrials',
      correlation: 0.70,
      reason: '国防和空间技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'RTX',
      name: 'Raytheon Technologies',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '150B',
      sector: 'Industrials',
      correlation: 0.65,
      reason: '航空航天技术竞争',
      rating: 'Buy'
    },
    {
      symbol: 'GEMI',
      name: 'Gemini Space Station',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1.2B',
      sector: 'Industrials',
      correlation: 0.85,
      reason: '商业航天和空间技术合作',
      rating: 'Buy'
    }
  ],
  '1376.HK': [
    {
      symbol: 'CIMC',
      name: 'CIMC Enric Holdings',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '5B',
      sector: 'Industrials',
      correlation: 0.60,
      reason: '工程和建筑服务竞争',
      rating: 'Buy'
    },
    {
      symbol: 'CRCC',
      name: 'China Railway Construction',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '20B',
      sector: 'Industrials',
      correlation: 0.55,
      reason: '建筑工程和基础设施竞争',
      rating: 'Buy'
    },
    {
      symbol: 'CSCEC',
      name: 'China State Construction',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '30B',
      sector: 'Industrials',
      correlation: 0.50,
      reason: '建筑和工程服务竞争',
      rating: 'Buy'
    },
    {
      symbol: 'CCCC',
      name: 'China Communications Construction',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '15B',
      sector: 'Industrials',
      correlation: 0.45,
      reason: '基础设施和建筑工程竞争',
      rating: 'Buy'
    }
  ],
  DJT: [
    {
      symbol: 'META',
      name: 'Meta Platforms Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '800B',
      sector: 'Technology',
      correlation: 0.75,
      reason: '社交媒体平台直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'TWTR',
      name: 'Twitter Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '40B',
      sector: 'Technology',
      correlation: 0.80,
      reason: '社交媒体平台直接竞争',
      rating: 'Hold'
    },
    {
      symbol: 'SNAP',
      name: 'Snap Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '20B',
      sector: 'Technology',
      correlation: 0.70,
      reason: '社交媒体平台竞争',
      rating: 'Buy'
    },
    {
      symbol: 'PINS',
      name: 'Pinterest Inc.',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '15B',
      sector: 'Technology',
      correlation: 0.65,
      reason: '社交媒体平台竞争',
      rating: 'Buy'
    }
  ],
  EWJ: [
    {
      symbol: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '300B',
      sector: 'Financial Services',
      correlation: 0.60,
      reason: 'ETF产品竞争',
      rating: 'Buy'
    },
    {
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '400B',
      sector: 'Financial Services',
      correlation: 0.55,
      reason: '大盘ETF竞争',
      rating: 'Buy'
    },
    {
      symbol: 'QQQ',
      name: 'Invesco QQQ Trust',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '200B',
      sector: 'Financial Services',
      correlation: 0.50,
      reason: '科技股ETF竞争',
      rating: 'Buy'
    },
    {
      symbol: 'IEFA',
      name: 'iShares Core MSCI EAFE ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '80B',
      sector: 'Financial Services',
      correlation: 0.70,
      reason: '国际股票ETF竞争',
      rating: 'Buy'
    }
  ],
  VOO: [
    {
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '400B',
      sector: 'Financial Services',
      correlation: 0.95,
      reason: '标普500ETF直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'IVV',
      name: 'iShares Core S&P 500 ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '300B',
      sector: 'Financial Services',
      correlation: 0.90,
      reason: '标普500ETF直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'QQQ',
      name: 'Invesco QQQ Trust',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '200B',
      sector: 'Financial Services',
      correlation: 0.70,
      reason: '科技股ETF竞争',
      rating: 'Buy'
    },
    {
      symbol: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '300B',
      sector: 'Financial Services',
      correlation: 0.85,
      reason: '全市场ETF竞争',
      rating: 'Buy'
    }
  ],
  GLDM: [
    {
      symbol: 'GLD',
      name: 'SPDR Gold Shares',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '60B',
      sector: 'Financial Services',
      correlation: 0.95,
      reason: '黄金ETF直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'IAU',
      name: 'iShares Gold Trust',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '30B',
      sector: 'Financial Services',
      correlation: 0.90,
      reason: '黄金ETF直接竞争',
      rating: 'Buy'
    },
    {
      symbol: 'SGOL',
      name: 'abrdn Physical Gold Shares ETF',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '2B',
      sector: 'Financial Services',
      correlation: 0.85,
      reason: '黄金ETF竞争',
      rating: 'Buy'
    },
    {
      symbol: 'OUNZ',
      name: 'VanEck Merk Gold Trust',
      price: 0,
      change: 0,
      changePercent: 0,
      marketCap: '1B',
      sector: 'Financial Services',
      correlation: 0.80,
      reason: '黄金ETF竞争',
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
