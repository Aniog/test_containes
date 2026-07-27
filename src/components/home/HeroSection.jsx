import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'

const trustItems = [
  '10+ Years in China Sourcing',
  '500+ Verified Factories',
  'ISO-Certified QC Process',
  'End-to-End Service',
]

export default function HeroSection() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-6">
            <CheckCircle className="w-4 h-4 text-brand-gold" />
            <span className="text-sm text-white/90" id="hero-badge">Trusted by importers across 30+ countries</span>
          </div>

          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-brand-gray-300 leading-relaxed mb-8 max-w-2xl">
            We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-lightblue transition-colors duration-200 text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-base"
            >
              How It Works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
