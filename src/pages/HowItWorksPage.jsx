import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { CTAButton, SectionHeader } from '@/components/UI'

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    imgId: 'hiw-img-1-a2c4e6',
    titleId: 'hiw-title-1',
    descId: 'hiw-desc-1',
    desc: 'Fill in our sourcing inquiry form with your product requirements — what you need, target quantity, budget, and any specific certifications or standards. The more detail you provide, the more accurately we can match you with suitable suppliers.',
    details: [
      'Product name and description',
      'Target quantity and order frequency',
      'Budget or target unit price',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Packaging and labeling requirements',
    ],
    duration: '1 business day',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    imgId: 'hiw-img-2-b5d7f1',
    titleId: 'hiw-title-2',
    descId: 'hiw-desc-2',
    desc: 'Our team researches suppliers across our verified network, trade databases, and manufacturing hubs. We screen candidates based on your criteria and prepare a shortlist of 3–5 qualified manufacturers with a comparison summary.',
    details: [
      'Search across verified supplier database',
      'Screen for production capacity and MOQ',
      'Check certifications and export history',
      'Prepare supplier comparison report',
    ],
    duration: '5–10 business days',
  },
  {
    num: '03',
    title: 'Factory Audit',
    imgId: 'hiw-img-3-c8e2a4',
    titleId: 'hiw-title-3',
    descId: 'hiw-desc-3',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify their capabilities, quality systems, and business legitimacy. You receive a detailed audit report with photos and a clear recommendation.',
    details: [
      'On-site visit to factory premises',
      'Business registration verification',
      'Production line and equipment review',
      'Quality management system assessment',
      'Detailed audit report with photos',
    ],
    duration: '3–5 business days per factory',
  },
  {
    num: '04',
    title: 'Sample Procurement & Review',
    imgId: 'hiw-img-4-d1f3b7',
    titleId: 'hiw-title-4',
    descId: 'hiw-desc-4',
    desc: 'We arrange product samples from your selected supplier and review them against your specifications before forwarding to you. This step confirms the factory can produce to your standard before you commit to a bulk order.',
    details: [
      'Sample request and coordination',
      'Sample quality review at our end',
      'Specification comparison report',
      'Sample forwarding to buyer',
      'Feedback and revision management',
    ],
    duration: '7–21 days depending on product',
  },
  {
    num: '05',
    title: 'Price Negotiation & Order Placement',
    imgId: 'hiw-img-5-e4a6c9',
    titleId: 'hiw-title-5',
    descId: 'hiw-desc-5',
    desc: 'Using our local knowledge and supplier relationships, we negotiate pricing, payment terms, and lead times on your behalf. Once terms are agreed, we assist with purchase order preparation and contract review.',
    details: [
      'Price negotiation with supplier',
      'Payment terms discussion',
      'Lead time confirmation',
      'Purchase order review',
      'Contract and PI review',
    ],
    duration: '3–7 business days',
  },
  {
    num: '06',
    title: 'Production Monitoring',
    imgId: 'hiw-img-6-f7b9d2',
    titleId: 'hiw-title-6',
    descId: 'hiw-desc-6',
    desc: 'We track production progress from start to completion, with regular updates and on-site visits as needed. Any issues identified during production are flagged and resolved before they become costly problems.',
    details: [
      'Production schedule tracking',
      'Regular written updates',
      'On-site factory visits',
      'Issue identification and escalation',
      'Photo and video documentation',
    ],
    duration: 'Throughout production period',
  },
  {
    num: '07',
    title: 'Quality Inspection',
    imgId: 'hiw-img-7-a3c5e8',
    titleId: 'hiw-title-7',
    descId: 'hiw-desc-7',
    desc: 'Before goods are shipped, our inspectors conduct a thorough quality check at the factory. We use AQL sampling standards and check against your agreed specifications. You receive a detailed inspection report before approving shipment.',
    details: [
      'AQL-based sampling inspection',
      'Appearance and dimension checks',
      'Functionality testing',
      'Labeling and packaging review',
      'Detailed report with photos',
      'Pass/fail recommendation',
    ],
    duration: '1–2 days per inspection',
  },
  {
    num: '08',
    title: 'Shipping & Delivery',
    imgId: 'hiw-img-8-b6d8f3',
    titleId: 'hiw-title-8',
    descId: 'hiw-desc-8',
    desc: 'Once goods pass inspection, we coordinate with freight forwarders to arrange shipment. We handle export documentation, track the shipment, and keep you informed until goods arrive at your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea freight (FCL/LCL) or air freight',
      'Shipment tracking and updates',
      'Customs clearance support',
    ],
    duration: '15–45 days depending on destination',
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Source for You</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            A structured, transparent process from your first inquiry to final delivery. Every step is documented and communicated clearly.
          </p>
          <CTAButton>Start Your Sourcing Project</CTAButton>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>
                    <span className="text-accent text-sm font-semibold">Typical timeline: {step.duration}</span>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-darktext mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-mutedtext leading-relaxed mb-6">{step.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-darktext">
                        <CheckCircle className="w-4 h-4 text-successgreen flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}] China sourcing process`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-lightblue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-darktext mb-4">Ready to Get Started?</h2>
          <p className="text-mutedtext text-lg mb-8">Submit your sourcing inquiry and we will respond within 24 hours with an initial assessment.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
