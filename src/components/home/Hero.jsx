import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import StrkBackground from '@/components/common/StrkBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-ivory">
      <StrkBackground
        id="home-hero-jewelry-model-bg-a83d12"
        query="[hero-image-context] [hero-subhead] [hero-title]"
        ratio="16x9"
        width="1800"
        className="absolute inset-0 scale-105 bg-velmora-olive opacity-80"
      />
      <div className="absolute inset-0 bg-velmora-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/95 via-velmora-ink/70 to-velmora-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/55 via-transparent to-velmora-ink/90" />
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-velmora-gold/20 blur-3xl md:left-auto md:right-16 md:top-40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 md:items-center md:pb-0">
        <div className="max-w-3xl animate-fadeUp rounded-[2rem] border border-velmora-ivory/12 bg-velmora-ink/45 p-6 shadow-soft backdrop-blur-sm md:p-8">
          <p id="hero-image-context" className="sr-only">
            Warm-lit close-up of gold jewelry worn on a model with quiet luxury styling.
          </p>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-velmora-champagne">
            Demi-fine gold jewelry for everyday heirlooms
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] text-velmora-ivory sm:text-7xl md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-7 max-w-xl text-base leading-8 text-velmora-champagne md:text-lg">
            Warm gold, luminous crystals, and sculptural essentials designed for gifting, self-celebration, and the rituals in between.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#bestsellers"
              className="inline-flex items-center justify-center rounded-full border border-velmora-ivory/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              View Bestsellers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
