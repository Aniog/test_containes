import { CASE_STUDIES } from "@/data/content"
import { PageHeader } from "@/components/shared/PageHeader"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { StrkImage } from "@/components/shared/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"
import { CtaSection } from "@/components/shared/CtaSection"
import { MapPin, Target, Wrench, TrendingUp } from "lucide-react"

export default function CaseStudies() {
  const ref = useImageLoader([])
  return (
    <>
      <PageHeader
        bgId="casestudies-header-bg-0j1k2l"
        eyebrow="Case studies"
        title="Sourcing outcomes that speak for themselves"
        description="Real examples of how verification, inspection, and coordination helped buyers reduce risk and import with confidence."
      />

      <section ref={ref} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected work"
            title="How we helped these buyers"
          />
          <div className="mt-12 space-y-16">
            {CASE_STUDIES.map((cs, idx) => (
              <div
                key={cs.id}
                className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
                    <StrkImage
                      imgId={cs.imgId}
                      query={`[${cs.descId}] [${cs.titleId}]`}
                      ratio="16x9"
                      width={800}
                      alt={cs.client}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="brand">{cs.category}</Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" />
                      {cs.location}
                    </span>
                  </div>
                  <h2
                    id={cs.titleId}
                    className="mt-3 text-2xl font-bold tracking-tight text-brand-900 md:text-3xl"
                  >
                    {cs.client}
                  </h2>
                  <div className="mt-6 space-y-5">
                    <div className="flex gap-3">
                      <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                      <div>
                        <h3 className="text-sm font-semibold text-brand-900">
                          Challenge
                        </h3>
                        <p
                          id={cs.descId}
                          className="mt-1 text-sm leading-relaxed text-slate-600"
                        >
                          {cs.challenge}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Wrench className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                      <div>
                        <h3 className="text-sm font-semibold text-brand-900">
                          Our approach
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {cs.approach}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                      <div>
                        <h3 className="text-sm font-semibold text-brand-900">
                          Result
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
