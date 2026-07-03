import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  return (
    <section
      aria-labelledby="story-title"
      className="bg-sand-100 py-20 md:py-28"
    >
      <div className="container-velmora">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory md:aspect-[4/5]">
            <img
              alt="A goldsmith's bench — the work behind every Velmora piece."
              data-strk-img-id="brand-story-img-4a7b1c"
              data-strk-img="[story-tagline] [story-title] [story-body] goldsmith bench jewelry workshop warm light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-sand-300/40" />
          </div>

          <div>
            <p
              id="story-tagline"
              className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-stone-300"
            >
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-3 font-serif text-[34px] leading-[1.05] tracking-tight text-espresso sm:text-[44px] md:text-[56px]"
            >
              Quietly made.{" "}
              <span className="italic text-champagne-500">Worn for years.</span>
            </h2>
            <p
              id="story-body"
              className="mt-6 max-w-md text-[15px] leading-relaxed text-stone-300"
            >
              We started Velmora with a single belief: fine jewelry shouldn't
              live behind a velvet rope. Every piece is hand-finished in small
              batches — 18K gold plating, hypoallergenic cores, and the kind of
              weight that says <em className="text-espresso">"I'll be in your
              jewelry box for a long time."</em>
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-stone-300">
              No markups. No seasonal drops designed to be replaced. Just
              demi-fine gold, made well, priced honestly.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-[12px] font-medium uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-champagne-500"
            >
              Read Our Story
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
