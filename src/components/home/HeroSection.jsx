import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustPoints = [
  'Verified supplier network across 15+ provinces',
  'On-ground team in Shenzhen, Guangzhou, Ningbo',
  'Transparent pricing with no hidden fees',
]

export default function HeroSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      return ImageHelper.loadImages(strkImgConfig, ref.current)
    }
  }, [])

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-slate-900 text-white">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-01"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                China Sourcing Agent for Global Buyers
              </h1>
              <p
                id="hero-subtitle"
                className="text-lg text-slate-300 sm:text-xl"
              >
                We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping so you can focus on growing your business.
              </p>
            </div>

            <div className="space-y-3">
              {trustPoints.map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              data-strk-img-id="hero-img-ssourcing-02"
              data-strk-img="[hero-title] [hero-subtitle]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China factory sourcing"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
