import React from 'react';

const TrustBar = () => {
  const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'];
  return (
    <div className="border-b border-brand-divider bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium uppercase tracking-widest text-brand-muted md:gap-10">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-brand-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrustBar;
