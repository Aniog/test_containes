import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-cream">
      <div
        className="absolute inset-0 animate-slow-pan bg-velmora-espresso opacity-90"
        data-strk-bg-id="velmora-hero-bg-b7a31d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/55 via-velmora-ink/30 to-velmora-ink/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine essentials in 18K gold</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] tracking-tight text-velmora-cream sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/82 sm:text-lg">
            Warm, luminous jewelry designed for the everyday rituals, meaningful gifts, and heirloom feelings that make a piece yours.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop" className="inline-flex items-center justify-center gap-3 border border-velmora-champagne bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-velmora-ink transition hover:bg-velmora-cream hover:border-velmora-cream">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#bestsellers" className="inline-flex items-center justify-center border border-velmora-cream/35 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne">
              View Bestsellers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
