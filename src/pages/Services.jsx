import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, TrendingUp, Ship, ShieldCheck,
  FileText, Users, ArrowRight, CheckCircle2
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified manufacturers that match your product specifications, quality standards, and budget.',
    features: ['Market research & supplier identification', 'RFQ management & price comparison', 'Supplier background checks', 'Sample coordination'],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory audits to verify production capabilities, quality management systems, and business legitimacy before you commit.',
    features: ['Business license verification', 'Production capacity assessment', 'Quality system evaluation', 'Social compliance checks'],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspections at every stage of production to ensure your products meet specifications and quality standards.',
    features: ['Pre-production inspection (PPI)', 'During production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Container loading supervision'],
  },
  {
    id: 'production-followup',
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Dedicated project managers monitor your production timeline, resolve issues proactively, and keep you informed at every stage.',
    features: ['Weekly progress reports', 'Timeline tracking & alerts', 'Issue escalation & resolution', 'Photo & video updates'],
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination from factory to your warehouse, including freight booking, customs, and delivery tracking.',
    features: ['Freight forwarder selection', 'Customs documentation', 'Shipment tracking', 'Delivery coordination'],
  },
  {
    id: 'contract-protection',
    icon: ShieldCheck,
    title: 'Contract & Payment Protection',
    desc: 'We help structure supplier agreements and payment terms that protect your interests and minimize risk.',
    features: ['Contract drafting assistance', 'Payment milestone planning', 'Trade assurance guidance', 'Dispute resolution support'],
  },
  {
    id: 'product-development',
    icon: FileText,
    title: 'Product Development Support',
    desc: 'From concept to production-ready specifications, we help refine your product design for manufacturing in China.',
    features: ['Technical specification review', 'Material sourcing', 'Prototype coordination', 'Design for manufacturing (DFM)'],
  },
  {
    id: 'consolidated-shipping',
    icon: Users,
    title: 'Consolidated Sourcing',
    desc: 'Source multiple products from different suppliers in one coordinated project, saving time and reducing logistics costs.',
    features: ['Multi-supplier coordination', 'Warehouse consolidation', 'Combined shipping arrangements', 'Single point of contact'],
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="services-title" className="text-4xl md:text-5xl font-bold text-slate-800">
              Our China Sourcing Services
            </h1>
            <p id="services-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
              Comprehensive sourcing support from supplier identification to delivery. We handle the complexity so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, idx) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-sky" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full lg:max-w-md">
                  <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[services-subtitle] [services-title] ${service.title}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need a Custom Sourcing Solution?</h2>
          <p className="mt-4 text-blue-100 text-lg">
            Every project is different. Tell us your requirements and we'll create a tailored sourcing plan.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-sky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
