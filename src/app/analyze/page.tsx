import AnalyzeInput from "@/components/AnalyzeInput";

export default function AnalyzePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center p-16 text-center">
        <AnalyzeInput />
      </main>
    </div>
  );
}
