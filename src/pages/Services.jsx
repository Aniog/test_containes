import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight, CheckCircle } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
    features: [
      'Product-specific supplier search across China\'s manufacturing hubs',
      'Price benchmarking and comparison from multiple qualified factories',
      'Supplier capability assessment and shortlisting',
      'Initial quotation collection and comparison',
      'Factory profile reports with photos and credentials',
    ],
    imgId: 'svc-sourcing-e1f2g3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities before you commit.',
    features: [
      'Business license and registration verification',
      'On-site factory audit with detailed photo report',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Financial stability and export history check',
    ],
    imgId: 'svc-verification-h4i5j6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to protect your order quality.',
    features: [
      'Pre-production inspection (PPI) for materials and components',
      'During-production inspection (DPI) at 20-30% completion',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Detailed reports with photos and defect classification',
      'Lab testing coordination for certifications and compliance',
    ],
    imgId: 'svc-inspection-k7l8m9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    id: 'production',
    icon: Clock,
    title: 'Production Follow-up',
    description: 'We monitor production schedules, track milestones, and report progress so your orders stay on time and issues are caught early.',
    features: [
      'Production schedule monitoring and milestone tracking',
      'Weekly progress reports with photos',
      'Early warning for potential delays',
      'Direct communication with factory management',
      'Problem resolution and corrective action coordination',
    ],
    imgId: 'svc-production-n1o2p3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Consolidation, freight booking, customs documentation, and door-to-door logistics coordination for sea, air, and rail shipments.',
    features: [
      'Freight rate comparison and booking (sea, air, rail)',
      'Multi-supplier cargo consolidation',
      'Export documentation and customs clearance',
      'Real-time shipment tracking',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-q4r5s6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Full-Service China Sourcing
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            From finding suppliers to delivering goods, we provide end-to-end sourcing support tailored to your business needs.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100">
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
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">{service.title}</h2>
                    <p id={service.descId} className="text-steel text-base leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-steel text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
