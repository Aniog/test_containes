import React from 'react';

const TrustBar = () => {
  const benefits = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-secondary/50 py-4 border-b border-t">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-2">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground whitespace-nowrap">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
