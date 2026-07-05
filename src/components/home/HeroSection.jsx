import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso pt-28 text-white sm:pt-32">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-subhead] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/70 to-velmora-espresso/30" />
      <div className="page-shell relative flex min-h-[78vh] items-end pb-14 sm:pb-20 lg:items-center">
        <div className="max-w-2xl">
          <p id="hero-subhead" className="text-xs uppercase tracking-overline text-velmora-sand sm:text-sm">
            Demi-fine gold jewelry for gifting and self-adornment
          </p>
          <h1 id="hero-title" className="mt-5 font-display text-[3.4rem] leading-[0.92] text-white sm:text-[4.7rem] lg:text-[6rem]">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-velmora-mist sm:text-lg">
            Warm, polished pieces that feel elevated every day — from sculptural huggies to gift-ready heirloom sets priced for real life.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-7 py-4 text-sm font-semibold uppercase tracking-overline text-velmora-espresso transition hover:opacity-90"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-overline text-white transition hover:border-white/45"
            >
              Discover Velmora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
