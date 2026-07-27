import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, FileText, Search, ClipboardCheck, Factory, Truck, Shield } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Inquiry',
    duration: 'Day 1',
    desc: 'Share your product specifications, target price range, order quantity, and any certification requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    actions: [
      'Fill out our sourcing inquiry form',
      'Upload product photos, drawings, or samples',
      'Define quality standards and budget',
    ],
    imgId: 'hiw-step1-bg-a1b2c3',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Matching & Shortlisting',
    duration: 'Days 2-5',
    desc: 'We search our database of 500+ verified factories and reach out to new candidates if needed. We present 3-5 qualified suppliers with detailed profiles, pricing comparisons, and our recommendation.',
    actions: [
      'Database search and new supplier scouting',
      'Preliminary screening and capability assessment',
      'Supplier profile presentation with comparison',
    ],
    imgId: 'hiw-step2-bg-d4e5f6',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Factory Audit & Sample Collection',
    duration: 'Days 6-12',
    desc: 'We visit shortlisted factories in person. Our audit covers business licenses, production lines, quality systems, and working conditions. We collect samples for your evaluation.',
    actions: [
      'On-site factory audit with photo documentation',
      'Sample collection and shipping to you',
      'Negotiation of pricing, MOQ, and payment terms',
    ],
    imgId: 'hiw-step3-bg-g7h8i9',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: 'Weeks 2-6',
    desc: 'Once you approve a supplier and place your order, we monitor production with weekly status reports. We perform inspections at key stages: pre-production, during production, and pre-shipment.',
    actions: [
      'Weekly production progress reports with photos',
      'AQL-based inspections at multiple checkpoints',
      'Real-time issue resolution and escalation',
    ],
    imgId: 'hiw-step4-bg-j0k1l2',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Weeks 6-8',
    desc: 'After final QC approval, we coordinate freight, handle export documentation, arrange cargo insurance, and manage customs clearance. We track your shipment until it reaches your destination.',
    actions: [
      'Freight booking (sea, air, or express)',
      'Export documentation and customs clearance',
      'Shipment tracking until final delivery',
    ],
    imgId: 'hiw-step5-bg-m3n4o5',
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
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-lg text-brand-gray-400 max-w-2xl mx-auto">
            A transparent, five-step process designed to take your project from inquiry to delivery — with full visibility at every stage.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.number} className="relative pl-16 md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-lg font-bold z-10">
                  {step.number}
                </div>
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 md:left-6 top-12 bottom-0 w-0.5 bg-brand-gray-200" style={{ height: 'calc(100% + 2rem)' }} />
                )}

                <div className="bg-brand-gray-50 border border-brand-gray-200 rounded-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-5 h-5 text-brand-blue" />
                    <h2 className="text-xl md:text-2xl font-bold text-brand-navy">{step.title}</h2>
                    <span className="ml-auto text-xs font-semibold bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-brand-gray-600 leading-relaxed mb-5">{step.desc}</p>

                  <div
                    className="rounded-lg overflow-hidden mb-5"
                    data-strk-bg-id={step.imgId}
                    data-strk-bg={`[hiw-subtitle] [hiw-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  >
                    <div className="h-48 bg-brand-gray-200" />
                  </div>

                  <ul className="space-y-2">
                    {step.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-brand-gray-600">
                        <span className="text-brand-blue font-bold mt-0.5">&bull;</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="hiw-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to begin your sourcing journey?
          </h2>
          <p id="hiw-subtitle" className="text-brand-gray-400 mb-8 max-w-xl mx-auto">
            Submit your inquiry today and receive supplier matches within 5 business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-lightblue transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
