import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/Section"
import { StrkImage } from "@/components/ui/StrkImage"
import { caseStudies } from "@/data/content"

const regionToQuery = {
  USA: "US American retail warehouse buyer",
  EU: "European European Union retail brand",
  "UK": "United Kingdom British retail product",
  Australia: "Australia Australian retail market product",
  "Middle East": "Middle East Arabian Gulf product retail",
  Africa: "Africa African market wholesale distribution",
}

export function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3)
  return (
    <Section bg="slate" id="case-studies">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <SectionHeader
          eyebrow="Case studies"
          title="What we have shipped, and how it went"
          subtitle="Three real engagements from the last 12 months. Full case studies with numbers, challenges and outcomes are available on request."
          align="left"
          className="!max-w-2xl"
        />
        <Link
          to="/case-studies"
          className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600 transition-colors"
        >
          See all case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featured.map((c) => (
          <article
            key={c.id}
            id={`case-${c.id}`}
            className="card overflow-hidden flex flex-col"
          >
            <StrkImage
              imgId={`case-img-${c.id}`}
              query={`[case-${c.id}-title] [case-${c.id}-industry] ${regionToQuery[c.region] || ""}`.trim()}
              ratio="4x3"
              width={600}
              alt={c.title}
              className="aspect-[4/3]"
            />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs">
                <span
                  id={`case-${c.id}-industry`}
                  className="px-2.5 py-1 rounded-md bg-navy-50 text-navy-900 font-semibold"
                >
                  {c.industry}
                </span>
                <span className="text-slate-500">{c.region}</span>
              </div>
              <h3
                id={`case-${c.id}-title`}
                className="mt-3 text-lg font-semibold text-slate-900 leading-snug"
              >
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                {c.summary}
              </p>
              <ul className="mt-4 grid grid-cols-3 gap-2">
                {c.results.map((r) => (
                  <li
                    key={r.label}
                    className="text-center py-2 rounded-md bg-slate-50 border border-slate-200"
                  >
                    <p className="text-sm font-bold text-slate-900">
                      {r.value}
                    </p>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {r.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600"
        >
          See all case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}

export default CaseStudiesPreview
