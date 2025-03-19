"use client";

import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

export function BetaBanner() {
  const [isVisible, setIsVisible] = useState(true);


  if (!isVisible) return null;

  return (
    <div
      className="bg-peach-150 rounded-lg p-4 mt-6 relative shadow-sm max-w-4xl m-auto"
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 p-2.5 rounded-full hover:bg-accent/20 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4 text-foreground/70" />
      </button>
      
      <div className="flex items-start gap-4">
        <div className="bg-accent/20 rounded-full flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-accent" />
        </div>
        <div className="text-sm">
          <p className="text-muted-foreground">
            This is a beta version of the tool. If you encounter any issues, please let us know at{' '}
            <a
              href="mailto:team@chayn.co"
              className="text-accent hover:underline"
            >team@chayn.co</a>
          </p>
        </div>
      </div>
    </div>
  );
}