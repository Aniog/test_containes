import React from 'react';

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase font-sans text-white/70">
                {item}
              </span>
              {index < trustItems.length - 1 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
