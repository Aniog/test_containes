import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import { CASE_STUDIES } from '@/data/content.js'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        breadcrumb="Case Studies"
        title="Sourcing projects with measurable outcomes"
        desc="A selection of recent client engagements. Each project below was managed end-to-end by SSourcing China across sourcing, QC and shipping."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((c) => (
              <article
                key={c.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] ${c.category} factory china production`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {c.category}
                  </span>
                  <h3 id={c.titleId} className="mt-4 text-xl md:text-2xl font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p id={c.descId} className="mt-3 text-base text-slate-600 leading-relaxed">
                    {c.desc}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xl md:text-2xl font-bold text-slate-900">{m.value}</div>
                        <div className="text-[11px] uppercase tracking-wide text-slate-500 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-slate-950 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Your project could be next
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              Share your product brief and we will reply with a feasibility check within one working day.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
