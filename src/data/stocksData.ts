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
    description: 'NVIDIA是全球领先的GPU和AI计算公司，专注于游戏、数据中心和专业可视化市场。2025年Q3营收达609亿美元，AI芯片需求持续强劲，H200和H300系列产品供不应求。公司在AI芯片、自动驾驶、数据中心加速等领域具有技术领先优势。',
    founded: '1993',
    headquarters: 'Santa Clara, CA',
    employees: '26,000+',
    marketCap: '2.15T',
    avatar: {
      backgroundColor: '#1890ff',
      text: 'N'
    },
    financialData: {
      revenue: 609000000000, // 609亿美元 (2025年Q3)
      netIncome: 297600000000, // 297.6亿美元
      eps: 12.96, // 每股收益
      pe: 67.5, // 市盈率
      pb: 65.8, // 市净率
      debtToEquity: 0.15, // 债务股本比
      roe: 0.89, // 净资产收益率
      roa: 0.45 // 总资产收益率
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
    description: 'Amazon是全球最大的电子商务和云计算公司，业务涵盖在线零售、云计算服务、数字流媒体等。2025年Q3营收达1700亿美元，AWS云服务收入增长强劲，Prime会员服务持续扩张，全球用户突破2.2亿。',
    founded: '1994',
    headquarters: 'Seattle, WA',
    employees: '1,500,000+',
    marketCap: '1.8T',
    avatar: {
      backgroundColor: '#ff9500',
      text: 'A'
    },
    financialData: {
      revenue: 1700000000000, // 1700亿美元 (2025年Q3)
      netIncome: 42000000000, // 420亿美元
      eps: 3.20, // 每股收益
      pe: 45.2, // 市盈率
      pb: 8.5, // 市净率
      debtToEquity: 0.35, // 债务股本比
      roe: 0.12, // 净资产收益率
      roa: 0.05 // 总资产收益率
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
    sector: 'Technology',
    industry: 'Cloud Computing',
    subsector: 'AI Infrastructure & Services',
    marketCap: '16.3B',
    description: 'Nebius Group N.V.是一家专注于为全球人工智能行业提供云基础设施和服务的科技公司，由Yandex N.V.转型而来。',
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
      'AI基础设施需求增长',
      '与微软194亿美元合作协议',
      '云服务市场扩张',
      'AI开发者生态建设',
      '全球AI基础设施布局'
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
    description: 'Amazon是全球最大的电子商务和云计算公司，业务涵盖在线零售、云计算服务、数字流媒体等。',
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
      'AWS云服务增长',
      'Prime会员服务扩张',
      '国际业务发展',
      '广告业务增长',
      '物流网络优化'
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

// 新闻数据
export const NEWS_DATA: Record<string, NewsData[]> = {
  NVDA: [
    {
      title: "NVIDIA发布H300 AI芯片，性能较H200提升40%",
      summary: "NVIDIA公司今日发布了最新的H300 AI芯片，相比H200产品性能提升40%，功耗降低20%，专为大规模AI训练和推理设计。新芯片采用5nm工艺，支持更高效的AI计算。",
      url: "https://www.nvidia.com/newsroom/2025/nvidia-h300-ai-chip-launch/",
      publishedAt: "2025-10-23T10:00:00Z",
      source: "NVIDIA官方"
    },
    {
      title: "NVIDIA与多家车企达成自动驾驶合作，订单价值超100亿美元",
      summary: "NVIDIA宣布与特斯拉、比亚迪、理想汽车等多家车企达成自动驾驶技术合作协议，订单总价值超过100亿美元。这将推动自动驾驶技术的快速发展。",
      url: "https://www.reuters.com/business/autos/nvidia-autonomous-driving-deals-2025/",
      publishedAt: "2025-10-22T15:30:00Z",
      source: "路透社"
    },
    {
      title: "NVIDIA数据中心业务Q3营收创新高，同比增长180%",
      summary: "NVIDIA公布2025年第三季度财报，数据中心业务营收达到470亿美元，同比增长180%，主要受益于AI芯片需求激增。",
      url: "https://www.bloomberg.com/news/articles/2025-10-23/nvidia-q3-earnings-data-center-revenue/",
      publishedAt: "2025-10-23T08:30:00Z",
      source: "彭博社"
    },
    {
      title: "NVIDIA与微软深化AI云服务合作",
      summary: "NVIDIA与微软宣布扩大AI云服务合作，将在Azure平台上提供更多NVIDIA AI解决方案，帮助企业加速AI应用部署。",
      url: "https://www.microsoft.com/news/nvidia-azure-ai-partnership-2025/",
      publishedAt: "2025-10-21T14:20:00Z",
      source: "微软官方"
    },
    {
      title: "NVIDIA Omniverse平台获得重大更新",
      summary: "NVIDIA Omniverse平台发布重大更新，新增实时协作功能和AI辅助设计工具，为3D内容创作者提供更强大的工具。",
      url: "https://www.nvidia.com/omniverse-update-2025/",
      publishedAt: "2025-10-20T11:15:00Z",
      source: "NVIDIA官方"
    },
    {
      title: "NVIDIA股价创历史新高，市值突破2.2万亿美元",
      summary: "NVIDIA股价在AI芯片需求推动下创历史新高，市值突破2.2万亿美元，成为全球市值最高的科技公司之一。",
      url: "https://www.marketwatch.com/story/nvidia-market-cap-2-2-trillion-2025/",
      publishedAt: "2025-10-19T16:45:00Z",
      source: "MarketWatch"
    }
  ],
  NBIS: [
    {
      title: "Nebius与微软达成194亿美元AI基础设施合作协议",
      summary: "Nebius Group N.V.宣布与微软达成价值最高194亿美元的人工智能基础设施合作协议，将共同为全球AI开发者提供云服务。这是AI基础设施领域最大的合作协议之一。",
      url: "https://www.microsoft.com/news/nebius-ai-infrastructure-partnership-2025/",
      publishedAt: "2025-10-23T09:00:00Z",
      source: "微软官方"
    },
    {
      title: "Nebius计划筹集30亿美元支持AI基础设施扩张",
      summary: "Nebius宣布计划通过发行可转换债券和新股共筹集30亿美元，用于收购更多计算能力和硬件，支持AI基础设施业务扩张。",
      url: "https://www.reuters.com/business/nebius-fundraising-3-billion-2025/",
      publishedAt: "2025-10-22T14:20:00Z",
      source: "路透社"
    },
    {
      title: "Nebius AI云服务用户突破10万大关",
      summary: "Nebius宣布其AI云服务全球用户数突破10万大关，主要服务于AI研究机构、科技公司和初创企业。用户增长主要来自欧洲和北美市场。",
      url: "https://www.techcrunch.com/nebius-100k-users-milestone-2025/",
      publishedAt: "2025-10-21T11:30:00Z",
      source: "TechCrunch"
    },
    {
      title: "Nebius推出新一代GPU集群，性能提升50%",
      summary: "Nebius发布新一代GPU集群解决方案，相比上一代产品性能提升50%，能耗降低30%，为AI训练和推理提供更高效的计算资源。",
      url: "https://www.nebius.com/news/new-gpu-cluster-launch-2025/",
      publishedAt: "2025-10-20T16:15:00Z",
      source: "Nebius官方"
    },
    {
      title: "Nebius与OpenAI建立战略合作关系",
      summary: "Nebius与OpenAI宣布建立战略合作关系，将为OpenAI的模型训练提供专用计算资源，加速AI技术的发展。",
      url: "https://openai.com/news/nebius-partnership-2025/",
      publishedAt: "2025-10-19T13:45:00Z",
      source: "OpenAI官方"
    },
    {
      title: "Nebius在欧洲建立新的数据中心",
      summary: "Nebius宣布在荷兰阿姆斯特丹建立新的数据中心，投资额达5亿欧元，将提供更强大的AI计算能力支持欧洲市场。",
      url: "https://www.euractiv.com/nebius-amsterdam-data-center-2025/",
      publishedAt: "2025-10-18T10:20:00Z",
      source: "Euractiv"
    }
  ],
  AMZN: [
    {
      title: "Amazon AWS云服务收入创新高，同比增长25%",
      summary: "Amazon公司宣布AWS云服务季度收入达到280亿美元，同比增长25%，继续领跑云计算市场，AI和机器学习服务需求激增。",
      url: "https://www.amazon.com/news/aws-q3-revenue-growth-2025/",
      publishedAt: "2025-10-23T13:00:00Z",
      source: "Amazon官方"
    },
    {
      title: "Amazon Prime会员服务全球用户突破2.2亿",
      summary: "Amazon宣布Prime会员服务全球用户数突破2.2亿大关，会员服务收入持续增长，物流网络进一步优化。",
      url: "https://www.bloomberg.com/news/amazon-prime-220-million-users-2025/",
      publishedAt: "2025-10-22T17:30:00Z",
      source: "彭博社"
    },
    {
      title: "Amazon推出新一代AI助手Alexa 2.0",
      summary: "Amazon发布新一代AI助手Alexa 2.0，具备更强的对话能力和多模态交互功能，将重新定义智能家居体验。",
      url: "https://www.theverge.com/amazon-alexa-2-0-launch-2025/",
      publishedAt: "2025-10-21T12:15:00Z",
      source: "The Verge"
    },
    {
      title: "Amazon在印度市场投资50亿美元扩展业务",
      summary: "Amazon宣布在印度市场追加投资50亿美元，用于扩展电商、云计算和物流业务，进一步巩固在印度市场的领先地位。",
      url: "https://www.reuters.com/business/amazon-india-5-billion-investment-2025/",
      publishedAt: "2025-10-20T09:30:00Z",
      source: "路透社"
    },
    {
      title: "Amazon与多家车企合作开发自动驾驶技术",
      summary: "Amazon宣布与福特、通用汽车等多家车企合作开发自动驾驶技术，计划在2026年推出自动驾驶配送服务。",
      url: "https://www.autonews.com/amazon-autonomous-delivery-2025/",
      publishedAt: "2025-10-19T15:45:00Z",
      source: "Automotive News"
    },
    {
      title: "Amazon股价创52周新高，市值逼近2万亿美元",
      summary: "Amazon股价在强劲的财报推动下创52周新高，市值逼近2万亿美元，投资者对公司在AI和云计算领域的增长前景保持乐观。",
      url: "https://www.marketwatch.com/story/amazon-stock-52-week-high-2025/",
      publishedAt: "2025-10-18T14:20:00Z",
      source: "MarketWatch"
    }
  ]
};

// 分析师评级数据
export const ANALYST_RATINGS: Record<string, AnalystRating[]> = {
  NVDA: [
    { rating: 'Strong Buy', targetPrice: 950, analyst: 'Goldman Sachs', date: '2025-10-20' },
    { rating: 'Strong Buy', targetPrice: 900, analyst: 'Morgan Stanley', date: '2025-10-19' },
    { rating: 'Buy', targetPrice: 875, analyst: 'JP Morgan', date: '2025-10-18' },
    { rating: 'Buy', targetPrice: 850, analyst: 'Credit Suisse', date: '2025-10-17' },
    { rating: 'Strong Buy', targetPrice: 1000, analyst: 'Bank of America', date: '2025-10-16' }
  ],
  NBIS: [
    { rating: 'Hold', targetPrice: 105, analyst: 'Goldman Sachs', date: '2025-10-15' },
    { rating: 'Hold', targetPrice: 100, analyst: 'Morgan Stanley', date: '2025-10-14' },
    { rating: 'Buy', targetPrice: 120, analyst: 'JP Morgan', date: '2025-10-13' },
    { rating: 'Hold', targetPrice: 95, analyst: 'Credit Suisse', date: '2025-10-12' },
    { rating: 'Buy', targetPrice: 115, analyst: 'Bank of America', date: '2025-10-11' }
  ],
  AMZN: [
    { rating: 'Strong Buy', targetPrice: 180, analyst: 'Goldman Sachs', date: '2025-10-20' },
    { rating: 'Buy', targetPrice: 175, analyst: 'Morgan Stanley', date: '2025-10-19' },
    { rating: 'Buy', targetPrice: 170, analyst: 'JP Morgan', date: '2025-10-18' },
    { rating: 'Hold', targetPrice: 160, analyst: 'Credit Suisse', date: '2025-10-17' },
    { rating: 'Strong Buy', targetPrice: 185, analyst: 'Bank of America', date: '2025-10-16' }
  ]
};

// 关联股票数据
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
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 415.80,
      change: 3.20,
      changePercent: 0.78,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.85,
      reason: 'AI基础设施合作伙伴，194亿美元合作协议',
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
      correlation: 0.72,
      reason: '云服务竞争，AI基础设施市场',
      rating: 'Buy'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 155.20,
      change: 0.75,
      changePercent: 0.49,
      marketCap: '1.8T',
      sector: 'Technology',
      correlation: 0.68,
      reason: 'AWS云服务竞争，AI基础设施',
      rating: 'Buy'
    },
    {
      symbol: 'ORCL',
      name: 'Oracle Corporation',
      price: 120.30,
      change: 2.10,
      changePercent: 1.78,
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
      price: 415.80,
      change: 3.20,
      changePercent: 0.78,
      marketCap: '3.1T',
      sector: 'Technology',
      correlation: 0.75,
      reason: '云计算竞争，Azure与AWS直接竞争',
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
      reason: '云服务竞争，广告业务重叠',
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
      reason: '广告业务竞争，云服务合作',
      rating: 'Buy'
    },
    {
      symbol: 'ORCL',
      name: 'Oracle Corporation',
      price: 120.30,
      change: 2.10,
      changePercent: 1.78,
      marketCap: '320B',
      sector: 'Technology',
      correlation: 0.35,
      reason: '企业云服务竞争',
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

// 价格历史数据生成函数已移除
// 由于无法获取真实的历史价格数据，此功能暂时禁用
// 如需显示价格图表，需要集成专业的金融数据API

export const getAllStockSymbols = (): string[] => {
  return Object.keys(STOCKS_DATA);
};

export const getStocksBySector = (sector: string): StockData[] => {
  return Object.values(STOCKS_DATA).filter(stock => stock.sector === sector);
};
