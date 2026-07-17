import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative -mt-[76px] min-h-screen overflow-hidden pt-[76px] md:-mt-[84px] md:pt-[84px]">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-4n2m8q"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,23,20,0.92),rgba(29,23,20,0.7),rgba(29,23,20,0.26))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-espresso/55 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="max-w-2xl rounded-[32px] bg-velmora-espresso/22 p-6 text-white shadow-[0_20px_60px_rgba(29,23,20,0.18)] backdrop-blur-[2px] md:p-8">
          <p className="text-xs uppercase tracking-[0.42em] text-velmora-champagne/95">
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="mt-6 font-display text-5xl font-medium leading-[0.95] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)] md:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 max-w-xl text-base leading-8 text-white/90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.28)] md:text-lg"
          >
            Quietly luxurious demi-fine jewelry for gifting, layering, and the pieces
            you reach for every day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-xs uppercase tracking-[0.34em] text-velmora-espresso transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-ivory"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-velmora-ivory/30 px-7 py-4 text-xs uppercase tracking-[0.34em] text-velmora-ivory transition duration-300 hover:border-velmora-champagne hover:text-velmora-champagne"
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
