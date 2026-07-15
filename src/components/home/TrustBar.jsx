import React from 'react';
const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];
  return (
    <div className="bg-[#faf9f6] border-y border-gray-100 py-4 overflow-hidden">
      <div className="flex justify-around md:justify-center md:gap-20 items-center px-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-gray-500 whitespace-nowrap">
              {item}
            </span>
            {idx !== items.length - 1 && (
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrustBar;
