import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/SectionHeading'

export default function About() {
  const bgRef = useRef(null)

  useEffect(() => {
    if (!bgRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      if (bgRef.current) {
        ImageHelper.loadImages(strkImgConfig, bgRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="pt-28 md:pt-32">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 text-center py-16 md:py-24">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-4">Our Story</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
          Gold, Made to Be Lived In
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Velmora began with a simple belief: fine jewelry should not be saved for special
          occasions. We design demi-fine pieces in warm 18K gold plate, crafted to be worn
          through every part of your day — and treasured for years, not seasons.
        </p>
      </section>

      {/* Image band */}
      <section className="relative h-[50vh] min-h-[360px] w-full" ref={bgRef}>
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-band-velmora-7e1f"
          data-strk-bg="[about-band-text] [about-band-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-espresso/30" />
        <div className="relative h-full flex items-end justify-start px-6 md:px-10 pb-12">
          <div className="max-w-8xl mx-auto w-full">
            <h2
              id="about-band-title"
              className="font-serif text-3xl md:text-5xl text-ivory"
            >
              Designed in-house. Finished by hand.
            </h2>
            <p id="about-band-text" className="sr-only">
              Warm gold jewelry crafted by hand in our studio.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Velmora Promise"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Sparkles,
                title: 'Honest Materials',
                text: '18K gold plate over sterling silver or brass. Hypoallergenic, nickel-free, and made to last.',
              },
              {
                icon: ShieldCheck,
                title: 'Ethically Made',
                text: 'Responsibly sourced materials and fair workshop practices, with no markups for markups.',
              },
              {
                icon: Heart,
                title: 'Made to Be Treasured',
                text: 'Every piece is finished by hand and built for daily wear — not a season, a lifetime.',
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full border border-gold flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            Find a piece worth treasuring
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-ivory text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-gold-soft transition-colors"
          >
            Shop the Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
