import React from 'react';
import { trustItems } from '../../data/products';

const TrustBar = () => {
  return (
    <div className="border-b border-border bg-surface">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-[11px] font-medium uppercase tracking-widest text-ink-secondary md:text-xs">
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
