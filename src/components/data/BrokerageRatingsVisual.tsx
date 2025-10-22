"use client"; // Recharts is a client-side library

import { BrokerageRatingCountsT } from "@/types/marketData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  strongBuy: "#0F5A04FF",
  buy: "#578E06FF",
  hold: "#757575FF",
  sell: "#D53B1FFF",
  strongSell: "#740404FF",
};

const ratingLabels: { [key in keyof typeof COLORS]: string } = {
  strongBuy: "Strong Buy",
  buy: "Buy",
  hold: "Hold",
  sell: "Sell",
  strongSell: "Strong Sell",
};

const ratingsOrder: (keyof typeof COLORS)[] = [
  "strongSell",
  "sell",
  "hold",
  "buy",
  "strongBuy",
];

export default function BrokerageRatingsVisual({
  brokerageRatingCountData,
}: {
  brokerageRatingCountData: BrokerageRatingCountsT | null;
}) {
  if (!brokerageRatingCountData) {
    return null;
  }

  // A stacked bar chart needs the data in a specific format. We create an array
  // with a single object that holds all the counts.
  const chartData = [
    {
      name: "Current", // This is the label for the single bar on the X-axis
      strongBuy: brokerageRatingCountData.strongBuy || 0,
      buy: brokerageRatingCountData.buy || 0,
      hold: brokerageRatingCountData.hold || 0,
      sell: brokerageRatingCountData.sell || 0,
      strongSell: brokerageRatingCountData.strongSell || 0,
    },
  ];

  // Check if there is any data to display
  const totalRatings = ratingsOrder.reduce(
    (sum, key) => sum + chartData[0][key],
    0
  );

  if (totalRatings === 0) {
    return (
      <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
        <h3 className="text-2xl font-bold text-gray-200 mb-4">
          Ratings Distribution
        </h3>
        <p className="text-gray-400">No analyst rating counts were found.</p>
      </section>
    );
  }

  // Filter the ratings to only include those with a count greater than 0
  const activeRatings = ratingsOrder.filter((key) => chartData[0][key] > 0);

  return (
    <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-4">
        Ratings Distribution
      </h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            layout="horizontal" // horizontal for vertical bars
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
            <XAxis type="category" dataKey="name" stroke="#a0aec0" />
            <YAxis type="number" stroke="#a0aec0" />
            <Tooltip
              cursor={{ fill: "rgba(128, 128, 128, 0.1)" }}
              contentStyle={{
                backgroundColor: "#2d3748",
                borderColor: "#4a5568",
                borderRadius: "0.5rem",
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Legend />
            {/* Create a <Bar> for each rating type that has a value > 0 */}
            {activeRatings.map((key) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="a"
                name={ratingLabels[key]}
                fill={COLORS[key]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
