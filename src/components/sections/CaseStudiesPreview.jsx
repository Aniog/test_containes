import { Link } from "react-router-dom"
import { ArrowRight, Quote } from "lucide-react"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CASE_STUDIES } from "@/data/content"
import { Section, SectionHeader } from "@/components/shared/Section"

export default function CaseStudiesPreview() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const preview = CASE_STUDIES.slice(0, 3)

  return (
    <Section id="cases" className="bg-white">
      <div className="container-x" ref={ref}>
        <SectionHeader
          eyebrow="Case studies"
          title="A few of the projects we have shipped"
          subtitle="Short, honest summaries — country, scope, and the result. No fabricated numbers."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {preview.map((cs) => (
            <article
              key={cs.id}
              id={`cs-${cs.id}`}
              className="card flex flex-col overflow-hidden"
            >
              <div
                className="relative aspect-[16/10] bg-slate-100"
                data-strk-bg-id={`cs-${cs.id}-bg`}
                data-strk-bg={`[cs-${cs.id}-summary] [cs-${cs.id}-industry] [cases-section-title]`}
                data-strk-bg-ratio="16x10"
                data-strk-bg-width="600"
              >
                <img
                  alt={`${cs.industry} case study for ${cs.country}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`cs-${cs.id}-img`}
                  data-strk-img={`[cs-${cs.id}-summary] [cs-${cs.id}-industry] [cases-section-title]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  <span
                    id={`cs-${cs.id}-industry`}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-ink-700"
                  >
                    {cs.industry}
                  </span>
                  <span>·</span>
                  <span>{cs.country}</span>
                </div>
                <h3
                  id={`cs-${cs.id}-summary`}
                  className="text-base font-semibold text-ink-900"
                >
                  {cs.summary}
                </h3>
                <div className="mt-2 rounded-lg bg-page p-3 text-sm">
                  <p className="font-semibold text-ink-900">Result</p>
                  <p className="mt-1 text-ink-700">{cs.outcome}</p>
                </div>
                <div className="mt-auto flex items-start gap-2 border-t border-border-soft pt-3 text-sm">
                  <Quote className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <p className="text-ink-700">
                    <span className="italic">{cs.quote}</span>
                    <span className="mt-1 block text-xs text-ink-500">
                      — {cs.author}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p id="cases-section-title" className="sr-only">Case Studies</p>

        <div className="mt-10 text-center">
          <Link to="/case-studies" className="btn-ghost">
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
