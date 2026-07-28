import { useEffect, useRef } from "react"
import PageHero from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/shared/Section"
import { caseStudies } from "@/data/content"
import CTASection from "@/components/shared/CTASection"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Target, Lightbulb, TrendingUp } from "lucide-react"

export default function CaseStudies() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHero
        breadcrumb="Case Studies"
        eyebrow="Case Studies"
        title="How We Help Global Buyers Source Smarter"
        subtitle="Real examples of how supplier verification, quality control, and shipping coordination made a measurable difference."
      />

      <Section className="bg-bg">
        <div ref={ref} className="space-y-10">
          {caseStudies.map((item, idx) => (
            <article
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-line bg-surface p-6 md:p-10 shadow-sm"
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
                  <img
                    alt={item.client}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 text-primary px-3 py-1 text-xs font-semibold">
                    {item.industry}
                  </span>
                </div>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2 id={item.titleId} className="text-2xl font-bold text-ink">
                  {item.client}
                </h2>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-50 text-accent shrink-0">
                      <Target className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">Challenge</h4>
                      <p id={item.descId} className="text-sm text-muted leading-relaxed mt-0.5">
                        {item.challenge}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-primary shrink-0">
                      <Lightbulb className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">Our Solution</h4>
                      <p className="text-sm text-muted leading-relaxed mt-0.5">{item.solution}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-50 text-green-600 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">Result</h4>
                      <p className="text-sm text-ink font-medium leading-relaxed mt-0.5">{item.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want results like these?"
        subtitle="Tell us your sourcing challenge. We will show you exactly how we would approach it."
      />
    </>
  )
}
