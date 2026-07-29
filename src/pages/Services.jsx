import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Eye, Ship, Settings, ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTASection from '@/components/home/CTASection'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right suppliers for your products',
    description: 'We conduct thorough market research to identify manufacturers that match your product specifications, quality requirements, and budget. Our team leverages years of industry relationships and on-the-ground knowledge to find the best fit.',
    features: [
      'Market research and supplier mapping',
      'Request for quotation (RFQ) management',
      'Competitive price comparison and negotiation',
      'Sample coordination and evaluation',
      'Capacity and capability assessment',
    ],
    image: 'supplier-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are working with',
    description: 'We conduct comprehensive on-site audits to verify that suppliers are legitimate, capable, and compliant. Our detailed reports give you full visibility into every factory we recommend.',
    features: [
      'Business license and registration verification',
      'Facility and equipment inspection',
      'Production capacity assessment',
      'Quality management system evaluation',
      'Social compliance and ethics audit',
      'Detailed photo and video documentation',
    ],
    image: 'factory-verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch issues before they become problems',
    description: 'Our experienced QC inspectors conduct thorough inspections at every stage of production, using internationally recognized standards and sampling methods.',
    features: [
      'Raw material inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Product testing in accredited labs',
      'AQL sampling and detailed reporting',
    ],
    image: 'quality-inspection',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    subtitle: 'Stay informed at every step',
    description: 'We keep a close watch on your production schedule, ensuring milestones are met and potential delays are identified and addressed early.',
    features: [
      'Weekly production progress reports',
      'Real-time photo and video updates',
      'Milestone tracking and alerts',
      'Issue escalation and resolution',
      'Production timeline management',
    ],
    image: 'production-monitoring',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    subtitle: 'From factory to doorstep',
    description: 'We handle the entire logistics chain so your goods arrive on time, in full, and without unexpected costs.',
    features: [
      'Sea freight (FCL and LCL)',
      'Air freight and express shipping',
      'Export documentation and customs clearance',
      'Cargo insurance arrangements',
      'Warehousing and consolidation',
      'Door-to-door delivery tracking',
    ],
    image: 'shipping-coordination',
  },
  {
    icon: Settings,
    title: 'Product Development',
    subtitle: 'Turn your idea into a finished product',
    description: 'From concept to production-ready design, we connect you with manufacturers who can bring your product vision to life with precision and efficiency.',
    features: [
      'Design for manufacturing (DFM) review',
      'Prototype and sample development',
      'Material sourcing and specification',
      'Packaging design and development',
      'Compliance and certification guidance',
    ],
    image: 'product-development',
  },
]

export default function Services() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            End-to-end sourcing support from supplier identification to final delivery. 
            We are with you at every stage of the supply chain.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">{service.title}</h2>
                  <p className="text-lg text-brand-500 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    data-strk-bg-id={`service-bg-${service.image}`}
                    data-strk-bg={`[service-${service.image}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="700"
                    style={{ minHeight: '350px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#f0f0f0', backgroundImage: 'none' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}