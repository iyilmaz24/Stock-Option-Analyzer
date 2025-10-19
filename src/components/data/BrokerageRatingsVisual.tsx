"use client"; // Recharts is a client-side library

import { BrokerageRatingCountsT } from "@/types/marketData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = {
  strongBuy: "#0E4C03FF",
  buy: "#4F7F08FF",
  hold: "#E0A800FF",
  sell: "#FF2600FF",
  strongSell: "#7A1919FF",
};

const ratingLabels: { [key in keyof typeof COLORS]: string } = {
  strongBuy: "Strong Buy",
  buy: "Buy",
  hold: "Hold",
  sell: "Sell",
  strongSell: "Strong Sell",
};

const ratingsOrder: (keyof typeof COLORS)[] = [
  "strongBuy",
  "buy",
  "hold",
  "sell",
  "strongSell",
];

export default function BrokerageRatingsVisual({
  brokerageRatingCountData,
}: {
  brokerageRatingCountData: BrokerageRatingCountsT | null;
}) {
  if (!brokerageRatingCountData) {
    // Return null or a placeholder if there's no data
    return null;
  }

  // Transform the data into the format Recharts expects
  const chartData = ratingsOrder
    .map((key) => ({
      name: ratingLabels[key],
      value: brokerageRatingCountData[key] || 0,
    }))
    .filter((item) => item.value > 0); // Only include ratings with a count > 0

  // If there are no ratings at all, don't render the chart
  if (chartData.length === 0) {
    return (
      <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
        <h3 className="text-2xl font-bold text-gray-200 mb-4">
          Ratings Distribution
        </h3>
        <p className="text-gray-400">No analyst rating counts were found.</p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-4">
        Ratings Distribution
      </h3>
      {/* Use ResponsiveContainer to make the chart fit its parent */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[ratingsOrder[index]]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937", // gray-800
                borderColor: "#4b5563", // gray-600
                borderRadius: "0.5rem",
              }}
              labelStyle={{ color: "#d1d5db" }} // gray-300
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
