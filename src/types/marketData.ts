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

export interface MarketDataJsonT {
  priceData: PriceDataT;
  quoteData: QuoteDataT;
  headlines: HeadlineT[];
}
