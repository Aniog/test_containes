import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-brand-950">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(30deg, #243b53 12%, transparent 12.5%, transparent 87%, #243b53 87.5%, #243b53), linear-gradient(150deg, #243b53 12%, transparent 12.5%, transparent 87%, #243b53 87.5%, #243b53), linear-gradient(30deg, #243b53 12%, transparent 12.5%, transparent 87%, #243b53 87.5%, #243b53), linear-gradient(150deg, #243b53 12%, transparent 12.5%, transparent 87%, #243b53 87.5%, #243b53), linear-gradient(60deg, #334e68 25%, transparent 25.5%, transparent 75%, #334e68 75%, #334e68), linear-gradient(60deg, #334e68 25%, transparent 25.5%, transparent 75%, #334e68 75%, #334e68)',
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-950/95 to-brand-900/90" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute left-0 top-1/4 w-1.5 h-32 bg-accent rounded-r-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wider uppercase">Industry-Leading Precision</span>
          </div>

          {/* Heading */}
          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6">
            Precision{' '}
            <span className="text-accent">Sheet Metal</span>{' '}
            Folding Machines
          </h1>

          {/* Subtitle */}
          <p id="hero-subtitle" className="text-lg md:text-xl text-brand-300 leading-relaxed max-w-2xl mb-10">
            ARTITECT MACHINERY designs and manufactures world-class double folding machines, sheet metal folders, and metal folding solutions for industrial fabricators who demand uncompromising quality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-base transition-all duration-200 shadow-lg shadow-accent/25"
            >
              Explore Our Machines
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-600 hover:border-brand-400 text-brand-200 hover:text-white font-semibold rounded-lg text-base transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">37+</div>
              <div className="text-brand-400 text-xs md:text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">5K+</div>
              <div className="text-brand-400 text-xs md:text-sm mt-1">Machines Installed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">45+</div>
              <div className="text-brand-400 text-xs md:text-sm mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
