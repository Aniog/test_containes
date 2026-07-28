import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, ClipboardList, Search, ShieldCheck, Factory, Ship, MessageSquare } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    title: 'Share your requirements',
    description: 'Tell us what you want to source, including product specs, target price, quantity, and timeline.',
    tips: ['Provide reference samples or drawings if available', 'Share your quality expectations and standards', 'Let us know your destination port and shipping preference'],
  },
  {
    title: 'We shortlist suppliers',
    description: 'We search for and evaluate potential manufacturers, then share a shortlist with profiles and initial assessments.',
    tips: ['Supplier background and experience', 'Factory location and capacity', 'Initial pricing range and lead time estimate'],
  },
  {
    title: 'Verify and inspect',
    description: 'We conduct factory audits and inspections to confirm capability, capacity, and quality systems.',
    tips: ['Factory audit report with photos', 'Sample inspection results', 'Corrective action plan if needed'],
  },
  {
    title: 'Place the order',
    description: 'Once you select a supplier, we help negotiate terms, confirm specifications, and manage the purchase process.',
    tips: ['Proforma invoice review', 'Payment terms and milestones', 'Production schedule confirmation'],
  },
  {
    title: 'Monitor production',
    description: 'We follow up with the factory during production and conduct in-process inspections when needed.',
    tips: ['Progress updates and milestone checks', 'During-production inspection report', 'Issue escalation if delays or defects appear'],
  },
  {
    title: 'Final QC and shipping',
    description: 'We complete pre-shipment inspection, supervise loading, and coordinate logistics to your destination.',
    tips: ['Pre-shipment inspection report', 'Container loading supervision', 'Shipping documents and tracking'],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Badge variant="secondary" className="mb-4">How It Works</Badge>
          <h1 className="text-4xl font-bold text-slate-900">A practical sourcing process</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            A clear workflow from initial requirements to final delivery, with reporting at every stage.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={step.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </div>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {step.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Communication and reporting</h2>
              <p className="mt-3 text-slate-600">
                We keep you informed with structured updates, photos, and documents so you can make decisions with confidence.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Dedicated point of contact</div>
                    <div className="text-slate-600">One specialist manages your project from start to finish.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardList className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Inspection reports</div>
                    <div className="text-slate-600">Photos, measurements, defect lists, and pass/fail results.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ship className="mt-0.5 h-5 w-5 text-slate-900" />
                  <div>
                    <div className="font-semibold">Shipping updates</div>
                    <div className="text-slate-600">Milestone tracking from factory to destination port.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  alt="Sourcing process workflow and reporting"
                  data-strk-img-id="howitworks-hero-img-4d5e6f"
                  data-strk-img="[howitworks-hero-subtitle] [howitworks-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <p id="howitworks-hero-title" className="sr-only">Sourcing process workflow and reporting</p>
              <p id="howitworks-hero-subtitle" className="sr-only">Clear sourcing process</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900">What to expect</h2>
          <p className="mt-3 text-slate-600">Typical timelines and milestones for a standard sourcing project.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Week 1-2</CardTitle>
                <CardDescription>Requirements review and supplier shortlist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">We confirm your requirements, search for suppliers, and share a shortlist with initial assessments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Week 3-4</CardTitle>
                <CardDescription>Factory verification and sample inspection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">We conduct factory audits and inspect samples or prototypes to confirm quality and fit.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Week 5+</CardTitle>
                <CardDescription>Production, QC, and shipping</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">We monitor production, complete final inspection, supervise loading, and coordinate shipping.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Start your sourcing project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
