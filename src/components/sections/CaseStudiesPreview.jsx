import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { CASE_STUDIES } from '@/data/caseStudies.js'

export default function CaseStudiesPreview({ limit = 3 }) {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])

  const items = CASE_STUDIES.slice(0, limit)

  return (
    <section ref={ref} className="border-b border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
              Case studies
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Real buyers, real numbers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              A few representative projects. Names and product details are
              anonymized at our clients' request.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={`case-${c.id}-img-7c1`}
                  data-strk-img={`[case-${c.id}-title] [case-${c.id}-industry] china factory production`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p
                  id={`case-${c.id}-industry`}
                  className="text-xs font-medium uppercase tracking-wider text-blue-700"
                >
                  {c.industry} · {c.country}
                </p>
                <h3
                  id={`case-${c.id}-title`}
                  className="mt-2 text-lg font-semibold text-slate-900"
                >
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {c.summary}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-slate-900">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
