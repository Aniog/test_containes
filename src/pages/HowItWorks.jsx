import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, FileCheck, Truck, PackageCheck, ClipboardList, Handshake, ArrowRight, CheckCircle } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and quality requirements. We analyze your needs and create a sourcing plan.',
    details: [
      'Product specification review and clarification',
      'Market research and feasibility assessment',
      'Sourcing strategy and timeline planning',
      'Initial consultation at no cost',
    ],
  },
  {
    icon: FileCheck,
    number: '02',
    title: 'Supplier Matching & Verification',
    description: 'We search our network, shortlist qualified factories, verify their credentials, and send you detailed supplier profiles with quotes.',
    details: [
      'Search across verified supplier database',
      'On-site factory audit and verification',
      'Price negotiation and comparison',
      'Detailed supplier profile report with photos',
    ],
  },
  {
    icon: ClipboardList,
    number: '03',
    title: 'Sample & Order Confirmation',
    description: 'We arrange samples for your approval, negotiate terms, and confirm the order with the selected supplier on your behalf.',
    details: [
      'Sample arrangement and quality review',
      'Price, MOQ, and payment term negotiation',
      'Purchase order preparation and confirmation',
      'NDA/NNN agreement with supplier if needed',
    ],
  },
  {
    icon: PackageCheck,
    number: '04',
    title: 'Production Monitoring & QC',
    description: 'We follow production progress, conduct inspections at key stages, and keep you updated with detailed reports and photos.',
    details: [
      'Production schedule monitoring',
      'Pre-production, during-production, and pre-shipment inspections',
      'Weekly progress reports with photos',
      'Issue identification and resolution',
    ],
  },
  {
    icon: Truck,
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight, handle customs documentation, consolidate shipments, and track delivery to your door or warehouse.',
    details: [
      'Freight rate comparison and booking',
      'Multi-supplier cargo consolidation',
      'Export documentation and customs clearance',
      'Door-to-door delivery tracking',
    ],
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Support',
    description: 'Reorder management, supplier performance reviews, cost optimization, and continuous support for your long-term sourcing needs.',
    details: [
      'Reorder management and scheduling',
      'Supplier performance review and benchmarking',
      'Cost optimization and price renegotiation',
      'Dedicated account manager for ongoing support',
    ],
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">How It Works</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Your Sourcing Process, Simplified
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            A clear, step-by-step process from initial inquiry to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gray-200 mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-accent font-bold text-sm tracking-wider">{step.number}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-primary-dark mt-1 mb-2">{step.title}</h2>
                    <p className="text-steel text-base leading-relaxed mb-4">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-steel text-sm">{detail}</span>
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

      <CTASection />
    </>
  )
}
