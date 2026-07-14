import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-cream-50 min-h-screen pt-24 md:pt-28">
      <div className="container-wide pb-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal">Our Story</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="about-hero-1a2b3c"
              data-strk-img="[about-mission] [about-heading] jewelry artisan workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-heading" className="font-serif text-3xl tracking-wide text-charcoal mb-6">
              Jewelry That Lives With You
            </h2>
            <p id="about-mission" className="text-stone-600 font-sans text-sm md:text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine jewelry using 18K gold plating over sterling silver — the same techniques used by heritage houses — and offer it directly to you, without the traditional markups.
            </p>
            <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed mb-4">
              Every piece is designed in our studio and brought to life by skilled artisans who share our obsession with detail. From the weight of a huggie to the clasp of a necklace, each element is considered, tested, and refined.
            </p>
            <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed">
              We're not just selling jewelry — we're creating pieces you'll reach for every morning. Pieces that become part of your story.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Ethically Made', desc: 'Every piece is crafted in certified workshops with fair wages and safe conditions.' },
            { title: 'Honest Pricing', desc: 'By selling directly to you, we offer luxury quality at a fraction of traditional retail.' },
            { title: 'Made to Last', desc: '18K gold plating over sterling silver means your jewelry stays beautiful, day after day.' },
          ].map(item => (
            <div key={item.title}>
              <h3 className="font-serif text-xl tracking-wide text-charcoal mb-3">{item.title}</h3>
              <p className="text-stone-600 font-sans text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
