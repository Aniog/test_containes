import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { heroMetrics, stats } from '@/data/siteData'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="home-hero-factory-bg-92af31"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-blue/80" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">China sourcing support for overseas buyers</p>
          <h1 id="hero-title" className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with a practical China-based sourcing partner.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-4 text-sm font-bold text-brand-navy shadow-sm transition hover:bg-white">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-brand-navy">
              Explore Services
            </Link>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {heroMetrics.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-3 text-sm font-semibold text-white backdrop-blur">
                  <Icon className="h-5 w-5 text-brand-amber" />
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-b2b backdrop-blur">
          <div className="overflow-hidden rounded-2xl bg-white text-brand-navy shadow-b2b">
            <img
              alt="Quality control inspection in a Chinese factory"
              className="h-72 w-full object-cover md:h-96"
              data-strk-img-id="home-hero-qc-inspection-cc71e2"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="grid gap-3 p-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-brand-ice p-4 text-center">
                  <p className="text-2xl font-bold text-brand-navy">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-brand-line p-5">
              <p className="flex items-start gap-3 text-sm leading-6 text-brand-slate">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-cyan" />
                Built for buyers who need clear supplier information, realistic timelines, and better visibility before shipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
