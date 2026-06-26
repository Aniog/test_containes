import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        data-strk-bg-id="home-hero-bg-7a3f1c"
        data-strk-bg="[home-hero-sub] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
            China sourcing agent for global buyers
          </p>
          <h1
            id="home-hero-title"
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="home-hero-sub" className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
            We help importers, brands and e-commerce sellers find reliable Chinese suppliers,
            verify factories on-site, control quality and ship to your door — with one accountable
            team on the ground in China.
          </p>

          <ul className="mt-8 flex flex-col gap-3 text-sm text-slate-200 md:flex-row md:gap-6">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-red-400" />
              <span>Verified factories, not just trading companies</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-red-400" />
              <span>On-site QC before shipment</span>
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 md:text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-red-400" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                What we cover
              </p>
            </div>
            <ul className="mt-6 grid gap-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                <span><strong className="text-white">Find reliable suppliers</strong> matched to your product, price and certification needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                <span><strong className="text-white">Verify factories</strong> with on-site audits, business license and capacity checks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                <span><strong className="text-white">Inspect quality</strong> at the factory before goods leave China.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                <span><strong className="text-white">Follow production</strong> and report on timelines, samples and changes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                <span><strong className="text-white">Coordinate shipping</strong> by sea, air or rail, including export documents.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-slate-950/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          <Stat value="600+" label="Buyers served" />
          <Stat value="35+" label="Countries shipped to" />
          <Stat value="120M+ USD" label="Orders managed" />
          <Stat value="48h" label="Typical quote time" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-semibold text-white md:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">{label}</p>
    </div>
  )
}
