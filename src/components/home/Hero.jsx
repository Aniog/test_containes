import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { STATS } from '@/data/site.js'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy-950">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-3f9a1c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy-950/75" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-200">
            Supplier sourcing · Factory audits · Quality control · Shipping
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            We help overseas buyers find reliable Chinese suppliers, verify factories in person,
            inspect quality before shipment, follow production, and coordinate freight — so you can
            import with confidence instead of guesswork.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-300" /> Verified factories only</span>
            <span className="inline-flex items-center gap-2"><ClipboardCheck className="h-4 w-4 text-brand-300" /> Independent QC inspections</span>
            <span className="inline-flex items-center gap-2"><Ship className="h-4 w-4 text-brand-300" /> Door-to-port shipping</span>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-slate-400 md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
