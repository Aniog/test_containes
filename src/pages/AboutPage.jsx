import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=1600&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-950/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-xs tracking-widest uppercase text-velmora-200 mb-4">Est. 2024</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
            Our Story
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="font-serif text-2xl md:text-3xl text-charcoal-950 leading-relaxed text-center">
              Velmora was born from a simple frustration: why does beautiful jewelry have to cost a fortune?
            </p>
            <p className="mt-8 text-charcoal-600 leading-relaxed">
              Our founder, a jewelry enthusiast who had spent years searching for pieces that felt luxurious 
              without the luxury price tag, decided to create the solution herself. The result is Velmora — 
              a collection of demi-fine jewelry that bridges the gap between fast fashion and fine jewelry.
            </p>
            <p className="mt-6 text-charcoal-600 leading-relaxed">
              Every piece is crafted in 18K gold plating over solid brass, giving you the look and feel of 
              real gold at a fraction of the cost. We use hypoallergenic materials so you can wear our pieces 
              all day, every day, without worry.
            </p>
            <p className="mt-6 text-charcoal-600 leading-relaxed">
              Our design philosophy is rooted in quiet luxury. We don't do loud logos or trendy pieces that 
              will look dated in a season. Instead, we create timeless designs that become part of your 
              everyday uniform — the pieces you reach for without thinking, the ones that get compliments 
              from strangers, the ones you'll still love years from now.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl text-gold-600">18K</p>
              <p className="text-sm text-charcoal-500 mt-2 tracking-wider uppercase">Gold Plated</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold-600">100%</p>
              <p className="text-sm text-charcoal-500 mt-2 tracking-wider uppercase">Hypoallergenic</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold-600">30</p>
              <p className="text-sm text-charcoal-500 mt-2 tracking-wider uppercase">Day Returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-velmora-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 text-center tracking-wide mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-serif text-xl text-charcoal-950 mb-3">Quality First</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                We never compromise on materials or craftsmanship. Every piece undergoes rigorous quality checks.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-charcoal-950 mb-3">Accessible Luxury</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Beautiful jewelry shouldn't require a second mortgage. We keep our prices fair and transparent.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-charcoal-950 mb-3">Sustainable Practices</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                From eco-friendly packaging to responsible sourcing, we're committed to minimizing our footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950 tracking-wide">
            Discover the Collection
          </h2>
          <p className="mt-4 text-charcoal-600">
            Find your new favorite piece — the one you'll reach for every single day.
          </p>
          <Link to="/shop" className="btn-primary mt-8 inline-flex">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  )
}
