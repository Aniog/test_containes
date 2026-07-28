import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/shared/SectionHeading'
import { caseStudies } from '@/data/siteData'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CaseStudiesSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={{ text: 'Case Studies' }}
          title="Real Results for Real Clients"
          description="See how we have helped businesses improve quality, reduce lead times, and find better suppliers."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="outline">{study.industry}</Badge>
                  <span className="text-xs text-gray-500">{study.client}</span>
                </div>
                <CardTitle className="text-lg">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-gray-600">{study.summary}</p>
                <div className="flex items-center gap-2 rounded-lg bg-secondary-light/50 p-3">
                  <TrendingUp className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary-dark">{study.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary-dark"
          >
            Read all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
