import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    subtitle: 'Studs, Drops & Statements',
    search: 'gold earrings collection display on dark velvet luxury jewelry',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    subtitle: 'Chains, Pendants & Chokers',
    search: 'gold necklace collection draped on dark surface luxury jewelry',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    subtitle: 'Hoops & Huggie Earrings',
    search: 'gold huggie hoop earrings collection on dark background luxury',
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-surface-ivory section-padding section-padding-y">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-overline uppercase text-brand-gold mb-3">Browse</p>
          <h2 className="font-serif text-heading-2 text-text-dark tracking-[0.03em]">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
            >
              {/* Background */}
              <div
                className="absolute inset-0"
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`${category.name.toLowerCase()} gold jewelry collection`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              >
                <div className="w-full h-full bg-gradient-to-br from-surface-cream to-brand-gold-pale/20" />
              </div>

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-surface-primary/0 group-hover:bg-surface-primary/40 transition-all duration-500" />

              {/* Label - always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl lg:text-3xl text-text-dark group-hover:text-white tracking-[0.05em] mb-2 transition-colors duration-500">
                    {category.name}
                  </h3>
                  <p className="font-sans text-caption text-text-dark-secondary group-hover:text-white/70 transition-colors duration-500 tracking-wide">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
