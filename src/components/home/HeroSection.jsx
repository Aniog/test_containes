import { Link } from 'react-router-dom'
import { ShieldCheck, Factory, ClipboardCheck, Ship } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle-hidden] [hero-title-hidden]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-900/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="hidden" id="hero-title-hidden">China Sourcing Agent for Global Buyers</div>
          <div className="hidden" id="hero-subtitle-hidden">Shenzhen factory sourcing quality inspection shipping</div>
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-200 text-sm font-medium rounded-full mb-6 border border-brand-400/30">
            Trusted by 500+ international buyers
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl leading-relaxed">
            We find, verify, and manage Chinese suppliers so you can source with confidence.
            From factory audits to quality inspections and shipping &mdash; we handle the entire supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-3.5">
              Get a Free Sourcing Quote
            </Link>
            <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-3.5">
              How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            {[
              { icon: Factory, label: '10+ Years Experience' },
              { icon: ShieldCheck, label: 'Verified Suppliers Only' },
              { icon: ClipboardCheck, label: 'Rigorous QC Process' },
              { icon: Ship, label: 'End-to-End Logistics' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-brand-300 flex-shrink-0" />
                <span className="text-sm text-neutral-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}