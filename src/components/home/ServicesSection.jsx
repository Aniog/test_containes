import { Search, ShieldCheck, ClipboardCheck, Truck, Eye, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet potential suppliers from our network of 1,200+ verified Chinese factories across all major industries.',
    image: 'supplier sourcing agent meeting with Chinese factory owner in modern office',
    imgId: 'service-sourcing-img',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify licenses, production capacity, quality systems, and compliance with international standards.',
    image: 'quality control inspector checking factory production line Chinese manufacturing',
    imgId: 'service-verification-img',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to ensure your products meet specifications before they leave China.',
    image: 'quality control inspection products testing measurement tools factory',
    imgId: 'service-inspection-img',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular progress updates and on-site monitoring to keep production on schedule and address issues in real-time.',
    image: 'production monitoring factory floor manufacturing progress tracking',
    imgId: 'service-monitoring-img',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery worldwide.',
    image: 'shipping container loading port logistics international freight cargo',
    imgId: 'service-shipping-img',
  },
  {
    icon: BarChart3,
    title: 'Cost Optimization',
    description: 'Competitive pricing negotiation, volume discounts, and supply chain optimization to reduce your landed costs.',
    image: 'business negotiation meeting cost analysis charts Chinese supplier',
    imgId: 'service-cost-img',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Comprehensive Sourcing Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From finding the right supplier to delivering products to your door, we handle every step 
            of your China sourcing journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[service-title-${index}] service-${index} Chinese sourcing agent`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Service content */}
              <div className="p-6">
                <h3 
                  id={`service-title-${index}`}
                  className="text-xl font-bold text-navy mb-3"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
