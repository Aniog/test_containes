import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CTABanner from '@/components/shared/CTABanner'
import { Search, ShieldCheck, ClipboardCheck, Eye, Ship, Headphones, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Finding the right manufacturer is the foundation of successful importing. We leverage our network of 5,000+ verified factories and deep market knowledge to match you with suppliers that fit your exact requirements.',
    features: ['Product-specific supplier matching', 'Price comparison across 3-5 factories', 'MOQ negotiation', 'Sample coordination', 'Background checks on shortlisted suppliers'],
    imgId: 'svc-page-sourcing-1a2b3c',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    description: 'Before you commit to a supplier, we visit the factory in person to verify their legitimacy, production capabilities, and quality systems. Our detailed audit reports give you the confidence to proceed.',
    features: ['On-site factory visit with photo documentation', 'Business license & export license verification', 'Production capacity assessment', 'Quality management system review', 'Worker conditions & compliance check'],
    imgId: 'svc-page-audit-4d5e6f',
    titleId: 'svc-page-audit-title',
    descId: 'svc-page-audit-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Quality issues are the #1 risk in China sourcing. Our trained inspectors conduct thorough checks at every stage of production to catch defects before they reach your warehouse.',
    features: ['Pre-production inspection (PPI)', 'During-production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision', 'AQL sampling standards'],
    imgId: 'svc-page-qc-7g8h9i',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Stay informed throughout the manufacturing process. We visit the factory regularly, track milestones, and send you detailed progress reports so there are no surprises.',
    features: ['Weekly production progress reports', 'Timeline tracking & delay alerts', 'In-line quality checks', 'Photo & video documentation', 'Direct communication with factory'],
    imgId: 'svc-page-monitor-2j3k4l',
    titleId: 'svc-page-monitor-title',
    descId: 'svc-page-monitor-desc',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'We handle the complexity of international freight so you don\'t have to. From booking cargo space to managing customs documentation, we ensure smooth delivery to your destination.',
    features: ['Sea freight, air freight & express options', 'Export documentation & customs clearance', 'Cargo insurance arrangement', 'Real-time shipment tracking', 'Door-to-door delivery coordination'],
    imgId: 'svc-page-ship-5m6n7o',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'account-management',
    icon: Headphones,
    title: 'Dedicated Account Management',
    description: 'Your dedicated account manager serves as your single point of contact in China. They handle all supplier communication, resolve issues proactively, and protect your business interests.',
    features: ['Single point of contact', 'Bilingual communication support', 'Price & terms negotiation', 'Issue resolution & dispute handling', 'Long-term supplier relationship management'],
    imgId: 'svc-page-account-8p9q0r',
    titleId: 'svc-page-account-title',
    descId: 'svc-page-account-desc',
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Our Sourcing Services</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier discovery to doorstep delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isReversed = index % 2 !== 0
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{service.title}</h2>
                    <p id={service.descId} className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-primary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`aspect-[4/3] rounded-xl overflow-hidden bg-surface ${isReversed ? 'lg:order-1' : ''}`}>
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
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

export default Services
