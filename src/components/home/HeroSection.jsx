import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        data-strk-bg-id="hero-bg-ssourcing-7a3b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

      <div className="relative section-container py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
            SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/services" className="btn-secondary text-base px-8 py-4">
              Explore Our Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-sm md:text-base">
            {['Supplier verification', 'Quality inspections', 'Production tracking', 'Shipping coordination'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
