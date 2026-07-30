import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, Shield, Factory, Truck, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, target price, quality standards, and timeline. We work with any product category.',
    details: [
      'Product specifications and drawings',
      'Target price range',
      'Quality requirements and certifications',
      'Order quantity and timeline',
      'Packaging and labeling requirements',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find & Verify Suppliers',
    description: 'Our team identifies and evaluates potential suppliers, checking their capabilities, credentials, and track record.',
    details: [
      'Supplier database search and screening',
      'Business license verification',
      'Factory capability assessment',
      'Sample evaluation and approval',
      'Reference checks from past clients',
    ],
  },
  {
    number: '03',
    icon: Shield,
    title: 'Quality Control & Inspection',
    description: 'We conduct thorough inspections at every production stage to ensure your standards are met.',
    details: [
      'Pre-production sample approval',
      'In-line production inspection',
      'Pre-shipment quality check',
      'Defect analysis and correction',
      'Detailed inspection reports',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We keep you updated throughout production and handle any issues that arise to keep your order on track.',
    details: [
      'Weekly progress updates',
      'Timeline and milestone tracking',
      'Issue identification and resolution',
      'Direct factory communication',
      'Production schedule management',
    ],
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics to ensure your products arrive safely and on time at the best possible cost.',
    details: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Container booking and tracking',
      'Consolidation and warehousing',
      'Door-to-door delivery options',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-h1 text-white mb-6">
              How It Works
            </h1>
            <p className="text-body-lg text-primary-light/90 max-w-3xl mx-auto">
              Our streamlined process makes sourcing from China simple, transparent, and risk-free. 
              Here's how we help you get the products you need.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-24 bottom-0 w-0.5 bg-neutral-200" />
                )}
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-h4 font-bold">
                        {step.number}
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 lg:hidden">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-h3 text-neutral-900 mb-3">{step.title}</h2>
                        <p className="text-body-lg text-neutral-600">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="ml-0 lg:ml-18">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-body text-neutral-700">{detail}</span>
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

      {/* Timeline Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-neutral-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              From initial inquiry to delivery, here's what to expect when working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-h4 font-bold text-primary mb-2">1-3 Days</div>
              <div className="text-body font-semibold text-neutral-900 mb-2">Initial Response</div>
              <p className="text-small text-neutral-600">We respond to your inquiry with supplier options and pricing</p>
            </div>
            <div className="text-center">
              <div className="text-h4 font-bold text-primary mb-2">1-2 Weeks</div>
              <div className="text-body font-semibold text-neutral-900 mb-2">Supplier Selection</div>
              <p className="text-small text-neutral-600">Verified suppliers, samples evaluated and approved</p>
            </div>
            <div className="text-center">
              <div className="text-h4 font-bold text-primary mb-2">2-6 Weeks</div>
              <div className="text-body font-semibold text-neutral-900 mb-2">Production</div>
              <p className="text-small text-neutral-600">Manufacturing with quality control at every stage</p>
            </div>
            <div className="text-center">
              <div className="text-h4 font-bold text-primary mb-2">2-5 Weeks</div>
              <div className="text-body font-semibold text-neutral-900 mb-2">Shipping</div>
              <p className="text-small text-neutral-600">Freight, customs clearance, and final delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 text-neutral-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Tell us about your sourcing needs and we'll guide you through every step of the process.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-button bg-accent px-8 py-4 text-body font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-dark hover:shadow-xl"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
