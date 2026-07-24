import React from 'react';

const TrustBar = () => {
  const items = [
    "Free Worldwide Shipping",
    "30-Day Returns",
    "18K Gold Plated",
    "Hypoallergenic"
  ];

  return (
    <section className="bg-velmora-charcoal text-velmora-cream py-3 border-y border-white/5 overflow-hidden">
      <div className="flex justify-around items-center px-4 md:px-0">
        {items.map((item, idx) => (
          <React.Fragment key={item}>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                {item}
              </span>
            </div>
            {idx < items.length - 1 && (
              <div className="hidden md:block w-1 h-1 rounded-full bg-velmora-gold opacity-30" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
