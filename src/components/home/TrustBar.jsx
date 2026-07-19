import React from 'react';
const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];
  return (
    <div className="bg-[#1A1A1A] text-white py-4 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap">
        {items.map((item, idx) => (
          <React.Fragment key={item}>
            <span>{item}</span>
            {idx < items.length - 1 && <span className="text-white/20 px-4">·</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default TrustBar;
