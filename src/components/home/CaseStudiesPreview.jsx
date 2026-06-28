import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { CASE_STUDIES } from "@/data/content"

export default function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const featured = CASE_STUDIES.slice(0, 3)

  return (
    <Section id="case-studies" className="bg-white">
      <SectionContainer>
        <div ref={containerRef}>
          <SectionHeading
            eyebrow="Case Studies"
            title="Real projects, measurable results"
            description="A few examples of how our sourcing, QC, and logistics work translated into outcomes for overseas buyers."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featured.map((cs) => (
              <article
                key={cs.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={cs.client}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                    {cs.industry}
                  </span>
                  <h3 id={cs.titleId} className="mt-2 text-lg font-semibold text-slate-900">
                    {cs.client}
                  </h3>
                  <p id={cs.descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                    {cs.result}
                  </p>
                  <div className="mt-5 flex gap-6 border-t border-slate-100 pt-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-lg font-bold text-primary">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button to="/case-studies" variant="secondary">
              Read All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Section>
  )
}
