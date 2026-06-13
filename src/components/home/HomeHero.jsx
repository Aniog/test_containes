import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const trustItems = [
  '10+ years China sourcing experience',
  '500+ verified factory partners',
  'On-site QC inspections',
  'End-to-end logistics support',
]

export default function HomeHero() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E")',
        }}
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-heading] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary-light text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <CheckCircle className="w-4 h-4" />
            Your Trusted Sourcing Partner in China
          </span>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
            monitor production, and coordinate shipping — so you can source from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-white/20 transition-colors"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}