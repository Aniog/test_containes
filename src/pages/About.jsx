import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="bg-cream pt-20 md:pt-24">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Our Story</p>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
          Jewelry made to be lived in.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm md:text-base text-stone leading-relaxed">
          Velmora began with a simple frustration: beautiful gold jewelry was either
          prohibitively expensive or cheaply made. We set out to close that gap — demi-fine
          pieces, hand-finished in 18K gold plate, designed to be worn every single day.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="relative aspect-[16/9] overflow-hidden bg-sand">
          <img
            src={PLACEHOLDER}
            alt="Velmora atelier"
            data-strk-img-id="about-hero-velmora-2f8a"
            data-strk-img="[about-text] [about-title] gold jewelry atelier craftsmanship"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <h2 id="about-title" className="sr-only">The Velmora Atelier</h2>
          <p id="about-text" className="sr-only">Hand-finished 18K gold plated jewelry crafted in small batches.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            { title: 'Hand-Finished', body: 'Every piece is finished by hand by craftspeople we know by name.' },
            { title: 'Hypoallergenic', body: 'Nickel-free, lead-free, and gentle on sensitive skin.' },
            { title: 'Made to Last', body: '18K gold plate over solid brass, designed for years of daily wear.' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-stone leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gold text-cream hover:bg-gold-deep uppercase tracking-widest3 text-xs font-medium px-8 py-4 transition-colors"
          >
            Shop the Collection
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  )
}
