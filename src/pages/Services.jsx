import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Tag, Package,
  CheckCircle, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We leverage our established network and sourcing expertise to identify manufacturers that match your exact product specifications, quality requirements, MOQ, and budget. You receive a shortlist of pre-screened suppliers with detailed profiles.',
    features: [
      'Product specification analysis',
      'Supplier database search across major Chinese markets',
      'Initial supplier screening and shortlisting',
      'Comparative quotation collection',
      'Supplier communication and negotiation support',
    ],
    titleId: 'srv-sourcing-title',
    descId: 'srv-sourcing-desc',
    imgId: 'srv-sourcing-img-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Know who you\'re buying from before you commit',
    desc: 'Before you place an order, we conduct a thorough on-site factory audit to verify the supplier\'s legitimacy, production capabilities, certifications, and compliance with international standards.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker conditions and compliance check',
      'Detailed audit report with photos',
    ],
    titleId: 'srv-audit-title',
    descId: 'srv-audit-desc',
    imgId: 'srv-audit-img-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    desc: 'Our trained QC inspectors conduct pre-shipment, in-line, and final inspections to ensure your products meet agreed specifications. We follow AQL sampling standards and provide detailed inspection reports.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision',
      'AQL-based sampling and defect classification',
      'Photo and video documentation',
    ],
    titleId: 'srv-qc-title',
    descId: 'srv-qc-desc',
    imgId: 'srv-qc-img-g7h8i9',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    desc: 'We act as your eyes and ears on the ground, monitoring production progress, communicating with the factory, and flagging any issues early so they can be resolved before they become costly problems.',
    features: [
      'Regular production status updates',
      'Factory communication and issue escalation',
      'Timeline monitoring and delay prevention',
      'Sample approval coordination',
      'Packaging and labeling verification',
    ],
    titleId: 'srv-prod-title',
    descId: 'srv-prod-desc',
    imgId: 'srv-prod-img-j1k2l3',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your warehouse',
    desc: 'We coordinate with freight forwarders, handle export documentation, and manage the logistics chain to ensure your goods are shipped efficiently and arrive at your destination on time.',
    features: [
      'Freight forwarder selection and coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Sea, air, and express freight options',
      'Delivery tracking and updates',
    ],
    titleId: 'srv-ship-title',
    descId: 'srv-ship-desc',
    imgId: 'srv-ship-img-m4n5o6',
  },
  {
    icon: Tag,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    desc: 'We help you develop custom-branded products with Chinese manufacturers, managing the OEM/ODM process from initial design and prototyping through to branded packaging and final delivery.',
    features: [
      'Product design and development support',
      'OEM/ODM factory matching',
      'Prototype and sample management',
      'Custom packaging and branding coordination',
      'IP protection guidance',
    ],
    titleId: 'srv-oem-title',
    descId: 'srv-oem-desc',
    imgId: 'srv-oem-img-p7q8r9',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-red-300 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Full-Service China Sourcing
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We provide end-to-end sourcing support so you can import from China with confidence — from finding the right supplier to delivering goods to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-lightblue rounded-xl flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-1">{svc.subtitle}</p>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-red-700 transition-colors"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-md object-cover h-72 md:h-80 bg-gray-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Contact us and we'll recommend the right combination of services for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
