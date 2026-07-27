import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import strkImgConfig from '@/strk-img-config.json'
import CTASection from '@/components/shared/CTASection'
import PageHero from '@/components/shared/PageHero'
import { caseStudies } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'


export default function CaseStudiesPage() {
  const pageRef = useRef(null)

  usePageMeta(
    'Case Studies | SSourcing China',
    'Review sourcing case studies covering supplier verification, quality inspection, production follow-up, and shipping coordination.'
  )

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={pageRef}>
      <PageHero
        eyebrow="Case studies"
        title="Short examples of the sourcing challenges buyers bring to us"
        description="These examples are intended to show the type of practical support buyers request when they need local sourcing execution in China."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((item) => (
            <article
              key={item.id}
              className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-8"
            >
              <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-3">
                <img
                  alt={item.title}
                  className="h-72 w-full rounded-[1.3rem] object-cover"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{item.client}</p>
                <h2 id={item.titleId} className="mt-4 text-3xl font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p id={item.descId} className="mt-4 text-base leading-8 text-slate-600">
                  {item.summary}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">Challenge</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.challenge}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">Solution</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900">Outcome</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.outcome}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  )
}
