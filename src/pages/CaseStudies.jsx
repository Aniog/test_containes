import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero.jsx'
import CtaBand from '@/components/CtaBand.jsx'
import { CASE_STUDIES } from '@/data/site.js'

function CaseBlock({ c, flip }) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={`overflow-hidden rounded-xl border border-slate-200 shadow-sm ${flip ? 'lg:order-2' : ''}`}>
        <img
          alt={c.title}
          data-strk-img-id={`${c.imgId}-full`}
          data-strk-img={`[${c.id}-full-approach] [${c.id}-full-challenge] [${c.id}-full-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className={flip ? 'lg:order-1' : ''}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            {c.industry}
          </span>
          <span className="text-sm text-slate-500">{c.client}</span>
        </div>
        <h2 id={`${c.id}-full-title`} className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {c.title}
        </h2>
        <div className="mt-5 space-y-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">The challenge</h3>
            <p id={`${c.id}-full-challenge`} className="mt-1.5 text-sm leading-relaxed text-slate-600 md:text-base">{c.challenge}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Our approach</h3>
            <p id={`${c.id}-full-approach`} className="mt-1.5 text-sm leading-relaxed text-slate-600 md:text-base">{c.approach}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
          {c.results.map((r) => (
            <div key={r.label}>
              <p className="text-lg font-bold text-brand-600 md:text-xl">{r.value}</p>
              <p className="mt-1 text-xs leading-tight text-slate-500">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        title="How we helped importers reduce risk, cost, and lead time"
        subtitle="Real projects with real constraints. Details are anonymized for client confidentiality, but the numbers are accurate."
        id="cases-title"
        subId="cases-subtitle"
        bgId="cases-hero-bg-m9"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {CASE_STUDIES.map((c, i) => (
            <CaseBlock key={c.id} c={c} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CtaBand
        title="Want results like these for your product?"
        subtitle="Every project above started with a simple inquiry. Tell us what you are sourcing and we will outline a practical plan."
      />
    </div>
  )
}
