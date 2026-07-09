import React from "react"
import { Link } from "react-router-dom"
import { getImgUrl } from "@/lib/imgConfig"


export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-editorial mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              src={getImgUrl("story-img-2c8e1f")}
              alt="Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-4">Our Story</p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Made by hand,
              <br />
              made to last
            </h2>
            <p
              id="story-text"
              className="text-stone text-base mt-6 leading-relaxed"
            >
              Velmora began with a simple belief: that fine jewelry shouldn't
              require a special occasion. We design demi-fine pieces in 18K gold
              plating — hand-finished, hypoallergenic, and made to be worn every
              single day. Each piece is considered, from the first sketch to the
              final polish, so it can be treasured for years.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block border border-ink text-ink text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
