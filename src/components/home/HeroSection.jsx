import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const trustItems = [
  '10+ years China sourcing experience',
  '500+ verified factory partners',
  'End-to-end quality control',
  'Dedicated English-speaking account managers',
]

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
              Your Trusted China Sourcing Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-brand-400">Global Buyers</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect product quality, and coordinate shipping — so you can source 
              from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                See How It Works
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {trustItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              data-strk-bg-id="hero-visual-a1b2c3"
              data-strk-bg="[hero-section-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              style={{ minHeight: '420px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1e293b', backgroundImage: 'none' }}
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">500+</p>
                <p className="text-xs text-neutral-500">Verified Factories</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">98%</p>
                <p className="text-xs text-neutral-500">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}