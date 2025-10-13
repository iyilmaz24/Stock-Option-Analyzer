import { HeadlineT } from "@/types/marketData";

export default function Headlines({ headlines }: { headlines: HeadlineT[] }) {
  return (
    <div>
      <h2>Related Headlines</h2>
      <ul>
        {headlines.map((headline) => (
          <li key={headline.url}>
            <a href={headline.url}>{headline.headline}</a>
            <p>Source: {headline.source}</p>
            {headline.datetime}
            {headline.summary && <p>Summary: {headline.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
