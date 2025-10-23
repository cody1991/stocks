import React, { useState, useEffect } from 'react';
import { Card, List, Spin, Alert, Typography, Tag, Button, Space, Divider } from 'antd';
import { CalendarOutlined, LinkOutlined, GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';
import stockApi, { StockNews } from '../services/stockApi';
import moment from 'moment';

const { Title, Text, Paragraph } = Typography;

interface NewsPanelProps {
  symbol: string;
}

const NewsPanel: React.FC<NewsPanelProps> = ({ symbol }) => {
  const [news, setNews] = useState<StockNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const newsData = await stockApi.getStockNews(symbol);
        setNews(newsData);
      } catch (err) {
        setError('获取新闻数据失败');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [symbol]);

  const formatDate = (dateString: string) => {
    return moment(dateString).format('YYYY-MM-DD HH:mm');
  };

  const getNewsSentiment = (title: string, summary: string) => {
    const positiveKeywords = ['增长', '上涨', '突破', '成功', '利好', '积极', '提升', '创新', '合作', '增长', '突破'];
    const negativeKeywords = ['下跌', '下降', '风险', '问题', '挑战', '困难', '亏损', '负面', '危机', '警告'];

    const content = (title + ' ' + summary).toLowerCase();
    const positiveCount = positiveKeywords.filter(keyword => content.includes(keyword)).length;
    const negativeCount = negativeKeywords.filter(keyword => content.includes(keyword)).length;

    if (positiveCount > negativeCount) {
      return { sentiment: 'positive', color: 'green', text: '积极' };
    } else if (negativeCount > positiveCount) {
      return { sentiment: 'negative', color: 'red', text: '消极' };
    } else {
      return { sentiment: 'neutral', color: 'blue', text: '中性' };
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
        <div style={{ marginTop: '16px' }}>正在加载新闻数据...</div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="新闻加载失败"
        description={error}
        type="error"
        showIcon
      />
    );
  }

  return (
    <div>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <Title level={3} style={{ margin: 0 }}>
            <GlobalOutlined style={{ marginRight: '8px' }} />
            {symbol} 相关新闻
          </Title>
          <Button
            type="primary"
            onClick={() => window.location.reload()}
            size="small"
          >
            刷新
          </Button>
        </div>

        <Divider />

        <List
          dataSource={news}
          renderItem={(item, index) => {
            const sentiment = getNewsSentiment(item.title, item.summary);

            return (
              <List.Item key={index} className="news-item">
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <Title level={5} style={{ margin: 0, flex: 1, marginRight: '16px' }}>
                      {item.title}
                    </Title>
                    <Tag color={sentiment.color} style={{ marginLeft: '8px' }}>
                      {sentiment.text}
                    </Tag>
                  </div>

                  <Paragraph
                    ellipsis={{ rows: 3, expandable: true, symbol: '展开' }}
                    style={{ marginBottom: '12px', color: '#666' }}
                  >
                    {item.summary}
                  </Paragraph>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Space size="small">
                      <Space size="small">
                        <ClockCircleOutlined />
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {formatDate(item.publishedAt)}
                        </Text>
                      </Space>
                      <Divider type="vertical" />
                      <Space size="small">
                        <CalendarOutlined />
                        <Text type="secondary" style={{ fontSize: '12px' }}>
                          {item.source}
                        </Text>
                      </Space>
                    </Space>

                    <Button
                      type="link"
                      size="small"
                      icon={<LinkOutlined />}
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      阅读原文
                    </Button>
                  </div>
                </div>
              </List.Item>
            );
          }}
        />

        {news.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
            <GlobalOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
            <div>暂无相关新闻</div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default NewsPanel;
