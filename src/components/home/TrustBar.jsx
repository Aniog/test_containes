import React from 'react';

const TrustBar = () => {
  const benefits = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <div className="bg-stone-100 py-4 border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs md:text-sm tracking-wider uppercase text-stone-600 font-medium text-center">
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <span>{benefit}</span>
              {index < benefits.length - 1 && (
                <span className="text-gold-500 hidden md:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;