import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Ship, ArrowRight, CheckCircle2, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We discuss your product requirements, target price, quantity, quality standards, and timeline. This helps us understand your needs and provide accurate guidance.',
    duration: '1-2 days',
    deliverables: ['Requirements document', 'Initial market insights', 'Project timeline estimate']
  },
  {
    step: '02',
    title: 'Supplier Sourcing',
    description: 'We search our verified supplier network and conduct new research to find manufacturers that match your specifications. We shortlist the most suitable candidates.',
    duration: '3-5 days',
    deliverables: ['Supplier shortlist', 'Company profiles', 'Initial pricing estimates']
  },
  {
    step: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site factory audits to verify business credentials, production capacity, quality systems, and compliance with your requirements.',
    duration: '2-3 days',
    deliverables: ['Factory audit report', 'Capability assessment', 'Compliance verification']
  },
  {
    step: '04',
    title: 'Negotiation & Sampling',
    description: 'We negotiate terms, pricing, and delivery schedules with selected suppliers. We coordinate sample production and evaluation on your behalf.',
    duration: '1-2 weeks',
    deliverables: ['Negotiated terms', 'Product samples', 'Sample evaluation report']
  },
  {
    step: '05',
    title: 'Production & Inspection',
    description: 'Once samples are approved, we monitor production and conduct quality inspections at key stages to ensure adherence to specifications.',
    duration: '2-6 weeks',
    deliverables: ['Production monitoring', 'Inspection reports', 'Photo documentation']
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle customs documentation, and track shipment until your goods arrive safely at your destination.',
    duration: '1-4 weeks',
    deliverables: ['Shipping coordination', 'Customs clearance', 'Delivery confirmation']
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'We handle the time-consuming tasks of supplier research, verification, and coordination, freeing you to focus on your business.'
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Our team in China understands local business practices, language nuances, and cultural considerations that are critical for successful sourcing.'
  },
  {
    icon: ShieldCheck,
    title: 'Reduce Risk',
    description: 'Our verification and inspection processes significantly reduce the risk of fraud, quality issues, and delivery problems.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'We ensure products meet your specifications through systematic quality control at every production stage.'
  }
]

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              A simple, transparent process designed to give you confidence and control over your sourcing projects. From initial consultation to final delivery, we're with you every step of the way.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each step is designed to ensure quality, transparency, and successful outcomes for your sourcing projects.
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-slate-900">{step.title}</h3>
                      <span className="inline-flex items-center text-sm text-slate-500 mt-2 sm:mt-0">
                        <Clock className="h-4 w-4 mr-1.5" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 text-lg">{step.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Key Deliverables</h4>
                      <ul className="grid sm:grid-cols-3 gap-3">
                        {step.deliverables.map((deliverable, dIdx) => (
                          <li key={dIdx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Benefits of Working With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Partnering with SSourcing China gives you a competitive advantage in your sourcing strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today for a free consultation. We'll discuss your needs and show you how our process can work for you.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks