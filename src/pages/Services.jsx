import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import { SERVICES } from '@/data/content.js'

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Services"
        breadcrumb="Services"
        title="Sourcing services for B2B buyers importing from China"
        desc="Hire us for a single service, or run a complete sourcing project end-to-end with one accountable team and a fixed scope."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ id, icon: Icon, title, short, points }) => (
              <article
                key={id}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{short}</p>
                <ul className="mt-5 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-red-600">Pricing</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Two transparent pricing models
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                We charge for our service, not for the product. You always know what you pay before any work begins.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-semibold text-slate-900">Flat project fee</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    For one-off sourcing projects, factory audits or single inspections. Fixed, agreed upfront.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-semibold text-slate-900">% of order value</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    For ongoing orders. Typically 3–8% of FOB value, decreasing with order volume.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                alt="Factory production line"
                data-strk-img-id="services-pricing-img-3b2c8a"
                data-strk-img="Chinese factory production line workers assembling consumer goods"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
