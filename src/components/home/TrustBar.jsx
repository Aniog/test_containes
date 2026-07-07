import React from 'react';

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-[var(--velmora-bg-alt)] border-y border-[var(--velmora-border)]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && (
                <span className="hidden md:block text-[var(--velmora-border)]">·</span>
              )}
              <span className="text-xs tracking-widest uppercase text-[var(--velmora-text-muted)]">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
