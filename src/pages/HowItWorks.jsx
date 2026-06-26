import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  FileText, Search, Factory, FlaskConical,
  Cog, Ship, ArrowRight, CheckCircle
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    icon: FileText,
    number: '1',
    title: 'Submit Your Requirements',
    subtitle: 'Tell us what you need',
    desc: 'Fill out our inquiry form with details about your product, target price, quantity, quality requirements, and timeline. The more specific you are, the faster we can find matching suppliers.',
    details: [
      'Product specifications and technical requirements',
      'Target price range and budget',
      'Expected order quantity and frequency',
      'Quality standards and certifications needed',
      'Delivery timeline expectations',
    ],
  },
  {
    icon: Search,
    number: '2',
    title: 'Supplier Research & Shortlisting',
    subtitle: 'We find the right factories',
    desc: 'Our research team identifies potential suppliers from our verified network and public sources. Each candidate is pre-screened for relevance, capability, and reliability before being presented to you.',
    details: [
      'Search across our verified supplier database',
      'Market research for best-fit manufacturers',
      'Initial capability and capacity screening',
      'Present shortlist with detailed profiles',
      'You select which suppliers to pursue',
    ],
  },
  {
    icon: Factory,
    number: '3',
    title: 'Factory Audit & Verification',
    subtitle: 'On-the-ground validation',
    desc: 'Our auditors visit shortlisted factories in person to verify their capabilities, production conditions, quality control systems, and compliance with your requirements.',
    details: [
      'On-site factory visit and inspection',
      'Production line and equipment assessment',
      'Quality management system review',
      'Social compliance and working conditions check',
      'Comprehensive audit report with photos',
    ],
  },
  {
    icon: FlaskConical,
    number: '4',
    title: 'Sampling & Negotiation',
    subtitle: 'Confirm quality and terms',
    desc: 'We facilitate sample ordering and review, coordinate revisions if needed, and help negotiate pricing, payment terms, lead times, and contract conditions.',
    details: [
      'Sample request and tracking',
      'Sample quality evaluation and feedback',
      'Price and payment term negotiation',
      'Incoterms and delivery schedule agreement',
      'Contract review and finalization',
    ],
  },
  {
    icon: Cog,
    number: '5',
    title: 'Production & Quality Control',
    subtitle: 'Monitor manufacturing',
    desc: 'Throughout the production phase, we conduct regular inspections, monitor progress, and keep you informed with detailed reports and real-time updates.',
    details: [
      'Raw material inspection at factory',
      'During-production quality checks',
      'Production schedule tracking',
      'Regular progress reports with photos',
      'Pre-shipment inspection before dispatch',
    ],
  },
  {
    icon: Ship,
    number: '6',
    title: 'Shipping & Delivery',
    subtitle: 'Goods delivered safely',
    desc: 'We coordinate all logistics arrangements, handle export documentation, arrange cargo inspection, and ensure your goods arrive safely at their destination.',
    details: [
      'Freight booking and rate optimization',
      'Export documentation and customs clearance',
      'Container loading supervision',
      'Cargo tracking and status updates',
      'Delivery confirmation and follow-up',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-blue to-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How It Works</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              A clear, structured process from your initial inquiry to final delivery. 
              We handle the complexity so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={step.number} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-0 w-16 h-16 bg-brand-blue rounded-full items-center justify-center z-10 shadow-md">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex md:hidden w-8 h-8 bg-brand-blue rounded-full items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </span>
                      <span className="text-sm font-bold text-brand-blue uppercase tracking-wider">Step {step.number}</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h2>
                    <p className="text-sm text-brand-accent font-medium mb-3">{step.subtitle}</p>
                    <p className="text-slate-600 mb-4 leading-relaxed">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Sourcing Journey
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Tell us about your project and get started with a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function CheckCircle(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}