import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Factory, Search, Ship } from 'lucide-react'

const HomeHero = () => (
  <section className="relative overflow-hidden bg-brand-white text-brand-navy">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
      <div className="flex flex-col justify-center">
        <p id="hero-eyebrow" className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Supplier sourcing · factory checks · QC · shipping coordination
        </p>
        <h1 id="hero-title" className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-brand-navy md:text-6xl">
          China Sourcing Agent for Global Buyers
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-slate">
          SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipment handover from China.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-navy">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center rounded-xl border border-brand-line bg-white px-6 py-3 text-sm font-bold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue">
            View sourcing services
          </Link>
        </div>
        <div className="mt-8 grid gap-3 text-sm font-medium text-brand-slate sm:grid-cols-3">
          {['China-based support', 'Supplier screening', 'QC before shipment'].map((item) => (
            <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-blue" />{item}</span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-brand-line bg-brand-mist shadow-soft">
          <img
            alt="Factory quality control and sourcing coordination"
            className="h-[420px] w-full object-cover"
            data-strk-img-id="home-hero-factory-qc-2af91d"
            data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[{ icon: Search, label: 'Source' }, { icon: Factory, label: 'Verify' }, { icon: Ship, label: 'Ship' }].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-brand-line bg-white p-4 text-center text-sm font-bold text-brand-navy shadow-soft">
              <Icon className="mx-auto mb-2 h-5 w-5 text-brand-blue" />{label}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero
