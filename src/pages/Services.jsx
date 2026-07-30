import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, TrendingUp, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeader from '@/components/shared/SectionHeader'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right factory for your product',
    desc: 'We research the Chinese market to identify manufacturers that match your product specifications, quality requirements, and budget. Our sourcing process includes market research, supplier outreach, capability assessment, and shortlisting.',
    features: [
      'Market research across Alibaba, trade shows, and our own supplier network',
      'Supplier capability and capacity assessment',
      'Price benchmarking and negotiation support',
      'Shortlist of 3–5 verified suppliers with comparison report',
    ],
    imgId: 'svc-full-sourcing-a1b2',
    titleId: 'svc-full-sourcing-title',
    descId: 'svc-full-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know who you are buying from',
    desc: 'Before you commit to a supplier, we conduct an on-site factory audit to verify their legitimacy, production capacity, quality management systems, and compliance with your standards.',
    features: [
      'Business license and export certification verification',
      'Factory floor inspection and capacity assessment',
      'Worker conditions and compliance check',
      'Detailed audit report with photos and scoring',
    ],
    imgId: 'svc-full-factory-c3d4',
    titleId: 'svc-full-factory-title',
    descId: 'svc-full-factory-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach you',
    desc: 'Our inspectors conduct pre-shipment and in-line quality checks against your product specifications. We use internationally recognized AQL sampling standards and deliver detailed reports within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI) before goods leave the factory',
      'In-line inspection during production',
      'AQL sampling per international standards',
      'Photo and video evidence in every report',
    ],
    imgId: 'svc-full-qc-e5f6',
    titleId: 'svc-full-qc-title',
    descId: 'svc-full-qc-desc',
  },
  {
    id: 'production-followup',
    icon: TrendingUp,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout production',
    desc: 'We act as your eyes and ears on the factory floor. From raw material procurement to finished goods, we monitor production progress and communicate updates so you are never left in the dark.',
    features: [
      'Regular production status updates',
      'Raw material and component verification',
      'Timeline monitoring and delay alerts',
      'Milestone photos and progress reports',
    ],
    imgId: 'svc-full-prod-g7h8',
    titleId: 'svc-full-prod-title',
    descId: 'svc-full-prod-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Reliable logistics from China to your door',
    desc: 'We coordinate freight forwarding, customs documentation, and delivery tracking. Whether you need sea freight, air freight, or express courier, we find the most cost-effective solution for your shipment.',
    features: [
      'Sea freight (FCL and LCL) and air freight options',
      'Customs documentation and HS code guidance',
      'Freight cost comparison and booking',
      'Shipment tracking and delivery coordination',
    ],
    imgId: 'svc-full-ship-i9j0',
    titleId: 'svc-full-ship-title',
    descId: 'svc-full-ship-desc',
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label / OEM',
    subtitle: 'Build your own branded product line',
    desc: 'We help brands develop custom products with their own branding. From product design and tooling to packaging and labeling, we manage the entire OEM process with experienced Chinese manufacturers.',
    features: [
      'Product design and specification development',
      'Tooling and mold management',
      'Custom packaging and labeling coordination',
      'Sample approval and production sign-off',
    ],
    imgId: 'svc-full-oem-k1l2',
    titleId: 'svc-full-oem-title',
    descId: 'svc-full-oem-desc',
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
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Full-Service China Sourcing
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              We cover every step of the sourcing process — from finding the right supplier to delivering goods to your warehouse.
            </p>
            <CTAButton to="/contact" size="lg" showArrow>
              Get a Free Sourcing Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map(({ id, icon: Icon, title, subtitle, desc, features, imgId, titleId, descId }, i) => (
              <div key={id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-700" />
                  </div>
                  <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-1">{subtitle}</p>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{title}</h2>
                  <p id={descId} className="text-neutral-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="flex flex-col gap-3 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton to="/contact" variant="secondary" showArrow>
                    Enquire About This Service
                  </CTAButton>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-neutral-100 h-72 lg:h-96 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
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

      {/* CTA */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-brand-200 mb-8">Tell us about your product and we'll recommend the right approach for your situation.</p>
          <CTAButton to="/contact" variant="white" size="lg" showArrow>
            Get a Free Consultation
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
