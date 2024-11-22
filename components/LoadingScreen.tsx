'use client';

import { Quote } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-pink-100 bg-opacity-95 flex flex-col items-center justify-center z-50">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        <div className="flex justify-center space-x-2">
          <Quote className="w-8 h-8 text-pink-400 transform rotate-180" />
          <h2 className="text-4xl font-bold text-gray-800">Analysing...</h2>
          <Quote className="w-8 h-8 text-pink-400" />
        </div>
        
        <div className="animate-pulse flex justify-center">
          <div className="w-3 h-3 bg-pink-300 rounded-full mx-1"></div>
          <div className="w-3 h-3 bg-pink-300 rounded-full mx-1 animate-pulse delay-150"></div>
          <div className="w-3 h-3 bg-pink-300 rounded-full mx-1 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
}