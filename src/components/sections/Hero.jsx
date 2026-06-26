import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, ShieldCheck, ClipboardCheck, Container } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-6">
          <p
            id="hero-eyebrow"
            className="text-sm font-medium uppercase tracking-wider text-blue-700"
          >
            China sourcing agent · Based in China
          </p>
          <h1
            id="hero-title"
            className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg"
          >
            We help importers, brands and e-commerce sellers find reliable Chinese
            suppliers, verify factories, inspect quality, follow production and
            coordinate shipping — all managed by one bilingual team on the ground in China.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              See how it works
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Verified suppliers
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-slate-900">800+</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Buyers served
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-slate-900">35 countries</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                On-site QC reports
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-slate-900">1,200+</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                alt="Sourcing agent inspecting goods at a Chinese factory"
                data-strk-img-id="home-hero-factory-9k2a7c"
                data-strk-img="[hero-subtitle] [hero-title] china factory inspection sourcing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-md sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Factory verified</p>
                  <p className="text-xs text-slate-500">On-site audit + business license</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 hidden w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-md sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">QC passed</p>
                  <p className="text-xs text-slate-500">AQL 2.5 sample inspection</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 hidden items-center gap-6 text-xs text-slate-500 sm:flex">
            <Container className="h-4 w-4" />
            <span>FOB · CIF · DDP shipping coordinated worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
