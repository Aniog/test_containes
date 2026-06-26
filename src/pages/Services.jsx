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
  FileText,
  Truck,
  Package,
  BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    slug: 'supplier-sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, quality standards, and budget.',
    features: [
      'Product specification analysis',
      'Supplier database of 500+ verified factories',
      'Multiple supplier options for comparison',
      'Price negotiation on your behalf',
      'Sample coordination and evaluation',
    ],
    process: 'We start by understanding your product requirements, then search our network of verified suppliers and present you with 3-5 qualified options.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    slug: 'factory-verification',
    description: 'On-site audits to verify factory credentials, capacity, quality systems, and business legitimacy before you commit.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Financial stability check',
    ],
    process: 'Our auditors visit the factory, review documentation, interview management, and provide a detailed verification report.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    slug: 'quality-inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    features: [
      'Pre-production inspection (PPI)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
    process: 'We inspect at critical stages of production, document findings with photos, and provide actionable reports to ensure quality compliance.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    slug: 'production-monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule and within budget.',
    features: [
      'Weekly progress reports',
      'On-site production visits',
      'Schedule tracking and updates',
      'Issue escalation and resolution',
      'Milestone verification',
    ],
    process: 'We assign a dedicated monitor who visits the factory regularly, tracks progress against milestones, and keeps you informed.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    slug: 'shipping-coordination',
    description: 'End-to-end logistics support including freight forwarding, customs clearance, and door-to-door delivery.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Customs documentation',
      'Insurance coordination',
      'Door-to-door delivery',
      'Shipment tracking',
    ],
    process: 'We handle all logistics paperwork, coordinate with freight forwarders, and track your shipment until it reaches your warehouse.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    slug: 'dedicated-support',
    description: 'A single point of contact who understands your business and speaks your language throughout the process.',
    features: [
      'Dedicated sourcing agent',
      'English-speaking support',
      'Real-time communication',
      'Cultural and language bridge',
      'Emergency escalation',
    ],
    process: 'You get one main contact who knows your business, handles all communications, and is available during your business hours.',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Our Sourcing Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Comprehensive sourcing solutions designed to help you source better products from China with confidence and control.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div key={service.slug} className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-base text-slate-600 mb-6">{service.description}</p>
                    <div className="rounded-lg bg-slate-50 p-4 mb-6">
                      <p className="text-sm font-medium text-slate-900 mb-1">How it works:</p>
                      <p className="text-sm text-slate-600">{service.process}</p>
                    </div>
                    <Button asChild>
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h3 className="text-sm font-semibold text-slate-900 mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to streamline your sourcing?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Get a free consultation and discover how we can help you source better from China.
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