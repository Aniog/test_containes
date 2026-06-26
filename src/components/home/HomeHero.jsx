import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Factory, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-slate-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="home-hero-bg-9f8a2c"
        data-strk-bg="[home-hero-subtitle] [home-hero-title] china factory port shipping"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-900/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
              China-based sourcing agent
            </span>
            <h1
              id="home-hero-title"
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl"
            >
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping — all from one team on the ground in China.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">12+</div>
                <div className="text-xs text-slate-300 mt-1">Years sourcing experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">600+</div>
                <div className="text-xs text-slate-300 mt-1">Verified factory partners</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">40+</div>
                <div className="text-xs text-slate-300 mt-1">Countries served</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <img
                alt="Quality inspector checking products in a Chinese factory"
                data-strk-img-id="home-hero-photo-3c1a5b"
                data-strk-img="[home-hero-subtitle] [home-hero-title] quality control inspection china factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-2xl shadow-2xl border border-white/10 object-cover aspect-[4/3]"
              />

              <div className="hidden md:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-slate-500">On-site QC</div>
                  <div className="text-sm font-semibold text-slate-900">100% inspected</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -top-5 -right-5 items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <Factory className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-slate-500">Factory audits</div>
                  <div className="text-sm font-semibold text-slate-900">Verified suppliers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
