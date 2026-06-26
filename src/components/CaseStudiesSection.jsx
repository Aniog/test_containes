import { Link } from 'react-router-dom'
import { SectionHeading } from './SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { caseStudies } from '@/data/siteData'

export function CaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Results for Real Buyers"
          description="See how we have helped businesses reduce risk, cut costs, and launch products faster."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={study.client}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">{study.industry}</Badge>
                <h3 id={study.titleId} className="text-lg font-semibold text-slate-900">
                  {study.client}
                </h3>
                <p className="mt-2 font-medium text-primary">{study.result}</p>
                <p id={study.descId} className="mt-2 text-sm text-slate-600">
                  {study.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-block font-medium text-primary hover:text-primary-dark"
          >
            Read all case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
