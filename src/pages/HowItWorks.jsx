import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, Clock, MessageSquare, FileText, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeader from '@/components/shared/SectionHeader'

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — what you need, target quantity, budget, and any specific requirements. The more detail you provide, the faster we can help.',
    details: [
      'Product name, category, and specifications',
      'Target quantity and acceptable MOQ',
      'Target unit price or budget range',
      'Destination country and required certifications',
      'Timeline and any other requirements',
    ],
    imgId: 'hiw-step1-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    title: 'Initial Consultation',
    desc: 'Within 24 hours, one of our sourcing specialists will review your inquiry and contact you to discuss your requirements in detail. We clarify specifications, advise on realistic pricing, and outline our approach.',
    details: [
      'Review of your product requirements',
      'Market pricing guidance',
      'Recommended sourcing strategy',
      'Timeline and cost estimate for our service',
    ],
    imgId: 'hiw-step2-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    title: 'Supplier Research & Shortlisting',
    desc: 'We research the Chinese market using our supplier network, trade databases, and industry contacts. We contact multiple factories, assess their capabilities, and shortlist the best options for your product.',
    details: [
      'Market research across multiple sourcing channels',
      'Supplier outreach and capability assessment',
      'Price and MOQ negotiation',
      'Shortlist report with 3–5 recommended suppliers',
    ],
    imgId: 'hiw-step3-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    title: 'Factory Audit & Sample Approval',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify their legitimacy and capabilities. We then arrange product samples for your review and approval before any order is placed.',
    details: [
      'On-site factory audit with detailed report',
      'Sample arrangement and quality check',
      'Sample photos and specifications sent to you',
      'Feedback loop until sample meets your standards',
    ],
    imgId: 'hiw-step4-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    title: 'Order Placement & Production',
    desc: 'Once you approve the sample and confirm the supplier, we assist with order placement, contract review, and payment terms. We then monitor production progress and send regular updates.',
    details: [
      'Purchase order review and contract support',
      'Payment terms negotiation (deposit / balance)',
      'Production timeline monitoring',
      'Regular progress updates with photos',
    ],
    imgId: 'hiw-step5-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    title: 'Quality Inspection',
    desc: 'Before goods are shipped, our inspectors visit the factory to conduct a pre-shipment inspection. We check product quality, quantity, packaging, and labeling against your specifications.',
    details: [
      'Pre-shipment inspection using AQL standards',
      'Product, packaging, and labeling check',
      'Detailed inspection report within 24 hours',
      'Pass/fail recommendation with supporting evidence',
    ],
    imgId: 'hiw-step6-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    num: '07',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, customs documentation, and delivery to your destination. We provide tracking information and keep you updated until your goods arrive.',
    details: [
      'Freight booking (sea, air, or express)',
      'Customs documentation preparation',
      'Shipment tracking and status updates',
      'Delivery confirmation and post-shipment support',
    ],
    imgId: 'hiw-step7-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
]

const timelines = [
  { phase: 'Initial Response', time: '< 24 hours' },
  { phase: 'Supplier Shortlist', time: '5–7 business days' },
  { phase: 'Factory Audit', time: '3–5 business days' },
  { phase: 'Sample Delivery', time: '7–14 days' },
  { phase: 'Production (typical)', time: '30–60 days' },
  { phase: 'Inspection Report', time: '< 24 hours' },
  { phase: 'Sea Freight (to EU/US)', time: '25–35 days' },
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
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Source for You
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              A transparent, step-by-step process that keeps you informed and in control from inquiry to delivery.
            </p>
            <CTAButton to="/contact" size="lg" showArrow>
              Start Your Sourcing Inquiry
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Step by Step"
            title="The Complete Sourcing Process"
            subtitle="From your first inquiry to goods arriving at your warehouse — here's exactly what happens."
          />
          <div className="flex flex-col gap-16">
            {steps.map(({ num, title, desc, details, imgId, titleId, descId }, i) => (
              <div key={num} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {num}
                    </span>
                    <h2 id={titleId} className="text-xl md:text-2xl font-bold text-neutral-900">{title}</h2>
                  </div>
                  <p id={descId} className="text-neutral-600 leading-relaxed mb-5">{desc}</p>
                  <ul className="flex flex-col gap-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-neutral-100 h-64 lg:h-80 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Typical Timelines"
            title="How Long Does It Take?"
            subtitle="Timelines vary by product complexity, but here are typical durations for each phase."
          />
          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            {timelines.map(({ phase, time }, i) => (
              <div key={phase} className={`flex items-center justify-between px-6 py-4 ${i < timelines.length - 1 ? 'border-b border-neutral-100' : ''}`}>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span className="font-medium text-neutral-800">{phase}</span>
                </div>
                <span className="text-sm font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-brand-200 mb-8">Submit your sourcing inquiry today and we'll respond within 24 hours.</p>
          <CTAButton to="/contact" variant="white" size="lg" showArrow>
            Submit a Sourcing Inquiry
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
