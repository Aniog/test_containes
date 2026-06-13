import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTAButton } from '../common/CTAButton'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-brand-ink">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-muted to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-brand-blue/20 bg-brand-muted px-4 py-2 text-sm font-semibold text-brand-blue">China-based sourcing support for overseas buyers</p>
          <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">China Sourcing Agent for Global Buyers</h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-subtle">SSourcing China helps importers, brands, wholesalers, and ecommerce teams find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <CTAButton />
            <Link className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue" to="/how-it-works">View sourcing process <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">{['Supplier screening', 'QC reports', 'Shipping handover'].map((item) => (<div className="flex items-center gap-2 text-sm font-semibold text-brand-navy" key={item}><CheckCircle2 className="h-5 w-5 text-brand-blue" />{item}</div>))}</div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-muted shadow-2xl shadow-slate-300/50">
            <img alt="Quality control inspection at a China factory" className="aspect-[4/3] h-full w-full object-cover" data-strk-img-id="hero-factory-qc-92c1e4" data-strk-img="[hero-subtitle] [hero-title]" data-strk-img-ratio="4x3" data-strk-img-width="1000" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-slate-200 bg-white p-5 text-brand-ink shadow-xl shadow-slate-300/60 md:left-auto md:w-80">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Typical support</p>
            <p className="mt-2 text-lg font-bold text-brand-navy">From supplier search to shipment readiness</p>
            <p className="mt-2 text-sm leading-6 text-brand-subtle">A practical workflow designed to reduce uncertainty before production and export.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
