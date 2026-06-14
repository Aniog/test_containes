import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  ShieldCheck, 
  ClipboardCheck, 
  Ship, 
  Factory, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Truck,
  BarChart3,
  Headphones
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers in China that match your product requirements, quality standards, and budget.',
    features: [
      'Product specification analysis',
      'Supplier database of 2,000+ verified factories',
      'Price negotiation and MOQ optimization',
      'Sample coordination and review',
      'Contract and terms negotiation',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory credentials, capacity, quality systems, and business legitimacy before you commit.',
    features: [
      'Business license verification',
      'Factory capacity assessment',
      'Quality management system audit',
      'Financial stability check',
      'Client reference validation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment and in-production inspections to ensure products meet your specifications and quality standards.',
    features: [
      'Pre-production inspection',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
    features: [
      'Freight forwarding (air, sea, express)',
      'Customs documentation preparation',
      'Insurance coordination',
      'Door-to-door delivery',
      'Shipment tracking and updates',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We monitor your production runs to ensure timelines are met and quality standards are maintained throughout manufacturing.',
    features: [
      'Production timeline tracking',
      'Regular progress updates',
      'Issue escalation and resolution',
      'Milestone verification',
      'Final approval before shipment',
    ],
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'A personal sourcing agent assigned to your account, available to answer questions and resolve issues throughout the process.',
    features: [
      'Single point of contact',
      'Bilingual communication (English/Mandarin)',
      'Time zone coverage (US, EU, Asia)',
      'Regular status updates',
      'Post-shipment support',
    ],
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'We discuss your product requirements, quality standards, budget, and timeline.',
  },
  {
    step: '2',
    title: 'Supplier Search',
    description: 'We identify and shortlist suitable suppliers from our verified network.',
  },
  {
    step: '3',
    title: 'Verification & Negotiation',
    description: 'We verify factories, negotiate terms, and coordinate samples.',
  },
  {
    step: '4',
    title: 'Production & QC',
    description: 'We monitor production and conduct quality inspections.',
  },
  {
    step: '5',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics and deliver products to your location.',
  },
]

function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Comprehensive sourcing solutions designed to help you source products from China with confidence, transparency, and control.
            </p>
            <Link to="/contact">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-slate-600">
              A structured approach to ensure successful sourcing outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Every business has unique needs. Contact us to discuss your specific requirements and get a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Request a Quote</Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
