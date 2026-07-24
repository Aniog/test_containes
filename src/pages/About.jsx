import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-warm-white pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl tracking-heading uppercase text-warm-black">
            Our Story
          </h1>
          <div className="mt-3 w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-base text-muted leading-relaxed">
            Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. Every piece in our collection is crafted with 18K gold plating over sterling silver, designed to be worn daily — from morning coffee to evening dinner — and still look as radiant as the day you first put it on.
          </p>
          <p className="mt-6 font-sans text-base text-muted leading-relaxed">
            We source our materials responsibly, work with artisan jewelers who pour care into every detail, and price our pieces fairly — because beauty should be accessible, not exclusive. Our mission is to create jewelry that feels like a treasure, not a transaction.
          </p>
          <p className="mt-6 font-sans text-base text-muted leading-relaxed">
            From our studio in New York, each design begins with a sketch and ends with a piece that's hand-finished, inspected, and lovingly packaged in our signature velvet box. We believe the experience of receiving Velmora jewelry should feel as special as wearing it.
          </p>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-block bg-gold hover:bg-gold-dark text-warm-black font-sans text-sm tracking-button uppercase px-8 py-3 transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
