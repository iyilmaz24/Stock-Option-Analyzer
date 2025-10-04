export default function AnalyzeInput() {
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
        <input
          type="text"
          placeholder="Enter ticker, e.g., TSLA"
          className="w-full sm:flex-grow bg-gray-800 border-2 border-gray-700 text-white rounded-lg px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 transition-colors"
        />
        <button className="w-full sm:w-auto mt-2 sm:mt-0 px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-transform transform hover:scale-105">
          Analyze
        </button>
      </div>
      <p className="text-gray-400">
        Enter a stock ticker to get a detailed analysis report.
      </p>
    </div>
  );
}
