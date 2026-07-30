import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, ArrowRight, MessageSquare, Search, Factory, ClipboardCheck, Truck, FileText } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Requirements',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-h001',
    desc: 'Fill out our sourcing inquiry form with your product details, target quantity, budget, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name, specifications, and reference images',
      'Target unit price and annual order volume',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Preferred shipping terms (FOB, CIF, DDP)',
      'Deadline for samples and first production run',
    ],
    duration: '1 day',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-h002',
    desc: 'Our team researches the Chinese market — trade shows, industry databases, and our own supplier network — to identify factories that match your criteria.',
    details: [
      'Search across Alibaba, Made-in-China, and trade show databases',
      'Leverage our existing network of 1,000+ vetted factories',
      'Initial screening calls with shortlisted suppliers',
      'Price and MOQ comparison across 3–5 candidates',
      'Supplier profile report delivered to you',
    ],
    duration: '5–10 days',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Sample Procurement',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-h003',
    desc: 'We visit the shortlisted factories in person to verify their capabilities, certifications, and working conditions. We also arrange samples for your review.',
    details: [
      'On-site factory visit and audit',
      'Verification of business licenses and export certifications',
      'Production capacity and equipment assessment',
      'Sample ordering and quality review',
      'Written audit report with photos',
    ],
    duration: '3–7 days',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production Monitoring',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-h004',
    desc: 'Once you approve a supplier, we assist with contract negotiation and monitor production to ensure your order is made to specification and on schedule.',
    details: [
      'Contract and payment terms review',
      'Production schedule confirmation',
      'Regular factory visits during production',
      'Weekly progress updates with photos',
      'Early issue identification and resolution',
    ],
    duration: 'Varies by product',
  },
  {
    number: '05',
    icon: FileText,
    title: 'Quality Inspection',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-h005',
    desc: 'Before goods are shipped, our inspectors visit the factory to check finished products against your specifications. You receive a detailed report before approving shipment.',
    details: [
      'Pre-shipment inspection (PSI) of finished goods',
      'Quantity count and carton check',
      'Product function and appearance testing',
      'Packaging and labeling verification',
      'Pass/fail report with photos delivered within 24 hours',
    ],
    duration: '1–3 days',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery Coordination',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-h006',
    desc: 'We coordinate freight forwarding, export documentation, and customs clearance so your goods arrive at your destination on time and without surprises.',
    details: [
      'Freight forwarder selection and rate negotiation',
      'Export documentation (packing list, commercial invoice, B/L)',
      'Customs clearance coordination',
      'Cargo tracking and status updates',
      'Delivery confirmation',
    ],
    duration: '15–45 days (sea freight)',
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
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              How We Source for You
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              A structured, transparent process from your first inquiry to final delivery. No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map(({ number, icon: Icon, title, titleId, descId, imgId, desc, details, duration }, idx) => (
              <div
                key={number}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-light-blue">{number}</span>
                    <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">{title}</h2>
                  <p id={descId} className="text-text-muted text-lg mb-6 leading-relaxed">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-text-dark text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-light-blue rounded-lg px-4 py-2">
                    <span className="text-navy text-sm font-medium">Typical duration:</span>
                    <span className="text-china-red text-sm font-bold">{duration}</span>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}] China sourcing process`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 text-lg mb-8">
            Submit your sourcing requirements and we'll get back to you within 24 hours.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
