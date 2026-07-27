import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Trusted by 500+ Global Buyers Since 2012</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              We help businesses worldwide find reliable Chinese suppliers, verify factories,
              inspect quality, and manage production—so you can source with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cta text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                'Verified Suppliers',
                'Factory Audits',
                'Quality Control',
                'Shipping Management',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              data-strk-bg-id="hero-main-bg-8f2a9c"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="absolute inset-0 bg-primary/10" />
              <span id="hero-title" className="sr-only">China Sourcing Agent for Global Buyers</span>
              <span id="hero-subtitle" className="sr-only">Reliable supplier sourcing factory verification quality inspection shipping coordination</span>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 md:p-5 hidden md:block">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-slate-500">Buyers Served</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 md:p-5 hidden md:block">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-slate-500">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
