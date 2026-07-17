import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-espresso text-white">
      <div
        className="absolute inset-0 opacity-90"
        data-strk-bg-id="hero-bg-velmora-8x2f1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/88 via-espresso/66 to-espresso/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/52 to-espresso/18" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <p
            id="hero-subtitle"
            className="text-xs uppercase tracking-luxe text-gold sm:text-sm"
          >
            Premium demi-fine jewelry for self-gifting and keepsakes
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-2xl font-serif text-5xl leading-none text-white sm:text-6xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            Warm gold tones, elegant silhouettes, and quietly luxurious pieces that make everyday dressing feel considered.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-medium uppercase tracking-luxe text-umber transition hover:bg-gold-deep"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-xs font-medium uppercase tracking-luxe text-white transition hover:border-gold hover:text-gold"
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
