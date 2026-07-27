import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-primary-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        data-strk-bg-id="hero-bg-container-port-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-primary-900/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-100">
            On-the-ground team in Shenzhen since 2016
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — with transparent fees and weekly reporting.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-7 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
            >
              Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent-200" />
              <div>
                <p className="font-semibold text-white">Verified suppliers</p>
                <p className="mt-1 text-sm text-slate-400">On-site factory audits before you pay a deposit</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClipboardCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent-200" />
              <div>
                <p className="font-semibold text-white">Independent QC</p>
                <p className="mt-1 text-sm text-slate-400">AQL inspections with photo reports in 24h</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Ship className="mt-0.5 h-6 w-6 shrink-0 text-accent-200" />
              <div>
                <p className="font-semibold text-white">Shipping handled</p>
                <p className="mt-1 text-sm text-slate-400">Freight, documents, and consolidation coordinated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
