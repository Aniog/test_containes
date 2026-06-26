import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours with a project plan.',
    details: [
      'Product specifications and requirements form',
      'Target price and quantity discussion',
      'Timeline and milestone planning',
      'Service scope agreement',
    ],
    imgId: 'hiw-step1-n1o2p3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Screening',
    description: 'We search our network, evaluate potential suppliers, and provide you with 3-5 qualified options with detailed quotes.',
    details: [
      'Database search and industry contacts',
      'Initial supplier screening and shortlisting',
      'Price negotiation and comparison',
      'Detailed quotation with supplier profiles',
    ],
    imgId: 'hiw-step2-q4r5s6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site audits to verify the factory\'s capabilities, certifications, and production conditions before you commit.',
    details: [
      'Business license and registration check',
      'On-site production capacity assessment',
      'Quality system and certification review',
      'Audit report with photos and recommendations',
    ],
    imgId: 'hiw-step3-t7u8v9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quality Check',
    description: 'We arrange samples, review them against your specs, and conduct inspections at key production stages.',
    details: [
      'Sample arrangement and review',
      'Pre-production material inspection',
      'During-production quality monitoring',
      'Pre-shipment AQL inspection',
    ],
    imgId: 'hiw-step4-w1x2y3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Production & Shipping',
    description: 'We follow up on production progress, perform final inspection, and coordinate shipping to your door.',
    details: [
      'Production progress monitoring',
      'Final quality inspection before shipping',
      'Freight booking and documentation',
      'Shipment tracking and delivery coordination',
    ],
    imgId: 'hiw-step5-z4a5b6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    icon: CheckCircle,
    step: '06',
    title: 'Delivery & After-Support',
    description: 'Goods delivered. We provide ongoing support for reorders, quality issues, and new product development.',
    details: [
      'Delivery confirmation and feedback',
      'Quality issue resolution support',
      'Reorder management',
      'New product sourcing assistance',
    ],
    imgId: 'hiw-step6-c7d8e9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">How It Works</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process that takes you from inquiry to delivery with full transparency.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-extrabold text-sky-blue/15">{step.step}</span>
                      <div className="w-10 h-10 bg-sky-blue rounded-lg flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl font-bold text-navy mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-muted-text leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-2.5">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-trust-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-trust-green rounded-full" />
                          </div>
                          <span className="text-body-text text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-xl overflow-hidden bg-section-bg h-56 lg:h-72">
                      <img
                        alt={step.title}
                        data-strk-img-id={step.imgId}
                        data-strk-img={`[${step.descId}] [${step.titleId}]`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 bottom-0 translate-y-8 -translate-x-1/2">
                    <div className="w-0.5 h-12 bg-border-gray" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sky-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-white/80 text-lg mb-8">
            Share your requirements and receive a free sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-sky-blue-dark px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
