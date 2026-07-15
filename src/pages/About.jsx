import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal tracking-wide">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Split section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="about-craft-1b3d5e"
              data-strk-img="[about-craft-desc] [about-craft-title] artisan jewelry making gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-craft-title" className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal tracking-wide mb-4">
              Crafted with Intention
            </h2>
            <p id="about-craft-desc" className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed mb-4">
              Velmora was founded on the principle that beautiful jewelry should be accessible, wearable, and made to last. 
              Every piece in our collection is designed in-house and crafted with meticulous attention to detail.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-warm-gray leading-relaxed">
              We use 18K gold plating over 925 sterling silver, ensuring each piece is hypoallergenic, 
              tarnish-resistant, and gentle on even the most sensitive skin. Our goal is simple: 
              to create jewelry you reach for every day, not just on special occasions.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Quality First',
              text: 'Every piece undergoes rigorous quality checks. We use only premium materials that stand the test of time.',
              imgId: 'about-quality-7f9a2c',
            },
            {
              title: 'Thoughtfully Priced',
              text: 'By selling directly to you, we offer demi-fine quality at a fraction of traditional retail prices.',
              imgId: 'about-price-4d6e8f',
            },
            {
              title: 'Sustainably Minded',
              text: 'From recycled packaging to ethical sourcing, we are committed to reducing our footprint.',
              imgId: 'about-sustain-1a3c5e',
            },
          ].map((val) => (
            <div key={val.title} className="text-center">
              <div className="aspect-square bg-brand-warm mb-6 overflow-hidden">
                <img
                  alt={val.title}
                  data-strk-img-id={val.imgId}
                  data-strk-img={`${val.title} jewelry craftsmanship quality`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-brand-charcoal mb-3">{val.title}</h3>
              <p className="font-sans text-sm text-brand-warm-gray leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-16 border-t border-brand-sand">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal tracking-wide mb-4">
            Discover the Collection
          </h2>
          <p className="font-sans text-sm text-brand-warm-gray mb-8 max-w-md mx-auto">
            Explore our curated selection of demi-fine jewelry, designed for everyday elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-brand-gold text-white font-sans text-xs uppercase tracking-extra-wide px-10 py-4 hover:bg-brand-gold-dark transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}
