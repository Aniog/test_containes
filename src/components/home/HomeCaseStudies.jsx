import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { caseStudies } from "@/data/caseStudies"
import { Container, SectionHeader } from "@/components/shared/Section"

export default function HomeCaseStudies() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Case Studies"
          title="Results from real sourcing projects"
          description="A few examples of how structured sourcing and QC changed outcomes for our clients."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group overflow-hidden rounded-xl border border-border bg-surface shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={study.title}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand">
                  {study.industry}
                </span>
              </div>
              <div className="p-6">
                <h3 id={study.titleId} className="text-lg font-bold text-ink leading-snug">
                  {study.title}
                </h3>
                <p id={study.descId} className="mt-2 text-sm text-slate-ink leading-relaxed">
                  {study.summary}
                </p>
                <div className="mt-5 flex items-center gap-4 rounded-lg bg-brand-light px-4 py-3">
                  <span className="text-2xl font-bold text-brand">
                    {study.metric}
                  </span>
                  <span className="text-xs text-slate-ink leading-tight">
                    {study.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
