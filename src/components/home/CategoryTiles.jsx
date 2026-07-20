import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/products";

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">
          Find your perfect piece
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-cream"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-all duration-500 group-hover:scale-105">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wider uppercase">
                    {cat.name}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase font-sans border-b border-white/40 pb-0.5 transition-all duration-300 group-hover:border-white">
                    Shop Now
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}