import { PriceDataT } from "@/types/marketData";
import React from "react";

export default function PriceDataDisplay({
  priceData,
}: {
  priceData: PriceDataT | null;
}) {
  if (!priceData) {
    return (
      <section className="w-fit max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700">
        <p className="text-gray-400">Price data could not be loaded.</p>
      </section>
    );
  }

  const isPositiveChange = priceData.change >= 0;

  return (
    <section className="w-fit max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-40">
        {/* Ticker and Price */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-white">{priceData.ticker}</h2>
          <div className="flex items-end gap-4 mt-2">
            <p className="text-5xl font-mono font-bold text-white">
              ${priceData.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Daily Change */}
        <div
          className={`text-right mt-4 md:mt-0 px-4 py-2 rounded-md ${
            isPositiveChange ? "bg-green-900/50" : "bg-red-900/50"
          }`}
        >
          <p
            className={`text-3xl font-mono font-semibold ${
              isPositiveChange ? "text-green-300" : "text-red-300"
            }`}
          >
            {isPositiveChange ? "+" : ""}
            {priceData.change.toFixed(2)}
          </p>
          <p
            className={`text-lg ${
              isPositiveChange ? "text-green-400" : "text-red-400"
            }`}
          >
            ({priceData.changePercent})
          </p>
        </div>
      </div>

      {/* After Hours and Timestamp */}
      <div className="mt-6 pt-4 border-t border-gray-700 text-left text-sm text-gray-400">
        {priceData.afterHoursPrice && (
          <p>
            After-Hours:{" "}
            <span className="font-mono text-white">
              ${priceData.afterHoursPrice.toFixed(2)}
            </span>
          </p>
        )}
        <p className="mt-1">Last Updated: {priceData.updatedAt}</p>
      </div>
    </section>
  );
}
