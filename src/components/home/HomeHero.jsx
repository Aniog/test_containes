import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from 'lucide-react'
import Button from '@/components/ui/Button'
import { stats } from '@/data/site'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber">
            China-Based Sourcing Agent
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can source from China with clarity and control.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button to="/contact" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/how-it-works" variant="ghostLight" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-amber" />
              Verified suppliers
            </span>
            <span className="inline-flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4 text-brand-amber" />
              Independent QC
            </span>
            <span className="inline-flex items-center gap-2">
              <Ship className="h-4 w-4 text-brand-amber" />
              End-to-end shipping
            </span>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-brand-amber/60 pl-4">
              <dt className="text-2xl md:text-3xl font-bold text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs md:text-sm text-slate-300">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
