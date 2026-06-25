import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ShieldCheck, BadgeCheck, Truck, ChevronRight } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#0B2545]">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-container-port-9f2a1b"
        data-strk-bg="[hero-eyebrow] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] via-[#0B2545]/85 to-[#0B2545]/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white">
            <p id="hero-eyebrow" className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E63946]">
              China Sourcing &middot; Yiwu &middot; Shenzhen &middot; Guangzhou
            </p>
            <h1 id="hero-title" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-200 max-w-2xl leading-relaxed">
              We help importers, brands, and Amazon sellers find reliable Chinese suppliers,
              verify factories, control quality, and ship goods safely &mdash; without the
              guesswork, language barrier, or hidden middlemen.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#C42E3A] text-white font-semibold px-6 py-3 rounded-md transition"
              >
                Get a Free Sourcing Quote
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur text-white font-semibold px-6 py-3 rounded-md transition border border-white/15"
              >
                See How It Works
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
              <div>
                <dt className="text-3xl font-bold text-white">12+</dt>
                <dd className="text-sm text-slate-300 mt-1">Years sourcing in China</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-white">800+</dt>
                <dd className="text-sm text-slate-300 mt-1">Buyers served worldwide</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-white">35+</dt>
                <dd className="text-sm text-slate-300 mt-1">Countries shipped to</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                alt="China factory production line and quality control"
                className="w-full h-full object-cover aspect-[4/3]"
                data-strk-img-id="hero-card-factory-line-7d3e91"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2545] text-white ring-2 ring-white">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E63946] text-white ring-2 ring-white">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white ring-2 ring-white">
                    <Truck className="h-4 w-4" />
                  </span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">Verified suppliers. Inspected goods.</p>
                  <p className="text-slate-600">One trusted team from quote to delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
