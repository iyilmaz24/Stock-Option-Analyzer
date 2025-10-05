export interface PriceDataT {
  ticker: string;
  price: number;
  change: number;
  updatedAt: string;
  afterHoursPrice?: number;
}

export interface QuoteDataT {
  week52High: number;
  week52Low: number;
  marketCap: number;
  forwardPE: number;
  dividendYield: number;
  expectedSurprise: number;
  earningDate: string;
  beta: number;
}

export interface HeadlinesT {
  source: string;
  headline: string;
  url: string;
  datetime: string;
  summary?: string;
}

export interface MarketDataJsonT {
  priceData: PriceDataT;
  quoteData: QuoteDataT;
  headlines: HeadlinesT[];
}
