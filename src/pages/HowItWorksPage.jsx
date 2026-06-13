import React from 'react'
import { Link } from 'react-router-dom'
import {
  Send,
  Search,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Ship,
  ArrowRight,
  CheckCircle,
  Clock,
  MessageSquare,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Send,
    title: 'Submit Your Requirements',
    description: 'Tell us what products you need, your target price, quantity, quality standards, and timeline. The more details you provide, the more accurate our sourcing will be.',
    details: [
      'Product specifications and drawings',
      'Target price range',
      'Order quantity',
      'Quality requirements',
      'Delivery timeline',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    description: 'Our team searches our verified supplier network and identifies manufacturers that match your requirements. We evaluate capabilities, certifications, and past performance.',
    details: [
      'Search across our supplier database',
      'Evaluate production capabilities',
      'Check certifications and compliance',
      'Review past client feedback',
      'Shortlist 3-5 qualified suppliers',
    ],
  },
  {
    number: '03',
    icon: Shield,
    title: 'Factory Verification',
    description: 'We conduct on-site audits of shortlisted suppliers to verify their business licenses, production capacity, quality systems, and working conditions.',
    details: [
      'Business license verification',
      'On-site factory audit',
      'Production line inspection',
      'Quality management review',
      'Detailed audit report with photos',
    ],
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Quotation & Sampling',
    description: 'We collect quotations from verified suppliers, negotiate pricing on your behalf, and arrange samples for your evaluation.',
    details: [
      'Collect and compare quotations',
      'Negotiate best pricing',
      'Arrange sample production',
      'Ship samples to you',
      'Communicate your feedback',
    ],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Order Placement & Production',
    description: 'Once you approve the supplier and samples, we help place the order and monitor production to ensure everything stays on track.',
    details: [
      'Contract review and negotiation',
      'Order placement support',
      'Production schedule monitoring',
      'Regular progress updates',
      'Issue resolution',
    ],
  },
  {
    number: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'We conduct quality inspections at key stages of production to catch any issues before products leave the factory.',
    details: [
      'Pre-production inspection',
      'During-production checks',
      'Pre-shipment inspection',
      'Detailed inspection reports',
      'Defect resolution with supplier',
    ],
  },
  {
    number: '07',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics including freight forwarding, customs documentation, and coordinate delivery to your specified destination.',
    details: [
      'Freight forwarding arrangement',
      'Customs documentation',
      'Cargo insurance',
      'Container loading supervision',
      'Tracking and delivery coordination',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2b46]">
        <div className="container-custom text-center">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            How It Works
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A clear, transparent 7-step process from your initial inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0f2b46] rounded-full flex items-center justify-center">
                      <span className="text-[#c8963e] font-bold">{step.number}</span>
                    </div>
                    <step.icon className="w-8 h-8 text-[#c8963e]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-[#4a5568] leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[#c8963e] flex-shrink-0 mt-1" />
                        <span className="text-[#4a5568] text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#f5f7fa] rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-[#c8963e]" />
                      <span className="font-semibold text-[#0f2b46]">Typical Timeline</span>
                    </div>
                    <p className="text-[#4a5568] text-sm">
                      {index === 0 && '1-2 days for initial review and response'}
                      {index === 1 && '1-2 weeks for supplier identification'}
                      {index === 2 && '1-2 weeks for factory verification'}
                      {index === 3 && '1-3 weeks for sampling and feedback'}
                      {index === 4 && 'Varies by product and order size'}
                      {index === 5 && '1-3 days per inspection'}
                      {index === 6 && '2-6 weeks depending on shipping method'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-[#4a5568] text-lg mb-8 max-w-2xl mx-auto">
            Submit your sourcing requirements and we will begin finding the right suppliers for you.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">
            Submit Your Requirements
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
