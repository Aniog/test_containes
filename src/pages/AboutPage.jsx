import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useSectionReveal } from '@/lib/useSectionReveal'

const AboutPage = () => {
  const revealRef = useSectionReveal()
  const imgRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (imgRef.current) {
      return ImageHelper.loadImages(strkImgConfig, imgRef.current)
    }
  }, [])

  return (
    <div ref={(el) => {
      revealRef.current = el
      imgRef.current = el
    }} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Hero */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-warm-900">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Split section */}
        <div className="section-reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          <div className="aspect-[4/5] rounded overflow-hidden bg-warm-200">
            <img
              data-strk-img-id="about-img-1-q1r2s3"
              data-strk-img="[about-mission] [about-heading] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4">
            <h2
              id="about-heading"
              className="font-serif text-2xl md:text-3xl tracking-wide text-warm-900"
            >
              Born from a Simple Belief
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="about-mission"
              className="text-warm-700 text-sm leading-relaxed mb-4"
            >
              Velmora was founded on the conviction that fine jewelry shouldn't require a luxury price tag. We believe every woman deserves to wear pieces that feel special, look exquisite, and stand the test of time — without compromise.
            </p>
            <p className="text-warm-700 text-sm leading-relaxed">
              Our designers draw inspiration from the quiet elegance of European ateliers and the warmth of Mediterranean light. Each collection is thoughtfully curated to offer pieces that transition effortlessly from morning coffee to evening celebrations.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="section-reveal grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
          {[
            {
              title: 'Craftsmanship',
              text: 'Every piece is hand-finished by skilled artisans, ensuring the kind of detail and quality usually reserved for fine jewelry houses.',
            },
            {
              title: 'Integrity',
              text: 'We use only hypoallergenic, nickel-free materials with a thick 18K gold plating that lasts. No shortcuts, no compromises.',
            },
            {
              title: 'Accessibility',
              text: 'By selling directly to you, we eliminate the traditional markups and pass the savings on — luxury should be within reach.',
            },
          ].map(value => (
            <div key={value.title} className="text-center">
              <h3 className="font-serif text-lg tracking-product uppercase text-warm-900">
                {value.title}
              </h3>
              <div className="w-8 h-px bg-gold mx-auto mt-3 mb-4" />
              <p className="text-warm-700 text-sm leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="section-reveal text-center py-12 bg-gold-light rounded">
          <h2 className="font-serif text-2xl tracking-wide text-warm-900">
            Discover the Collection
          </h2>
          <p className="mt-3 text-warm-700 text-sm max-w-md mx-auto">
            Each piece is designed to be worn, loved, and treasured — every single day.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-6 bg-gold hover:bg-gold-hover text-white text-xs tracking-btn uppercase font-medium px-8 py-3.5 rounded transition-colors duration-200"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
