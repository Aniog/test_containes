import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import CtaBand from '@/components/common/CtaBand'
import { caseStudies } from '@/data/site'

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
      <PageHeader
        eyebrow="Case Studies"
        title="How buyers source smarter with SSourcing China"
        description="Real projects showing how we recover failing orders, cut logistics cost, and scale new products from sample to bulk."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((cs, i) => {
              const reversed = i % 2 === 1
              return (
                <article
                  key={cs.id}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14 items-center"
                >
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="overflow-hidden rounded-xl shadow-md">
                      <img
                        alt={cs.title}
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={reversed ? 'lg:order-1' : ''}>
                    <span className="inline-flex items-center rounded-full bg-brand-slate px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                      {cs.industry}
                    </span>
                    <h2
                      id={cs.titleId}
                      className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-brand-ink"
                    >
                      {cs.title}
                    </h2>
                    <p
                      id={cs.descId}
                      className="mt-3 text-base leading-relaxed text-brand-muted"
                    >
                      {cs.summary}
                    </p>

                    <div className="mt-6 space-y-4">
                      <CaseBlock label="Challenge" text={cs.challenge} />
                      <CaseBlock label="Approach" text={cs.approach} />
                      <CaseBlock label="Result" text={cs.result} />
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="text-2xl font-bold text-brand-blue">
                            {m.value}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-wide text-brand-muted">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

function CaseBlock({ label, text }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-amber">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-brand-ink">{text}</p>
    </div>
  )
}
