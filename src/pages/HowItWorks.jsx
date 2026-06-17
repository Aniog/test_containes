import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ClipboardList, Search, ShieldCheck, Package, Truck, CheckCircle2,
  ArrowRight, Clock, FileText, MessageSquare
} from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: '1. Submit Your Request',
    desc: 'Tell us what you need to source — product specifications, quantity, target price, quality requirements, and timeline.',
    details: [
      'Fill out our inquiry form or send us your product requirements',
      'Include specifications, reference photos, and target pricing',
      'We confirm understanding and clarify any questions within 24 hours',
    ],
    imgId: 'step-submit-p1q2r3',
    titleId: 'step-submit-title',
    descId: 'step-submit-desc',
  },
  {
    icon: Search,
    title: '2. Supplier Matching',
    desc: 'We search our database and network across China\'s manufacturing hubs to find 3-5 qualified suppliers that match your criteria.',
    details: [
      'Search across 500+ verified suppliers in our network',
      'Screen for capability, capacity, certifications, and compliance',
      'Provide a shortlist with detailed supplier profiles and pricing',
    ],
    imgId: 'step-match-s4t5u6',
    titleId: 'step-match-title',
    descId: 'step-match-desc',
  },
  {
    icon: ShieldCheck,
    title: '3. Factory Verification',
    desc: 'We audit the shortlisted factories and send you a detailed verification report with photos and our assessment.',
    details: [
      'On-site factory audit covering all critical areas',
      'Business license, certifications, and compliance verification',
      'Production capacity and quality system assessment',
      'Detailed report with photos and Go/No-Go recommendation',
    ],
    imgId: 'step-verify-v7w8x9',
    titleId: 'step-verify-title',
    descId: 'step-verify-desc',
  },
  {
    icon: Package,
    title: '4. Sample & Quotation',
    desc: 'We arrange product samples and collect detailed quotations so you can evaluate quality and pricing side by side.',
    details: [
      'Coordinate sample production and shipping to your location',
      'Collect itemized quotations from each supplier',
      'Compare pricing, lead times, MOQs, and payment terms',
    ],
    imgId: 'step-sample-y1z2a3',
    titleId: 'step-sample-title',
    descId: 'step-sample-desc',
  },
  {
    icon: FileText,
    title: '5. Order & Production',
    desc: 'Once you approve, we place the order, monitor production, and conduct quality inspections at key milestones.',
    details: [
      'Place order and manage supplier communication',
      'Monitor production schedule and provide weekly updates',
      'Conduct during-production and pre-shipment inspections',
      'Address any issues immediately with corrective actions',
    ],
    imgId: 'step-order-b4c5d6',
    titleId: 'step-order-title',
    descId: 'step-order-desc',
  },
  {
    icon: Truck,
    title: '6. Shipping & Delivery',
    desc: 'We coordinate shipping, handle customs documentation, and track delivery to your door.',
    details: [
      'Freight booking and cargo consolidation',
      'Customs documentation and compliance preparation',
      'Door-to-door delivery coordination',
      'Real-time shipment tracking and status updates',
    ],
    imgId: 'step-ship-e7f8g9',
    titleId: 'step-ship-title',
    descId: 'step-ship-desc',
  },
]

const timeline = [
  { phase: 'Inquiry & Matching', duration: '1-2 weeks' },
  { phase: 'Factory Verification', duration: '1 week' },
  { phase: 'Sample Arrangement', duration: '2-4 weeks' },
  { phase: 'Production', duration: '4-8 weeks (varies)' },
  { phase: 'Shipping', duration: '2-6 weeks (varies)' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              A Clear Process from Start to Finish
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our structured sourcing process keeps you informed and in control at every stage.
              No surprises, no hidden steps — just transparent, professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900">
                      {step.title}
                    </h2>
                  </div>
                  <p id={step.descId} className="text-neutral-600 leading-relaxed mb-6 text-lg">
                    {step.desc}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden">
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Typical Timeline
            </h2>
            <p className="text-neutral-600 text-lg">
              From initial inquiry to delivery, here's what to expect.
            </p>
          </div>
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div
                key={item.phase}
                className="flex items-center gap-4 bg-white border border-neutral-200 rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{idx + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900">{item.phase}</h3>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-500 mt-6 text-center">
            * Timelines vary based on product complexity, order quantity, and shipping destination.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Submit your sourcing request and we'll begin the process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
