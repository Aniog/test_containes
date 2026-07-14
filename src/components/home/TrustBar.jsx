import React from 'react';

const TrustBar = () => {
  const benefits = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-white border-b py-4 overflow-hidden">
      <div className="flex justify-around items-center gap-8 px-6">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase tracking-widest text-[9px] font-bold text-gray-500">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
