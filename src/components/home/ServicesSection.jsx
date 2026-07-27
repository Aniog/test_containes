import { Search, Building2, ClipboardCheck, Factory, Ship, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers that match your product specifications, budget, and volume requirements.',
    imgId: 'service-sourcing-8f2a9c',
    titleId: 'service-sourcing-title',
    descId: 'service-sourcing-desc',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory capabilities, certifications, production capacity, and business legitimacy.',
    imgId: 'service-verification-7b3d1e',
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to ensure products meet your standards.',
    imgId: 'service-inspection-4c5f2a',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule and catch issues early.',
    imgId: 'service-monitoring-9d6e3b',
    titleId: 'service-monitoring-title',
    descId: 'service-monitoring-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle freight forwarding, customs documentation, and logistics to get your goods delivered on time.',
    imgId: 'service-shipping-1a8b4c',
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    description: 'Tailored sourcing strategies for complex products, private labeling, packaging design, and OEM/ODM projects.',
    imgId: 'service-custom-2d7e5f',
    titleId: 'service-custom-title',
    descId: 'service-custom-desc',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#f8f9fa] rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 overflow-hidden rounded-md">
                <img
                  alt={service.title}
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.descId}] [${service.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-md">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 id={service.titleId} className="text-lg font-semibold text-navy">
                  {service.title}
                </h3>
              </div>
              <p id={service.descId} className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-700 transition-colors"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
