import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Package, Truck, Tag, ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import CTABanner from '../components/home/CTABanner'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We search our network of 500+ verified Chinese manufacturers to find suppliers that match your product specifications, quality standards, MOQ, and budget.',
    features: [
      'Product specification analysis',
      'Supplier shortlisting (3–5 options)',
      'Price comparison and negotiation',
      'Sample arrangement',
    ],
    imgId: 'svc-page-sourcing-a1b2',
    titleId: 'svc-page-title-sourcing',
    descId: 'svc-page-desc-sourcing',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    description: 'Before you place an order, we visit the factory in person to verify their legitimacy, production capacity, certifications, and working conditions.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Certification check (ISO, CE, etc.)',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-page-factory-c3d4',
    titleId: 'svc-page-title-factory',
    descId: 'svc-page-desc-factory',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our QC inspectors check your goods against your specifications before they leave the factory. We catch defects before they become your problem.',
    features: [
      'Pre-shipment inspection (PSI)',
      'In-line production inspection',
      'Container loading supervision',
      'Detailed QC report with photos/video',
    ],
    imgId: 'svc-page-qc-e5f6',
    titleId: 'svc-page-title-qc',
    descId: 'svc-page-desc-qc',
  },
  {
    id: 'production-followup',
    icon: Package,
    title: 'Production Follow-up',
    description: 'We monitor your production from start to finish, visiting the factory regularly and sending you updates so you always know where your order stands.',
    features: [
      'Weekly production status reports',
      'Factory visit photos and videos',
      'Early warning on delays',
      'Packaging and labeling supervision',
    ],
    imgId: 'svc-page-production-g7h8',
    titleId: 'svc-page-title-production',
    descId: 'svc-page-desc-production',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle all logistics from the factory gate to your warehouse — sea freight, air freight, express, customs documentation, and tracking.',
    features: [
      'Sea, air, and express freight',
      'Customs documentation preparation',
      'Freight forwarder coordination',
      'Real-time shipment tracking',
    ],
    imgId: 'svc-page-shipping-i9j0',
    titleId: 'svc-page-title-shipping',
    descId: 'svc-page-desc-shipping',
  },
  {
    id: 'private-label',
    icon: Tag,
    title: 'Private Label & OEM',
    description: 'We help you develop custom products with your own branding — from design and prototyping to production and packaging.',
    features: [
      'Product design consultation',
      'Prototype and sample development',
      'Custom packaging and branding',
      'OEM/ODM factory matching',
    ],
    imgId: 'svc-page-oem-k1l2',
    titleId: 'svc-page-title-oem',
    descId: 'svc-page-desc-oem',
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
      {/* Page Header */}
      <div className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-3">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Services</h1>
          <p className="text-[#CBD5E0] text-lg max-w-2xl mx-auto">
            Comprehensive sourcing support for overseas buyers — from finding suppliers to delivering goods to your door.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-[#EBF2FA] rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#1A3C6E]" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">{service.title}</h2>
                    <p id={service.descId} className="text-[#4A5568] leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-[#4A5568] text-sm">
                          <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
                    >
                      Get a Quote for This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-[#EBF2FA] aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
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
