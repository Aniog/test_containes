import React from "react";

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic",
  ];

  return (
    <div className="border-b border-gray-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-[11px] font-medium tracking-widest uppercase text-gray-600">
          {items.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-gold-700" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
