import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/PageHeader.jsx'
import InquiryForm from '@/components/sections/InquiryForm.jsx'
import { CASE_STUDIES } from '@/data/caseStudies.js'

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])

  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Selected sourcing projects"
        description="Representative projects from our client base. Specific brand names and product details are anonymized to respect client confidentiality."
      />

      <section ref={ref} className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {CASE_STUDIES.map((c, idx) => (
              <article
                key={c.id}
                className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-2"
              >
                <div
                  className={`aspect-[4/3] overflow-hidden bg-slate-100 ${
                    idx % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <img
                    alt={c.title}
                    data-strk-img-id={`case-full-${c.id}`}
                    data-strk-img={`[case-full-${c.id}-title] [case-full-${c.id}-industry] china factory`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p
                    id={`case-full-${c.id}-industry`}
                    className="text-xs font-medium uppercase tracking-wider text-blue-700"
                  >
                    {c.industry} · {c.country}
                  </p>
                  <h2
                    id={`case-full-${c.id}-title`}
                    className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
                  >
                    {c.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {c.summary}
                  </p>

                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-5">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                          {m.label}
                        </dt>
                        <dd className="mt-1 text-base font-semibold text-slate-900">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />
    </>
  )
}
