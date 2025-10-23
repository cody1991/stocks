import React, { useState, useEffect } from 'react';
import { Card, List, Alert, Typography, Tag, Button, Space, Divider, Spin } from 'antd';
import { CalendarOutlined, LinkOutlined, GlobalOutlined, ClockCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { getNewsData } from '../data/stocksData';
import moment from 'moment';

const { Title, Text, Paragraph } = Typography;

interface NewsPanelProps {
  symbol: string;
}

const NewsPanel: React.FC<NewsPanelProps> = ({ symbol }) => {
  const [news, setNews] = useState(getNewsData(symbol));
  const [loading, setLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // 刷新新闻数据
  const refreshNews = async () => {
    setLoading(true);
    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 重新获取新闻数据
      const refreshedNews = getNewsData(symbol);
      setNews(refreshedNews);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('刷新新闻失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 当symbol变化时更新新闻
  useEffect(() => {
    setNews(getNewsData(symbol));
    setLastRefresh(new Date());
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

  if (!news || news.length === 0) {
    return (
      <Alert
        message="暂无新闻数据"
        description="当前没有可用的新闻信息"
        type="info"
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              最后更新: {moment(lastRefresh).format('HH:mm:ss')}
            </Text>
            <Button
              type="primary"
              icon={<ReloadOutlined />}
              onClick={refreshNews}
              loading={loading}
              size="small"
            >
              刷新新闻
            </Button>
          </div>
        </div>

        <Divider />

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Spin size="large" />
            <div style={{ marginTop: '16px' }}>正在刷新新闻...</div>
          </div>
        ) : (
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
        )}

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
