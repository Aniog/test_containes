import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Factory, Ship } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {/* background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg-7a3f1c"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/90 to-brand-blue/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-amber-300 mb-4">
              China sourcing agent · Yiwu &amp; Shenzhen
            </p>
            <h1
              id="home-hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-5 text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed"
            >
              We help overseas B2B buyers find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping — so you
              import from China without surprises.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-400 text-brand-navy hover:bg-amber-300 px-6 py-3.5 text-sm font-semibold transition"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-md border border-white/30 text-white hover:bg-white/10 px-6 py-3.5 text-sm font-semibold transition"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-300" />
                On-site supplier verification
              </span>
              <span className="flex items-center gap-2">
                <Factory className="h-4 w-4 text-amber-300" />
                Factory audits &amp; QC
              </span>
              <span className="flex items-center gap-2">
                <Ship className="h-4 w-4 text-amber-300" />
                Door-to-door shipping
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <img
                  alt="China sourcing agent inspecting goods at a factory"
                  className="w-full h-full object-cover"
                  data-strk-img-id="home-hero-img-9c2e4b"
                  data-strk-img="[home-hero-title] factory inspection sourcing agent China"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl border border-brand-border w-64">
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-blue">Live update</p>
                <p className="mt-1.5 text-sm font-semibold text-brand-navy">QC inspection passed</p>
                <p className="mt-1 text-xs text-brand-muted">
                  10,000 pcs · AQL 2.5 · Photos &amp; video shared with buyer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
