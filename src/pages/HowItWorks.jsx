import React from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Search,
  FileCheck,
  Factory,
  ClipboardCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Shield,
  Phone,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Initial Consultation & Requirements',
    duration: '1-2 days',
    description: 'Share your product requirements, specifications, target pricing, and order quantities. We respond within 24 hours with initial guidance.',
    details: [
      'Product specifications and drawings',
      'Target price range',
      'Order quantity and frequency',
      'Quality standards and certifications needed',
      'Preferred shipping terms and timeline',
    ],
    deliverables: 'Detailed requirements brief and initial feasibility assessment',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Shortlisting',
    duration: '3-5 days',
    description: 'We identify and evaluate potential suppliers from our network, comparing capabilities, pricing, and reliability.',
    details: [
      'Screen 10-20 potential suppliers',
      'Verify licenses and capabilities',
      'Request initial quotations',
      'Compare pricing and lead times',
      'Create shortlist of 3-5 best options',
    ],
    deliverables: 'Supplier comparison report with pricing, capabilities, and recommendations',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Samples & Negotiation',
    duration: '1-3 weeks',
    description: 'We arrange product samples, negotiate pricing and terms, and help you select the best supplier for your needs.',
    details: [
      'Procure and ship product samples',
      'Evaluate sample quality',
      'Negotiate pricing and payment terms',
      'Agree on production timeline',
      'Finalize contract terms',
    ],
    deliverables: 'Approved samples, finalized pricing, and signed agreement',
  },
  {
    icon: Factory,
    step: '04',
    title: 'Production & Quality Control',
    duration: '2-8 weeks',
    description: 'We monitor production progress and conduct quality inspections at critical stages to ensure standards are met.',
    details: [
      'Pre-production sample approval',
      'Raw materials inspection',
      'In-line production monitoring',
      'Pre-shipment quality inspection',
      'Weekly progress updates',
    ],
    deliverables: 'QC inspection reports, production photos, and progress updates',
  },
  {
    icon: ClipboardCheck,
    step: '05',
    title: 'Final Inspection & Approval',
    duration: '3-5 days',
    description: 'Comprehensive final inspection to ensure all products meet your specifications before shipment.',
    details: [
      'Full random inspection (AQL standards)',
      'Quantity verification',
      'Packaging and labeling check',
      'Documentation review',
      'Your final approval',
    ],
    deliverables: 'Final inspection report and shipment approval',
  },
  {
    icon: Truck,
    step: '06',
    title: 'Shipping & Delivery',
    duration: '2-6 weeks',
    description: 'We handle all logistics, customs clearance, and documentation for smooth delivery to your door.',
    details: [
      'Freight booking and coordination',
      'Export documentation preparation',
      'Customs clearance',
      'Cargo insurance',
      'Door-to-door tracking',
    ],
    deliverables: 'Shipping documents, tracking information, and delivery confirmation',
  },
]

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
            Our Process
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Our streamlined 6-step process makes sourcing from China simple,
            transparent, and risk-free.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary/20 hidden lg:block" />
                  )}
                  
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-2 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">
                        Step {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Typical duration: {step.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <div className="bg-muted rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Deliverable:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {step.deliverables}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-5">
                      <div className="bg-white rounded-xl border border-border p-6">
                        <h4 className="text-sm font-semibold text-foreground mb-4">
                          What We Do:
                        </h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial inquiry to final delivery, most projects take 6-12 weeks
              depending on complexity and order size.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sourcing Phase</h3>
              <p className="text-4xl font-bold text-primary mb-2">1-2</p>
              <p className="text-muted-foreground">weeks</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Production Phase</h3>
              <p className="text-4xl font-bold text-primary mb-2">2-8</p>
              <p className="text-muted-foreground">weeks</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Shipping Phase</h3>
              <p className="text-4xl font-bold text-primary mb-2">2-6</p>
              <p className="text-muted-foreground">weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and quote. No obligations, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+8613800000000"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
