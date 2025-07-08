"use client";

import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (!notes.trim()) return;
    
    setIsLoading(true);
    // TODO: Add AI integration here
    setTimeout(() => {
      setSummary("This is a placeholder summary. AI integration will be added next!");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            AI Note Summarizer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Transform your notes into concise, intelligent summaries
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Input Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <label htmlFor="notes" className="block text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Paste your notes here
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter your notes, lecture content, or any text you'd like to summarize..."
              className="w-full h-64 md:h-80 p-4 border border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSummarize}
                disabled={!notes.trim() || isLoading}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Summarizing...
                  </div>
                ) : (
                  "Summarize"
                )}
              </button>
            </div>
          </div>

          {/* Result Section */}
          {summary && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                AI Summary
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 md:p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {summary}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500 dark:text-gray-400">
          <p>Powered by AI • Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
