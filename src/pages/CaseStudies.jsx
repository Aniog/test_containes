import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "@/components/shared/PageHeader"
import { Section, SectionContainer } from "@/components/ui/Section"
import CtaBand from "@/components/shared/CtaBand"
import { CASE_STUDIES } from "@/data/content"

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="How buyers source with us"
        description="Real examples of sourcing, QC, and logistics projects — the challenge, our approach, and the measurable result."
      />

      <Section className="bg-white">
        <SectionContainer>
          <div ref={containerRef} className="space-y-10">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.id}
                className="grid gap-8 overflow-hidden rounded-xl border border-slate-200 bg-white lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto">
                  <img
                    alt={cs.client}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                    {cs.industry}
                  </span>
                  <h2 id={cs.titleId} className="mt-2 text-2xl font-bold text-slate-900">
                    {cs.client}
                  </h2>

                  <div className="mt-5 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Challenge
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Approach
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {cs.approach}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Result
                      </h3>
                      <p id={cs.descId} className="mt-1 text-sm leading-relaxed text-slate-600">
                        {cs.result}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-8 border-t border-slate-100 pt-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-bold text-primary">
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
        </SectionContainer>
      </Section>

      <CtaBand
        title="Want results like these?"
        description="Tell us about your product and goals. We'll outline a realistic plan and a free quote."
      />
    </>
  )
}
