import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bone">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-3a7b2d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="max-w-3xl">
          <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-6">
            Precision Sheet Metal Folding
          </span>

          <h1
            id="hero-title"
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight"
          >
            Engineered for the
            <span className="block italic text-brass">art of folding.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-light"
          >
            Artitect Machinery designs and builds double folding machines and
            sheet metal folders trusted by fabricators who shape the world's
            most refined surfaces.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 bg-brass text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-brass-dark transition group"
            >
              Explore Machines
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-ink transition"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl border-t border-white/15 pt-8">
            <div>
              <p className="font-serif text-3xl text-white">25+</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 mt-1">
                Years Crafting
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white">40</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 mt-1">
                Countries Served
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white">±0.05</p>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 mt-1">
                mm Tolerance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
