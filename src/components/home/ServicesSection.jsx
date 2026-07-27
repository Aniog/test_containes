import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Eye, Ship, HeadphonesIcon } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers that match your product requirements, budget, and quality standards across Chinese manufacturing hubs.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify supplier legitimacy, production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and random sampling to ensure products meet your specifications.',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular progress reports and real-time updates on your order status, from raw materials to finished goods.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight forwarding, customs documentation, and last-mile delivery.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'A personal sourcing manager assigned to your project, available across time zones for smooth communication.',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-surface-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-800 mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-surface-500 text-lg">
            Comprehensive sourcing solutions designed to protect your interests and streamline your supply chain from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-surface-200 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-surface-800 mb-3">{service.title}</h3>
              <p className="text-surface-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-brand-500 text-white rounded-lg font-medium text-sm hover:bg-brand-600 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}