import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-noir text-velmora-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-noir via-velmora-noir/60 to-velmora-noir/20" />
      <div className="page-shell relative flex min-h-[92vh] items-end py-24 pt-36 sm:items-center sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow-label mb-5 text-velmora-rose">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="max-w-xl text-5xl leading-[0.9] text-velmora-ivory sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-lg text-base leading-7 text-velmora-ivory/82 sm:text-lg"
          >
            Quietly luminous earrings, necklaces, and huggies made to bring fine-jewelry feeling to every day.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold-deep"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
            <Link
              to="/shop?category=Gift%20Sets"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-velmora-ivory transition duration-300 hover:border-velmora-gold hover:text-velmora-gold"
            >
              Explore gifting
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
