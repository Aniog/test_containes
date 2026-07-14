import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-velmora-img"
              data-strk-img="artisan hands crafting gold jewelry warm studio light editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="font-sans text-xs tracking-widest-3xl uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-black leading-tight mb-6">
              Jewelry That<br />Feels Like You
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="font-sans text-sm md:text-base text-velmora-slate leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury shouldn't require a compromise. We create demi-fine jewelry in 18K gold plating that looks and feels exquisite — without the fine-jewelry price tag.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-slate leading-relaxed mb-8">
              Each piece is designed in our studio, crafted with hypoallergenic materials, and made to be worn every single day. Because the best jewelry isn't locked in a box — it's part of your story.
            </p>
            <Link
              to="/shop"
              className="inline-block font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-gold border-b-2 border-velmora-gold pb-1 hover:text-velmora-gold-dark hover:border-velmora-gold-dark transition-colors duration-300"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
