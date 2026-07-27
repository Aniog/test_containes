import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Factory, Ship, Package, Check, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import PageHero from '@/components/shared/PageHero'
import CTABand from '@/components/shared/CTABand'
import { SERVICES } from '@/data/content'
import { cn } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

const iconMap = { Search, Building2, ClipboardCheck, Factory, Ship, Package }

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
  <div ref={containerRef}>
    <PageHero eyebrow="Services" title="Sourcing services that cover the full order lifecycle">
      <p>
        Every service below can be engaged individually or as part of a managed
        sourcing program. All engagements start with a written scope and a fixed quote.
      </p>
    </PageHero>

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon]
            const imageFirst = index % 2 === 1
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2"
              >
                <div className={cn(imageFirst && 'lg:order-2')}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-800" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    {service.title}
                  </h2>
                  <p id={`svc-desc-${service.slug}`} className="mt-4 text-base leading-relaxed text-slate-600">
                    {service.detail}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                  >
                    Request this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className={cn(imageFirst && 'lg:order-1')}>
                  <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <img
                      alt={service.title}
                      className="aspect-[4/3] w-full object-cover"
                      data-strk-img-id={`svc-img-${service.slug}-c3`}
                      data-strk-img={`[svc-desc-${service.slug}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>

    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3 md:p-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900">How we charge</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Three transparent models. You receive a written quote before any
              engagement, and factory quotations are always shared with you directly.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Sourcing commission</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              5–10% of order value depending on volume and scope. Best for ongoing
              programs where we manage sourcing, QC, and shipping end to end.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Fixed project fee</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              A set fee for a defined project such as supplier search and verification.
              Best when you want a shortlist and then manage orders yourself.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-5 md:col-start-2 lg:col-start-auto">
            <h3 className="text-sm font-semibold text-slate-900">Per-service pricing</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Fixed rates per factory audit or inspection. Best when you have your own
              suppliers and need eyes on the ground.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CTABand
      title="Not sure which service fits your situation?"
      text="Send us your product details and we will recommend a scope — free and without obligation."
    />
  </div>
  )
}

export default Services
