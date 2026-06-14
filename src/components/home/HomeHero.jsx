import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, ShieldCheck, FileCheck2, Truck } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Independent factory audits' },
  { icon: FileCheck2, label: 'AQL-based quality inspections' },
  { icon: Truck, label: 'Door-to-door shipping coordination' },
]

const HomeHero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="home-hero-bg-7d31c2"
        data-strk-bg="[home-hero-headline] [home-hero-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/40 to-white" />

      <div className="container-content py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="kicker">China Sourcing Agent for Global Buyers</p>
            <h1
              id="home-hero-headline"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.05] tracking-tight"
            >
              Find and verify China suppliers, inspect quality, and ship to your door.
            </h1>
            <p
              id="home-hero-sub"
              className="mt-6 text-lg md:text-xl text-primary-600 max-w-2xl leading-relaxed"
            >
              SSourcing China is a B2B sourcing partner for importers, retailers, and brands. We help you shortlist factories, audit production, run AQL inspections, and coordinate shipping — so you can focus on growing your business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link to="/contact" className="btn-primary text-base">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-base">
                See How It Works
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {TRUST_BADGES.map((b) => (
                <li key={b.label} className="flex items-start gap-2.5">
                  <b.icon className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-primary-700 leading-snug">{b.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-card-hover border border-slate-200 bg-slate-100">
              <img
                data-strk-img-id="home-hero-portrait-1b7e2a"
                data-strk-img="[home-hero-headline]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing manager reviewing a production line sample in a Chinese factory"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  data-strk-img-id="home-hero-tile-qc-2c0f4b"
                  data-strk-img="[home-hero-headline]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="QC inspector measuring a sample"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  data-strk-img-id="home-hero-tile-ship-3a8e5d"
                  data-strk-img="[home-hero-headline]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Shipping containers at a port"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  data-strk-img-id="home-hero-tile-factory-4d2c1f"
                  data-strk-img="[home-hero-headline]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Factory floor with production line"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
