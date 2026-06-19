import React from 'react';

const TrustBar = () => {
  const points = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-muted py-4 px-6 md:px-12 border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
        {points.map((point, index) => (
          <div key={point} className="flex items-center">
            {index !== 0 && <span className="mr-4 hidden md:inline opacity-30">·</span>}
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
