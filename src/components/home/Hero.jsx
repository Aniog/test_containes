import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden md:min-h-screen md:items-center">
      <div
        className="anim-hero-zoom absolute inset-0 bg-espresso bg-cover bg-center"
        data-strk-bg-id="hero-bg-9a1b2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-espresso/25 md:bg-gradient-to-r md:from-espresso/75 md:via-espresso/30 md:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-10 md:pb-0 md:pt-24">
        <div className="max-w-2xl">
          <p className="anim-slide-up text-[11px] font-medium uppercase tracking-[0.32em] text-gold-soft">
            Demi-Fine · 18K Gold Plated
          </p>
          <h1
            id="hero-title"
            className="anim-slide-up mt-5 font-display text-5xl font-light leading-[1.05] text-ivory md:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="anim-slide-up mt-6 max-w-md text-base font-light leading-relaxed text-ivory/80 md:text-lg"
          >
            Warm-lit gold earrings, huggies and necklaces — warm gold jewelry worn close, made for every day and kept forever.
          </p>
          <div className="anim-slide-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '240ms' }}>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-gold px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:bg-gold-deep"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="text-[11px] font-medium uppercase tracking-[0.24em] text-ivory/85 underline decoration-gold-soft/60 underline-offset-8 transition-colors duration-300 hover:text-ivory"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-ivory/50 to-transparent" />
      </div>
    </section>
  )
}
