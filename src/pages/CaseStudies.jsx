import { useEffect, useRef } from 'react'
import { caseStudies } from '@/data/content'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/sections/PageHeader'
import CtaBanner from '@/components/sections/CtaBanner'

export default function CaseStudies() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="How we help buyers source from China"
        subtitle="Real examples of sourcing projects across different industries, the challenges buyers faced, and the outcomes we delivered together."
      />

      <section ref={ref} className="bg-surface">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-10">
            {caseStudies.map((c) => (
              <article
                key={c.id}
                className="grid gap-8 lg:grid-cols-5 lg:items-center overflow-hidden rounded-xl border border-border-base bg-white shadow-sm"
              >
                <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-slate-100">
                  <img
                    alt={c.client}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="lg:col-span-3 p-7 lg:p-10">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-accent">
                    {c.industry}
                  </span>
                  <h2 id={c.titleId} className="mt-4 text-2xl font-bold text-ink">
                    {c.client}
                  </h2>
                  <p id={c.descId} className="sr-only">
                    {c.industry} sourcing case study
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-action">
                        Challenge
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-body">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-action">
                        Our Approach
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-body">
                        {c.approach}
                      </p>
                    </div>
                    <div className="rounded-lg bg-surface p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-accent">
                        Result
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink">
                        {c.result}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want results like these for your business?"
        subtitle="Tell us about your product and goals. We will outline how we can help and provide a free quote."
      />
    </>
  )
}
