import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import StockImage from '@/components/shared/StockImage'
import { caseStudies } from '@/data/content'

export default function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 3)
  return (
    <section id="case-studies" className="py-20 md:py-24 bg-brand-mist">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Case Studies"
            title="Recent sourcing projects"
            description="A look at how we have helped overseas buyers find factories, stabilize quality, and ship on time."
          />
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-2 self-start md:self-auto"
          >
            Read all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {featured.map((cs, idx) => (
            <article
              key={cs.id}
              className="bg-white border border-brand-line rounded-xl overflow-hidden flex flex-col"
            >
              <StockImage
                imgId={`case-${cs.id}-thumb-${idx}`}
                query={`[case-${cs.id}-title] [case-${cs.id}-industry]`}
                ratio="3x2"
                width={600}
                alt=""
                rounded="rounded-none"
              />
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-brand-muted">
                  <span className="font-semibold uppercase tracking-wider text-brand-accent">
                    {cs.industry}
                  </span>
                  <span>&middot;</span>
                  <span>{cs.region}</span>
                </div>
                <h3
                  id={`case-${cs.id}-title`}
                  className="mt-3 text-lg md:text-xl font-semibold text-brand-ink leading-snug"
                >
                  {cs.title}
                </h3>
                <p
                  id={`case-${cs.id}-industry`}
                  className="sr-only"
                >
                  {cs.industry}
                </p>
                <p className="mt-3 text-sm md:text-base text-brand-muted leading-relaxed flex-1">
                  {cs.summary}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-brand-line">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <dt className="text-[11px] uppercase tracking-wider text-brand-muted">
                        {r.label}
                      </dt>
                      <dd className="mt-1 text-base md:text-lg font-bold text-brand-ink">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}