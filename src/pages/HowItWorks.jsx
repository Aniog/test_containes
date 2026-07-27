import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MessageSquare, Search, FileCheck, Factory, 
  Eye, Truck, ArrowRight, CheckCircle, Phone
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, specifications, target price, and quantity. Our team will review your needs and provide initial feedback within 24 hours.',
    details: [
      'Product specifications and requirements',
      'Target price range',
      'Quantity and delivery timeline',
      'Quality standards and certifications needed',
      'Packaging and labeling requirements',
    ],
    duration: '1-2 days',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Discovery & Screening',
    description: 'We search our verified supplier network and industry contacts to find manufacturers that match your exact requirements.',
    details: [
      'Search our database of 1000+ verified suppliers',
      'Screen potential suppliers based on capabilities',
      'Request initial quotations',
      'Compare pricing and capabilities',
      'Create supplier shortlist for your review',
    ],
    duration: '3-5 days',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Factory Verification & Audit',
    description: 'Our local team visits factories to verify legitimacy, production capabilities, quality systems, and compliance standards.',
    details: [
      'On-site factory visits',
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Workplace safety evaluation',
      'Compliance with industry standards',
    ],
    duration: '5-7 days',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Sample Production & Approval',
    description: 'We coordinate sample production and conduct thorough quality checks to ensure products meet your specifications.',
    details: [
      'Sample production coordination',
      'Quality inspection of samples',
      'Specification verification',
      'Client approval process',
      'Revision management if needed',
    ],
    duration: '7-14 days',
  },
  {
    number: '05',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress updates ensure your production stays on schedule and meets quality standards.',
    details: [
      'Production schedule tracking',
      'Weekly progress reports',
      'In-line quality inspections',
      'Issue identification and resolution',
      'Timeline management',
    ],
    duration: '15-45 days',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Final Inspection & Shipping',
    description: 'We conduct final quality inspections, handle all logistics, customs documentation, and coordinate door-to-door shipping.',
    details: [
      'Pre-shipment quality inspection',
      'Container loading supervision',
      'Customs documentation preparation',
      'Freight forwarding arrangement',
      'Door-to-door delivery coordination',
      'Real-time shipment tracking',
    ],
    duration: '3-7 days',
  },
]

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">How It Works</h1>
            <p className="body-large text-gray-300">
              Our streamlined 6-step process takes you from product idea to delivered goods, 
              with full transparency and support at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-24 bottom-0 w-0.5 bg-primary-200" />
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Step number and icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center relative z-10">
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="card">
                      <div className="card-padding">
                        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                          <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
                            <step.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <h2 className="heading-3 text-foreground mb-2">{step.title}</h2>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-foreground mb-4">What We Do:</h3>
                            <ul className="space-y-3">
                              {step.details.map((detail) => (
                                <li key={detail} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="font-semibold text-foreground mb-4">Timeline</h3>
                            <div className="text-4xl font-bold text-primary mb-2">{step.duration}</div>
                            <p className="text-muted-foreground">Estimated duration for this step</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Total Project Timeline</h2>
            <p>
              Typical timelines for standard sourcing projects. Actual durations 
              may vary based on product complexity and requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="card-padding">
                  <div className="text-5xl font-bold text-primary mb-2">30</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Days</div>
                  <p className="text-muted-foreground">Simple products with existing molds</p>
                </div>
              </div>
              <div className="card text-center">
                <div className="card-padding">
                  <div className="text-5xl font-bold text-primary mb-2">60</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Days</div>
                  <p className="text-muted-foreground">Standard products with customization</p>
                </div>
              </div>
              <div className="card text-center">
                <div className="card-padding">
                  <div className="text-5xl font-bold text-primary mb-2">90+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Days</div>
                  <p className="text-muted-foreground">Complex products or new development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Start Your Sourcing Project?</h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your product requirements and receive 
            a customized sourcing proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+8612345678900" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
