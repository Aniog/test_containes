import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ClipboardCheck, ShipWheel } from 'lucide-react'
import { STATS } from '@/data/content'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0">
        <div
          data-strk-bg-id="hero-bg-3a8c1d"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-900/60" />
      </div>

      <div className="container-page relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 backdrop-blur">
            China-Based Sourcing Agent for Global Buyers
          </span>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg text-brand-100 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can import from China with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-accent">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              See how it works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-100">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-400" />
              Factory verification
            </span>
            <span className="inline-flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4 text-accent-400" />
              Independent QC inspection
            </span>
            <span className="inline-flex items-center gap-2">
              <ShipWheel className="h-4 w-4 text-accent-400" />
              Shipping coordination
            </span>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-3xl font-extrabold text-white md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-brand-200">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
