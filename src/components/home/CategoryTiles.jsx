import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import ProductImage from "@/components/product/ProductImage";

export default function CategoryTiles() {
  return (
    <section id="categories" className="bg-cream-50 py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Shop by category</p>
          <h2
            id="cat-title"
            className="font-serif font-light text-ink-900 text-[36px] md:text-[56px] leading-[1.02]"
          >
            Find <span className="italic">your</span> piece
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?cat=${cat.id}`}
              className="group relative aspect-square md:aspect-[4/5] overflow-hidden bg-cocoa-800"
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-luxury group-hover:scale-[1.05]">
                <ProductImage artwork={cat.artwork} tone="gold" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/70 via-cocoa-900/0 to-cocoa-900/0 group-hover:from-cocoa-900/85 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8">
                <p className="eyebrow-light text-gold-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.description}
                </p>
                <h3 className="font-serif font-light text-cream-50 text-[32px] md:text-[42px] leading-none">
                  {cat.name}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-btn text-cream-50 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Shop {cat.name.toLowerCase()}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
