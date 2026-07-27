import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg-1a2b3c"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="container-page relative py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="badge bg-amber/15 text-amber border border-amber/30">
            China-Based Sourcing Agent
          </span>
          <h1
            id="home-hero-title"
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — with transparent fees and real on-the-ground visibility.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/how-it-works" className="btn-ghost border-white/30 text-white hover:bg-white hover:text-navy">
              See How It Works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber" /> Factory verified before deposit
            </span>
            <span className="inline-flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4 text-amber" /> Independent QC inspections
            </span>
            <span className="inline-flex items-center gap-2">
              <Ship className="h-4 w-4 text-amber" /> Door-to-door shipping
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
