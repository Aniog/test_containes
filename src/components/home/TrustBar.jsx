import React from 'react';
import { trustItems } from '@/data/products';

const TrustBar = () => {
  return (
    <div className="bg-cream-200 py-4">
      <div className="container-narrow">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal-light">
                {item}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-taupe-dark">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
