import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2, User, Clock3, Package } from 'lucide-react'
import CTABand from '@/components/CTABand'
import StrkImage from '@/components/StrkImage'
import { CASE_STUDIES } from '@/data/content'
import { cn } from '@/lib/utils'

function PageHero() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Case Studies</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          How buyers like you source with us
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          Four recent engagements, described honestly: the problem, what we did, and the
          measurable outcome. Client names are withheld for confidentiality.
        </p>
      </div>
    </section>
  )
}

export default function CaseStudies() {
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
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {CASE_STUDIES.map((cs, idx) => {
            const reversed = idx % 2 === 1
            return (
              <article
                key={cs.id}
                className="overflow-hidden rounded-xl border border-line bg-paper shadow-sm"
              >
                <div className="grid lg:grid-cols-5">
                  <div className={cn('relative min-h-64 lg:min-h-full lg:col-span-2', reversed && 'lg:order-2')}>
                    <StrkImage
                      imgId={`case-${cs.id}-img`}
                      query={`[case-${cs.id}-category] [case-${cs.id}-industry]`}
                      ratio="4x3"
                      width="900"
                      alt={cs.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className={cn('p-6 md:p-10 lg:col-span-3', reversed && 'lg:order-1')}>
                    <p id={`case-${cs.id}-industry`} className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {cs.industry}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink">{cs.title}</h2>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        {cs.client}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Package className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        <span id={`case-${cs.id}-category`}>{cs.category}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        {cs.duration}
                      </span>
                    </div>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">The challenge</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{cs.challenge}</p>
                        <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-ink">Our approach</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{cs.approach}</p>
                      </div>
                      <div className="rounded-xl border border-line bg-white p-5">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Results</h3>
                        <ul className="mt-3 space-y-3">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
