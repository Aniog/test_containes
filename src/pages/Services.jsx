import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Clock, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    titleId: 'srv-sourcing-title',
    descId: 'srv-sourcing-desc',
    imgId: 'srv-sourcing-img-s001',
    desc: 'We research and shortlist verified manufacturers that match your product specifications, MOQ requirements, and budget.',
    details: [
      'Market research across Alibaba, trade shows, and our own supplier network',
      'Shortlist of 3–5 qualified factories with detailed profiles',
      'Initial price negotiation and MOQ confirmation',
      'Supplier background checks and business license verification',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audit',
    titleId: 'srv-factory-title',
    descId: 'srv-factory-desc',
    imgId: 'srv-factory-img-s002',
    desc: 'On-site factory audits confirm production capacity, certifications, equipment, and working conditions before you commit to an order.',
    details: [
      'Physical visit to the factory premises',
      'Review of business licenses, export certifications, and compliance documents',
      'Assessment of production capacity and equipment',
      'Workforce and management evaluation',
      'Detailed written audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    titleId: 'srv-qc-title',
    descId: 'srv-qc-desc',
    imgId: 'srv-qc-img-s003',
    desc: 'Pre-shipment and in-line inspections catch defects early, protecting your brand reputation and reducing costly returns.',
    details: [
      'Pre-production inspection of raw materials',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI) against your specifications',
      'Carton drop and packaging tests',
      'Detailed inspection report with photos and pass/fail results',
    ],
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    titleId: 'srv-prod-title',
    descId: 'srv-prod-desc',
    imgId: 'srv-prod-img-s004',
    desc: 'We monitor your order at every production stage and keep you updated with clear, regular progress reports.',
    details: [
      'Regular factory visits during production',
      'Weekly progress updates with photos',
      'Early identification of delays or quality issues',
      'Direct communication with factory management',
      'Timeline management and deadline enforcement',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    titleId: 'srv-ship-title',
    descId: 'srv-ship-desc',
    imgId: 'srv-ship-img-s005',
    desc: 'From freight booking to customs documentation, we coordinate logistics so your goods arrive on time and within budget.',
    details: [
      'Freight forwarder selection and rate comparison',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Sea freight, air freight, and express options',
      'Cargo tracking and delivery confirmation',
    ],
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    titleId: 'srv-oem-title',
    descId: 'srv-oem-desc',
    imgId: 'srv-oem-img-s006',
    desc: 'We help you develop custom-branded products with reliable OEM factories, from design to finished goods.',
    details: [
      'OEM factory identification and vetting',
      'Product development and prototype coordination',
      'Packaging design and branding support',
      'Sample approval and revision management',
      'First production run oversight',
    ],
  },
]

export default function Services() {
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
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              We provide end-to-end sourcing support — from finding the right factory to delivering goods to your warehouse. Every service is designed to reduce risk and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map(({ icon: Icon, title, titleId, descId, imgId, desc, details }, idx) => (
              <div
                key={title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">{title}</h2>
                  <p id={descId} className="text-text-muted text-lg mb-6 leading-relaxed">{desc}</p>
                  <ul className="space-y-2 mb-8">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-text-dark text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton to="/contact" variant="primary">
                    Enquire About This Service
                  </CTAButton>
                </div>
                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}] China factory`}
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
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/70 text-lg mb-8">
            Tell us about your sourcing project and we'll recommend the right combination of services.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
