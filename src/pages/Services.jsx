import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  Factory,
  ClipboardCheck,
  Gauge,
  Ship,
  Settings,
  CheckCircle2,
  FileText,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CTABand from '@/components/CTABand'
import StrkImage from '@/components/StrkImage'
import { SERVICES } from '@/data/content'
import { cn } from '@/lib/utils'

const ICONS = { Search, Factory, ClipboardCheck, Gauge, Ship, Settings }

function PageHero() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Services</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          Sourcing services that cover the whole supply chain
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          From the first supplier search to the final delivery, each service has defined
          steps, fixed deliverables and clear English reporting. Combine them or use
          only what you need.
        </p>
      </div>
    </section>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon]
            const reversed = idx % 2 === 1
            return (
              <article
                key={service.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={cn(reversed && 'lg:order-2')}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <h2 id={`service-${service.id}-title`} className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    {service.title}
                  </h2>
                  <p id={`service-${service.id}-desc`} className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.short}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl border border-line bg-paper p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
                      What you receive
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <span
                          key={d}
                          className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={cn('overflow-hidden rounded-xl border border-line', reversed && 'lg:order-1')}>
                  <StrkImage
                    imgId={`service-${service.id}-img`}
                    query={`[service-${service.id}-desc] [service-${service.id}-title]`}
                    ratio="4x3"
                    width="900"
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <CTABand />
    </div>
  )
}
