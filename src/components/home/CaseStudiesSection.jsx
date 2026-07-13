import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import SectionLabel from '@/components/shared/SectionLabel'
import { Badge } from '@/components/ui/badge'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    client: 'US Home Goods Brand',
    industry: 'Home & Furniture',
    result: 'Reduced defect rate from 8% to under 1.5%',
    summary: 'We re-sourced production to a vetted factory, implemented pre-shipment inspections, and standardized packaging requirements.',
    imgId: 'case-home-goods',
    titleId: 'case-title-home-goods',
    descId: 'case-desc-home-goods',
  },
  {
    client: 'European Electronics Distributor',
    industry: 'Electronics',
    result: 'Cut lead time by 3 weeks on first order',
    summary: 'Our team identified a component supplier with available capacity and managed the sample-to-production handover.',
    imgId: 'case-electronics',
    titleId: 'case-title-electronics',
    descId: 'case-desc-electronics',
  },
  {
    client: 'Australian Industrial Tools Retailer',
    industry: 'Hardware & Tools',
    result: 'Saved 12% on landed cost',
    summary: 'By consolidating orders and negotiating shipping terms, we lowered total landed cost while maintaining quality.',
    imgId: 'case-hardware',
    titleId: 'case-title-hardware',
    descId: 'case-desc-hardware',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Results for Real Buyers
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These examples show how we help clients improve quality, reduce risk, and control costs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.client} className="group overflow-hidden border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.client}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="secondary">{study.industry}</Badge>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </div>
                <h3 id={study.titleId} className="text-lg font-semibold text-slate-900 mb-2">{study.client}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3">{study.result}</p>
                <p id={study.descId} className="text-sm leading-relaxed text-slate-600">{study.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 no-underline hover:no-underline"
          >
            Read all case studies
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
