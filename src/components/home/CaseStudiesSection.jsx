import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { caseStudies } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading'

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="section-pad bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real outcomes for real buyers"
          subtitle="A few examples of how our sourcing, verification, and QC work translated into measurable results."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article key={c.id} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="badge bg-steel/10 text-steel w-fit">{c.industry}</span>
                <h3 id={c.titleId} className="mt-3 text-lg font-bold leading-snug text-ink">{c.title}</h3>
                <p id={c.descId} className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200 pt-4">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <div className="text-sm font-bold text-navy">{r.value}</div>
                      <div className="text-[11px] leading-tight text-muted">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/case-studies" className="btn-secondary">
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
