import { useEffect } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { caseStudies } from '@/data/siteData'

const pageTitle = 'Case Studies | SSourcing China'

export default function CaseStudies() {
  useEffect(() => {
    document.title = pageTitle
  }, [])

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Client Results"
          description="Real examples of how we helped buyers solve sourcing problems and grow their business."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={study.client}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">{study.industry}</Badge>
                <h2 id={study.titleId} className="text-xl font-semibold text-slate-900">
                  {study.client}
                </h2>
                <p className="mt-2 font-medium text-primary">{study.result}</p>
                <p id={study.descId} className="mt-3 text-slate-600">
                  {study.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
