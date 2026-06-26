import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { caseStudies } from '@/data/site'

export function CasesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          label="Case Studies"
          title="Results for Real Buyers"
          description="See how we have helped businesses across regions source smarter from China."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary mb-3">
                {study.region}
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{study.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">{study.summary}</p>
              <div className="rounded-lg bg-primary-light p-4 mb-4">
                <p className="text-sm font-semibold text-primary">Result</p>
                <p className="text-neutral-700 text-sm">{study.result}</p>
              </div>
              <Link
                to="/case-studies"
                className="text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Read case study →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
