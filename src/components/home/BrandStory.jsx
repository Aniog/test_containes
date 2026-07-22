import React from "react"
import { Link } from "react-router-dom"

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Our Story</h2>
            <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, ethical, and designed for real life.
              </p>
              <p>
                Every piece is crafted in small batches using 18K gold-plated brass and ethically sourced crystals. We work with skilled artisans who share our commitment to quality and sustainability.
              </p>
              <p>
                From our studio to your jewelry box, we ensure every detail meets our exacting standards — because you deserve pieces that feel as good as they look.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 px-8 py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-[0.15em] hover:bg-stone-900 hover:text-white transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
