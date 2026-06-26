import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-neutral-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-accent-500" />
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Trusted China Sourcing Partner
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              How It Works
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-neutral-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-neutral-400 mt-1">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">30+</div>
              <div className="text-sm text-neutral-400 mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
