import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3">
            Categories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900">
            Shop by Category
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-taupe-100"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-3xl md:text-4xl text-cream-50 font-light mb-3">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-cream-50/80 text-sm uppercase tracking-wider font-sans">
                    Shop Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}