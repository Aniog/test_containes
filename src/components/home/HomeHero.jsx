import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, Search, Truck } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const TRUST_PILLS = [
  'Independent of any factory',
  'English-speaking project managers',
  'Transparent cost breakdown',
  'No hidden commissions',
]

export default function HomeHero() {
  const ref = useStrkImages()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-ink-soft to-brand-ink text-white"
    >
      <div className="container-page relative grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24 lg:py-28">
        <div className="md:col-span-7">
          <div
            id="hero-eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent"
          >
            China Sourcing Partner for Overseas Buyers
          </div>
          <h1
            id="hero-title"
            className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            We help overseas importers find reliable Chinese suppliers, verify factories on the ground, inspect product quality, follow production, and ship on time — all through one English-speaking team in China.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary !px-7 !py-3.5 text-base">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {TRUST_PILLS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="relative">
            <div
              className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              data-strk-img-id="home-hero-portrait-7d3b1c"
              data-strk-img="[hero-eyebrow] [hero-title] overseas buyer china factory visit"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Sourcing agent inspecting a Chinese factory"
            />
            <div className="absolute -bottom-5 -left-5 hidden w-56 rounded-xl border border-white/10 bg-white/95 p-4 text-brand-ink shadow-xl backdrop-blur md:block">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-accent-soft text-brand-accent">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">Independent QC</div>
                  <div className="text-xs text-slate-500">Works for you, not the factory</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 hidden w-44 rotate-2 rounded-xl border border-white/10 bg-white/95 p-3 text-brand-ink shadow-xl md:block">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-ink text-white">
                  <Search className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">3–5 vetted</div>
                  <div className="text-xs text-slate-500">suppliers per shortlist</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 hidden w-44 -rotate-2 rounded-xl border border-white/10 bg-white/95 p-3 text-brand-ink shadow-xl md:block">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-ink text-white">
                  <Truck className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">FCL / LCL / Air</div>
                  <div className="text-xs text-slate-500">door-to-door options</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
