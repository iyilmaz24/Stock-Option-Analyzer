import { BrokerageRatingCountsT } from "@/types/marketData";

// A mapping to display friendly names for each rating category.
const ratingLabels: {
  [key in keyof Omit<
    BrokerageRatingCountsT,
    "averageBrokerageRecommendation"
  >]: string;
} = {
  strongBuy: "Strong Buy",
  buy: "Buy",
  hold: "Hold",
  sell: "Sell",
  strongSell: "Strong Sell",
};

// A React component to display the brokerage rating counts in a table.
export default function BrokerageRecommendationsTable({
  brokerageRatingCountData,
}: {
  brokerageRatingCountData: BrokerageRatingCountsT | null;
}) {
  // If no data is available, show a placeholder message
  if (!brokerageRatingCountData) {
    return (
      <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
        <h3 className="text-2xl font-bold text-gray-200 mb-4">
          Brokerage Recommendations
        </h3>
        <p className="text-gray-400">
          Brokerage recommendation data is not available for this ticker.
        </p>
      </section>
    );
  }

  const ratingsOrder: (keyof typeof ratingLabels)[] = [
    "strongBuy",
    "buy",
    "hold",
    "sell",
    "strongSell",
  ];

  return (
    <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-4">
        Brokerage Recommendations
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-gray-600">
            <tr>
              <th
                scope="col"
                className="py-3 pr-3 text-sm font-semibold text-gray-300"
              >
                Rating
              </th>
              <th
                scope="col"
                className="py-3 px-3 text-sm font-semibold text-gray-300 text-right"
              >
                Count
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {ratingsOrder.map((key) => (
              <tr key={String(key)}>
                <td className="py-3 pr-3 text-base text-gray-200">
                  {ratingLabels[key]}
                </td>
                <td className="py-3 px-3 text-base text-white font-mono text-right">
                  {brokerageRatingCountData[key] ?? "N/A"}
                </td>
              </tr>
            ))}
            {/* Special row for the Average Brokerage Recommendation (ABR) */}
            <tr className="border-t-2 border-gray-500">
              <td className="py-3 pr-3 text-base font-semibold text-gray-200">
                Average Recommendation
              </td>
              <td className="py-3 px-3 text-base text-white font-bold font-mono text-right">
                {brokerageRatingCountData.averageBrokerageRecommendation?.toFixed(
                  2
                ) ?? "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-400">
          Scale: 1 (Strong Buy) to 5 (Strong Sell)
        </p>
      </div>
    </section>
  );
}
