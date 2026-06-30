import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Artwork from "@/components/ui/Artwork";
import { CATEGORIES } from "@/data/products";

export default function HomeShopByCategory() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
        <div>
          <div className="label-eyebrow text-mute mb-3">Shop</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
            Find your forever piece.
          </h2>
        </div>
        <Link
          to="/shop"
          className="text-xs tracking-[0.22em] uppercase text-ink hover:text-gold-dark transition-colors underline-grow self-start md:self-auto"
        >
          Shop All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat.slug}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-bone img-zoom"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Artwork
              variant="category"
              category={cat.slug}
              tone="deep"
              className="absolute inset-0 w-full h-full"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(180deg, rgba(31,26,23,0.10) 0%, rgba(31,26,23,0.0) 35%, rgba(31,26,23,0.45) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-ivory">
              <div className="font-display text-3xl md:text-4xl tracking-wide">
                {cat.name}
              </div>
              <div className="mt-1 text-[11px] tracking-[0.32em] uppercase text-ivory/80">
                {cat.blurb}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase text-ivory opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Shop
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
