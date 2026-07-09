import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function HeroSection() {
  const heroRef = useRef(null)
  useStrkImages(heroRef, [])

  return (
    <section ref={heroRef} className="velmora-hero relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-cream">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        data-strk-bg-id="velmora-hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/85 via-velmora-espresso/28 to-velmora-espresso/70" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-2xl animate-fadeUp">
          <p className="velmora-hero-kicker mb-5 text-xs font-bold uppercase tracking-[0.38em] text-velmora-stone">
            Demi-fine gold jewelry
          </p>
          <h1 id="hero-title" className="velmora-hero-title font-serif text-6xl font-semibold leading-[0.95] text-velmora-cream sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="velmora-hero-subtitle mt-6 max-w-xl text-base leading-8 text-velmora-stone sm:text-lg">
            Warm 18K gold plated essentials, designed for the luminous rituals of gifting and self-purchase.
          </p>
          <Link
            to="/shop"
            className="velmora-hero-cta mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-cream shadow-soft transition hover:bg-velmora-goldDark"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
