import React from "react";

// expected shape of the rank string (e.g., "1-StrongBuy", "3-Hold")
type ZRankString = `${number}-${string}`;

// Helper to parse the rank number and text
const parseZRank = (
  rankString: ZRankString | null | undefined
): { number: number; text: string } | null => {
  if (!rankString) return null;
  const parts = rankString.split("-");
  if (parts.length < 2) return null;
  const number = parseInt(parts[0]);
  // Rejoin any remaining parts in case the text has hyphens
  const text = parts.slice(1).join("-");
  if (isNaN(number)) return null;
  return { number, text };
};

// Define colors for the rank bars
const rankColors: { [key: number]: string } = {
  1: "bg-green-700 border-green-500", // Strong Buy
  2: "bg-green-800 border-green-600", // Buy
  3: "bg-yellow-700 border-yellow-500", // Hold
  4: "bg-red-800 border-red-600", // Sell
  5: "bg-red-900 border-red-700", // Strong Sell
};

// Labels for the legend
const rankLabels: { [key: number]: string } = {
  1: "Strong Buy",
  2: "Buy",
  3: "Hold",
  4: "Sell",
  5: "Strong Sell",
};

export default function ZRankDisplay({ zRank }: { zRank: string | null }) {
  const parsedRank = parseZRank(zRank as ZRankString | null);

  return (
    <section className="w-full h-fit max-w-sm my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-center">
      {parsedRank ? (
        <div className="flex justify-evenly items-center gap-8">
          <div className="text-xs text-gray-400 space-y-1 text-left">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Z-Rank:
            </h3>
            {[1, 3, 5].map((num) => (
              <p key={num}>
                <span className="font-semibold">{num}</span> = {rankLabels[num]}
              </p>
            ))}
          </div>
          {/* Visual Rank Indicator */}
          <div className="flex flex-col justify-evenly h-28 text-lg font-semibold">
            {rankLabels[parsedRank.number]}
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((rankNum) => (
                <div
                  key={rankNum}
                  className={`w-8 h-8 flex items-center justify-center rounded border text-sm font-semibold transition-all duration-300
                                    ${
                                      parsedRank.number === rankNum
                                        ? `${rankColors[rankNum]} text-white scale-110 shadow-lg`
                                        : "bg-gray-700 border-gray-600 text-gray-400"
                                    }`}
                >
                  {rankNum === parsedRank.number ? rankNum : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-400">N/A</p>
      )}
    </section>
  );
}
