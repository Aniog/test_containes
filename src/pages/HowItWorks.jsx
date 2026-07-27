import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ClipboardCheck, Factory, ShieldCheck, Ship, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: 'Share your requirements',
    description: 'Tell us the product, target price, quantity, and timeline. We clarify specs, certifications, and packaging needs.',
    icon: ClipboardCheck,
  },
  {
    title: 'Supplier search and verification',
    description: 'We search for matching manufacturers, review their capabilities, and conduct factory verification when needed.',
    icon: Factory,
  },
  {
    title: 'Sample review and inspection',
    description: 'We coordinate samples, review quality, and plan inspections at key production stages.',
    icon: ShieldCheck,
  },
  {
    title: 'Production follow-up',
    description: 'We monitor production schedules, report progress, and manage changes or delays proactively.',
    icon: ClipboardCheck,
  },
  {
    title: 'Final QC and shipping',
    description: 'We complete final inspection, confirm packing, and coordinate shipping with tracking and documentation.',
    icon: Ship,
  },
]

const HowItWorks = () => {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge className="mb-3">How It Works</Badge>
          <h1 className="text-4xl font-bold text-slate-900">A clear sourcing process</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Our process is designed to give you visibility and control, from initial requirements to final delivery.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {steps.map((step, index) => (
              <Card key={step.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">What to expect</h2>
              <p className="mt-3 text-slate-600">
                We keep the process practical and transparent. You will receive clear updates, documented findings, and actionable recommendations.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Defined milestones and timelines</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Regular status updates</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Documented inspection reports</li>
                <li className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-slate-900" /> Shipping options with cost estimates</li>
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>Start Your Sourcing Project <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Typical timeline</CardTitle>
                  <CardDescription>This varies by product and factory schedules.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li>Supplier shortlist: 3-7 business days</li>
                    <li>Factory verification: 5-10 business days</li>
                    <li>Sample review: 1-3 weeks depending on product</li>
                    <li>Production and inspection: 2-6 weeks</li>
                    <li>Shipping coordination: 1-4 weeks</li>
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

export default HowItWorks
