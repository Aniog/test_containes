import React from 'react';
import { Link } from 'react-router-dom';

const categoryTiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    href: '/shop?category=earrings',
    query: 'gold earrings jewelry collection dark elegant',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    href: '/shop?category=necklaces',
    query: 'gold necklaces jewelry collection dark elegant',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    href: '/shop?category=huggies',
    query: 'gold huggie hoop earrings jewelry collection dark elegant',
    ratio: '3x4',
    width: 600,
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 section-padding">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-2 font-sans">
            Explore
          </p>
          <h2 className="text-heading-1 text-charcoal-800">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.id}
                data-strk-img={cat.query}
                data-strk-img-ratio={cat.ratio}
                data-strk-img-width={cat.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-heading-2 text-cream-100 mb-1 group-hover:text-gold-400 transition-colors duration-300">
                  {cat.name}
                </h3>
                <span className="text-body-sm uppercase tracking-[0.1em] text-cream-400 group-hover:text-cream-200 transition-colors">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
