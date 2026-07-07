import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone md:aspect-square">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              data-strk-img-id="velmora-story-img"
              data-strk-img="[story-title] [story-subtitle] jewelry atelier"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold">
              Our Story
            </span>
            <h2
              id="story-title"
              className="mt-4 font-serif text-3xl font-medium leading-tight md:text-4xl lg:text-5xl"
            >
              Quiet Luxury, Worn Daily
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-base leading-relaxed text-velmora-espresso-light"
            >
              Velmora was born from a love of heirlooms and a belief that fine
              jewelry should feel accessible. We design demi-fine pieces in
              small, thoughtful batches — using 18k gold plating, responsibly
              sourced crystals, and finishes meant to last beyond the season.
            </p>
            <p className="mt-4 text-base leading-relaxed text-velmora-espresso-light">
              Every piece is made to be gifted, collected, and eventually passed
              down. Not because it is precious in price alone, but because it
              carries meaning.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-velmora-espresso transition-colors hover:text-velmora-gold"
            >
              Discover the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
