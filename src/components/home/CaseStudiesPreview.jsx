import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ArrowRight, TrendingDown, Clock, DollarSign } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { caseStudies } from "@/data/content"
import Section from "@/components/ui/Section"

const featured = caseStudies.slice(0, 3)

function resultIcon(label) {
  if (label.toLowerCase().includes("cost") || label.toLowerCase().includes("savings") || label.toLowerCase().includes("price")) return DollarSign
  if (label.toLowerCase().includes("lead") || label.toLowerCase().includes("time") || label.toLowerCase().includes("market")) return Clock
  return TrendingDown
}

export default function CaseStudiesPreview() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <Section background="white" id="case-studies">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Case Studies
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
            Real results from real sourcing projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A sample of recent client work — with the actual numbers, not
            marketing summaries.
          </p>
        </div>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-accent-500 whitespace-nowrap"
        >
          All case studies
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {featured.map((c) => (
          <article
            key={c.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-cardHover transition-shadow"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                alt={`${c.industry} case study`}
                data-strk-img-id={`case-preview-${c.id}-9b4e21`}
                data-strk-img={`[case-${c.id}-summary] [case-${c.id}-industry] case study product factory`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy-600">
                <span id={`case-${c.id}-industry`}>{c.industry}</span>
              </div>
            </div>
            <div className="p-6">
              <h3
                id={`case-${c.id}-summary`}
                className="text-base font-semibold text-navy-600 leading-snug"
              >
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {c.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                {c.results.map((r) => {
                  const Icon = resultIcon(r.label)
                  return (
                    <li
                      key={r.label}
                      className="flex items-center justify-between gap-2 text-sm"
                    >
                      <span className="flex items-center gap-2 text-slate-600">
                        <Icon className="h-3.5 w-3.5 text-accent-500" />
                        {r.label}
                      </span>
                      <span className="font-semibold text-navy-600">
                        {r.value}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
