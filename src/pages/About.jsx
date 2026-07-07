import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const VALUES = [
  {
    title: 'Thoughtful Materials',
    text: 'Every piece is cast in responsibly sourced brass and finished with thick 18K gold plating for lasting warmth.',
  },
  {
    title: 'Designed for Layering',
    text: 'Our silhouettes are made to mix, stack, and move with you — from morning coffee to evening plans.',
  },
  {
    title: 'Gifting, Reimagined',
    text: 'Each order arrives in a signature Velmora pouch or gift box, ready to make someone feel treasured.',
  },
]

export default function About() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)

  useEffect(() => {
    const cleanupHero = ImageHelper.loadImages(strkImgConfig, heroRef.current)
    const cleanupStory = ImageHelper.loadImages(strkImgConfig, storyRef.current)
    return () => {
      cleanupHero?.()
      cleanupStory?.()
    }
  }, [])

  return (
    <div className="bg-cream">
      <section
        ref={heroRef}
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-espresso"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p
            id="about-hero-subtitle"
            className="font-sans text-xs md:text-sm uppercase tracking-[0.22em] text-cream/80 mb-5"
          >
            Our World
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-6xl text-cream leading-[1.1]"
          >
            Quiet Luxury, Made Personal
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              ref={storyRef}
              className="relative aspect-[4/5] bg-champagne/30 overflow-hidden"
            >
              <img
                data-strk-img-id="about-story-image"
                data-strk-img="[about-story-desc] [about-story-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p
                id="about-story-title"
                className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4"
              >
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-[1.15] mb-6">
                Jewelry for the Moments That Matter
              </h2>
              <p
                id="about-story-desc"
                className="text-sm md:text-base text-charcoal/80 font-sans font-light leading-relaxed mb-6"
              >
                Velmora was born from a simple belief: fine-feeling jewelry should
                be part of your everyday, not saved for special occasions. We design
                demi-fine pieces that feel considered, luxurious, and entirely
                wearable — at a price that lets you collect, layer, and gift
                without hesitation.
              </p>
              <p className="text-sm md:text-base text-charcoal/80 font-sans font-light leading-relaxed mb-8">
                Based between London and Lisbon, our studio draws on artisan
                techniques and a warm, editorial sensibility. The result is a
                collection of gold essentials that age gracefully and move with
                you.
              </p>
              <Link
                to="/shop"
                className="inline-block border border-espresso text-espresso px-10 py-3.5 text-xs uppercase tracking-[0.16em] font-sans hover:bg-espresso hover:text-cream transition-colors duration-300"
              >
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center md:text-left">
                <h3 className="font-serif text-xl uppercase tracking-[0.14em] text-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-sm text-cream/70 font-sans font-light leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
