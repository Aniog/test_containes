import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, BadgeCheck, ClipboardCheck, Factory, Ship, Handshake, Check, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBand from '@/components/shared/CtaBand'
import { SERVICES } from '@/data/site'

const ICONS = { Search, BadgeCheck, ClipboardCheck, Factory, Ship, Handshake }

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden bg-primary-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          data-strk-bg-id="services-hero-bg-j1k2l3"
          data-strk-bg="[services-hero-subtitle] [services-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-200">Our Services</p>
          <h1 id="services-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Sourcing, Verification, QC & Shipping — Done Properly
          </h1>
          <p id="services-hero-subtitle" className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Six services that cover every stage of buying from China. Engage us for one step or the whole process — the standard of work is the same.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-7 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
          >
            Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = ICONS[service.icon]
              const flip = i % 2 === 1
              return (
                <div
                  key={service.id}
                  className="grid items-center gap-10 lg:grid-cols-2"
                >
                  <div className={flip ? 'lg:order-2' : ''}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-slate-600">{service.short}</p>
                    <ul className="mt-6 space-y-3">
                      {service.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                            <Check className="h-3.5 w-3.5 text-green-700" />
                          </span>
                          <span className="text-slate-700">{d}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                    >
                      Ask about this service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className={flip ? 'lg:order-1' : ''}>
                    <img
                      alt={service.title}
                      className="w-full rounded-2xl object-cover shadow-lg"
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[service-title-${service.id}] [service-img-caption-${service.id}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <p id={`service-img-caption-${service.id}`} className="mt-3 text-center text-sm text-slate-500">
                      {service.title} — part of our China sourcing and supply chain services
                    </p>
                    <h3 id={`service-title-${service.id}`} className="sr-only">{service.title}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing Approach"
            title="Transparent fees, agreed before we start"
            description="Every engagement begins with a written proposal: scope, deliverables, timeline, and fee. Factory quotations are passed to you without markups. If a project isn't a good fit for us, we'll tell you — and point you in the right direction."
          />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
