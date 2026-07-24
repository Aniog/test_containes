import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ProductArt } from "@/components/decor/JewelryArt";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CategoryTiles() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        <div className="reveal">
          <SectionHeader
            eyebrow="Shop by Category"
            title="Find your everyday"
            align="center"
          />
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream-dark reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 transition-transform duration-[1200ms] ease-elegant group-hover:scale-105">
                <ProductArt imageKey={cat.imageKey} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                <h3 className="font-serif text-3xl md:text-4xl text-bone tracking-wide-2">
                  {cat.name}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-wide-3 text-bone/85 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-elegant">
                  Shop the edit
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
