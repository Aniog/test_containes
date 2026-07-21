import React from 'react';

export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-[#F5F0EB] py-3 md:py-4">
      <div className="container-luxury">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-12">
          {items.map((item, i) => (
            <React.Fragment key={item}>
              <span className="text-[11px] md:text-xs uppercase tracking-[0.15em] text-[#1A1A1A] font-medium">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:inline-block w-1 h-1 rounded-full bg-[#C9A96E]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
