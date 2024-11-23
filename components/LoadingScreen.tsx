'use client';
import Image from 'next/image';
import letterThrower from '/public/letter-thrower.png';


export function LoadingScreen() {
  const text = 'Analysing...';
  const regex = /./g;
        
  return (
    <div className="fixed inset-0 bg-peach-100 flex flex-col items-center bg-peach-200 justify-center z-50" style={{opacity: 0.9}}>
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
      <Image src={letterThrower} alt="person throwing around letters" width={200} height={200} />
        <div className="flex justify-center space-x-2">
        <h2 className="text-4xl font-bold text-gray-800">
          {text.match(regex)!.map((char, index) => (
            <span
              key={`${char}-${index}`}
             className="inline-block animate-pulse"
             style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
            ))}
          </h2>
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