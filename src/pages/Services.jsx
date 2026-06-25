import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Shield, Truck, Users, FileText, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified manufacturers that match your product specifications, target price, MOQ requirements, and delivery timeline.',
    features: ['Market research & supplier mapping', 'RFQ management & price comparison', 'Supplier background checks', 'Sample coordination'],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify production capacity, quality management systems, certifications, and business legitimacy before you place an order.',
    features: ['Business license verification', 'Production capacity assessment', 'Quality system evaluation', 'Social compliance checks'],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Professional inspectors conduct pre-shipment, during-production, and container loading inspections with detailed photo reports.',
    features: ['Pre-production inspection', 'During production inspection', 'Pre-shipment final inspection', 'Container loading supervision'],
  },
  {
    id: 'production-followup',
    icon: Shield,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress updates to keep your order on schedule and catch potential issues early.',
    features: ['Weekly progress reports', 'Material verification', 'Timeline management', 'Issue resolution'],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics support from factory to your warehouse, including freight booking, customs documentation, and delivery tracking.',
    features: ['Freight forwarder selection', 'Export documentation', 'Customs clearance support', 'Door-to-door delivery'],
  },
  {
    id: 'negotiation',
    icon: Users,
    title: 'Negotiation & Contracts',
    desc: 'Leverage our local expertise and market knowledge to negotiate better prices, payment terms, and lead times with Chinese suppliers.',
    features: ['Price negotiation', 'Payment term optimization', 'Contract review', 'Dispute resolution'],
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 id="services-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Full-Service China Sourcing Support
            </h1>
            <p id="services-page-subtitle" className="text-white/70 text-lg">
              From supplier discovery to doorstep delivery, we provide hands-on support at every stage of your China sourcing journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-8 items-start p-6 md:p-8 rounded-xl border border-slate-200 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-80 shrink-0">
                  <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[services-page-subtitle] [services-page-title] ${service.title}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Every sourcing project is different. Tell us your requirements and we'll create a tailored service package.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
