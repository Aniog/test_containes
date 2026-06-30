import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', label: 'Earrings', image: 'category-earrings' },
  { id: 'necklaces', label: 'Necklaces', image: 'category-necklaces' },
  { id: 'huggies', label: 'Huggies', image: 'category-huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="text-stone text-xs tracking-widest uppercase mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-warm-100 overflow-hidden"
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-200/60 via-warm-100 to-warm-50" />
              <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/20 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-charcoal/80 tracking-wider
                                 group-hover:text-charcoal transition-all duration-500
                                 group-hover:scale-105">
                  {cat.label}
                </span>
              </div>

              {/* Bottom line accent on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-warm-500
                              group-hover:w-1/3 transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
