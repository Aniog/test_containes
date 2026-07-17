import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-velvet text-ivory">
      <div
        className="absolute inset-0 opacity-90"
        data-strk-bg-id="velmora-hero-bg-a3f9c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velvet via-velvet/88 to-velvet/20" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-velvet/80 via-velvet/58 to-transparent lg:max-w-4xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-velvet/45 via-transparent to-velvet/15" />
      <div className="absolute inset-0 bg-velmora-glow" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-20 pt-40 md:px-8 lg:px-10 lg:pb-24 lg:pt-44">
        <div className="max-w-2xl rounded-[2rem] border border-pearl/60 bg-ivory/72 p-7 text-velvet shadow-card backdrop-blur-sm md:p-8 lg:p-10">
          <p className="text-xs uppercase tracking-luxe text-smoke">Quiet luxury in demi-fine gold</p>
          <div className="mt-5 space-y-5">
            <h1 id="hero-title" className="font-serif text-6xl leading-none text-velvet md:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-truffle md:text-lg">
              Velmora Fine Jewelry pairs sculptural silhouettes with warm gold finishes for gifting beautifully and wearing every day.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-7 py-4 text-xs uppercase tracking-luxe text-velvet transition duration-300 ease-premium hover:bg-ivory"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/#story"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 bg-ivory/5 px-7 py-4 text-xs uppercase tracking-luxe text-ivory transition duration-300 ease-premium hover:border-ivory hover:bg-ivory/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
