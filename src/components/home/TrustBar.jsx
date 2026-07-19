import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-white border-y border-[#E8E4DE] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs tracking-[0.15em] text-[#6B665F]">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              {index < items.length - 1 && (
                <span className="hidden md:inline text-[#E8E4DE]">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
