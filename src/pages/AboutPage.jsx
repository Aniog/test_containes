import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase text-charcoal">
            Our Story
          </h1>
          <div className="w-12 h-px bg-champagne mx-auto mt-4" />
        </div>

        <div className="space-y-8 text-stone-600 leading-relaxed">
          <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed">
            Velmora was born from a simple belief: that fine jewelry should be accessible,
            wearable, and made to last.
          </p>

          <p>
            We started with a question — why does beautiful jewelry have to cost a fortune?
            The traditional jewelry industry marks up prices by 8–10x, making demi-fine pieces
            feel out of reach for most women. We knew there had to be a better way.
          </p>

          <p>
            By working directly with artisan jewelers and selling exclusively online, we eliminate
            the middlemen and pass the savings on to you. Every Velmora piece is crafted with
            18K gold plating over sterling silver — the same quality you'd find at traditional
            retailers, but at a fraction of the price.
          </p>

          <p>
            Our designs are inspired by the women who wear them: confident, understated, and
            effortlessly elegant. Whether it's a pair of huggies for your morning coffee run
            or a statement necklace for a special evening, Velmora pieces are designed to
            transition seamlessly through every moment of your day.
          </p>

          <p>
            We're committed to sustainability in everything we do — from responsibly sourced
            materials to minimal, recyclable packaging. Because luxury shouldn't come at the
            expense of the planet.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-champagne text-white px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-champagne-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
