import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import SectionHeader from '@/components/SectionHeader'

const steps = [
  {
    step: '01',
    title: 'Submit Your Sourcing Inquiry',
    imgId: 'hiw-img-1-a2b3c4',
    titleId: 'hiw-1-title',
    descId: 'hiw-1-desc',
    desc: 'Fill out our sourcing inquiry form with your product details, target quantity, quality requirements, and budget. The more detail you provide, the more accurate our initial assessment will be.',
    details: [
      'Product name and specifications',
      'Target order quantity (MOQ)',
      'Quality standards and certifications required',
      'Target unit price or budget range',
      'Destination country and delivery timeline',
    ],
    duration: 'Day 1',
  },
  {
    step: '02',
    title: 'Initial Consultation & Scope Agreement',
    imgId: 'hiw-img-2-d5e6f7',
    titleId: 'hiw-2-title',
    descId: 'hiw-2-desc',
    desc: 'We review your inquiry and schedule a call or email exchange to clarify requirements, discuss the scope of work, and provide a transparent fee structure. No surprises.',
    details: [
      'Requirements review and clarification',
      'Service scope definition',
      'Timeline and milestone agreement',
      'Fee structure and payment terms',
      'Project kickoff confirmation',
    ],
    duration: 'Day 1–2',
  },
  {
    step: '03',
    title: 'Supplier Research & Shortlisting',
    imgId: 'hiw-img-3-g8h9i0',
    titleId: 'hiw-3-title',
    descId: 'hiw-3-desc',
    desc: 'Our team searches our verified supplier network and industry databases to identify manufacturers that match your product and quality requirements. We screen out unsuitable suppliers early.',
    details: [
      'Database and network research',
      'Initial supplier screening (capacity, certifications)',
      'Supplier profile compilation',
      'Shortlist of 3–5 qualified candidates',
      'Supplier comparison report',
    ],
    duration: 'Week 1–2',
  },
  {
    step: '04',
    title: 'Factory Audit & Verification',
    imgId: 'hiw-img-4-j1k2l3',
    titleId: 'hiw-4-title',
    descId: 'hiw-4-desc',
    desc: 'We visit shortlisted factories in person to verify their production capabilities, equipment, certifications, and working conditions. We only recommend factories we have personally assessed.',
    details: [
      'On-site factory visit',
      'Production line and equipment inspection',
      'Certification and document verification',
      'Management and quality system review',
      'Detailed audit report with photos',
    ],
    duration: 'Week 2–3',
  },
  {
    step: '05',
    title: 'Sample Procurement & Review',
    imgId: 'hiw-img-5-m4n5o6',
    titleId: 'hiw-5-title',
    descId: 'hiw-5-desc',
    desc: 'We request samples from the recommended factory, review them against your specifications, and coordinate shipping to you for final approval. We manage the back-and-forth until you are satisfied.',
    details: [
      'Sample request and coordination',
      'Sample quality review against specs',
      'Sample shipping to buyer',
      'Feedback and revision management',
      'Final sample approval',
    ],
    duration: 'Week 3–5',
  },
  {
    step: '06',
    title: 'Price Negotiation & Order Placement',
    imgId: 'hiw-img-6-p7q8r9',
    titleId: 'hiw-6-title',
    descId: 'hiw-6-desc',
    desc: 'We negotiate pricing, payment terms, and delivery schedules on your behalf. Once terms are agreed, we assist with purchase order preparation and factory confirmation.',
    details: [
      'Price and MOQ negotiation',
      'Payment terms discussion',
      'Delivery schedule agreement',
      'Purchase order preparation',
      'Factory order confirmation',
    ],
    duration: 'Week 4–5',
  },
  {
    step: '07',
    title: 'Production Monitoring',
    imgId: 'hiw-img-7-s0t1u2',
    titleId: 'hiw-7-title',
    descId: 'hiw-7-desc',
    desc: 'We follow up with the factory throughout production, tracking progress against the agreed schedule and flagging any issues early. You receive regular updates without having to chase the factory yourself.',
    details: [
      'Regular factory communication',
      'Production milestone tracking',
      'Early issue identification and escalation',
      'Weekly progress reports to buyer',
      'Raw material and component checks',
    ],
    duration: 'During production',
  },
  {
    step: '08',
    title: 'Quality Inspection',
    imgId: 'hiw-img-8-v3w4x5',
    titleId: 'hiw-8-title',
    descId: 'hiw-8-desc',
    desc: 'Before goods are shipped, our inspectors check finished products against your specifications using AQL sampling standards. We provide a detailed inspection report with photos.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect classification',
      'Specification compliance check',
      'Packaging and labeling review',
      'Inspection report with photos',
    ],
    duration: 'Before shipment',
  },
  {
    step: '09',
    title: 'Shipping & Delivery Coordination',
    imgId: 'hiw-img-9-y6z7a8',
    titleId: 'hiw-9-title',
    descId: 'hiw-9-desc',
    desc: 'We coordinate with freight forwarders for sea or air freight, handle export documentation, and track your shipment from China to your destination. We keep you informed until goods arrive.',
    details: [
      'Freight forwarder coordination',
      'Export documentation handling',
      'Container loading supervision',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
    duration: 'Post-production',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Our Sourcing Process, Step by Step
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              A transparent, structured process designed to reduce risk and deliver consistent results — from your first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((s, i) => {
              const isEven = i % 2 === 1
              return (
                <div key={s.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{s.step}</span>
                      </div>
                      <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{s.duration}</span>
                    </div>
                    <h2 id={s.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">{s.title}</h2>
                    <p id={s.descId} className="text-neutral-600 leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-brand-700 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-neutral-100 aspect-video ${isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={s.imgId}
                      data-strk-img={`[${s.descId}] [${s.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-neutral-200 text-lg mb-8">
            Submit your inquiry today and we'll get back to you within 24 hours with a tailored plan.
          </p>
          <CTAButton to="/contact" size="lg" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
