import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/data/content"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CaseStudiesSection() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real results for global buyers"
          description="A few examples of how structured sourcing, verification, and QC made a measurable difference."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              to="/case-studies"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[cases-${cs.id}-title] [cases-${cs.id}-industry]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                  <span id={`cases-${cs.id}-industry`}>{cs.industry}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-400">{cs.location}</span>
                </div>
                <h3
                  id={`cases-${cs.id}-title`}
                  className="mt-2 text-lg font-bold text-ink"
                >
                  {cs.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cs.summary}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button as={Link} to="/case-studies" variant="secondary">
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
