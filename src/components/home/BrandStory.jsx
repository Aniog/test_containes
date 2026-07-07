import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-truffle-100 overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' fill='%233B322E'%3E%3Crect width='800' height='1000'/%3E%3Ctext x='400' y='500' text-anchor='middle' fill='%23C8A96E' font-size='36' font-family='serif'%3EOur Story%3C/text%3E%3Ctext x='400' y='550' text-anchor='middle' fill='%23827771' font-size='14' font-family='sans-serif'%3EBrand imagery%3C/text%3E%3C/svg%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-5 md:px-16 lg:px-20 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-xs tracking-widest uppercase text-gold mb-6">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide leading-tight text-truffle-800">
                Designed to Last,<br />Priced to Live In
              </h2>
              <div className="mt-6 w-12 h-px bg-gold" />
              <p className="mt-6 text-truffle-500 leading-relaxed text-sm">
                Velmora was born from a simple belief: fine jewelry shouldn't be locked away for special occasions. 
                Each piece is crafted with 18K gold plating on brass, designed to become part of your everyday story — 
                from morning coffee to candlelit evenings. We work directly with artisans to bring you premium 
                materials at an accessible price, because luxury should feel effortless, not exclusive.
              </p>
              <Link to="/about" className="mt-8 inline-block text-xs tracking-widest uppercase text-truffle-800 border-b border-gold pb-1 hover:text-gold transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
