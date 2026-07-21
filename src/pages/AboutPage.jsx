import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-a1b2c3"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-5xl text-brand-ivory tracking-wide"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-3 font-sans text-sm text-brand-ivory/80 tracking-wide max-w-md"
          >
            The art of accessible luxury
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-8" />
            <p className="font-serif text-2xl md:text-3xl text-brand-charcoal leading-relaxed">
              We believe every woman deserves jewelry that feels luxurious — without the luxury markup.
            </p>
          </div>

          <div className="space-y-6 font-sans text-sm md:text-base text-brand-muted leading-relaxed">
            <p>
              Velmora was founded with a singular vision: to bridge the gap between fine jewelry and
              fashion jewelry. We saw an industry where beautiful design was either prohibitively
              expensive or disappointingly disposable — and we knew there had to be a better way.
            </p>
            <p>
              Working directly with skilled artisans, we craft each piece using 18K gold plating over
              solid 925 sterling silver. Every crystal is hand-set. Every clasp is tested. Every finish
              is inspected — because details matter, and you can feel the difference.
            </p>
            <p>
              Our designs are inspired by the quiet confidence of the women who wear them. Not loud.
              Not flashy. Just beautifully made pieces that become part of your everyday — the earrings
              you reach for without thinking, the necklace that feels like it was made for you.
            </p>
            <p>
              From our studio to your doorstep, we handle every step with care. No middlemen. No
              markups. Just honest craftsmanship at a fair price.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block bg-brand-gold text-brand-ivory font-sans text-xs uppercase tracking-super-wide px-10 py-3.5 hover:bg-brand-gold-dark transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Artisan Crafted',
                text: 'Every piece is made by skilled artisans using time-honored techniques and the finest materials.',
              },
              {
                title: 'Ethically Sourced',
                text: 'We work only with certified suppliers who share our commitment to responsible sourcing and fair labor.',
              },
              {
                title: 'Made to Last',
                text: '18K gold plating over sterling silver means your jewelry won\'t tarnish — it\'s designed for daily wear.',
              },
            ].map(item => (
              <div key={item.title} className="px-4">
                <h3 className="font-serif text-xl text-brand-charcoal tracking-wide mb-3">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-brand-gold mx-auto mb-4" />
                <p className="font-sans text-sm text-brand-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
