import React from 'react';

const ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <section className="bg-espresso text-cream border-t border-b border-espresso-soft">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <ul className="flex items-stretch justify-between flex-wrap divide-x divide-espresso-soft">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex-1 min-w-[50%] sm:min-w-0 py-5 md:py-4 px-3 md:px-6 flex items-center justify-center text-center"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-sans text-cream">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
