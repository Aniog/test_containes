import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Gem, Heart, ShieldCheck } from 'lucide-react'

const VALUES = [
  {
    icon: Gem,
    title: 'Crafted to Last',
    text: '18K gold plating over solid brass. Every piece is made to be worn daily, not saved for someday.',
  },
  {
    icon: Heart,
    title: 'Designed In-House',
    text: 'No middlemen, no markups for markups sake. Considered design, sold directly to you.',
  },
  {
    icon: ShieldCheck,
    title: 'Hypoallergenic',
    text: 'Nickel-free and gentle on sensitive skin. Comfort you can trust, beauty you can wear.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-3k9m2n"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry flat lay warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso-bg/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-cream/80 text-xs tracking-[0.4em] uppercase mb-4">Est. 2026</p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-5xl md:text-6xl font-light"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="text-cream/80 text-base md:text-lg mt-4 max-w-md"
          >
            Fine jewelry, made for everyday.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">The Velmora Philosophy</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight mb-8">
            We believe jewelry should be lived in, not locked away.
          </h2>
          <div className="space-y-5 text-cocoa text-base leading-relaxed text-left">
            <p>
              Velmora began with a frustration: beautiful jewelry was either prohibitively
              expensive or cheaply made. We set out to build something in between — demi-fine gold
              pieces with the weight and warmth of fine jewelry, at a price that respects you.
            </p>
            <p>
              Every piece is designed in-house and crafted from 18K gold plating over solid brass.
              We skip the wholesale markups and sell directly, which means better materials and
              fairer prices. No middlemen, no inflated retail — just considered design.
            </p>
            <p>
              We make jewelry for the woman who reaches for the same pieces every morning. The kind
              that age into something only yours. Crafted to be treasured, made to be worn.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-gold rounded-full mb-5">
                  <v.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-espresso mb-3">{v.title}</h3>
                <p className="text-sm text-cocoa leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-espresso-bg text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
            Find your everyday piece.
          </h2>
          <Link
            to="/shop"
            className="inline-block bg-gold text-cream px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
