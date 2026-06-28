import { Link } from 'react-router-dom'
import { CheckCircle, Factory, Package, Truck, FileCheck, ArrowRight, ChevronRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: 'Supplier Sourcing',
      description: 'We help you find the right suppliers that match your specific requirements, quality standards, and budget. Our extensive network and market knowledge ensure you get the best options.',
      features: ['Supplier identification', 'Multiple quote comparisons', 'Capability assessment', 'Price negotiation support']
    },
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: 'Factory Audit & Verification',
      description: 'Comprehensive factory audits to verify supplier legitimacy, production capacity, quality systems, and social compliance. Protect your business from scams.',
      features: ['On-site factory visits', 'Business license verification', 'Production capacity assessment', 'Quality system evaluation']
    },
    {
      icon: <FileCheck className="h-12 w-12 text-blue-600" />,
      title: 'Quality Inspection',
      description: 'Professional quality control services including pre-production, during production, and pre-shipment inspections to ensure your products meet specifications.',
      features: ['Pre-production inspection', 'During production inspection', 'Pre-shipment inspection', 'Loading supervision']
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: 'Production Monitoring',
      description: 'Regular updates and monitoring of your production process to ensure timelines are met and quality standards are maintained throughout manufacturing.',
      features: ['Production timeline tracking', 'Progress reports with photos', 'Quality checkpoints', 'Deadline management']
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: 'Shipping & Logistics',
      description: 'Complete shipping coordination from factory to your door. We handle documentation, customs clearance, and work with reliable freight forwarders.',
      features: ['Freight forwarding coordination', 'Customs documentation', 'Shipping method optimization', 'Door-to-door service']
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: 'Ongoing Support',
      description: 'Continuous support even after your order is complete. We maintain relationships with suppliers and help resolve any issues that arise.',
      features: ['Post-shipment support', 'Supplier relationship management', 'Reorder coordination', 'Issue resolution']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive sourcing solutions for global buyers</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free consultation and sourcing quote today</p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
