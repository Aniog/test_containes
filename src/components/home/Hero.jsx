import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm text-brand-200 font-medium mb-6 backdrop-blur-sm border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Trusted by 500+ global buyers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              China Sourcing Agent for{' '}
              <span className="text-accent-400">Global Buyers</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-brand-200 leading-relaxed max-w-lg">
              Find reliable Chinese suppliers, verify factories, inspect quality,
              and coordinate shipping — all managed by your dedicated sourcing team
              on the ground in China.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-accent-500/25 text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20 text-base"
              >
                How It Works
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No hidden fees
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free quote in 24h
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                10+ years in China
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/50">
              <img
                data-strk-img-id="hero-factory-img-x8k2m"
                data-strk-img="[hero-img-desc]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Chinese manufacturing facility"
                className="w-full h-auto object-cover"
              />
              <div id="hero-img-desc" className="hidden">Modern Chinese factory production line manufacturing facility</div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-800/40 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 text-gray-900">
              <div className="text-3xl font-bold text-brand-500">500+</div>
              <div className="text-sm text-gray-600">Verified Suppliers</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-5 text-gray-900">
              <div className="text-3xl font-bold text-accent-500">98%</div>
              <div className="text-sm text-gray-600">Quality Pass Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
