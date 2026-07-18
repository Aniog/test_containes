import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl text-brand-charcoal tracking-extra-wide uppercase">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="space-y-8 text-center">
          <p className="text-base md:text-lg font-sans text-brand-warm-gray leading-relaxed">
            Velmora was born from a simple belief: that fine jewelry shouldn't cost a fortune. 
            We design demi-fine pieces that look and feel luxurious — 18K gold plated over 
            sterling silver — and sell them directly to you, without the traditional markups.
          </p>
          <p className="text-base md:text-lg font-sans text-brand-warm-gray leading-relaxed">
            Every piece in our collection is thoughtfully designed in our studio and crafted 
            by skilled artisans who share our commitment to quality. We believe that the 
            jewelry you wear every day should be as beautiful as it is accessible.
          </p>
          <p className="text-base md:text-lg font-sans text-brand-warm-gray leading-relaxed">
            From delicate huggies to statement necklaces, each Velmora piece is made to be 
            treasured — hypoallergenic, tarnish-resistant, and designed for real life.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-3xl text-brand-gold">18K</p>
            <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mt-2">
              Gold Plated
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl text-brand-gold">30</p>
            <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mt-2">
              Day Returns
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl text-brand-gold">50K+</p>
            <p className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal mt-2">
              Happy Customers
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block bg-brand-gold text-white text-xs font-sans font-medium tracking-extra-wide uppercase px-10 py-3.5 hover:bg-brand-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
