import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Earrings', href: '/shop/earrings', label: 'EARRINGS' },
    { name: 'Necklaces', href: '/shop/necklaces', label: 'NECKLACES' },
    { name: 'Huggies', href: '/shop/huggies', label: 'HUGGIES' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <Link key={idx} to={cat.href} className="relative aspect-square group overflow-hidden bg-muted">
            <img 
              data-strk-img-id={`category-tile-${cat.name.toLowerCase()}`}
              data-strk-img={`close up luxury gold ${cat.name.toLowerCase()} dynamic composition`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xs font-bold tracking-[0.4em] uppercase border-b border-white pb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {cat.label}
              </span>
            </div>
            {/* Desktop Label (initially hidden) */}
            <div className="absolute bottom-6 left-6 md:opacity-100 group-hover:md:opacity-0 transition-opacity">
              <span className="text-white text-lg font-serif tracking-widest uppercase md:drop-shadow-lg">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
