import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, CheckCircle2, FileText, MessageSquare, Package,
  Search, ShieldCheck, ClipboardCheck, Truck, Clock
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Share your product specifications, target price, quantity, and timeline. The more detail you provide, the faster we can find the right match.',
    details: [
      'Product description and specifications',
      'Target price and order quantity',
      'Quality standards and certifications needed',
      'Desired timeline for samples and production',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Search & Shortlisting',
    desc: 'We search our network of 500+ verified suppliers, evaluate capabilities, and shortlist 3-5 candidates that best match your requirements.',
    details: [
      'Search across specialized manufacturing hubs',
      'Evaluate supplier capabilities and track record',
      'Compare pricing from multiple factories',
      'Shortlist top candidates for your review',
    ],
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Before you commit, we conduct on-site factory audits to verify business legitimacy, production capacity, and quality systems.',
    details: [
      'Business license and registration check',
      'On-site production capacity assessment',
      'Quality management system review',
      'Worker conditions and compliance verification',
    ],
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample & Quotation',
    desc: 'We coordinate sample production from shortlisted suppliers so you can evaluate quality firsthand before placing a bulk order.',
    details: [
      'Sample production coordination',
      'Sample evaluation and comparison',
      'Detailed quotation with cost breakdown',
      'Negotiation for best terms and pricing',
    ],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Order Placement & Production',
    desc: 'Once you approve the sample and quotation, we help place the order and monitor production from start to finish.',
    details: [
      'Purchase order preparation and confirmation',
      'Production schedule monitoring',
      'Weekly progress reports with photos',
      'Early warning for potential delays',
    ],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Quality Inspection & Shipping',
    desc: 'Pre-shipment quality inspection, then we coordinate freight booking, customs documentation, and delivery to your door.',
    details: [
      'Pre-shipment inspection (PSI) per AQL standards',
      'Freight booking and cargo consolidation',
      'Customs documentation and compliance',
      'Door-to-door delivery tracking',
    ],
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Our Sourcing Process
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A clear, structured process that takes you from initial inquiry to delivered goods — with full transparency at every step.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-blue-100 hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-accent-blue" />
                      <h2 className="text-xl md:text-2xl font-bold text-navy">{step.title}</h2>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-slate-50 rounded-lg p-5">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm">{d}</span>
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

      {/* Timeline Visual */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Typical Timeline</h2>
            <p className="text-slate-500">From inquiry to delivery, most projects follow this timeline.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Inquiry', time: 'Day 1' },
              { label: 'Supplier Search', time: 'Days 2-5' },
              { label: 'Verification', time: 'Days 5-10' },
              { label: 'Samples', time: 'Days 10-20' },
              { label: 'Production', time: 'Days 20-50' },
              { label: 'Shipping', time: 'Days 50-65' },
            ].map((item, i) => (
              <div key={item.label} className="bg-white rounded-lg p-4 text-center border border-slate-100">
                <div className="text-xs font-semibold text-accent-blue mb-1">{item.time}</div>
                <div className="text-sm font-medium text-navy">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-500 mb-8">
            Submit your sourcing requirements and we'll begin the process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
