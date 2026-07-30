import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, Clock, Truck, Package,
  CheckCircle, ArrowRight
} from 'lucide-react'
import CTAButton from '../components/CTAButton.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const services = [
  {
    id: 'supplier-sourcing',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    imgId: 'svc-img-sourcing-a1b2c3',
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right manufacturer, not just any manufacturer.',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, quality standards, and budget. Our sourcing process draws on an established network of factories across China\'s major manufacturing hubs, supplemented by targeted searches on verified platforms.',
    includes: [
      'Product specification review and supplier brief',
      'Shortlist of 3–5 qualified suppliers with profiles',
      'Initial price and MOQ comparison',
      'Communication and negotiation support',
    ],
  },
  {
    id: 'factory-verification',
    titleId: 'svc-factory-title',
    descId: 'svc-factory-desc',
    imgId: 'svc-img-factory-d4e5f6',
    icon: Factory,
    title: 'Factory Verification',
    tagline: 'Know who you\'re buying from before you commit.',
    desc: 'Our team conducts on-site factory audits to verify production capacity, certifications, equipment, workforce, and quality management systems. We provide a detailed audit report so you can make an informed decision.',
    includes: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker welfare and compliance check',
      'Detailed written audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    imgId: 'svc-img-qc-g7h8i9',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch defects before they reach your customers.',
    desc: 'Our trained QC inspectors conduct pre-shipment and in-line inspections against your product specifications and AQL standards. We provide a full inspection report with photos and a clear pass/fail result.',
    includes: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'AQL sampling and defect classification',
      'Measurement, function, and packaging checks',
      'Detailed inspection report within 24 hours',
    ],
  },
  {
    id: 'production-followup',
    titleId: 'svc-prod-title',
    descId: 'svc-prod-desc',
    imgId: 'svc-img-prod-j1k2l3',
    icon: Clock,
    title: 'Production Follow-up',
    tagline: 'Stay informed at every stage of production.',
    desc: 'We act as your eyes and ears on the factory floor. Our team tracks production milestones, communicates with the factory on your behalf, and flags any issues early so they can be resolved without delaying your shipment.',
    includes: [
      'Production schedule review and milestone tracking',
      'Regular status updates (weekly or as agreed)',
      'Issue escalation and resolution support',
      'Material and component verification',
      'Pre-production sample review',
    ],
  },
  {
    id: 'shipping-coordination',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
    imgId: 'svc-img-ship-m4n5o6',
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory gate to your warehouse.',
    desc: 'We coordinate with trusted freight forwarders to arrange sea, air, or express shipping. We handle export documentation, customs declarations, and keep you updated on shipment status throughout transit.',
    includes: [
      'Freight forwarder coordination (FCL, LCL, air)',
      'Export documentation and customs clearance',
      'Cargo insurance arrangement',
      'Shipment tracking and status updates',
      'Delivery coordination at destination',
    ],
  },
  {
    id: 'sample-procurement',
    titleId: 'svc-sample-title',
    descId: 'svc-sample-desc',
    imgId: 'svc-img-sample-p7q8r9',
    icon: Package,
    title: 'Sample Procurement',
    tagline: 'Evaluate quality before placing a full order.',
    desc: 'We source product samples from shortlisted suppliers, review them against your specifications, and ship them to you for evaluation. This reduces the risk of committing to a full order without seeing the actual product.',
    includes: [
      'Sample request and coordination with suppliers',
      'Sample review against your specifications',
      'Consolidated sample shipping to your address',
      'Sample comparison report (if multiple suppliers)',
    ],
  },
]

export default function ServicesPage() {
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
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            End-to-End China Sourcing Services
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            We cover every stage of the sourcing process — from finding the right supplier to getting your goods delivered — so you can focus on growing your business.
          </p>
          <CTAButton to="/contact" variant="primary">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">{svc.title}</h2>
                <p className="text-brand-light font-medium mb-4">{svc.tagline}</p>
                <p id={svc.descId} className="text-gray-500 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-red-100 text-lg mb-8">Tell us about your project and we'll recommend the right combination of services.</p>
          <CTAButton to="/contact" variant="white">Talk to Our Team</CTAButton>
        </div>
      </section>
    </div>
  )
}
