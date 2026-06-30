import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-charcoal text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-12" />

        <div className="prose max-w-none">
          <p className="text-warm-600 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Born from a belief that fine jewelry should be accessible, Velmora crafts demi-fine pieces that blend timeless elegance with modern sensibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-warm-50 p-8">
              <h3 className="font-serif text-xl text-charcoal mb-4">Our Mission</h3>
              <p className="text-sm text-warm-600 leading-relaxed">
                We believe in jewelry that tells your story — pieces you reach for every morning, that become part of who you are. No compromise on quality, no unnecessary markups. Every Velmora piece is designed to be treasured.
              </p>
            </div>
            <div className="bg-warm-50 p-8">
              <h3 className="font-serif text-xl text-charcoal mb-4">Our Craft</h3>
              <p className="text-sm text-warm-600 leading-relaxed">
                Each piece is designed in our studio and brought to life by skilled artisans using 18K gold plating over premium brass. We use hypoallergenic materials that are nickel and lead free, ensuring comfort for even the most sensitive skin.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block bg-gold text-charcoal text-xs tracking-wide-2 uppercase font-semibold px-10 py-3.5 hover:bg-gold-light transition-all duration-300"
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
