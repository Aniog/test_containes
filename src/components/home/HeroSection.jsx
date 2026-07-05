import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-velvet pt-20 md:-mt-24 md:pt-24">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="section-shell relative flex min-h-[88vh] items-end py-14 md:min-h-[92vh] md:py-20">
        <div className="max-w-2xl rounded-[32px] border border-line-inverse bg-velvet/38 p-7 text-ivory shadow-luxe backdrop-blur-sm md:p-10">
          <p className="eyebrow text-ivory/70">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="mt-4 font-serif text-5xl leading-none md:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-5 max-w-xl text-base leading-7 text-ivory/80 md:text-lg">
            Warm-toned demi-fine jewelry for modern gifting, quiet statements, and everyday ritual. Designed to feel elevated, wearable, and lasting.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-6 py-4 text-sm uppercase tracking-[0.2em] text-velvet transition duration-300 hover:bg-champagne-deep"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center justify-center rounded-full border border-line-inverse px-6 py-4 text-sm uppercase tracking-[0.2em] text-ivory transition duration-300 hover:border-champagne hover:text-champagne"
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
