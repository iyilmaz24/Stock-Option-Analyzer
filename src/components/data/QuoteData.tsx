import { QuoteDataT } from "@/types/marketData";

export default function QuoteDataDisplay({
  quoteData,
}: {
  quoteData: QuoteDataT | null;
}) {
  if (!quoteData) {
    return (
      <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700">
        <p className="text-gray-400">Quote data could not be loaded.</p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-6">Key Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
        {/* 52 Week Range */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">52 Week Range</p>
          <p className="text-lg font-mono text-white">
            {quoteData.week52Range || "N/A"}
          </p>
        </div>

        {/* Market Cap */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Market Cap</p>
          <p className="text-lg font-mono text-white">
            {/* {formatMarketCap(quoteData.marketCap)} */}
            {quoteData.marketCap}
          </p>
        </div>

        {/* P/E Ratio (TTM) */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">P/E Ratio (TTM)</p>
          <p className="text-lg font-mono text-white">
            {quoteData.peRatio ? quoteData.peRatio.toFixed(2) : "N/A"}
          </p>
        </div>

        {/* Forward P/E */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Forward P/E</p>
          <p className="text-lg font-mono text-white">
            {quoteData.forwardPE ? quoteData.forwardPE.toFixed(2) : "N/A"}
          </p>
        </div>

        {/* Dividend Yield */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Dividend Yield</p>
          <p className="text-lg font-mono text-white">
            {quoteData.dividendYield
              ? `${quoteData.dividendYield.toFixed(2)}%`
              : "N/A"}
          </p>
        </div>

        {/* Beta */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Beta (5Y)</p>
          <p className="text-lg font-mono text-white">
            {quoteData.beta ? quoteData.beta.toFixed(2) : "N/A"}
          </p>
        </div>

        {/* Earnings Date */}
        <div className="flex flex-col col-span-2 md:col-span-1">
          <p className="text-sm text-gray-400">Earnings Date</p>
          <p className="text-lg font-mono text-white">
            {quoteData.earningDate || "N/A"}
          </p>
        </div>
      </div>
    </section>
  );
}
