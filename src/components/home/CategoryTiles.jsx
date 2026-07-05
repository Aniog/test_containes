import React from 'react';
import { Link } from 'react-router-dom';

const tiles = [
  {
    label: 'Earrings',
    href: '/shop?category=earrings',
    accent: 'from-velmora-gold/20',
  },
  {
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    accent: 'from-velmora-gold-light/20',
  },
  {
    label: 'Huggies',
    href: '/shop?category=earrings',
    accent: 'from-velmora-gold/20',
  },
];

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-muted mb-4">
          Discover
        </p>
        <h2 className="section-heading">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.label}
            to={tile.href}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-velmora-charcoal to-velmora-dark ${tile.accent}`} />

            {/* Decorative element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-velmora-gold/10 font-serif text-8xl tracking-widest select-none">
                V
              </span>
            </div>

            {/* Label overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {tile.label}
                </span>
                <div className="mt-3 w-0 group-hover:w-10 h-px bg-velmora-gold mx-auto transition-all duration-500" />
              </div>
            </div>

            {/* Bottom label (always visible) */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-cream group-hover:text-velmora-gold transition-colors">
                {tile.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}