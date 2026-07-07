import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import JewelryArt from "@/components/ui/JewelryArt"

const BrandStory = () => {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <JewelryArt
                art="storyArt"
                palette="midnight"
                ratio="4/5"
                className="h-full w-full"
              />
              <div className="absolute bottom-5 left-5 px-3 py-1.5 bg-ivory/90 text-ink text-[10px] font-sans uppercase tracking-[0.18em]">
                Atelier · Lisbon
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink max-w-xl">
              Designed slowly. Made to outlast the season.
            </h2>
            <p className="mt-6 text-[15px] sm:text-base text-muted leading-relaxed max-w-xl">
              Velmora began as a love letter to demi-fine jewelry — pieces with the
              presence of fine jewelry, designed to be lived in. Each collection is
              shaped around the way women actually wear jewelry: layered, gifted,
              kept for years.
            </p>
            <p className="mt-4 text-[15px] sm:text-base text-muted leading-relaxed max-w-xl">
              We work with small ateliers in Portugal and Thailand, plating each
              piece in 18K gold over a solid brass core, then hand-finishing it for
              warmth, weight and longevity.
            </p>
            <Link to="/about" className="link-arrow mt-8 group">
              Our Story
              <ArrowRight
                size={12}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
