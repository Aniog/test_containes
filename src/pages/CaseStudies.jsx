import PageHeader from '@/components/shared/PageHeader'
import SectionHeading from '@/components/shared/SectionHeading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { caseStudies } from '@/data/siteData'
import CTASection from '@/components/home/CTASection'
import { TrendingUp, CheckCircle } from 'lucide-react'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CaseStudies() {
  const containerRef = useImageLoader()

  return (
    <>
      <PageHeader
        title="Client Case Studies"
        description="Real sourcing projects where we helped clients solve supplier, quality, and logistics challenges."
        badge="Results"
        pageId="case-studies"
      />

      <section ref={containerRef} className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Help Buyers Succeed"
            description="Each case study highlights a common sourcing problem and the practical outcome we delivered."
            className="mb-12"
          />

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden transition-shadow hover:shadow-md">
                <div className="grid lg:grid-cols-[400px_1fr]">
                  <div className="relative min-h-[240px] bg-gray-100">
                    <div
                      className="absolute inset-0"
                      data-strk-bg-id={`case-bg-${study.id}-d4`}
                      data-strk-bg={`[case-title-${index}] [case-summary-${index}]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <Badge variant="outline">{study.industry}</Badge>
                      <span className="text-sm text-gray-500">{study.client}</span>
                    </div>
                    <CardTitle id={`case-title-${index}`} className="mb-4 text-2xl">
                      {study.title}
                    </CardTitle>
                    <p id={`case-summary-${index}`} className="mb-6 leading-relaxed text-gray-600">
                      {study.summary}
                    </p>
                    <div className="flex items-center gap-3 rounded-lg bg-secondary-light/50 p-4">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      <span className="font-medium text-secondary-dark">{study.result}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gray-50 p-8 lg:p-12">
            <SectionHeading
              title="What Our Clients Say"
              description="Consistent communication, detailed reports, and real accountability are why buyers continue working with us."
              className="mb-8"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "SSourcing China gave us visibility we never had before. We finally knew what was happening at the factory.",
                "They found us a replacement supplier in under two weeks and helped us avoid a major stockout.",
              ].map((quote, idx) => (
                <div key={idx} className="flex gap-3 rounded-xl bg-white p-5 shadow-sm">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm italic text-gray-700">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
