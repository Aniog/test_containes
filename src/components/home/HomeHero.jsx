import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ClipboardCheck, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-brand text-white overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-china-port-9f3c1a"
        data-strk-bg="china shipping container port aerial industrial cargo logistics"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ filter: 'brightness(0.30) saturate(0.55) contrast(1.05)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/70 via-brand/55 to-brand/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div id="hero-eyebrow" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-accent-2" />
            China Sourcing Agent · Verified Suppliers
          </div>

          <h1 id="hero-title" className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>

          <p id="hero-subtitle" className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl">
            We help overseas buyers find reliable Chinese suppliers, verify factories, manage samples, follow production, inspect quality and coordinate shipping — under one accountable partner on the ground.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3.5 rounded-lg font-semibold shadow-sm transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded-lg font-semibold transition"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            <Stat value="500+" label="Buyers served" />
            <Stat value="40+" label="Countries shipped" />
            <Stat value="12 yrs" label="On-the-ground experience" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-white/5">
            <img
              alt="Quality control inspector checking products in a Chinese factory"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-card-qc-7f4b21"
              data-strk-img="quality control inspector clipboard chinese factory production line manufacturing"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              <Pill icon={<ShieldCheck className="w-3.5 h-3.5" />}>Factory Verified</Pill>
              <Pill icon={<ClipboardCheck className="w-3.5 h-3.5" />}>QC On-site</Pill>
              <Pill icon={<Truck className="w-3.5 h-3.5" />}>Door-to-door</Pill>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-brand-2/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-wider text-white/70">
          <span>ISO-style audit checklists</span>
          <span>·</span>
          <span>AQL 2.5 / 4.0 inspections</span>
          <span>·</span>
          <span>Dedicated bilingual project manager</span>
          <span>·</span>
          <span>NDA on request</span>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-white">{value}</div>
      <div className="text-xs sm:text-sm text-white/70 mt-1 leading-snug">{label}</div>
    </div>
  )
}

function Pill({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 text-brand text-xs font-semibold shadow-sm">
      {icon}
      {children}
    </span>
  )
}
