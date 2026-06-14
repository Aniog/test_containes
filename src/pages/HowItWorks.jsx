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
  MessageSquare,
  FileText,
  Truck,
  PackageCheck
} from 'lucide-react'

const processSteps = [
  {
    step: '1',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description: 'Tell us what you need: product specifications, target price, quantity, quality standards, and delivery timeline. The more details you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications and drawings',
      'Target quantity and MOQ requirements',
      'Quality standards and certifications needed',
      'Budget range and payment terms',
      'Delivery timeline and destination',
    ],
  },
  {
    step: '2',
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    description: 'We search our network of 2,000+ verified factories and conduct thorough due diligence to find suppliers that match your requirements.',
    details: [
      'Initial supplier shortlisting',
      'Factory capability assessment',
      'Business license and credential verification',
      'Quality system audit (ISO, BSCI, etc.)',
      'Client reference checks',
    ],
  },
  {
    step: '3',
    icon: FileText,
    title: 'Negotiation & Sampling',
    description: 'We negotiate pricing, MOQs, payment terms, and delivery schedules on your behalf. We also coordinate sample production and shipping for your review.',
    details: [
      'Price and MOQ negotiation',
      'Payment terms optimization',
      'Sample production coordination',
      'Sample quality verification',
      'Contract terms review',
    ],
  },
  {
    step: '4',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Once production begins, we monitor the process to ensure timelines are met and quality standards are maintained throughout manufacturing.',
    details: [
      'Production timeline tracking',
      'Regular progress updates and photos',
      'In-process quality checks',
      'Issue escalation and resolution',
      'Final approval before shipment',
    ],
  },
  {
    step: '5',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Before products leave the factory, our QC inspectors conduct thorough inspections to ensure they meet your specifications and quality standards.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL-based quality checks',
      'Functionality and safety testing',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
  },
  {
    step: '6',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate end-to-end logistics, including freight forwarding, customs documentation, and door-to-door delivery to your location.',
    details: [
      'Freight forwarding (air, sea, express)',
      'Customs documentation preparation',
      'Insurance and risk management',
      'Shipment tracking and updates',
      'Final delivery coordination',
    ],
  },
]

const benefits = [
  {
    title: 'Save Time',
    description: 'We handle the time-consuming tasks of supplier search, verification, and negotiation, so you can focus on your business.',
    icon: '⏱️',
  },
  {
    title: 'Reduce Risk',
    description: 'Our verification and inspection processes minimize the risk of fraud, quality issues, and supply chain disruptions.',
    icon: '🛡️',
  },
  {
    title: 'Lower Costs',
    description: 'We leverage our local knowledge and relationships to negotiate better prices and terms on your behalf.',
    icon: '💰',
  },
  {
    title: 'Quality Assurance',
    description: 'Our QC inspectors ensure products meet your standards before they leave the factory.',
    icon: '✅',
  },
  {
    title: 'Transparent Process',
    description: 'Regular updates, detailed reports, and clear communication keep you informed at every step.',
    icon: '📊',
  },
  {
    title: 'End-to-End Support',
    description: 'From initial inquiry to final delivery, we provide dedicated support throughout the entire sourcing journey.',
    icon: '🤝',
  },
]

function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              A simple, transparent 6-step process to source products from China with confidence. From your first inquiry to final delivery, we're with you every step of the way.
            </p>
            <Link to="/contact">
              <Button size="lg">Start Your Sourcing Project</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-slate-700" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                      <div className="h-4 bg-slate-200 rounded w-2/3"></div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-600">
              The benefits of having a professional sourcing agent on your side.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Example */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-slate-600">
              A realistic timeline for a typical sourcing project. Timelines vary based on product complexity and order size.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="space-y-6">
              {[
                { phase: 'Requirements & Sourcing', duration: '1-2 weeks', description: 'Understanding needs, searching suppliers, initial contact' },
                { phase: 'Verification & Sampling', duration: '2-3 weeks', description: 'Factory audits, sample production, quality review' },
                { phase: 'Negotiation & Order', duration: '1-2 weeks', description: 'Price negotiation, contract signing, deposit payment' },
                { phase: 'Production & QC', duration: '4-8 weeks', description: 'Production monitoring, in-process and final inspections' },
                { phase: 'Shipping & Delivery', duration: '2-4 weeks', description: 'Logistics coordination, customs clearance, delivery' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-medium text-slate-500">{item.duration}</span>
                  </div>
                  <div className="w-px h-12 bg-slate-300 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{item.phase}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll discuss your needs and show you how our process can work for you.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-slate-900">
              Get a Free Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
