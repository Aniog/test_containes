import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Building2, ClipboardCheck, Eye, Ship, FileText } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import CTAButton from '@/components/shared/CTAButton'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We search our network and databases to find manufacturers that match your exact product specifications, budget, and certification needs.',
    details: [
      'Product-specific factory matching',
      'Price comparison across multiple suppliers',
      'MOQ negotiation',
      'Sample arrangement and evaluation',
    ],
    imgId: 'svc-sourcing-img-4a2b1c',
  },
  {
    id: 'factory-verification',
    icon: Building2,
    title: 'Factory Verification & Audit',
    description: 'Our team visits factories in person to verify their legitimacy, production capacity, quality systems, and working conditions.',
    details: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance check',
    ],
    imgId: 'svc-factory-img-5b3c2d',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Professional inspectors check your goods at critical stages using international AQL standards to prevent defective shipments.',
    details: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
    ],
    imgId: 'svc-qc-img-6c4d3e',
  },
  {
    id: 'production-monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'We keep eyes on your order throughout the manufacturing process, providing regular updates with photos and progress reports.',
    details: [
      'Weekly production status reports',
      'Photo and video documentation',
      'Timeline tracking and alerts',
      'Issue escalation and resolution',
    ],
    imgId: 'svc-prod-img-7d5e4f',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'From factory floor to your warehouse door — we coordinate the entire freight process including documentation and tracking.',
    details: [
      'Sea, air, and rail freight options',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Real-time shipment tracking',
    ],
    imgId: 'svc-ship-img-8e6f5g',
  },
  {
    id: 'documentation',
    icon: FileText,
    title: 'Documentation & Compliance',
    description: 'We help ensure your products meet destination country requirements including certifications, labeling, and regulatory compliance.',
    details: [
      'CE, FCC, FDA compliance guidance',
      'Product testing coordination',
      'Labeling and packaging requirements',
      'Certificate of Origin preparation',
    ],
    imgId: 'svc-docs-img-9f7g6h',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier discovery to doorstep delivery. Choose individual services or a full-package solution.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h2>
                  <p id={`svc-${service.id}-desc`} className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[svc-${service.id}-desc] [svc-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Tell us about your product and we'll create a custom sourcing plan for you — free of charge.
          </p>
          <CTAButton variant="white">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
