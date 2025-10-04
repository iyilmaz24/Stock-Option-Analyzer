import Image from "next/image";
import Link from "next/link";

export default function AnalyzePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="w-full bg-gray-950/50 backdrop-blur-sm border-b border-gray-700 shadow-lg flex items-center justify-between px-14 sm:px-18">
        <div className="flex items-center gap-4 px-4 sm:px-6 h-20">
          <Image
            src="/bull-bear-logo.png"
            alt="Bull and Bear logo"
            width={96}
            height={80}
          />
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-200">
            Stock Option Analyzer
          </h1>
        </div>
        <div className="flex items-center gap-4 px-4 sm:px-6 h-20">
          <Link
            href="/"
            className="text-gray-200 font-bold hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-200 font-bold hover:text-white transition-colors"
          >
            About
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        Hello World
      </main>
    </div>
  );
}
