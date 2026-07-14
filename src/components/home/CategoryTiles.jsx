import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-superwide font-medium mb-3">
            Browse by Category
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl uppercase tracking-wider text-charcoal">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-beige"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="font-cormorant text-xl uppercase tracking-wider text-charcoal flex items-center gap-2">
                    {category.name}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:hidden bg-gradient-to-t from-black/50 to-transparent">
                <span className="font-cormorant text-lg text-white uppercase tracking-wider">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}