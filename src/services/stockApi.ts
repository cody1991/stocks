import axios from 'axios';

// 使用多个CORS代理作为备用
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://cors-anywhere.herokuapp.com/',
  'https://thingproxy.freeboard.io/fetch/'
];

const YAHOO_FINANCE_BASE_URL = 'https://query1.finance.yahoo.com/v8/finance/chart';

// 添加CORS代理配置
const createAxiosInstance = () => {
  const instance = axios.create({
    timeout: 30000, // 增加到30秒
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config) => {
      console.log('Making request to:', config.url);
      return config;
    },
    (error) => {
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      console.log('Response received:', response.status);
      return response;
    },
    (error) => {
      console.error('Response error:', error.message);
      console.error('Error details:', error.response?.data);
      console.error('Error status:', error.response?.status);
      return Promise.reject(error);
    }
  );

  return instance;
};

const apiClient = createAxiosInstance();

export interface StockQuote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
  longName?: string;
  shortName?: string;
}

export interface StockNews {
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  source: string;
}

export interface FinancialData {
  revenue: number;
  netIncome: number;
  eps: number;
  pe: number;
  pb: number;
  debtToEquity: number;
  roe: number;
  roa: number;
}

export interface PriceData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

class StockApiService {
  // 获取股票实时报价
  async getStockQuote(symbol: string): Promise<StockQuote> {
    let lastError: any = null;

    // 尝试每个CORS代理
    for (let i = 0; i < CORS_PROXIES.length; i++) {
      try {
        console.log(`Fetching quote for ${symbol} using proxy ${i + 1}...`);

        const proxyUrl = CORS_PROXIES[i];
        const targetUrl = `${YAHOO_FINANCE_BASE_URL}/${symbol}?range=1d&interval=1m&includePrePost=false`;
        const fullUrl = proxyUrl + encodeURIComponent(targetUrl);

        const response = await apiClient.get(fullUrl);

        console.log('API Response:', response.data);

        const result = response.data.chart.result[0];
        if (!result) {
          throw new Error('No data received from API');
        }

        const meta = result.meta;
        const currentPrice = meta.regularMarketPrice;
        const previousClose = meta.previousClose;
        const change = currentPrice - previousClose;
        const changePercent = (change / previousClose) * 100;

        const quoteData = {
          symbol: meta.symbol,
          price: currentPrice,
          change: change,
          changePercent: changePercent,
          volume: meta.regularMarketVolume || 0,
          marketCap: meta.marketCap || 0,
          high: meta.regularMarketDayHigh || currentPrice,
          low: meta.regularMarketDayLow || currentPrice,
          open: meta.regularMarketOpen || currentPrice,
          previousClose: previousClose,
          longName: meta.longName || symbol,
          shortName: meta.shortName || symbol
        };

        console.log('Processed data:', quoteData);
        return quoteData;
      } catch (error) {
        console.error(`Proxy ${i + 1} failed:`, error);
        lastError = error;
        continue; // 尝试下一个代理
      }
    }

    // 所有代理都失败了
    const errorMessage = lastError instanceof Error ? lastError.message : '未知错误';
    throw new Error(`获取${symbol}数据失败: ${errorMessage}`);
  }

  // 获取股票新闻
  async getStockNews(symbol: string): Promise<StockNews[]> {
    try {
      console.log(`Fetching news for ${symbol}...`);

      // Yahoo Finance新闻API with CORS proxy
      const url = `https://api.allorigins.win/raw?url=https://query1.finance.yahoo.com/v1/news/search?q=${symbol}&count=10`;
      const response = await apiClient.get(url);

      const articles = response.data.news || [];
      return articles.map((article: any) => ({
        title: article.title,
        summary: article.summary || article.title,
        url: article.link,
        publishedAt: article.pubDate,
        source: article.publisher || 'Yahoo Finance'
      }));
    } catch (error) {
      console.error('Error fetching stock news:', error);
      // 新闻数据不是必需的，返回空数组而不是抛出错误
      return [];
    }
  }

  // 获取财务数据
  async getFinancialData(symbol: string): Promise<FinancialData> {
    try {
      console.log(`Fetching financial data for ${symbol}...`);

      // 使用Yahoo Finance财务数据API with CORS proxy
      const url = `${YAHOO_FINANCE_BASE_URL}/${symbol}?range=1d&interval=1m&includePrePost=false`;
      const response = await apiClient.get(url);

      const result = response.data.chart.result[0];
      if (!result) {
        throw new Error('No financial data received from API');
      }

      const meta = result.meta;

      return {
        revenue: 0, // Yahoo Finance chart API不提供这些数据
        netIncome: 0,
        eps: meta.trailingEPS || 0,
        pe: meta.trailingPE || 0,
        pb: meta.priceToBook || 0,
        debtToEquity: 0,
        roe: 0,
        roa: 0
      };
    } catch (error) {
      console.error('Error fetching financial data:', error);
      const errorMessage = error instanceof Error ? error.message : '未知错误';
      throw new Error(`获取${symbol}财务数据失败: ${errorMessage}`);
    }
  }

  // 获取历史价格数据
  async getPriceHistory(symbol: string, period: string = 'daily'): Promise<PriceData[]> {
    try {
      console.log(`Fetching price history for ${symbol}...`);

      // 使用Yahoo Finance历史价格API with CORS proxy
      const url = `${YAHOO_FINANCE_BASE_URL}/${symbol}?range=1mo&interval=1d&includePrePost=false`;
      const response = await apiClient.get(url);

      const result = response.data.chart.result[0];
      if (!result) {
        throw new Error('No time series data');
      }

      const timestamps = result.timestamp;
      const quotes = result.indicators.quote[0];

      return timestamps.map((timestamp: number, index: number) => ({
        date: new Date(timestamp * 1000).toISOString().split('T')[0],
        open: quotes.open[index] || 0,
        high: quotes.high[index] || 0,
        low: quotes.low[index] || 0,
        close: quotes.close[index] || 0,
        volume: quotes.volume[index] || 0
      })).slice(0, 30); // 最近30天
    } catch (error) {
      console.error('Error fetching price history:', error);
      const errorMessage = error instanceof Error ? error.message : '未知错误';
      throw new Error(`获取${symbol}历史价格失败: ${errorMessage}`);
    }
  }
}

const stockApiService = new StockApiService();
export default stockApiService;