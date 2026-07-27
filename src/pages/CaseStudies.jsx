import { useEffect, useRef } from 'react'
import PageHero from '@/components/shared/PageHero'
import { caseStudies } from '@/data/site'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Sourcing outcomes with measurable results"
        subtitle="Real examples of how verification, QC, and logistics coordination translated into cost savings, lower defect rates, and protected deposits."
        bgQueryId="casestudies-hero-bg-5e6f7g"
        bgQueryText="quality inspection factory China manufacturing"
      />

      <section ref={containerRef} className="section-pad bg-canvas">
        <div className="container-page space-y-10">
          {caseStudies.map((c, idx) => (
            <article
              key={c.id}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 ${
                idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge bg-steel/10 text-steel">{c.industry}</span>
                  <span className="badge bg-canvas text-muted">{c.client}</span>
                </div>
                <h2 id={c.titleId} className="mt-4 text-2xl font-bold leading-snug text-ink">{c.title}</h2>
                <p id={c.descId} className="mt-3 text-muted leading-relaxed">{c.summary}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {c.results.map((r) => (
                    <div key={r.label} className="rounded-lg border border-slate-200 bg-canvas p-3 text-center">
                      <div className="text-base font-bold text-navy">{r.value}</div>
                      <div className="mt-1 text-[11px] leading-tight text-muted">{r.label}</div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-secondary mt-6">
                  Start a project like this
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
