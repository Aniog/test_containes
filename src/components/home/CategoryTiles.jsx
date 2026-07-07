import React from "react"
import { Link } from "react-router-dom"
import { collections } from "@/data/products"
import JewelryArt from "@/components/ui/JewelryArt"

const CategoryTiles = () => {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-wrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((c) => (
            <Link
              key={c.id}
              to={`/shop?cat=${c.id}`}
              className="group relative block overflow-hidden bg-ink aspect-[3/4]"
            >
              <JewelryArt
                art={c.art}
                palette={
                  c.id === "earrings"
                    ? "aubergine"
                    : c.id === "necklaces"
                      ? "midnight"
                      : "sand"
                }
                ratio="3/4"
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-ivory p-6">
                <span className="eyebrow text-ivory/80">Shop</span>
                <h3 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-2 text-[12px] sm:text-[13px] font-sans text-ivory/80 max-w-[12rem]">
                  {c.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.22em] text-ivory border-b border-ivory/60 pb-1 group-hover:border-ivory transition-colors duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
