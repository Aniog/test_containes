import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[300px] max-h-[500px] overflow-hidden">
        <img
          data-strk-img-id="about-hero-img-m1n2o3"
          data-strk-img="about velmora jewelry brand story artisan gold workshop"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora brand story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-base/40 flex items-center justify-center">
          <div className="text-center">
            <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold-light mb-3">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light">
              About Velmora
            </h1>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-base font-light mb-6">
          Jewelry for the Life You Live
        </h2>
        <p className="font-sans text-sm text-muted leading-relaxed mb-4 max-w-2xl mx-auto">
          Velmora was created with one goal: to make beautiful, high-quality jewelry 
          accessible to every woman. We believe that fine jewelry shouldn't require a 
          fine jewelry budget — and that the pieces you wear every day should be just 
          as special as the ones you save for occasions.
        </p>
        <p className="font-sans text-sm text-muted leading-relaxed max-w-2xl mx-auto">
          Every piece in our collection is crafted in 18K gold plating over sterling silver 
          or brass, designed to be hypoallergenic, durable, and effortlessly elegant. 
          From our studio to your jewelry box, each design goes through careful quality 
          checks to ensure it meets our standards — and yours.
        </p>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-cream-dark/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-base font-light">
              What We Stand For
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Quality Without Compromise',
                text: 'Every piece uses 18K gold plating, hypoallergenic materials, and careful craftsmanship. We never cut corners on what touches your skin.',
              },
              {
                title: 'Accessible Luxury',
                text: 'Premium jewelry doesn\'t need a premium price. By selling directly to you, we eliminate the markup and pass the savings on.',
              },
              {
                title: 'Designed to Last',
                text: 'We create timeless pieces that transcend trends. Jewelry you\'ll reach for every morning and still love years from now.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl text-base font-medium mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-base font-light mb-6">
          Discover Our Collection
        </h2>
        <p className="font-sans text-sm text-muted mb-8 max-w-md mx-auto">
          Find the perfect piece that speaks to your style.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-10 py-3.5 bg-base text-cream text-xs font-medium tracking-widest-xl uppercase hover:bg-base/90 transition-colors"
        >
          Shop Now
        </Link>
      </section>
    </div>
  )
}
