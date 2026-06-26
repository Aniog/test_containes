import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Icon from '@/components/ui/Icon'
import { CASE_STUDIES } from '@/data/siteContent'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function HomeCaseStudies() {
  const featured = CASE_STUDIES.slice(0, 3)
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real results for real buyers"
            description="A look at how we have helped global companies source better, cut costs, and ship on time."
          />
          <Link
            to="/case-studies"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"
          >
            View all case studies
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((c) => (
            <Link
              key={c.id}
              to="/case-studies"
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge variant="accent">{c.category}</Badge>
                <h3 id={c.titleId} className="mt-3 text-lg font-bold text-ink">
                  {c.title}
                </h3>
                <p id={c.descId} className="sr-only">
                  {c.challenge}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.challenge}</p>
                <div className="mt-4 rounded-lg bg-surface p-3 text-sm">
                  <span className="font-semibold text-brand">Result: </span>
                  <span className="text-ink-muted">{c.result}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
