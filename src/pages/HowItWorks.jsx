import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react'
import CTABanner from '../components/home/CTABanner'

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Inquiry',
    description: 'Fill out our inquiry form with your product requirements — what you need, your target price, quantity, timeline, and any certifications required. The more detail you provide, the faster we can help.',
    details: ['Product name and specifications', 'Target unit price and MOQ', 'Required certifications (CE, FDA, etc.)', 'Delivery timeline'],
    imgId: 'hiw-img-step1-a1b2c3',
    titleId: 'hiw-title-step1',
    descId: 'hiw-desc-step1',
    duration: '5 minutes',
  },
  {
    number: '02',
    title: 'Free Consultation & Sourcing Plan',
    description: 'Within 24 hours, our team reviews your inquiry and schedules a call to clarify requirements. We then prepare a sourcing plan outlining our approach, timeline, and fees.',
    details: ['24-hour response guarantee', 'Video or phone consultation', 'Transparent fee structure', 'No obligation to proceed'],
    imgId: 'hiw-img-step2-d4e5f6',
    titleId: 'hiw-title-step2',
    descId: 'hiw-desc-step2',
    duration: '1–2 days',
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    description: 'We search our network and conduct market research to identify 3–5 qualified suppliers. Each supplier is pre-screened for legitimacy, capacity, and product fit before we present them to you.',
    details: ['Database of 500+ verified suppliers', 'Market price benchmarking', 'Supplier background checks', 'Shortlist with comparison table'],
    imgId: 'hiw-img-step3-g7h8i9',
    titleId: 'hiw-title-step3',
    descId: 'hiw-desc-step3',
    duration: '5–10 days',
  },
  {
    number: '04',
    title: 'Factory Audit & Sample Order',
    description: 'For shortlisted suppliers, we conduct on-site factory audits and arrange sample production. You receive a full audit report and physical samples for evaluation.',
    details: ['On-site factory visit', 'Audit report with photos', 'Sample procurement and shipping', 'Supplier negotiation support'],
    imgId: 'hiw-img-step4-j1k2l3',
    titleId: 'hiw-title-step4',
    descId: 'hiw-desc-step4',
    duration: '7–14 days',
  },
  {
    number: '05',
    title: 'Order Placement & Production',
    description: 'Once you approve a supplier and samples, we help finalize the purchase order, review contracts, and monitor production from start to finish with regular updates.',
    details: ['Purchase order review', 'Contract negotiation support', 'Weekly production updates', 'Factory visit reports'],
    imgId: 'hiw-img-step5-m4n5o6',
    titleId: 'hiw-title-step5',
    descId: 'hiw-desc-step5',
    duration: 'Varies by product',
  },
  {
    number: '06',
    title: 'Quality Inspection',
    description: 'Before goods are packed and shipped, our QC team inspects them against your specifications. We provide a detailed inspection report and only approve shipment when quality meets your standards.',
    details: ['Pre-shipment inspection', 'AQL sampling standards', 'Defect classification report', 'Pass/fail decision with photos'],
    imgId: 'hiw-img-step6-p7q8r9',
    titleId: 'hiw-title-step6',
    descId: 'hiw-desc-step6',
    duration: '1–2 days',
  },
  {
    number: '07',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight booking, prepare all export documentation, and track your shipment until it arrives at your destination. We work with sea, air, and express freight options.',
    details: ['Freight booking (sea/air/express)', 'Export documentation', 'Customs clearance support', 'Real-time tracking updates'],
    imgId: 'hiw-img-step7-s1t2u3',
    titleId: 'hiw-title-step7',
    descId: 'hiw-desc-step7',
    duration: '15–45 days (sea)',
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
      {/* Header */}
      <div className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-3">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-[#CBD5E0] text-lg max-w-2xl mx-auto">
            A transparent, step-by-step sourcing process designed to reduce risk and give you full visibility into your China supply chain.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#1A3C6E] rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#718096] text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-[#4A5568] leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-[#4A5568] text-sm">
                          <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-[#EBF2FA] aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
