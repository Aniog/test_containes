import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-2c9f1a"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craft warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full flex items-end mx-auto max-w-8xl px-6 md:px-10 pb-14">
          <div className="max-w-2xl">
            <p className="text-cream/80 text-[11px] uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h1 id="about-hero-title" className="font-serif text-cream text-5xl md:text-6xl leading-tight">
              Crafted to be Treasured
            </h1>
            <p id="about-hero-subtitle" className="mt-5 text-cream/85 max-w-md leading-relaxed">
              Demi-fine gold jewelry, made honestly and worn daily.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Est. with intention</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Fine craftsmanship shouldn't be reserved for the few.
          </h2>
          <p className="mt-6 text-stone leading-relaxed">
            Velmora began in a small studio with a single belief: that beautifully
            made gold jewelry should be accessible. Every piece is hand-finished in
            18K gold plating over a hypoallergenic core, designed to be worn daily
            and passed on for years.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            We work in small batches, choose materials that last, and price
            honestly — so you can collect pieces that feel like yours.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.18em] bg-gold text-cream hover:bg-[#9a763f] transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-8xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { t: 'Hypoallergenic', d: 'Nickel and lead free, safe for sensitive skin.' },
            { t: '18K Gold Plated', d: 'A thick, durable gold layer over a solid core.' },
            { t: 'Made in Small Batches', d: 'Considered production, less waste, better finish.' },
          ].map((v) => (
            <div key={v.t} className="text-center">
              <h3 className="font-serif text-2xl text-ink mb-3">{v.t}</h3>
              <p className="text-stone leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
