import { QuoteDataT } from "@/types/marketData";

export default function QuoteData({ quoteData }: { quoteData: QuoteDataT }) {
  return (
    <div>
      <h2>Quote Data</h2>
      <p>Week 52 High: {quoteData.week52High}</p>
      <p>Week 52 Low: {quoteData.week52Low}</p>
      <p>Market Cap: {quoteData.marketCap}</p>
      <p>Forward P/E: {quoteData.forwardPE}</p>
      <p>Dividend Yield: {quoteData.dividendYield}</p>
      <p>Expected Surprise: {quoteData.expectedSurprise}</p>
      <p>Earnings Date: {quoteData.earningDate}</p>
      <p>Beta: {quoteData.beta}</p>
    </div>
  );
}
