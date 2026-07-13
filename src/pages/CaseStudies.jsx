import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Clock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import PageHeader from '@/components/shared/PageHeader'
import SectionLabel from '@/components/shared/SectionLabel'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    client: 'US Home Goods Brand',
    location: 'United States',
    industry: 'Home & Furniture',
    result: 'Reduced defect rate from 8% to under 1.5%',
    icon: ShieldCheck,
    summary: 'The client was experiencing quality inconsistencies with an existing supplier. We re-sourced production to a vetted factory, introduced pre-shipment inspections, and standardized packaging requirements.',
    approach: ['Factory audit and capacity review', 'New supplier shortlist within 5 days', 'Pre-shipment inspection with AQL sampling', 'Packaging and labeling standardization'],
    imgId: 'case-page-home-goods',
    titleId: 'case-page-title-home-goods',
    descId: 'case-page-desc-home-goods',
  },
  {
    client: 'European Electronics Distributor',
    location: 'Germany',
    industry: 'Electronics',
    result: 'Cut lead time by 3 weeks on first order',
    icon: Clock,
    summary: 'A distributor needed a new component supplier with faster turnaround. We identified a manufacturer with available capacity and managed sample approval through to first production run.',
    approach: ['Supplier search focused on capacity and certifications', 'Sample coordination and testing support', 'Production milestone tracking', 'Shipping consolidation'],
    imgId: 'case-page-electronics',
    titleId: 'case-page-title-electronics',
    descId: 'case-page-desc-electronics',
  },
  {
    client: 'Australian Industrial Tools Retailer',
    location: 'Australia',
    industry: 'Hardware & Tools',
    result: 'Saved 12% on landed cost',
    icon: TrendingDown,
    summary: 'By reviewing the full cost structure, we consolidated orders across two suppliers and negotiated better shipping terms without compromising product quality.',
    approach: ['Cost breakdown analysis', 'Supplier consolidation', 'Freight forwarder comparison', 'Document preparation and shipment tracking'],
    imgId: 'case-page-hardware',
    titleId: 'case-page-title-hardware',
    descId: 'case-page-desc-hardware',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        title="Case Studies"
        subtitle="Real results from real sourcing projects."
        backgroundId="case-studies-header-bg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <SectionLabel>Client Results</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How We Help Buyers Succeed
            </h2>
          </div>

          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.client} className="overflow-hidden border-slate-200 shadow-sm">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`aspect-[4/3] lg:aspect-auto overflow-hidden bg-slate-100 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className={`p-6 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <span className="text-xs text-slate-500">{study.location}</span>
                    </div>
                    <h3 id={study.titleId} className="text-2xl font-bold text-slate-900 mb-2">{study.client}</h3>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
                      <study.icon className="h-4 w-4" />
                      {study.result}
                    </div>
                    <p id={study.descId} className="text-slate-600 leading-relaxed mb-6">{study.summary}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Our approach</p>
                      <ul className="space-y-2">
                        {study.approach.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact?quote=true" className="no-underline hover:no-underline">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
