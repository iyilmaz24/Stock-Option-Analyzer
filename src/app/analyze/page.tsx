import AnalyzeInput from "@/components/AnalyzeInput";
import { marketDataService } from "../api/services/marketDataService";
import PriceData from "@/components/data/PriceData";
import QuoteData from "@/components/data/QuoteData";
import Headlines from "@/components/data/Headlines";

export default function AnalyzePage() {
  const marketDataJson = marketDataService.getMarketData("AAPL");

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center p-16 text-center">
        <AnalyzeInput />

        <PriceData priceData={marketDataJson.priceData} />
        <QuoteData quoteData={marketDataJson.quoteData} />
        <Headlines headlines={marketDataJson.headlines} />
      </main>
    </div>
  );
}
