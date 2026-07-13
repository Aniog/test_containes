import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right factory for your product',
    imgContext: 'manufacturing factory industrial production workers',
    desc: 'We research and shortlist verified suppliers that match your product specifications, target price, minimum order quantity, and delivery requirements. Our team has direct access to trade databases, industry contacts, and on-the-ground knowledge across major manufacturing hubs.',
    features: [
      'Product specification analysis',
      'Supplier database research (Alibaba, Made-in-China, trade shows)',
      'Initial supplier screening and shortlisting',
      'Supplier communication in Mandarin',
      'Comparative supplier report',
    ],
    titleId: 'svc-sourcing-title',
    subtitleId: 'svc-sourcing-subtitle',
    descId: 'svc-sourcing-desc',
    ctxId: 'svc-sourcing-ctx',
    imgId: 'svc-sourcing-detail-img-x9y8z7',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    subtitle: 'Confirm the factory is real and capable',
    imgContext: 'factory audit industrial facility workers production floor',
    desc: 'Before you commit to an order, we visit the factory in person to verify its existence, production capacity, workforce, equipment, and compliance status. Our audit reports give you the facts you need to make an informed decision.',
    features: [
      'Business license and registration verification',
      'On-site factory visit and photography',
      'Production capacity assessment',
      'Worker count and equipment check',
      'Social compliance and safety review',
      'Detailed audit report with photos',
    ],
    titleId: 'svc-factory-title',
    subtitleId: 'svc-factory-subtitle',
    descId: 'svc-factory-desc',
    ctxId: 'svc-factory-ctx',
    imgId: 'svc-factory-detail-img-c3d4',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before they reach your warehouse',
    imgContext: 'quality control inspector checking products manufacturing',
    desc: 'Our inspectors follow internationally recognized AQL sampling standards to check your goods at the factory before shipment. We provide a detailed inspection report with photos and a clear pass/fail result within 24 hours.',
    features: [
      'Pre-shipment inspection (PSI)',
      'During production inspection (DUPRO)',
      'Container loading supervision',
      'AQL 2.5 / 4.0 sampling standards',
      'Measurement, function, and appearance checks',
      'Same-day or next-day report delivery',
    ],
    titleId: 'svc-qc-title',
    subtitleId: 'svc-qc-subtitle',
    descId: 'svc-qc-desc',
    ctxId: 'svc-qc-ctx',
    imgId: 'svc-qc-detail-img-e5f6',
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay informed throughout manufacturing',
    imgContext: 'production line manufacturing assembly workers monitoring',
    desc: 'Once your order is placed, we act as your eyes and ears on the factory floor. We track production milestones, flag delays early, and ensure the factory adheres to your agreed specifications and timeline.',
    features: [
      'Production schedule monitoring',
      'Raw material and component verification',
      'Weekly progress updates with photos',
      'Early warning on delays or issues',
      'Liaison between you and the factory',
    ],
    titleId: 'svc-prod-title',
    subtitleId: 'svc-prod-subtitle',
    descId: 'svc-prod-desc',
    ctxId: 'svc-prod-ctx',
    imgId: 'svc-prod-detail-img-g7h8',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'From factory gate to your destination',
    imgContext: 'cargo shipping containers port freight logistics',
    desc: 'We coordinate with freight forwarders, customs brokers, and carriers to ensure your goods are shipped on time and with the correct documentation. We handle FCL, LCL, air freight, and express courier options.',
    features: [
      'Freight forwarder selection and booking',
      'Export customs documentation',
      'Bill of lading and packing list review',
      'FCL, LCL, air freight, and express options',
      'Shipment tracking and updates',
      'Coordination with your import broker',
    ],
    titleId: 'svc-ship-title',
    subtitleId: 'svc-ship-subtitle',
    descId: 'svc-ship-desc',
    ctxId: 'svc-ship-ctx',
    imgId: 'svc-ship-detail-img-i9j0',
  },
  {
    id: 'private-label-oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    imgContext: 'branded product packaging design label manufacturing',
    desc: 'We manage the full OEM and private label process — from product design and mold development to branded packaging and compliance certification. Ideal for brands looking to launch or expand their own product range.',
    features: [
      'Product design and specification development',
      'Mold and tooling coordination',
      'Sample development and revision',
      'Branded packaging design and production',
      'CE, FCC, RoHS, and other certification support',
      'Full production management',
    ],
    titleId: 'svc-oem-title',
    subtitleId: 'svc-oem-subtitle',
    descId: 'svc-oem-desc',
    ctxId: 'svc-oem-ctx',
    imgId: 'svc-oem-detail-img-k1l2',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-900 py-20">
        <div className="container-xl text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            China Sourcing Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We provide end-to-end sourcing support — from finding the right supplier to delivering goods to your warehouse. Every service is designed to reduce your risk and save you time.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((svc, i) => {
        const Icon = svc.icon
        const isEven = i % 2 === 0
        return (
          <section key={svc.id} id={svc.id} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container-xl">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-navy-800/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-navy-800" />
                  </div>
                  <span id={svc.subtitleId} className="section-badge mb-3">{svc.subtitle}</span>
                  <h2 id={svc.titleId} className="text-3xl font-bold text-gray-900 mt-3 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-gray-500 text-lg leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-navy-800 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary">
                    Request This Service <ArrowRight className="inline w-4 h-4 ml-1" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.ctxId}] [${svc.subtitleId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQAABjE+ibYAAAAASUVORK5CYII="
                  />
                  <span id={svc.ctxId} className="sr-only">{svc.imgContext}</span>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-20 bg-navy-800">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your product and sourcing goals. We will recommend the right combination of services for your situation.
          </p>
          <Link to="/contact" className="btn-accent">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
