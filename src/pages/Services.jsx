import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Settings, Ship, ArrowRight, Shield, FileText, Truck, Users } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We leverage our extensive network of 5,000+ pre-qualified suppliers across China\'s major manufacturing clusters. Our team analyzes your product requirements, specifications, and target pricing to identify the best-matched factories.',
    bullets: [
      'Supplier database search and shortlisting',
      'Initial capability assessment and RFQ management',
      'Comparative quote analysis with detailed breakdowns',
      'Factory visit coordination and meeting facilitation',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know who you are working with before you commit',
    desc: 'Before you place an order, we conduct comprehensive on-site factory audits. We verify business licenses, certifications, production capacity, equipment, quality management systems, and workforce capabilities.',
    bullets: [
      'Business license and certification verification',
      'Production line and equipment inspection',
      'Quality management system evaluation',
      'Workforce and capacity assessment',
      'Detailed audit report with photos and ratings',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure your products meet exact specifications',
    desc: 'Our quality engineers conduct inspections at every critical stage. We follow international standards (AQL) and provide detailed inspection reports with photos, measurements, and test results.',
    bullets: [
      'Pre-production sample review and approval',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Lab testing coordination (CE, FCC, RoHS, REACH)',
    ],
  },
  {
    id: 'production-management',
    icon: Settings,
    title: 'Production Management',
    subtitle: 'Stay on schedule and on budget',
    desc: 'We monitor your production from start to finish, providing regular updates on progress, identifying potential delays early, and ensuring the factory stays on track with your timeline and quality requirements.',
    bullets: [
      'Production timeline creation and monitoring',
      'Weekly progress updates with photos',
      'Milestone tracking and delay alerts',
      'Sample coordination and approval management',
      'Change order handling and documentation',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'Get your products delivered on time',
    desc: 'We handle the entire logistics process from factory to your warehouse. Our team manages freight booking, documentation, customs clearance, and shipment tracking across sea, air, and rail.',
    bullets: [
      'Freight forwarding and carrier selection',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Cargo insurance arrangement',
      'Real-time shipment tracking and updates',
    ],
  },
  {
    id: 'product-development',
    icon: FileText,
    title: 'Product Development Support',
    subtitle: 'Bring your product ideas to life',
    desc: 'Have a product idea but no technical drawings? We help you develop product specifications, create design files, and coordinate with factories for prototyping, mold making, and pre-production samples.',
    bullets: [
      'Product specification development',
      'Design review and DFM (Design for Manufacturing)',
      'Prototype and sample coordination',
      'Mold making and tooling management',
      'Packaging design and sourcing',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            End-to-End China Sourcing Solutions
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">
            From supplier discovery to final delivery, we provide comprehensive sourcing services tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isEven = idx % 2 === 0
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <h2 id={`service-title-${service.id}`} className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-brand-600 font-medium mb-4">{service.subtitle}</p>
                    <p className="text-navy-500 leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-2.5">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-navy-600">
                          <Shield className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                      <img
                        alt={service.title}
                        data-strk-img-id={`services-detail-${service.id}-${idx}c7a2`}
                        data-strk-img={`[service-title-${service.id}] China manufacturing factory`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 text-white/60 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Tell us about your product and requirements. We will provide a free assessment and quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}