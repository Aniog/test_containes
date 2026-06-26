import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Truck, Factory } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from our office in Shenzhen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/20 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Factory, label: 'Factory Verification' },
              { icon: ShieldCheck, label: 'Quality Control' },
              { icon: Truck, label: 'Shipping Coordination' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-lg bg-white/10 border border-white/10 px-4 py-3"
              >
                <item.icon className="w-5 h-5 text-blue-300 shrink-0" />
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
