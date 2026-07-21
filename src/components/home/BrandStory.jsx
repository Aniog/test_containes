import React from "react"
import { Link } from "react-router-dom"
import { StockImage } from "@/components/StockImage"

export default function BrandStory() {
  return (
    <section className="border-y border-line bg-surface/60 py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8 lg:gap-24">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-surface">
            <StockImage
              imgId="brand-story-atelier-3c9a"
              query="jewelry atelier artisan hands crafting gold necklace warm workshop light editorial photography"
              ratio="4x5"
              width={900}
              alt="The Velmora atelier"
              className="transition-transform duration-700 ease-luxe hover:scale-[1.03]"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 bg-accent px-6 py-5 text-accent-foreground md:-right-6">
            <p className="font-serif text-3xl leading-none">2.5µ</p>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em]">
              Gold Plating
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-deep">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-foreground md:text-[2.6rem] md:leading-[1.15]">
            Heirloom feeling,
            <br />
            <span className="italic text-accent-deep">without the heirloom price.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Velmora began at a small workbench with a simple frustration: beautiful gold jewelry
              was either plated so thinly it faded in weeks, or priced so high it lived in a safe.
            </p>
            <p>
              So we chose a third path — demi-fine. A generous 2.5-micron layer of 18k gold over
              recycled brass, finished by hand, and priced honestly between $30 and $120. Pieces
              made for daily rituals, not special occasions.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent-deep hover:text-accent-deep"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
