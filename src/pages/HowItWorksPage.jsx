import React from 'react'
import { Link } from 'react-router-dom'
import {
  Send,
  Search,
  FileCheck,
  ClipboardCheck,
  TrendingUp,
  Truck,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Send,
    title: 'Submit Your Sourcing Request',
    desc: 'Tell us what you need: product details, specifications, quantity, target price, and timeline. The more details you provide, the more accurate our sourcing will be.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Quality requirements and certifications needed',
      'Preferred timeline and delivery date',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    desc: 'Our team researches and identifies potential suppliers across China\'s industrial regions. We evaluate each supplier based on capability, quality, pricing, and reliability.',
    details: [
      'Search across verified supplier database',
      'Evaluate production capacity and capabilities',
      'Check business licenses and certifications',
      'Compare pricing and terms',
    ],
  },
  {
    num: '03',
    icon: FileCheck,
    title: 'Factory Verification & Sampling',
    desc: 'Before you commit, we verify the shortlisted suppliers through on-site audits and arrange samples for your review. This step ensures the supplier can deliver what they promise.',
    details: [
      'On-site factory audit',
      'Production line inspection',
      'Sample collection and shipping',
      'Detailed verification report',
    ],
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Quotation & Order Confirmation',
    desc: 'We negotiate pricing and terms on your behalf, then present you with a clear quotation. Once you approve, we help finalize the order with the supplier.',
    details: [
      'Price negotiation with suppliers',
      'Detailed quotation breakdown',
      'Terms and conditions review',
      'Order confirmation support',
    ],
  },
  {
    num: '05',
    icon: TrendingUp,
    title: 'Production Monitoring & QC',
    desc: 'We monitor production progress and conduct quality inspections at key stages. Regular updates keep you informed, and any issues are addressed before they become problems.',
    details: [
      'Production timeline tracking',
      'Pre-production sample approval',
      'During-production quality checks',
      'Pre-shipment final inspection',
    ],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'Once production is complete and quality is confirmed, we coordinate shipping, handle export documentation, and ensure your goods arrive at their destination safely.',
    details: [
      'Freight forwarding arrangement',
      'Export documentation preparation',
      'Customs clearance support',
      'Delivery tracking and updates',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">How It Works</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            A clear, step-by-step process from your first inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
                )}
                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-blue-700" />
                      <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{d}</span>
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Ready to Get Started?</h2>
          <p className="mt-4 text-slate-600">
            Submit your sourcing request and we will begin finding the right suppliers for you.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Submit Your Request
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
