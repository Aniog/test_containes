import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, ArrowRight, MessageSquare, Search, FileText, Package, ClipboardCheck, Truck } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    titleId: 'step-01-title',
    descId: 'step-01-desc',
    imgId: 'step-img-01-a1b2c3',
    desc: 'Fill out our sourcing inquiry form with your product requirements — specifications, quantity, target price, timeline, and any special requirements.',
    details: [
      'No commitment required at this stage',
      'We respond within one business day',
      'Available in English, French, Spanish, and German',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Identification & Screening',
    titleId: 'step-02-title',
    descId: 'step-02-desc',
    imgId: 'step-img-02-d4e5f6',
    desc: 'Our team searches our verified supplier network and major Chinese B2B platforms to identify 3–5 manufacturers that match your requirements.',
    details: [
      'Suppliers screened for capacity, certifications, and export experience',
      'Initial communication to confirm interest and availability',
      'Shortlist presented to you with key details',
    ],
  },
  {
    num: '03',
    icon: FileText,
    title: 'Quotation & Sample Request',
    titleId: 'step-03-title',
    descId: 'step-03-desc',
    imgId: 'step-img-03-g7h8i9',
    desc: 'We collect detailed quotations from shortlisted suppliers and present a clear comparison. You can request product samples before placing an order.',
    details: [
      'Side-by-side quotation comparison',
      'Sample coordination and quality review',
      'Negotiation support on price and terms',
    ],
  },
  {
    num: '04',
    icon: Package,
    title: 'Order Placement & Production',
    titleId: 'step-04-title',
    descId: 'step-04-desc',
    imgId: 'step-img-04-j1k2l3',
    desc: 'Once you approve a supplier, we assist with order placement, contract review, and production monitoring to keep your order on track.',
    details: [
      'Purchase order review and placement support',
      'Weekly production status updates',
      'Early warning on delays or issues',
    ],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    titleId: 'step-05-title',
    descId: 'step-05-desc',
    imgId: 'step-img-05-m4n5o6',
    desc: 'Before goods leave the factory, our inspectors conduct a thorough quality check against your specifications and AQL standards.',
    details: [
      'Pre-shipment inspection with photo and video report',
      'Defect classification and pass/fail decision',
      'Re-inspection if needed after corrections',
    ],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    titleId: 'step-06-title',
    descId: 'step-06-desc',
    imgId: 'step-img-06-p7q8r9',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment until it reaches your destination.',
    details: [
      'Sea freight and air freight options',
      'Export documentation and customs support',
      'Shipment tracking and delivery confirmation',
    ],
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
      <section className="bg-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">How We Work With You</h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              A structured, transparent six-step process from your first inquiry to final delivery. You stay informed at every stage.
            </p>
            <CTAButton size="lg" showArrow>Start Your Sourcing Inquiry</CTAButton>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0
            return (
              <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-blue-100">{step.num}</span>
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-700" />
                    </div>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-neutral-600 text-lg leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-neutral-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={isEven ? '' : 'lg:order-1'}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-2xl shadow-md object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Submit your sourcing inquiry today and receive a tailored plan within one business day.
          </p>
          <CTAButton size="lg" showArrow>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
