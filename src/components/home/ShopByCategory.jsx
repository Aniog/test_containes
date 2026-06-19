import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_TILES } from "@/lib/products";
import JewelryImage from "@/components/ui/JewelryImage";

export default function ShopByCategory() {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 md:py-28">
        <div className="mb-12 md:mb-16 max-w-xl">
          <p className="eyebrow">Shop By Category</p>
          <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
            Find your everyday piece.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((tile) => (
            <CategoryTile key={tile.slug} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ tile }) {
  return (
    <Link
      to={`/shop?category=${tile.slug}`}
      className="group relative block aspect-[3/4] md:aspect-[3/4] overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <JewelryImage id={tile.image} className="w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.05]" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
        <h3 className="font-serif text-3xl md:text-4xl text-ivory leading-none">
          {tile.label}
        </h3>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-soft/60 text-ivory transition-all duration-500 ease-editorial group-hover:bg-gold group-hover:border-gold group-hover:text-ink">
          <ArrowUpRight className="w-4 h-4" strokeWidth={1.4} />
        </span>
      </div>
      {/* hover caption */}
      <div className="absolute inset-x-0 top-6 px-6 md:px-8">
        <span className="font-sans text-[10px] uppercase tracking-widest2 text-gold-soft/0 group-hover:text-gold-soft transition-colors duration-500">
          Shop {tile.label}
        </span>
      </div>
    </Link>
  );
}
