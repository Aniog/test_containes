import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Factory, Ship, ClipboardCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const trustStats = [
  { icon: Factory, label: 'Audited supplier network', value: '1,200+' },
  { icon: ShieldCheck, label: 'On-site QC inspections / yr', value: '600+' },
  { icon: Ship, label: 'Markets served', value: '40+' },
  { icon: ClipboardCheck, label: 'Years in China sourcing', value: '12' },
]

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#0B2545]">
      <div
        className="absolute inset-0 opacity-40"
        data-strk-bg-id="home-hero-bg-9f2a1c"
        data-strk-bg="container shipping port cargo terminal aerial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545] via-[#0B2545]/90 to-[#0B2545]/70" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9EC5E8]">
              Based in China · Trusted by global buyers
            </span>
            <h1
              id="home-hero-title"
              className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg"
            >
              We help importers, brands and distributors find reliable Chinese suppliers, verify
              factories, inspect product quality, follow production and coordinate shipping from a
              single point of contact in China.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#1B6FB8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#155A96]"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/0 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See how it works
              </Link>
            </div>

            <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-[#9EC5E8]" />
                On-the-ground supplier verification
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-[#9EC5E8]" />
                Independent third-party QC inspections
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-[#9EC5E8]" />
                Transparent pricing, no hidden markups
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-[#9EC5E8]" />
                English communication, single point of contact
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <img
                alt="Quality inspector reviewing products on a factory floor in China"
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id="home-hero-image-2c8d11"
                data-strk-img="[home-hero-image-caption] [home-hero-title] factory quality inspection china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="border-t border-white/10 bg-[#0B2545]/70 p-5">
                <p id="home-hero-image-caption" className="text-sm font-medium text-white">
                  On-site QC inspection — Guangdong electronics factory
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Every shipment we manage is inspected before it leaves the factory.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4">
          {trustStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-start gap-3">
                <Icon className="mt-1 h-5 w-5 flex-none text-[#9EC5E8]" />
                <div>
                  <p className="text-2xl font-bold tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
