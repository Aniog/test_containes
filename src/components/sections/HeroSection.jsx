import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-factory-shipping-ssourcing-8c51"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
            China-based sourcing support for overseas B2B buyers
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg leading-8 text-slate-200 md:text-xl">
            SSourcing China helps international buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-700">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15">
              View sourcing services
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            {['Supplier search', 'Factory verification', 'QC inspection'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-300" aria-hidden="true" /> {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
          <div className="overflow-hidden rounded-2xl bg-slate-800">
            <img
              alt="Factory quality inspection and sourcing coordination in China"
              className="h-80 w-full object-cover md:h-[28rem]"
              data-strk-img-id="hero-qc-factory-visual-9d42"
              data-strk-img="[hero-visual-focus] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <p id="hero-visual-focus" className="pt-4 text-sm font-semibold text-blue-100">
            Factory quality inspection, supplier screening, and export shipment coordination
          </p>
          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {[
              ['01', 'Screen'],
              ['02', 'Inspect'],
              ['03', 'Ship'],
            ].map(([number, label]) => (
              <div key={label} className="rounded-2xl bg-white p-4 text-slate-950">
                <p className="text-xs font-bold text-blue-700">{number}</p>
                <p className="mt-1 text-sm font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
