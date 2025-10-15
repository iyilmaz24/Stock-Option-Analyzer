export interface PriceDataT {
  ticker: string;
  price: number;
  change: number;
  changePercent: string;
  updatedAt: string;
  afterHoursPrice?: number;
}

export interface QuoteDataT {
  week52Range: string;
  marketCap: string;
  peRatio: number;
  trailingPE: number;
  forwardPE: number;
  dividendYield: number;
  expectedSurprise: number;
  earningDate: string;
  beta: number;
}

export interface HeadlineT {
  source: string;
  headline: string;
  url: string;
  datetime: string;
  summary?: string;
}

export interface PriceTargetSummaryT {
  analystCount: number | null;
  current: number | null;
  average: number | null;
  high: number | null;
  low: number | null;
}

export interface BrokerageRatingCountsT {
  strongBuy: number | null;
  buy: number | null;
  hold: number | null;
  sell: number | null;
  strongSell: number | null;
  averageBrokerageRecommendation: number | null;
}

export interface AnalystForecastT {
  date: string | null;
  brokerage: string | null;
  analyst: string | null;
  rating: string | null;
  priceTarget: number | null;
  upsideDownsidePercent: number | null;
  previousRating: string | null;
  previousPriceTarget: number | null;
}

export interface MarketDataJsonT {
  priceData: PriceDataT;
  quoteData: QuoteDataT;
  headlines: HeadlineT[];
  zInfo: string;
  priceTargetSummary: PriceTargetSummaryT;
  brokerageRatingCounts: BrokerageRatingCountsT;
  analystForecasts: AnalystForecastT[];
}
