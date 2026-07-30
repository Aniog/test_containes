import { useEffect, useRef } from 'react'
import SEO from '@/components/layout/SEO'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileCheck, BarChart3, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify suppliers that match your technical requirements, quality expectations, certifications, and budget. Our research combines verified databases, trade-show networks, and direct factory outreach.',
    benefits: ['Shortlist of 3-5 qualified suppliers', 'Initial price benchmarking', 'Capability and MOQ assessment'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Before you place an order, we verify the factory exists, owns production lines, holds proper licenses, and meets your compliance needs.',
    benefits: ['On-site or virtual audit options', 'License and certification checks', 'Production capacity review'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our inspectors visit the factory at pre-agreed stages to check materials, workmanship, dimensions, functionality, packaging, and labeling.',
    benefits: ['Pre-shipment inspection', 'During-production inspection', 'Container loading supervision'],
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description: 'We monitor timelines, material readiness, and production milestones so delays are caught early and resolved quickly.',
    benefits: ['Weekly progress reports', 'Milestone tracking', 'Issue escalation and resolution'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We help arrange freight, prepare export documentation, and coordinate with forwarders so goods move smoothly to your destination.',
    benefits: ['Freight forwarder coordination', 'Customs document support', 'Door-to-door or port-to-port options'],
  },
  {
    icon: FileCheck,
    title: 'Order Management',
    description: 'One dedicated account manager handles quotes, purchase orders, payments, samples, and communication so nothing falls through the cracks.',
    benefits: ['Single point of contact', 'Purchase order support', 'Payment milestone guidance'],
  },
  {
    icon: BarChart3,
    title: 'Cost Analysis',
    description: 'We break down product costs, tooling, packaging, and logistics so you can make informed sourcing decisions.',
    benefits: ['Transparent cost breakdowns', 'Should-cost modeling', 'Supplier quote comparison'],
  },
  {
    icon: Package,
    title: 'Customization Support',
    description: 'From custom packaging to private-label products, we help communicate specifications and manage sampling until the product meets your standards.',
    benefits: ['OEM/ODM support', 'Packaging design coordination', 'Sample management'],
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <SEO
        title="Sourcing Services | Supplier Verification, QC & Shipping | SSourcing China"
        description="End-to-end China sourcing services: supplier sourcing, factory audits, quality inspection, production follow-up, and shipping coordination."
      />
      <div ref={containerRef}>
        <section className="bg-slate-900 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label text-brand-400">Our Services</span>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                  Full-service China sourcing support
                </h1>
                <p className="text-lg text-slate-300 max-w-xl">
                  We handle the complex parts of buying from China so you can focus on sales, product development, and growth.
                </p>
              </div>
              <div>
                <img
                  alt="Factory audit and supplier verification"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  data-strk-img-id="services-hero-ssourcing-1a2b"
                  data-strk-img="[services-hero-title] [services-hero-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className="sr-only" id="services-hero-title">Our Services</span>
                <span className="sr-only" id="services-hero-subtitle">Full-service China sourcing support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-page">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="card p-8">
                    <div className="w-14 h-14 rounded-lg bg-brand-50 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-brand-700" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
