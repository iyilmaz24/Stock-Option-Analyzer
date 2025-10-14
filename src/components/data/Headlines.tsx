import { HeadlineT } from "@/types/marketData";

export default function Headlines({
  headlines,
}: {
  headlines: HeadlineT[] | null;
}) {
  // If headlines are null or empty, display a message.
  if (!headlines || headlines.length === 0) {
    return (
      <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
        <h3 className="text-2xl font-bold text-gray-200 mb-4">
          Related Headlines
        </h3>
        <p className="text-gray-400">
          No recent headlines were found for this ticker.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl my-4 p-6 rounded-lg bg-gray-800/50 border border-gray-700 text-left">
      <h3 className="text-2xl font-bold text-gray-200 mb-4">
        Related Headlines
      </h3>

      {/* Scrollable container for the list */}
      <div className="max-h-[30rem] overflow-y-auto pr-2">
        <ul className="space-y-4">
          {headlines.map((headline, index) => (
            <li
              key={headline.url + index}
              className="p-4 rounded-md bg-gray-900/50 border border-gray-700 hover:bg-gray-800/60 transition-colors"
            >
              <a
                href={headline.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-400 hover:text-blue-300 hover:underline"
              >
                {headline.headline}
              </a>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                <span>{headline.source}</span>
                <span>{headline.datetime}</span>
              </div>
              {headline.summary && (
                <p className="mt-2 text-gray-300">{headline.summary}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
