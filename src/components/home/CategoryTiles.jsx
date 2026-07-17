import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-gold text-xs uppercase tracking-[0.15em] mb-2">Categories</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0eb] mb-10">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded bg-[#141414]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0eb] mb-1">{category.name}</h3>
                <p className="text-xs text-[#a09890] uppercase tracking-[0.08em]">
                  {category.count} {category.count === 1 ? 'Style' : 'Styles'}
                </p>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gold/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-4 h-4 text-gold" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}