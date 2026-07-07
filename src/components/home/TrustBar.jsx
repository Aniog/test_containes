import React from 'react';

const TrustBar = () => {
  const benefits = [
    { title: 'Free Worldwide Shipping' },
    { title: '30-Day Returns' },
    { title: '18K Gold Plated' },
    { title: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-secondary/50 py-4 border-b border-border">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-16 text-center">
          {benefits.map((benefit, index) => (
            <li 
              key={index}
              className="text-xs uppercase tracking-widest text-muted-foreground font-medium flex items-center gap-4"
            >
              {benefit.title}
              {index < benefits.length - 1 && (
                <span className="hidden md:inline-block text-border mx-4">&middot;</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrustBar;
