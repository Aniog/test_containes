import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-b border-[#E5DFD6] bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.15em] text-[#6B5F57]">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              {index < items.length - 1 && (
                <span className="hidden md:inline text-[#E5DFD6]">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
