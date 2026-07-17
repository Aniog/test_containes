import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: 'M5 13l4 4L19 7', label: 'Free Worldwide Shipping' },
    { icon: 'M16 15v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 012-2h11', label: '30-Day Returns' },
    { icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7', label: '18K Gold Plated' },
    { icon: 'M9 12l2 2 4-4m5.618-4.01A11.953 11.953 0 005.196 5.196a11.953 11.953 0 00-1.618 5.01M5.196 18.804a11.953 11.953 0 005.01 1.618m5.618-4.01a11.953 11.953 0 01-5.01-1.618m0 0a11.954 11.954 0 01-1.618-5.01M18.804 5.196a11.953 11.953 0 00-5.01-1.618', label: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[#FAF8F5] border-y border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-[#8A8580]">
              <svg className="w-5 h-5 text-[#C9A96E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
