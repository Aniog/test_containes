import { useEffect, useRef } from "react"
import { caseStudies } from "@/data/caseStudies"
import PageHeader from "@/components/shared/PageHeader"
import { Container, SectionHeader } from "@/components/shared/Section"
import CtaBanner from "@/components/shared/CtaBanner"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CaseStudies() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="How structured sourcing changes outcomes"
        description="Real examples of how verification, QC, and coordination reduced risk and improved results for our clients."
      />

      <section ref={ref} className="py-16 md:py-24 bg-bg">
        <Container>
          <div className="space-y-10">
            {caseStudies.map((study, index) => {
              const reversed = index % 2 === 1
              return (
                <div
                  key={study.id}
                  className="grid gap-8 lg:grid-cols-2 lg:items-center rounded-2xl border border-border bg-surface p-6 md:p-8 shadow-card"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="overflow-hidden rounded-xl">
                      <img
                        alt={study.title}
                        data-strk-img-id={study.imgId}
                        data-strk-img={`[${study.descId}] [${study.titleId}]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="aspect-[16/9] w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <span className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">
                      {study.industry}
                    </span>
                    <h2 id={study.titleId} className="mt-4 text-2xl font-bold text-ink leading-snug">
                      {study.title}
                    </h2>
                    <p id={study.descId} className="mt-3 text-sm text-slate-ink leading-relaxed">
                      {study.summary}
                    </p>
                    <div className="mt-5 flex items-center gap-4 rounded-lg bg-brand-light px-5 py-4">
                      <span className="text-3xl font-bold text-brand">
                        {study.metric}
                      </span>
                      <span className="text-sm text-slate-ink leading-tight">
                        {study.metricLabel}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-medium text-ink">
                      {study.result}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <SectionHeader
            eyebrow="The Pattern"
            title="Better process, better outcomes"
            description="In every case, the improvement came from verification, staged QC, and a single accountable coordinator — not from cutting corners on price."
          />
        </Container>
      </section>

      <CtaBanner
        title="Want results like these on your next order?"
        description="Tell us about your product and current sourcing challenges. We will outline how we would approach it."
      />
    </>
  )
}
