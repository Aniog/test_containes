import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-28 pb-16 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-text-primary">
            Our Story
          </h1>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>

        <div className="aspect-16x9 bg-cream rounded-sm overflow-hidden mb-12">
          <img
            data-strk-img-id="about-hero-g7h8i9"
            data-strk-img="artisan crafting gold jewelry studio"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora Studio"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <p className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed mb-6">
            Velmora was born from a simple belief: that fine jewelry shouldn't require a fine-art budget.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
            Founded in 2022, we set out to bridge the gap between costume jewelry and luxury — creating pieces that feel as special as the real thing, at a price that lets you build a collection without compromise.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
            Every piece in our collection is crafted with 18K gold plating over solid brass or sterling silver, using hypoallergenic materials that are gentle on even the most sensitive skin. Our designs draw from both timeless elegance and contemporary minimalism — jewelry that transcends seasons and trends.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-8">
            From our studio to your jewelry box, each piece passes through the hands of artisans who believe that the details make the difference. Because you deserve jewelry that's crafted to be treasured.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-muted-gold text-warm-black px-10 py-3.5 text-xs font-medium uppercase tracking-ultra-wide hover:bg-bright-gold transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </main>
  )
}
