import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="hairline bg-white">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-6 py-4 md:gap-10">
          {items.map((item) => (
            <span key={item} className="text-xs uppercase tracking-wide-custom text-[#5c5650]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
