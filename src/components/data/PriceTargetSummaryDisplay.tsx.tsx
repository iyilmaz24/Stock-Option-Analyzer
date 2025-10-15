import { PriceTargetSummaryT } from "@/types/marketData";

// Helper function to format numbers as currency
const formatCurrency = (value: number | null | undefined) => {
  if (value === null || value === undefined) return "N/A";
  return `$${value.toFixed(2)}`;
};

// Helper function to get HTML <div/> displaying percent change
const getPercentChangeDiv = (
  value: number | null | undefined,
  originalValue: number | null | undefined
) => {
  if (
    value === null ||
    value === undefined ||
    originalValue === null ||
    originalValue === undefined
  )
    return (
      <>
        <div className="text-gray-300 flex items-center">N/A</div>
      </>
    );

  if (value == originalValue) {
    return (
      <>
        <div className="text-gray-300 flex items-center">
          {((value / originalValue - 1) * 100).toFixed(2)}%
        </div>
      </>
    );
  }

  if (value > originalValue) {
    return (
      <>
        <div className="text-green-400 flex items-center">
          {((value / originalValue - 1) * 100).toFixed(2)}% Upside
        </div>
      </>
    );
  }

  if (value < originalValue) {
    return (
      <>
        <div className="text-red-400 flex items-center">
          {((originalValue / value - 1) * 100).toFixed(2)}% Downside
        </div>
      </>
    );
  }
};

export default function PriceTargetSummaryDisplay({
  priceTargetSummary,
}: {
  priceTargetSummary: PriceTargetSummaryT | null;
}) {
  if (!priceTargetSummary) {
    return (
      <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
        <h3 className="text-2xl font-bold text-gray-200 mb-4">
          Analyst Price Targets
        </h3>
        <p className="text-gray-400">
          Price target summary data is not available for this ticker.
        </p>
      </section>
    );
  }

  const { analystCount, current, average, high, low } = priceTargetSummary;

  return (
    <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-4">
        Analyst Price Targets
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        Based on forecasts from {analystCount || "N/A"} analysts.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-gray-700/50 p-4 rounded-md">
          <p className="text-sm text-gray-400">Low</p>
          <p className="flex justify-between">
            <div className="text-2xl font-semibold text-white">
              {formatCurrency(low)}
            </div>
            {getPercentChangeDiv(low, current)}
          </p>
        </div>
        <div className="bg-gray-700/50 p-4 rounded-md">
          <p className="text-sm text-gray-400">Average</p>
          <p className="flex justify-between">
            <div className="text-2xl font-semibold text-white">
              {formatCurrency(average)}
            </div>
            {getPercentChangeDiv(average, current)}
          </p>
        </div>
        <div className="bg-gray-700/50 p-4 rounded-md">
          <p className="text-sm text-gray-400">High</p>
          <p className="flex justify-between">
            <div className="text-2xl font-semibold text-white">
              {formatCurrency(high)}
            </div>
            {getPercentChangeDiv(high, current)}
          </p>
        </div>
      </div>
    </section>
  );
}
