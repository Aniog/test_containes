import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, BarChart3, Truck,
  Headphones, FileText, Shield, ArrowRight, CheckCircle2
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify, evaluate, and shortlist qualified suppliers based on your product specifications, target price, and quality requirements.',
    features: ['Market research & supplier mapping', 'Price comparison across regions', 'MOQ negotiation', 'Sample coordination'],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify production capabilities, certifications, working conditions, and business legitimacy.',
    features: ['On-site factory visits', 'Business license verification', 'Production capacity assessment', 'Compliance & certification check'],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspectors check your goods at every stage — from raw materials to final packaging — with detailed photo reports.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision'],
  },
  {
    id: 'production-followup',
    icon: BarChart3,
    title: 'Production Follow-up',
    desc: 'We monitor your order throughout manufacturing, tracking milestones, resolving issues, and keeping you updated in real time.',
    features: ['Weekly progress reports', 'Timeline tracking', 'Issue escalation & resolution', 'Photo & video updates'],
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight management from factory to your warehouse, including documentation, customs clearance, and delivery tracking.',
    features: ['Freight forwarder coordination', 'Customs documentation', 'Shipping insurance', 'Door-to-door delivery'],
  },
  {
    id: 'ongoing-support',
    icon: Headphones,
    title: 'Ongoing Account Management',
    desc: 'A dedicated account manager handles your supplier relationships, reorders, and any post-delivery issues.',
    features: ['Dedicated account manager', 'Supplier relationship management', 'Reorder coordination', 'Dispute resolution'],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="services-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Our Sourcing Services
            </h1>
            <p id="services-subtitle" className="mt-6 text-lg text-slate-200 leading-relaxed">
              Comprehensive China sourcing support from supplier identification to doorstep delivery. Every service designed to reduce your risk and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{service.title}</h2>
                  <p className="mt-4 text-slate-600 leading-relaxed">{service.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={`[services-subtitle] [services-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="rounded-xl shadow-md w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Need Help Sourcing from China?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your project and we'll recommend the right service package.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
