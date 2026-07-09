import React from 'react'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'
import { Gem, ShieldCheck, Heart, Leaf } from 'lucide-react'

const VALUES = [
  {
    icon: Gem,
    title: 'Genuine 18K Gold',
    text: 'Every piece is plated in real 18K gold over brass, for lasting warmth and shine.',
  },
  {
    icon: ShieldCheck,
    title: 'Hypoallergenic',
    text: 'Nickel-free and gentle on sensitive skin, so you can wear it all day, every day.',
  },
  {
    icon: Heart,
    title: 'Made by Hand',
    text: 'Small-batch, hand-finished pieces — never mass-produced, always considered.',
  },
  {
    icon: Leaf,
    title: 'Responsibly Sourced',
    text: 'We work with audited suppliers and recyclable packaging, always.',
  },
]

export default function About() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-7g8h9i"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full container-velmora flex flex-col items-center justify-center text-center">
          <p className="eyebrow text-cream/80 mb-4">Our Story</p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-hero-sub"
            className="mt-5 text-cream/85 max-w-xl text-base md:text-lg"
          >
            Demi-fine gold jewelry, designed in studio and made for the
            everyday.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-velmora max-w-3xl text-center">
          <p className="eyebrow mb-4">Est. with intention</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Jewelry should be worn, not saved.
          </h2>
          <p className="mt-6 text-stone leading-relaxed text-lg">
            Velmora began with a simple frustration: beautiful gold jewelry was
            either out of reach, or it didn't last. We set out to change that —
            to create demi-fine pieces with the warmth and weight of fine
            jewelry, at a price that respects you.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            Each piece is designed in our studio and hand-finished in small
            batches, plated in genuine 18K gold. No middlemen, no inflated
            markups — just honest craft, made to be treasured and worn every
            single day.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-sand">
        <div className="container-velmora">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">What We Stand For</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              The Velmora Promise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-cream flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="container-velmora">
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Find your everyday gold.
          </h2>
          <Link to="/shop" className="btn-accent mt-8 inline-flex">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
