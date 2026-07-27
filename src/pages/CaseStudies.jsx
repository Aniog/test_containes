import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    title: 'Electronics supplier audit and first shipment',
    category: 'Electronics',
    challenge: 'A buyer needed a verified supplier for audio accessories with consistent quality and on-time delivery.',
    result: 'We audited 3 factories, selected one supplier, managed samples, and supported pre-shipment inspection. The first shipment arrived on schedule with a low defect rate.',
  },
  {
    title: 'Home goods sourcing and QC program',
    category: 'Home and Kitchen',
    challenge: 'A retailer needed multiple home product categories from one reliable partner with consistent packaging.',
    result: 'We mapped suppliers, negotiated terms, and set up an inspection checklist. The buyer reduced return rates and improved shelf-ready packaging.',
  },
  {
    title: 'Industrial parts production follow-up',
    category: 'Industrial and Hardware',
    challenge: 'An importer faced delays and quality drift during a long production run.',
    result: 'We introduced in-line monitoring, milestone checks, and corrective action tracking. Production stayed on schedule and final QC passed.',
  },
  {
    title: 'Textile order consolidation and shipping',
    category: 'Textiles and Apparel',
    challenge: 'A brand needed consolidated shipments from multiple suppliers with mixed product types.',
    result: 'We coordinated factory schedules, consolidation, and freight forwarding. The buyer received one tracked shipment with clear documentation.',
  },
]

const CaseStudies = () => {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="mb-3">Case Studies</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Real sourcing outcomes</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Examples of how we helped buyers reduce risk, improve quality, and move goods reliably.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {cases.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <CardDescription>{item.challenge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">{item.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Want similar results?</h2>
              <p className="mt-3 text-slate-600">
                Tell us your product and goals. We will prepare a practical sourcing plan and quote.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>What we can share</CardTitle>
                  <CardDescription>We respect confidentiality and can provide references under NDA when needed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li>Supplier shortlist with rationale</li>
                    <li>Factory audit summaries</li>
                    <li>Inspection reports and photos</li>
                    <li>Shipping timelines and cost breakdowns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
