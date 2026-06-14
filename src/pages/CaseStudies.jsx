import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, CheckCircle2, Factory, Ship, ShieldCheck, TrendingDown, TrendingUp, Clock } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    industry: 'Home Goods',
    client: 'US-based home goods importer',
    challenge: 'High defect rate and inconsistent packaging from previous supplier.',
    solution: 'Implemented in-line inspections, revised packaging standards, and introduced a secondary backup supplier.',
    result: 'Reduced defect rate from 12% to under 2%',
    metrics: [
      { label: 'Defect rate', before: '12%', after: '<2%' },
      { label: 'On-time delivery', before: '78%', after: '96%' },
    ],
  },
  {
    id: 2,
    industry: 'Electronics',
    client: 'European electronics distributor',
    challenge: 'Long and unpredictable lead times from multiple suppliers.',
    solution: 'Consolidated two suppliers into one verified partner with better capacity planning and buffer stock management.',
    result: 'Cut supplier lead time by 18%',
    metrics: [
      { label: 'Lead time', before: '45 days', after: '37 days' },
      { label: 'Stockouts', before: '8 per year', after: '2 per year' },
    ],
  },
  {
    id: 3,
    industry: 'Promotional Products',
    client: 'Canadian promotional products buyer',
    challenge: 'Rising total landed cost and complex shipping coordination.',
    solution: 'Negotiated better terms, optimized packaging, and coordinated consolidated shipping.',
    result: 'Saved 22% on total landed cost',
    metrics: [
      { label: 'Landed cost', before: 'High', after: '22% lower' },
      { label: 'Shipping cost', before: 'High', after: '18% lower' },
    ],
  },
  {
    id: 4,
    industry: 'Automotive Parts',
    client: 'Australian aftermarket parts retailer',
    challenge: 'Inconsistent quality and missing compliance documentation.',
    solution: 'Introduced pre-shipment inspections with AQL sampling and documentation verification.',
    result: 'Customer returns dropped by 35%',
    metrics: [
      { label: 'Returns', before: '8.5%', after: '5.5%' },
      { label: 'Compliance issues', before: '4 per quarter', after: '0' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">Case Studies</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Real results from real sourcing projects</h1>
            <p className="mt-4 text-lg text-slate-600">See how we have helped buyers improve quality, reduce cost, and shorten lead times.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <Card key={cs.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{cs.industry}</Badge>
                    <span className="text-xs text-slate-500">Case #{cs.id}</span>
                  </div>
                  <CardTitle className="mt-2">{cs.client}</CardTitle>
                  <CardDescription>{cs.challenge}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">Solution</div>
                    <p className="mt-1 text-sm text-slate-600">{cs.solution}</p>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">Result</div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-green-700">
                      <CheckCircle2 className="h-4 w-4" />
                      {cs.result}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="rounded-md border border-slate-200 bg-slate-50 p-3">
                        <div className="text-xs text-slate-500">{m.label}</div>
                        <div className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-900">
                          <span className="text-slate-500 line-through">{m.before}</span>
                          <ArrowRight className="h-3 w-3" />
                          <span className="text-green-700">{m.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Discuss your project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Ready to improve your sourcing results?</h2>
              <p className="mt-4 text-slate-600">Every project is different, but the pattern is the same: better suppliers, better quality, and better control.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Factory className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Verified supplier base</div>
                    <div className="text-sm text-slate-600">We only work with factories that pass our qualification process.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Risk reduction</div>
                    <div className="text-sm text-slate-600">Inspections and audits reduce the chance of costly failures.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Ship className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">End-to-end coordination</div>
                    <div className="text-sm text-slate-600">From factory to port to your door, we manage the handoffs.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-slate-900">What happens next</div>
                <Separator />
                <ol className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">1</span>
                    Share your current sourcing challenges and goals.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">2</span>
                    We propose a scoped plan with clear milestones.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-xs text-white">3</span>
                    We execute, report, and optimize together.
                  </li>
                </ol>
                <Separator />
                <Button asChild className="w-full">
                  <Link to="/contact">Start the conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
