import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturers for your products',
    description: 'We identify and shortlist qualified suppliers that match your product specifications, quality standards, and budget. Our team leverages an extensive network of pre-vetted factories across China\'s key manufacturing hubs.',
    details: [
      'Product-specific supplier research and shortlisting',
      'Price comparison across multiple qualified suppliers',
      'Supplier capability assessment and matching',
      'Initial communication and quotation coordination',
      'Sample arrangement and evaluation',
    ],
    imgId: 'svc-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are working with',
    description: 'Before you commit to a supplier, we conduct thorough on-site factory audits. We verify business legitimacy, production capabilities, quality management systems, and compliance with international standards.',
    details: [
      'On-site factory audit with detailed photo report',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Social compliance and worker condition review',
    ],
    imgId: 'svc-verification-d4e5f6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensure your products meet specifications',
    description: 'Our quality inspection service covers every stage of production. From checking raw materials to final pre-shipment inspection, we make sure your products meet agreed specifications before they leave the factory.',
    details: [
      'Pre-production inspection (raw materials & components)',
      'During-production inspection (key milestone checks)',
      'Pre-shipment inspection (final quality check)',
      'Detailed inspection reports with photos and measurements',
      'Defect classification and corrective action tracking',
    ],
    imgId: 'svc-inspection-g7h8i9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    subtitle: 'Stay on schedule with proactive monitoring',
    description: 'We monitor your production orders from start to finish. Regular updates, milestone tracking, and proactive problem-solving help prevent delays and keep your supply chain running smoothly.',
    details: [
      'Production schedule monitoring and milestone tracking',
      'Weekly progress updates with photos',
      'Proactive delay prevention and issue resolution',
      'Communication bridge between you and the factory',
      'Packaging and labeling verification',
    ],
    imgId: 'svc-production-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    subtitle: 'From factory floor to your warehouse door',
    description: 'We manage the entire logistics process, from booking freight to handling customs documentation. Whether by sea, air, or rail, we coordinate shipping to ensure your goods arrive on time and in compliance with regulations.',
    details: [
      'Freight booking (sea, air, rail) and rate negotiation',
      'Consolidation and warehouse arrangement',
      'Customs documentation and compliance',
      'Import/export regulation guidance',
      'Shipment tracking and delivery confirmation',
    ],
    imgId: 'svc-shipping-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            End-to-end China sourcing support — from finding suppliers to delivering goods at your door.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            return (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">{service.subtitle}</span>
                  </div>
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                  <p id={service.descId} className="text-neutral-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${isEven ? '' : 'lg:order-1'}`}>
                  <div className="aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden">
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-neutral-500 mb-8">
            Tell us about your product requirements and get a free sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
