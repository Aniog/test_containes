import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-section lg:py-section-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mb-3">Find Your Style</p>
          <h2 className="section-heading">Shop by Category</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-all duration-500 group-hover:translate-y-[-4px]">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">{cat.name}</h3>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-sans opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Shop Now <ArrowRight className="w-3 h-3" />
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