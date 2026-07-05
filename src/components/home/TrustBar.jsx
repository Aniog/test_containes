import React from 'react';

export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <React.Fragment key={item}>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-amber-700 rounded-full" />
                <span className="text-xs tracking-[0.15em] text-gray-700 uppercase">
                  {item}
                </span>
              </div>
              {index < trustItems.length - 1 && (
                <div className="hidden md:block w-px h-4 bg-gray-300" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
