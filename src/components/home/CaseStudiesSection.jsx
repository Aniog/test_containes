import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import SectionHeader from "../shared/SectionHeader"
import { caseStudies } from "../../data/siteData"

export default function CaseStudiesSection() {
  const items = caseStudies.slice(0, 3)
  return (
    <section className="bg-brand-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Case Studies"
            title="Selected client projects"
            description="A few representative engagements across different categories and regions."
          />
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-dark"
          >
            All case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.id}
              className="flex h-full flex-col rounded-xl border border-brand-line bg-white p-6 shadow-sm"
            >
              <span className="inline-flex w-max items-center rounded-full bg-brand-accent/10 px-2.5 py-1 text-xs font-semibold text-brand-accent">
                {c.industry}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">
                {c.client}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-body">
                {c.challenge}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-brand-line pt-5">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-base font-bold text-brand-navy">{m.value}</div>
                    <div className="text-[11px] font-medium uppercase tracking-wide text-brand-muted">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
