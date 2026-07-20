import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-28 bg-ink text-cream overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          data-strk-bg-id="about-hero-bg-3d8c"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
        <div ref={ref} className="relative container-velmora py-24 md:py-36 text-center">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-4">
            Est. for the everyday
          </p>
          <h1
            id="about-hero-title"
            className="font-serif font-light text-5xl md:text-7xl text-cream"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-6 text-cream/80 max-w-xl mx-auto leading-relaxed"
          >
            Demi-fine gold jewelry, made to be worn — not saved for special occasions.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-velmora grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="about-body-img-1a2b"
              data-strk-img="[about-hero-subtitle] [about-hero-title] gold jewelry making hands atelier warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-4">
            <p className="eyebrow mb-4">The Velmora Promise</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
              Beautiful gold, honestly priced.
            </h2>
            <div className="mt-6 space-y-4 text-espresso/85 leading-relaxed">
              <p>
                We started Velmora because we believed great jewelry shouldn’t
                demand a heirloom price tag — and it shouldn’t fall apart after
                a season, either. Our pieces sit in the space between: 18K gold
                plated, finished by hand, and made from hypoallergenic,
                nickel-free materials.
              </p>
              <p>
                Every design begins in our studio and is tested for everyday
                wear. We choose warm, refined gold tones and quiet, editorial
                forms — jewelry that complements you, never competes with you.
              </p>
            </div>
            <Link to="/shop" className="btn-primary mt-8 inline-flex">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="container-velmora">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: '18K Gold Plated',
                body: 'A substantial layer of 18K gold over brass, for warmth that lasts.',
              },
              {
                title: 'Hypoallergenic',
                body: 'Nickel-free and lead-free. Kind to sensitive skin, made for daily wear.',
              },
              {
                title: 'Made by Hand',
                body: 'Each piece is finished by hand in small batches and checked individually.',
              },
            ].map((v) => (
              <div key={v.title} className="text-center md:text-left">
                <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm text-espresso/75 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
