import { Search, Building2, ClipboardCheck, Factory, Ship, Settings, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We tap into our extensive network of pre-vetted manufacturers and use targeted research to find suppliers that match your exact product specifications, quality standards, and budget requirements.',
    features: ['Market research & supplier identification', 'Capability assessment', 'Initial negotiation & quote comparison', 'Sample coordination'],
    imgId: 'service-detail-sourcing-8f2a9c',
    titleId: 'service-detail-sourcing-title',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Our team conducts comprehensive on-site factory audits to verify business licenses, production capacity, quality systems, workplace conditions, and export experience before you commit.',
    features: ['On-site factory audit', 'Business license & certification verification', 'Production line inspection', 'Detailed audit report with photos'],
    imgId: 'service-detail-verification-7b3d1e',
    titleId: 'service-detail-verification-title',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'We offer multiple inspection checkpoints throughout production to catch defects early and ensure your products meet agreed specifications before they leave the factory.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection (AQL standard)', 'Container loading supervision'],
    imgId: 'service-detail-inspection-4c5f2a',
    titleId: 'service-detail-inspection-title',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Stay informed with regular factory visits, progress photos, and detailed reports. We proactively identify and resolve issues before they impact your delivery schedule.',
    features: ['Weekly progress reports', 'On-site production tracking', 'Issue identification & resolution', 'Timeline management'],
    imgId: 'service-detail-monitoring-9d6e3b',
    titleId: 'service-detail-monitoring-title',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From booking freight to preparing customs documentation, we manage the logistics so your goods arrive on time and in compliance with all regulations.',
    features: ['Freight forwarding (sea/air/express)', 'Customs documentation', 'Shipment tracking', 'Delivery coordination'],
    imgId: 'service-detail-shipping-1a8b4c',
    titleId: 'service-detail-shipping-title',
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    description: 'For complex projects requiring product development, private labeling, or OEM/ODM manufacturing, we provide end-to-end project management from concept to delivery.',
    features: ['Product development support', 'OEM/ODM project management', 'Packaging & labeling design', 'Prototype coordination'],
    imgId: 'service-detail-custom-2d7e5f',
    titleId: 'service-detail-custom-title',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for every stage of your China sourcing journey — from finding suppliers to delivering goods.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl font-bold text-navy">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-700 transition-colors"
                >
                  Request This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Schedule a free consultation and we will recommend the right approach for your sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-md transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
