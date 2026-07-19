import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import ProductImage from "@/components/product/ProductImage";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Shop by category</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Find your everyday heirloom
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-sand"
            >
              <ProductImage
                imgId={cat.imgId}
                query={`${cat.name} ${cat.description} gold jewelry`}
                ratio="4x5"
                width={800}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmBlack/65 via-warmBlack/10 to-transparent transition-opacity duration-500 group-hover:from-warmBlack/80" />

              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end text-ivory">
                <p className="font-sans text-[10px] uppercase tracking-widest2 text-ivory/80 mb-2">
                  {cat.description}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide">
                  {cat.name}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-ivory/85 group-hover:text-ivory">
                  Shop the edit
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
