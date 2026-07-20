import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { trustItems } from '@/data/products'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-3f8d1a"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-4">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl leading-tight"
          >
            Quietly luxurious,
            <br />
            made to last.
          </h1>
          <p
            id="about-hero-sub"
            className="mt-5 text-ivory/85 max-w-md text-sm md:text-base"
          >
            Velmora is a demi-fine jewelry house built on a simple belief: gold
            should be worn, not saved for later.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Est. 2021
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            Gold for every day, not just the special ones.
          </h2>
          <div className="mt-8 space-y-6 text-base text-cocoa leading-relaxed">
            <p>
              Velmora began with a frustration shared by so many women: beautiful
              gold jewelry was either impossibly expensive or it turned your skin
              green within a week. We set out to close that gap — demi-fine
              pieces in warm 18K gold plate, hypoallergenic and durable enough
              for everyday wear.
            </p>
            <p>
              Every piece is designed in-house and finished by hand. We work in
              small batches with trusted ateliers, using recycled brass and
              ethically sourced crystals. No middlemen, no markups for the sake
              of it — just considered jewelry at an honest price.
            </p>
            <p>
              We believe luxury is a feeling, not a price tag. It is the weight
              of a gold huggie in your hand, the warmth of the metal against your
              skin, the way a piece becomes part of you. That is what we make.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream border-y border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt="Velmora gold jewelry detail"
              data-strk-img-id="about-detail-9k2m4n"
              data-strk-img="gold jewelry close up detail warm editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-espresso mb-8">
              What we stand for
            </h3>
            <ul className="space-y-6">
              {trustItems.map((t) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="mt-2 w-6 h-px bg-gold shrink-0" />
                  <span className="text-sm text-cocoa leading-relaxed">{t}</span>
                </li>
              ))}
              <li className="flex items-start gap-4">
                <span className="mt-2 w-6 h-px bg-gold shrink-0" />
                <span className="text-sm text-cocoa leading-relaxed">
                  Ethically made in small batches with recycled materials.
                </span>
              </li>
            </ul>
            <Link
              to="/shop"
              className="inline-block mt-10 bg-gold text-ivory text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
