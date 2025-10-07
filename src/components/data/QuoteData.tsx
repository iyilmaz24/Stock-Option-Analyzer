import { QuoteDataT } from "@/types/marketData";

export default function QuoteData({ quoteData }: { quoteData: QuoteDataT }) {
  return (
    <div>
      <h2>Quote Data</h2>
      <p>52 Week Range: {quoteData.week52Range}</p>
      <p>Market Cap: {quoteData.marketCap}</p>
      <p>P/E: {quoteData.peRatio}</p>
      <p>Trailing P/E: {quoteData.trailingPE}</p>
      <p>Forward P/E: {quoteData.forwardPE}</p>
      <p>
        Dividend Yield:{" "}
        {quoteData.dividendYield ? `${quoteData.dividendYield}` : "N/A"}
      </p>
      <p>Expected Surprise: {quoteData.expectedSurprise}</p>
      <p>Earnings Date: {quoteData.earningDate}</p>
      <p>Beta: {quoteData.beta}</p>
    </div>
  );
}
