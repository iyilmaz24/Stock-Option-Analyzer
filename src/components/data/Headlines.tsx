import { HeadlinesT } from "@/types/marketData";

export default function Headlines({ headlines }: { headlines: HeadlinesT[] }) {
  return (
    <div>
      <h2>Headlines</h2>
      <ul>
        {headlines.map((headline) => (
          <li key={headline.url}>
            <a href={headline.url}>{headline.headline}</a>
            <p>Source: {headline.source}</p>
            <p>Date: {new Date(headline.datetime).toLocaleString()}</p>
            {headline.summary && <p>Summary: {headline.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
