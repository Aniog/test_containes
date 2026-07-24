import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const categoryImages = {
  earrings: "gold earrings collection editorial warm lighting on display",
  necklaces: "gold necklace chain collection elegant jewelry display",
  huggies: "gold huggie earrings collection minimal styling",
};

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-mega-wide uppercase text-gold mb-3 font-sans font-medium">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-5" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.slug}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden"
            >
              {/* Background image */}
              <div
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={categoryImages[category.id]}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 bg-espresso transition-transform duration-700 group-hover:scale-105"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold/15" />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-1">
                    {category.name}
                  </h3>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans group-hover:text-gold-light transition-colors">
                    Shop Now
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
