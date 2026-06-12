import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, ShieldCheck, Factory, BadgeCheck } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-port-c4f8a1"
        data-strk-bg="[hero-subtitle] [hero-title] container shipping port aerial view China"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200 ring-1 ring-inset ring-white/20">
            Based in Shenzhen · Serving 30+ countries
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            We help overseas buyers find vetted Chinese suppliers, verify factories on the ground,
            inspect quality before shipment, and coordinate logistics — so you can buy from China
            with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              See how it works
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 text-sm text-slate-200 sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-blue-300" aria-hidden="true" />
              500+ verified suppliers
            </li>
            <li className="flex items-center gap-2">
              <Factory className="h-5 w-5 text-blue-300" aria-hidden="true" />
              On-site factory audits
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-300" aria-hidden="true" />
              Pre-shipment inspections (AQL)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
