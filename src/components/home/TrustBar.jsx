import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="border-y border-[var(--velmora-border)] bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[var(--velmora-taupe)] uppercase">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="hidden sm:inline text-[var(--velmora-border)]">·</span>}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
