import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-amber" />
            <span className="text-slate-200 text-sm font-medium">Trusted by 500+ global buyers</span>
          </div>
          
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            China Sourcing Agent<br />for Global Buyers
          </h1>
          
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors backdrop-blur-sm"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Search, label: 'Supplier Sourcing', desc: 'Find verified factories' },
              { icon: Shield, label: 'Quality Control', desc: 'Inspect before shipment' },
              { icon: Truck, label: 'Shipping Support', desc: 'Door-to-door coordination' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
