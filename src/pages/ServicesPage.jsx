import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, Clock, Truck, Package,
  CheckCircle, ChevronRight
} from 'lucide-react'
import { CTAButton, SectionHeader } from '@/components/UI'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    imgId: 'svc-img-1-c4d7e9',
    titleId: 'svc-title-1',
    descId: 'svc-desc-1',
    tagline: 'Find the right manufacturer for your product',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, quality requirements, MOQ, and budget. Our sourcing covers all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.',
    includes: [
      'Product specification review',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist of 3–5 qualified suppliers',
      'Supplier comparison report',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    imgId: 'svc-img-2-a1b3f8',
    titleId: 'svc-title-2',
    descId: 'svc-desc-2',
    tagline: 'Confirm a factory is what it claims to be',
    desc: 'We conduct on-site factory audits to verify business registration, production capacity, equipment, workforce, quality management systems, and certifications. Our audit reports give you the information needed to make an informed decision.',
    includes: [
      'Business license verification',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'Quality management review',
      'Certification verification',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    imgId: 'svc-img-3-e5f2a7',
    titleId: 'svc-title-3',
    descId: 'svc-desc-3',
    tagline: 'Verify goods meet your specifications before shipment',
    desc: 'Our inspectors conduct AQL-based quality checks at the factory before goods are shipped. We check product dimensions, appearance, functionality, labeling, and packaging against your agreed specifications.',
    includes: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision',
      'AQL sampling methodology',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    imgId: 'svc-img-4-b9c1d3',
    titleId: 'svc-title-4',
    descId: 'svc-desc-4',
    tagline: 'Stay informed throughout manufacturing',
    desc: 'We monitor your order from production start to completion, providing regular updates and on-site visits. Early identification of issues prevents costly delays and rework.',
    includes: [
      'Production schedule tracking',
      'Regular status updates',
      'On-site factory visits',
      'Issue identification and resolution',
      'Photo and video documentation',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    imgId: 'svc-img-5-f7a4c6',
    titleId: 'svc-title-5',
    descId: 'svc-desc-5',
    tagline: 'Get your goods from factory to destination',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment. We work with both sea freight (FCL/LCL) and air freight options depending on your timeline and budget.',
    includes: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'FCL and LCL sea freight',
      'Air freight options',
      'Shipment tracking',
      'Customs clearance support',
    ],
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label & OEM',
    imgId: 'svc-img-6-d3e8b1',
    titleId: 'svc-title-6',
    descId: 'svc-desc-6',
    tagline: 'Build your brand with Chinese manufacturing',
    desc: 'We support custom product development, private labeling, and OEM manufacturing. From initial design to branded packaging, we work with factories experienced in producing to buyer specifications.',
    includes: [
      'OEM factory identification',
      'Product development support',
      'Custom packaging design coordination',
      'Sample management',
      'Brand compliance review',
      'IP protection guidance',
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
    <div ref={containerRef} className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            China Sourcing Services for Global Buyers
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            We provide end-to-end sourcing support — from finding the right supplier to getting your goods delivered. Each service is designed to reduce risk and save time.
          </p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-lightblue rounded-xl flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wide">{svc.tagline}</span>
                  <h2 id={svc.titleId} className="text-3xl font-bold text-darktext mt-2 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-mutedtext leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {svc.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-darktext">
                        <CheckCircle className="w-4 h-4 text-successgreen flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <CTAButton className="text-sm px-6 py-3">Enquire About This Service</CTAButton>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}] China factory sourcing`}
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-orange-100 mb-8">Tell us about your sourcing project and we will recommend the right approach.</p>
          <Link to="/contact" className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
