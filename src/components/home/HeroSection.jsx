import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '@/strk-img-config.json'
import { stats } from '@/content/siteContent'
import { buttonClassName } from '@/components/ui/Button'

const proofPoints = [
  'Supplier verification before you commit',
  'QC and production follow-up on the ground',
  'Shipping readiness coordination with clearer visibility',
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-slate-950 text-white" ref={containerRef}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
            China-based sourcing support for overseas buyers
          </div>

          <div className="space-y-5">
            <h1 id="home-hero-title" className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-desc" className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              SSourcing China helps you find reliable suppliers, verify factories,
              inspect quality, follow production, and coordinate shipping with a clear,
              practical process.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className={buttonClassName({ size: 'lg' })}>
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className={buttonClassName({ variant: 'secondary', size: 'lg', className: 'border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white' })}
            >
              See How It Works
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="flex gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-sm leading-6 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-blue-700/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl">
            <img
              alt="Factory quality inspection in China"
              className="h-[280px] w-full rounded-[1.5rem] object-cover md:h-[340px]"
              data-strk-img-id="hero-factory-inspection-c8g4d1"
              data-strk-img="[home-hero-desc] [home-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Supplier Verification
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Background checks, capability review, and clearer qualification before samples or deposits.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Quality & Shipping
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Inspection booking, issue visibility, and shipping readiness coordination for overseas buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
