import { marketDataService } from "../api/services/marketDataService";
import AnalyzeInput from "@/components/AnalyzeInput";
import PriceData from "@/components/data/PriceData";
import QuoteData from "@/components/data/QuoteData";
import Headlines from "@/components/data/Headlines";
import PriceTargetSummaryDisplay from "@/components/data/PriceTargetSummaryDisplay.tsx";
import BrokerageRecommendationsTable from "@/components/data/BrokerageRecommendationsTable";
import BrokerageRatingsVisual from "@/components/data/BrokerageRatingsVisual";

export default async function AnalyzePage({
  searchParams,
}: {
  searchParams: { ticker?: string };
}) {
  const ticker = (await searchParams).ticker || "";
  let marketDataJson = null;

  if (ticker) {
    marketDataJson = await marketDataService.getMarketData(ticker);
  }
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center p-16 text-center">
        <AnalyzeInput />

        {ticker ? (
          marketDataJson ? (
            <>
              <PriceData priceData={marketDataJson.priceData} />
              <PriceTargetSummaryDisplay
                priceTargetSummary={marketDataJson.priceTargetSummary}
              />
              <QuoteData quoteData={marketDataJson.quoteData} />
              <BrokerageRatingsVisual
                brokerageRatingCountData={marketDataJson.brokerageRatingCounts}
              />
              <BrokerageRecommendationsTable
                brokerageRatingCountData={marketDataJson.brokerageRatingCounts}
              />
              <Headlines headlines={marketDataJson.headlines} />
            </>
          ) : (
            <p className="mt-24 p-10 rounded-md bg-red-900/50 border border-red-700 text-red-300">
              No data found for &quot;{ticker}&quot;
              <br /> <br /> Possible reasons include:
              <ul className="list-disc list-inside text-left">
                <li>Invalid ticker symbol</li>
                <li>Connection issues</li>
                <li>Data source issue</li>
              </ul>
            </p>
          )
        ) : (
          <p className="mt-24 p-10 rounded-md bg-yellow-900/50 border border-yellow-700 text-yellow-300">
            Please enter a ticker symbol above.
            <br />
            e.g. AAPL, MSFT, GOOGL
          </p>
        )}
      </main>
    </div>
  );
}
