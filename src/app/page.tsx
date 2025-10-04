import Image from "next/image";
import AnalyzeInput from "@/components/AnalyzeInput";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center py-20 gap-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/bull-bear-logo.png"
            alt="Bull and Bear logo"
            width={192}
            height={160}
          />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Unlock Detailed Insights
          </h2>
          <p className="text-gray-400 max-w-xl">
            Your all-in-one solution for aggregating stock data, analyzing
            options chains, and streamlining your investment research process.
          </p>
        </div>

        <AnalyzeInput />
      </main>
    </div>
  );
}
