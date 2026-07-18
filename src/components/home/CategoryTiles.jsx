import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary mb-3">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              {/* Background image */}
              <div
                data-strk-bg-id={`category-${category.id}-bg`}
                data-strk-bg={`[${category.id}-tile-label] gold jewelry ${category.label.toLowerCase()} elegant editorial`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-gradient-to-b from-surface-alt to-border transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span
                  id={`${category.id}-tile-label`}
                  className="font-serif text-2xl md:text-3xl text-white block mb-1"
                >
                  {category.label}
                </span>
                <div className="flex items-center gap-2 text-white/70 group-hover:text-gold transition-colors duration-300">
                  <span className="text-xs uppercase tracking-widest-xl">Explore</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
