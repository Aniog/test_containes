import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Check, ShieldCheck } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { STATS } from "@/data/site"

const HERO_POINTS = [
  "Verified suppliers, not directory listings",
  "On-site factory audits",
  "Independent pre-shipment QC",
  "End-to-end shipping coordination",
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-3f8a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-200 ring-1 ring-white/15 backdrop-blur">
            <ShieldCheck className="w-3.5 h-3.5" />
            China-based sourcing agent since 2014
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can import from China with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-brand-700 text-white hover:bg-brand-800 transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors backdrop-blur"
            >
              See How It Works
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-slate-200">
                <Check className="w-4 h-4 text-brand-300 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-slate-900/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.id}>
                <dt className="text-2xl md:text-3xl font-bold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slate-300">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
