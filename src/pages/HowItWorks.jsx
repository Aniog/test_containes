import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Users,
  Package,
  Truck,
  MessageSquare,
  DollarSign,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Free Consultation',
    description: "Tell us about your product requirements, budget, timeline, and quality expectations. We'll ask the right questions to understand your needs.",
    details: [
      'Product specification review',
      'Budget and timeline discussion',
      'Quality standard alignment',
      'Initial market insights',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Search & Vetting',
    description: 'We search our network of 500+ verified suppliers and conduct initial screenings to find the best matches for your requirements.',
    details: [
      'Database and market search',
      'Initial supplier screening',
      'Capability assessment',
      'Shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'We conduct on-site audits of shortlisted factories to verify their credentials, capacity, and quality systems.',
    details: [
      'Business license verification',
      'Facility and equipment inspection',
      'Production capacity assessment',
      'Quality management system review',
    ],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample & Quality Approval',
    description: 'We coordinate sample production and inspection to ensure the supplier can meet your quality standards.',
    details: [
      'Sample production coordination',
      'Pre-production inspection',
      'Sample evaluation support',
      'Quality standard confirmation',
    ],
  },
  {
    number: '05',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We monitor production progress with regular factory visits and detailed reports to keep your project on track.',
    details: [
      'Weekly progress reports',
      'During-production inspections',
      'Issue escalation and resolution',
      'Schedule tracking',
    ],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Final Inspection & Shipping',
    description: 'We conduct pre-shipment inspection and coordinate logistics to ensure your products arrive safely and on time.',
    details: [
      'Pre-shipment inspection',
      'Container loading supervision',
      'Freight forwarding coordination',
      'Customs documentation',
    ],
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'We handle the time-consuming tasks of supplier search, verification, and coordination so you can focus on your business.',
  },
  {
    icon: DollarSign,
    title: 'Reduce Costs',
    description: 'Our local presence and negotiation expertise help you get better prices and avoid costly mistakes.',
  },
  {
    icon: ShieldCheck,
    title: 'Reduce Risk',
    description: 'Our verification and inspection processes minimize the risk of fraud, quality issues, and delivery problems.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'We understand Chinese business culture, regulations, and manufacturing landscape, giving you a competitive advantage.',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              How Our Sourcing Process Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A simple, transparent 6-step process that takes you from initial inquiry to successful delivery. No hidden steps, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-blue-600">{step.number}</span>
                    <div className="h-px flex-1 bg-slate-200"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-base text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="rounded-2xl bg-slate-50 p-8 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                        <step.icon className="h-10 w-10" />
                      </div>
                      <p className="text-sm font-medium text-slate-500">Step {step.number}</p>
                      <p className="text-lg font-semibold text-slate-900">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our process is designed to give you peace of mind and measurable business benefits.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 mx-auto mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Typical Timeline
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              While timelines vary by product complexity, here's what you can typically expect.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1-2 Weeks</div>
                <div className="text-sm font-medium text-slate-900 mb-1">Supplier Search & Verification</div>
                <div className="text-xs text-slate-500">Initial consultation to verified supplier shortlist</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2-4 Weeks</div>
                <div className="text-sm font-medium text-slate-900 mb-1">Sample & Approval</div>
                <div className="text-xs text-slate-500">Sample production, inspection, and quality approval</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4-12 Weeks</div>
                <div className="text-sm font-medium text-slate-900 mb-1">Production & Shipping</div>
                <div className="text-xs text-slate-500">Production monitoring, final inspection, and delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your sourcing project?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Get a free consultation and let us show you how we can help.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}