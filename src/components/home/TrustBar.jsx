import React from 'react';

const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="border-b border-espresso/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 md:justify-between md:px-8">
        {ITEMS.map((item, i) => (
          <React.Fragment key={item}>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cocoa md:text-[11px]">
              {item}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="hidden h-3 w-px bg-espresso/15 md:block" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
