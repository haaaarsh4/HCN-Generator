"use client";

import { genHCN } from "@/lib/healthCardGenerator";
import { Github } from 'lucide-react';
import { useState } from "react";

export default function Home() {
  const [hcns, setHcns] = useState<string[]>([]);
  const [copiedIndices, setCopiedIndices] = useState<Set<number>>(new Set());

  const handleGenerate = () => {
    const formatted: string[] = [];
    for (let i = 0; i < 20; i++) {
      const raw = genHCN().toString()
      const formattedHCN = raw.slice(0,4) + '-' + raw.slice(4,7) + '-' + raw.slice(7,10) 
      formatted.push(formattedHCN);
    }
    setHcns(formatted);
    setCopiedIndices(new Set()); // Clear copied when regenerating
  };

  const handleCopy = (hcn: string, index: number) => {
    navigator.clipboard.writeText(hcn);
    setCopiedIndices((prev) => new Set(prev).add(index));
  };

  return (
      <div className="flex flex-col items-center min-h-screen p-8">
        <div className="flex flex-row">
          <a 
            className="mt-3 px-4"
            href="https://github.com/haaaarsh4/HCN-Generator"
            target="_blank"
            title="View on GitHub">
            <Github />
          </a>
          <h1 className="text-5xl font-bold text-center mb-8">Canadian Health Card Numbers</h1>
        </div>
        <div className="max-w-2xl text-center mb-8">
          <h2 className="bg-red-700 text-white p-2 rounded mb-4">Disclaimer!</h2>
          <p>
            This tool is designed to assist with testing government and financial software that requires valid Canadian Health Card Numbers. Using fake Canadian Health Card Numbers for any other purpose may constitute a federal crime.
          </p>
        </div>
        <button
          onClick={handleGenerate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Generate
        </button>
        {hcns.length > 0 && (
          <div className="w-full max-w-4xl">
            <h3 className="text-2xl font-semibold text-center mb-4">Generated Health Card Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {hcns.map((hcn, index) => (
                <div
                  key={index}
                  className={`text-l font-mono p-4 rounded cursor-pointer transition-all duration-200 text-center
                    ${copiedIndices.has(index)
                      ? "line-through text-red-600 bg-red-100"
                      : "bg-gray-100 hover:bg-gray-200"}`}
                  onClick={() => handleCopy(hcn, index)}
                  title="Click to copy"
                >
                  {hcn}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
  );
}