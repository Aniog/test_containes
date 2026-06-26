import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Boxes, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-4">
              Trusted China sourcing partner
            </p>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              SSourcing China helps overseas brands, importers and Amazon sellers
              source from China with confidence. We find reliable suppliers, verify
              factories, inspect quality, follow production and coordinate shipping
              door-to-door.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition"
              >
                Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                See how it works
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Verified factories</p>
                  <p className="text-xs text-slate-500">On-site audits</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Boxes className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">QC inspections</p>
                  <p className="text-xs text-slate-500">AQL based</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Ship className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Door-to-door</p>
                  <p className="text-xs text-slate-500">Sea, air, rail</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                alt="Manufacturing facility in China"
                data-strk-img-id="home-hero-factory-7a3d91"
                data-strk-img="[hero-subtitle] [hero-title] modern china factory production line"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="block w-full h-auto"
              />
            </div>

            <div className="hidden sm:block absolute -bottom-6 -left-6 w-44 rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <img
                alt="Quality control inspector checking products"
                data-strk-img-id="home-hero-qc-2b8f4c"
                data-strk-img="quality control inspector clipboard china factory inspection"
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="block w-full h-auto"
              />
            </div>

            <div className="hidden sm:block absolute -top-6 -right-6 w-40 rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <img
                alt="Shipping containers at port"
                data-strk-img-id="home-hero-shipping-9e5a72"
                data-strk-img="shipping container port china export logistics"
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="block w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
