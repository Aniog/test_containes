import React from 'react';

const TrustBar = () => {
  const benefits = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-secondary border-b border-muted/30 py-4 overflow-hidden">
      <div className="flex items-center justify-center space-x-8 md:space-x-16 animate-marquee whitespace-nowrap px-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="w-1 h-1 bg-accent rounded-full" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans text-muted-foreground">
              {benefit}
            </span>
          </div>
        ))}
        {/* Duplicate for marquee effect on mobile if needed, but here we just center it */}
      </div>
    </div>
  );
};

export default TrustBar;
