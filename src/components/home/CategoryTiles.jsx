import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_TILES } from "@/data/products";
import Reveal from "@/components/ui/Reveal";
import StockImage from "@/components/ui/StockImage";
import { ArrowUpRight } from "lucide-react";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="vm-eyebrow text-ink-muted">Shop by Category</p>
              <h2 className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05]">
                Three rituals.{" "}
                <span className="italic font-light">Worn forever.</span>
              </h2>
            </div>
            <p className="text-sm md:text-base text-ink-muted max-w-sm md:text-right">
              Begin with a daily stack, then layer as the collection grows with you.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((tile, i) => (
            <Reveal key={tile.slug} delay={i * 120}>
              <Link
                to={`/shop?category=${tile.slug}`}
                className="group relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-cream-200"
              >
                <StockImage
                  imgId={`cat-${tile.slug}`}
                  query={tile.imgQuery}
                  ratio="3x4"
                  width="900"
                  alt={`${tile.label} category`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                <div className="absolute inset-x-5 md:inset-x-8 bottom-6 md:bottom-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="vm-eyebrow text-cream/75">{tile.blurb}</p>
                    <h3 className="vm-display text-cream text-3xl md:text-4xl mt-2">{tile.label}</h3>
                  </div>
                  <span className="w-11 h-11 grid place-items-center rounded-full bg-cream/95 text-ink transition-all duration-500 ease-editorial group-hover:bg-gold group-hover:text-cream">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
                  </span>
                </div>
                <span className="absolute inset-0 ring-0 ring-cream/0 group-hover:ring-1 group-hover:ring-cream/30 transition-all duration-700" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
