import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Factory, Ship } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Trusted by 500+ businesses worldwide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent
              <br />
              <span className="text-accent">for Global Buyers</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — all with one experienced local partner on the ground.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-colors shadow-lg shadow-accent/25"
              >
                Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-colors border border-white/20"
              >
                See How It Works
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {[
                { value: '500+', label: 'Verified Suppliers' },
                { value: '15+', label: 'Years Experience' },
                { value: '98%', label: 'Client Retention' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-heading font-extrabold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero visual cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">Factory Verified</h3>
                <p className="text-white/60 text-xs">On-site audits & background checks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden aspect-[3/4]"
                data-strk-bg-id="hero-factory-bg"
                data-strk-bg="[hero-factory-desc]"
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              >
                <span id="hero-factory-desc" className="sr-only">Chinese manufacturing factory production line</span>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden aspect-[3/4]"
                data-strk-bg-id="hero-qc-bg"
                data-strk-bg="[hero-qc-desc]"
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              >
                <span id="hero-qc-desc" className="sr-only">Quality control inspection worker checking products</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Ship className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">Global Shipping</h3>
                <p className="text-white/60 text-xs">Door-to-door logistics management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
