import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, Mail, FileText, Camera, MapPin, Ship, CheckCircle2, ArrowRight, Clock } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    icon: Mail,
    description: 'Share your product requirements, target price, quantity, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    deliverables: ['Requirement summary', 'Initial timeline estimate', 'Questions for clarification'],
    communication: 'Within 1 business day',
  },
  {
    number: '02',
    title: 'We Source & Verify',
    icon: Search,
    description: 'We search our verified supplier network and conduct factory audits to confirm capacity, quality systems, and compliance.',
    deliverables: ['Shortlist of 3–5 suppliers', 'Factory audit reports', 'Capability and compliance summary'],
    communication: '5–7 business days',
  },
  {
    number: '03',
    title: 'Samples & Negotiation',
    icon: FileText,
    description: 'We coordinate sample production, track shipping, and negotiate pricing, payment terms, and lead times on your behalf.',
    deliverables: ['Sample tracking updates', 'Negotiation summary', 'Draft terms for review'],
    communication: 'Ongoing updates',
  },
  {
    number: '04',
    title: 'Production & QC',
    icon: ClipboardCheck,
    description: 'We monitor production schedules, conduct in-line and pre-shipment inspections, and approve shipments before they leave the factory.',
    deliverables: ['Production progress reports', 'Inspection reports with photos', 'Pre-shipment approval'],
    communication: 'Weekly or milestone-based',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    icon: Ship,
    description: 'We handle logistics coordination, customs documentation, and freight forwarding to get your goods delivered to your door.',
    deliverables: ['Freight quote and booking', 'Shipping documents', 'Delivery confirmation'],
    communication: 'Real-time tracking',
  },
]

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">A clear process from inquiry to delivery</h1>
            <p className="mt-4 text-lg text-slate-600">Our sourcing process is designed to give you visibility, control, and confidence at every stage.</p>
          </div>
          <div className="mt-12 space-y-6">
            {steps.map((step) => (
              <Card key={step.number} className="relative overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white md:h-20 md:w-20">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <div className="pb-6 md:pb-0">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900">
                          <step.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="mt-3 text-base">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <div className="text-xs font-semibold uppercase text-slate-500">Key Deliverables</div>
                          <ul className="mt-2 space-y-2 text-sm text-slate-600">
                            {step.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase text-slate-500">Typical Timeline</div>
                          <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900">
                            <Clock className="h-4 w-4" />
                            {step.communication}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Start your project <ArrowRight className="h-4 w-4" />
              </Link>
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
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Communication and reporting</h2>
              <p className="mt-4 text-slate-600">We keep you informed with structured updates so you always know the status of your project.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Camera className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Photo and video updates</div>
                    <div className="text-sm text-slate-600">Factory visits and inspections include visual evidence.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Written reports</div>
                    <div className="text-sm text-slate-600">Inspection and progress reports in a clear, consistent format.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">On-ground presence</div>
                    <div className="text-sm text-slate-600">Local teams in key manufacturing regions for faster response.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm font-semibold text-slate-900">What you can expect</div>
                <Separator />
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    Clear milestones and deadlines
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    Proactive issue escalation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    Transparent cost breakdowns
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    Flexible engagement models
                  </li>
                </ul>
                <Separator />
                <Button asChild className="w-full">
                  <Link to="/contact">Discuss your project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
