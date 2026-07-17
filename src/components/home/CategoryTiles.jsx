import React from 'react';
import { Link } from 'react-router-dom';

const tiles = [
  {
    label: 'Earrings',
    href: '/shop?category=earrings',
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    img: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&q=80',
  },
  {
    label: 'Huggies',
    href: '/shop?category=huggies',
    img: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&q=80',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-ultra uppercase text-warm-gray mb-3">Shop By Category</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">Find Your Signature</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.href}
              className="group relative aspect-[4/5] bg-sand-light rounded-sm overflow-hidden"
            >
              <img
                src={tile.img}
                alt={tile.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl lg:text-3xl text-cream tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transform">
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
