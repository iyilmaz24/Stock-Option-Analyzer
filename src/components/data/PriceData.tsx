import { PriceDataT } from "@/types/marketData";
import React from "react";

export default function PriceData({ priceData }: { priceData: PriceDataT }) {
  return (
    <div>
      <h2>Price Data for {priceData.ticker}</h2>
      <p>Current Price: ${priceData.price}</p>
      <p>Change: {priceData.change}</p>
      <p>Change Percent: {priceData.changePercent}</p>
      <p>Last Updated: {priceData.updatedAt}</p>
      {priceData.afterHoursPrice && (
        <p>
          After Hrs. / Overnight Price: ${priceData.afterHoursPrice || "N/A"}
        </p>
      )}
    </div>
  );
}
