# 股票分析平台

一个基于 React 和 Ant Design 构建的现代化股票分析平台，专注于 NVDA 和 NBIS 两只股票的真实数据分析。

## 功能特性

### 📊 核心功能

- **股票概览**: 实时股价、涨跌幅、成交量等关键指标
- **新闻消息**: 相关新闻聚合，支持情感分析
- **基本面分析**: 财务数据、盈利能力、估值指标分析
- **价格走势**: 交互式图表展示历史价格数据
- **板块信息**: 行业分析、竞争对手对比、市场份额
- **投资建议**: 基于多维度数据的投资评分和建议
- **关联股票**: 相关股票推荐和投资组合建议

### 🎨 界面特色

- 响应式设计，支持桌面和移动端
- 现代化 UI 设计，使用 Ant Design 组件库
- 直观的数据可视化
- 实时数据更新
- 侧边栏导航，便于快速切换功能

### 📈 数据来源

- **Yahoo Finance API**: 获取实时股价、财务数据、新闻等
- **真实数据**: 所有展示的数据都来自真实的股票市场
- **智能分析**: 基于真实数据进行的投资分析和建议

## 技术栈

- **前端框架**: React 18 + TypeScript
- **UI 组件库**: Ant Design 5.x
- **图表库**: Recharts
- **HTTP 客户端**: Axios
- **日期处理**: Moment.js
- **构建工具**: Create React App

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/          # React组件
│   ├── StockNavigation.tsx    # 股票导航
│   ├── StockInfo.tsx          # 股票基本信息
│   ├── NewsPanel.tsx          # 新闻面板
│   ├── FundamentalAnalysis.tsx # 基本面分析
│   ├── PriceChart.tsx         # 价格图表
│   ├── SectorInfo.tsx         # 板块信息
│   ├── InvestmentAdvice.tsx   # 投资建议
│   └── RelatedStocks.tsx      # 关联股票
├── data/               # 结构化数据
│   └── stocksData.ts   # 股票数据配置
├── services/           # API服务
│   └── stockApi.ts     # 股票数据API
├── App.tsx             # 主应用组件
├── App.css             # 样式文件
└── index.tsx           # 应用入口
```

## 主要组件说明

### StockInfo - 股票概览

- 实时股价和涨跌幅
- 关键财务指标
- 公司基本信息
- 交易数据统计

### NewsPanel - 新闻消息

- 相关新闻聚合
- 情感分析标签
- 新闻来源和时间
- 原文链接

### FundamentalAnalysis - 基本面分析

- 收入与利润分析
- 盈利能力指标(ROE, ROA)
- 估值指标(P/E, P/B)
- 财务健康度评估

### PriceChart - 价格走势

- 交互式价格图表
- 移动平均线
- 技术指标分析
- 波动性分析

### SectorInfo - 板块信息

- 行业分析
- 竞争对手对比
- 市场份额分析
- 增长驱动因素

### InvestmentAdvice - 投资建议

- 综合投资评分
- 风险评级
- 分析师目标价
- 操作建议

### RelatedStocks - 关联股票

- 相关性分析
- 投资组合建议
- 行业分布
- 评级分布

## API 配置

项目使用 Yahoo Finance API 获取股票数据。该 API 是免费的，无需 API 密钥：

1. **实时股价**: 通过 Yahoo Finance Quote API 获取
2. **财务数据**: 获取 P/E、P/B、ROE、ROA 等关键指标
3. **历史价格**: 获取 30 天的历史价格数据
4. **新闻数据**: 获取相关新闻（如果 API 支持）

**注意事项**：

- Yahoo Finance API 可能有使用限制和 CORS 问题
- 在生产环境中，建议使用后端服务器代理请求
- 某些数据（如分析师评级、关联股票）需要额外的数据源

## 支持的股票

目前支持以下股票：

- **NVDA**: NVIDIA Corporation (AI 芯片龙头)
- **NBIS**: NBI Systems Inc. (生物技术公司)
- **AAPL**: Apple Inc. (科技巨头)
- **TSLA**: Tesla Inc. (电动汽车)

## 添加新股票

系统采用结构化数据设计，添加新股票非常简单：

1. 在 `src/data/stocksData.ts` 中添加股票数据
2. 无需修改任何组件代码
3. 新股票会自动出现在导航栏中

详细步骤请参考 [ADD_NEW_STOCK.md](./ADD_NEW_STOCK.md)

## 特色功能

### 智能分析

- 基于真实财务数据的投资评分
- 多维度风险评估
- 相关性分析
- 投资组合优化建议

### 结构化数据设计

- 所有股票数据集中管理
- 添加新股票无需修改代码
- 数据与 UI 完全分离
- 易于维护和扩展

### 真实 API 集成

- 使用 Yahoo Finance API 获取实时数据
- 无 mock 数据，所有信息都是真实的
- 智能加载状态和错误处理
- 支持多种股票数据源

### 数据可视化

- 交互式价格图表
- 进度条展示关键指标
- 颜色编码的数据状态
- 响应式图表设计

### 用户体验

- 侧边栏折叠/展开
- 快速股票切换
- 实时数据更新
- 移动端适配

## 开发说明

### 添加新股票

1. 在 `src/data/stocksData.ts` 中添加新股票选项
2. 按照现有格式添加所有必要的数据字段
3. 新股票会自动出现在导航栏中

### 自定义样式

- 主要样式在 `App.css` 中定义
- 组件级样式使用内联样式
- 支持 Ant Design 主题定制

### 数据结构扩展

- 在 `stocksData.ts` 中扩展接口定义
- 在相应的数据对象中添加新字段
- 在组件中使用新字段（可选）

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---

**注意**: 本项目仅用于学习和演示目的，不构成投资建议。投资有风险，入市需谨慎。
