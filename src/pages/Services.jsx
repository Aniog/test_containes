import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, TrendingUp, Truck, Shield,
  FileText, Users, ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified manufacturers that match your product specifications, quality standards, MOQ requirements, and budget.',
    features: ['Product matching', 'Price comparison', 'MOQ negotiation', 'Sample coordination'],
    imgId: 'svc-sourcing-img-2a4b6c',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory audits to verify production capacity, certifications, equipment condition, worker conditions, and overall business legitimacy.',
    features: ['On-site inspection', 'Certification check', 'Capacity assessment', 'Business license verification'],
    imgId: 'svc-factory-img-3c5d7e',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Multi-stage quality inspections following international AQL standards — from raw materials to finished goods before shipment.',
    features: ['Pre-production inspection', 'During-production check', 'Pre-shipment inspection', 'Container loading supervision'],
    imgId: 'svc-qc-img-8f1g2h',
  },
  {
    id: 'production-followup',
    icon: TrendingUp,
    title: 'Production Follow-up',
    desc: 'Regular progress reports, timeline tracking, and proactive issue resolution throughout the entire manufacturing process.',
    features: ['Weekly progress reports', 'Timeline management', 'Issue escalation', 'Photo/video updates'],
    imgId: 'svc-production-img-4i5j6k',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking to your warehouse.',
    features: ['Freight forwarding', 'Customs clearance', 'Documentation', 'Door-to-door delivery'],
    imgId: 'svc-shipping-img-7l8m9n',
  },
  {
    id: 'contract-protection',
    icon: Shield,
    title: 'Contract & Payment Protection',
    desc: 'We help structure supplier agreements, manage payment milestones, and protect your interests throughout the transaction.',
    features: ['Contract drafting', 'Payment escrow', 'Dispute resolution', 'IP protection guidance'],
    imgId: 'svc-contract-img-1o2p3q',
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              Complete China Sourcing Services
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              From supplier discovery to doorstep delivery — we provide every service you need to source products from China safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[svc-${service.id}-title] [svc-${service.id}-desc]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h2>
                  <p id={`svc-${service.id}-desc`} className="text-slate-500 leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Every project is different. Tell us your requirements and we'll create a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
