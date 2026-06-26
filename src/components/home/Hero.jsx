import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Factory, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p id="hero-eyebrow" className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Trusted Sourcing Partner in China
            </p>
            <h1 id="hero-title" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              We help importers, brands, and online sellers find reliable Chinese suppliers,
              verify factories on the ground, control product quality, and coordinate shipping
              from China to your door.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
              >
                See How It Works
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <dt className="text-2xl font-bold text-slate-900">10+</dt>
                <dd className="text-xs text-slate-500 mt-1">Years in sourcing</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-slate-900">800+</dt>
                <dd className="text-xs text-slate-500 mt-1">Verified factories</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-slate-900">40+</dt>
                <dd className="text-xs text-slate-500 mt-1">Countries served</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 shadow-sm">
              <img
                alt="Quality inspection at a Chinese factory production line"
                className="h-full w-full object-cover"
                data-strk-img-id="hero-img-7c2ac1"
                data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow] quality inspection factory production line china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 w-56 rounded-lg bg-white p-4 shadow-md ring-1 ring-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-semibold text-slate-900">Factory Verified</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">On-site audit completed with documented report.</p>
            </div>

            <div className="hidden md:flex absolute -top-6 -right-6 items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-white shadow-md">
              <Ship className="h-5 w-5 text-blue-300" />
              <div>
                <div className="text-sm font-semibold leading-tight">Door to Door</div>
                <div className="text-xs text-slate-300 leading-tight">Sea, air & express shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
