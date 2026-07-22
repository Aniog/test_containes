import React from "react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-center">Our Story</h1>
          <p className="mt-4 text-stone-500 text-center max-w-2xl mx-auto">
            Quiet luxury, thoughtfully designed.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide">Crafted with Intention</h2>
            <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
              <p>
                Velmora was founded on the belief that jewelry should be both beautiful and meaningful. Each piece in our collection is designed to be worn every day, to become part of your story.
              </p>
              <p>
                We work with skilled artisans who share our commitment to quality and sustainability. Our 18K gold-plated pieces are crafted from recycled brass, and our crystals are ethically sourced.
              </p>
              <p>
                From our studio to your jewelry box, we ensure every detail meets our exacting standards. Because you deserve pieces that feel as good as they look.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block mt-8 px-8 py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.15em] hover:bg-stone-800 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
