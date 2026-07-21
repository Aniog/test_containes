import React from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import SectionHeading from "@/components/SectionHeading"
import { StockImage } from "@/components/StockImage"
import { CATEGORIES } from "@/data/products"

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Find Your Signature"
          sub="Three collections, one golden thread — each piece designed to layer, gift, and live in."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className={`group relative block overflow-hidden bg-surface ${
                i === 0 ? "aspect-[4/5] sm:col-span-2 sm:aspect-[2/1] md:col-span-1 md:aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <StockImage
                imgId={`category-tile-${cat.id}-4e8b`}
                query={`${cat.label} ${cat.blurb} fine gold jewelry styled flat lay on warm neutral linen editorial`}
                ratio="4x5"
                width={720}
                alt={cat.label}
                className="transition-transform duration-700 ease-luxe group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-6">
                <div className="translate-y-0 transition-transform duration-500 ease-luxe md:translate-y-8 md:group-hover:translate-y-0">
                  <h3 className="bg-background/95 px-4 py-2.5 font-serif text-lg font-medium uppercase tracking-[0.2em] text-foreground">
                    {cat.label}
                  </h3>
                  <p className="mt-2 hidden max-w-[24ch] text-xs leading-relaxed text-[#F3EDE2] opacity-0 transition-opacity duration-500 md:block md:group-hover:opacity-100">
                    {cat.blurb}
                  </p>
                </div>
                <span className="mb-1 flex h-10 w-10 items-center justify-center bg-accent text-accent-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
