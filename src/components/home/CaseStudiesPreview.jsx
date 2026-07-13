import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import { caseStudies } from "@/data/caseStudies.js"

export default function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3)
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="Case studies"
        title="How we have helped recent buyers"
        description="Short, specific stories from real engagements. Names are omitted by client request; details are accurate."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {featured.map((cs) => (
          <article key={cs.id} className="card p-6 md:p-7 h-full flex flex-col">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="pill">{cs.industry}</span>
              <span>{cs.region}</span>
            </div>
            <h3 className="h-card mt-4">{cs.title}</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
              {cs.summary}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-200 pt-4">
              {cs.metrics.slice(0, 3).map((m) => (
                <div key={m.label} className="text-center md:text-left">
                  <p className="text-lg font-bold text-brand-800">{m.value}</p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/case-studies" className="btn-secondary">
          Read all case studies
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </Section>
  )
}
