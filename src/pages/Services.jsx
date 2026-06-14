import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, FileCheck, ClipboardCheck, Truck, Factory, 
  Shield, DollarSign, Package, ArrowRight, CheckCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'

const services = [
  {
    id: 'supplier-verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'We conduct thorough verification of potential suppliers to ensure you work with legitimate, capable factories.',
    features: [
      'Business license verification',
      'Factory site visits',
      'Production capacity assessment',
      'Quality control system review',
      'Worker conditions evaluation',
      'Financial stability check',
    ],
    image: 'Factory verification process',
  },
  {
    id: 'quality-inspection',
    icon: FileCheck,
    title: 'Quality Inspection',
    description: 'Professional quality control inspections at any stage of production to ensure your standards are met.',
    features: [
      'Pre-production inspection',
      'During production inspection',
      'Pre-shipment inspection',
      'Full container loading supervision',
      'AQL sampling according to standards',
      'Detailed inspection reports with photos',
    ],
    image: 'Quality inspection in factory',
  },
  {
    id: 'production-followup',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress to ensure orders are completed on time and to specification.',
    features: [
      'Production schedule tracking',
      'Weekly progress updates',
      'Quality checkpoint monitoring',
      'Issue identification and escalation',
      'Timeline management',
      'Client reporting',
    ],
    image: 'Production monitoring',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support from factory to your destination, handling all documentation and coordination.',
    features: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Customs clearance support',
      'Shipping method optimization',
      'Shipment tracking',
      'Delivery confirmation',
    ],
    image: 'Shipping container logistics',
  },
  {
    id: 'sourcing',
    icon: Package,
    title: 'Product Sourcing',
    description: 'We help you find the right suppliers for your specific product requirements from our network.',
    features: [
      'Supplier identification',
      'Capability matching',
      'Sample coordination',
      'Price negotiation',
      'Terms negotiation',
      'Contract review',
    ],
    image: 'Product sourcing display',
  },
  {
    id: 'consultation',
    icon: DollarSign,
    title: 'Sourcing Consultation',
    description: 'Expert advice on China sourcing strategy, supplier selection, and risk management.',
    features: [
      'Market analysis',
      'Cost optimization strategies',
      'Supplier selection guidance',
      'Risk assessment',
      'Compliance guidance',
      'Ongoing advisory support',
    ],
    image: 'Business consultation meeting',
  },
]

const additionalServices = [
  {
    title: 'Sample Management',
    description: 'We coordinate sample requests, shipping, and evaluation to help you make informed decisions before bulk orders.',
  },
  {
    title: 'Translation Services',
    description: 'Technical document translation and interpretation for smooth communication with suppliers.',
  },
  {
    title: 'Negotiation Support',
    description: 'Professional negotiation services to secure the best prices and terms with suppliers.',
  },
  {
    title: 'Compliance Support',
    description: 'Assistance with product compliance requirements for different markets and regulations.',
  },
]

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comprehensive support for every stage of your China sourcing journey
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-surface rounded-2xl aspect-video flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="text-center p-8">
                    <service.icon className="h-16 w-16 text-primary-300 mx-auto mb-4" />
                    <p className="text-primary-500 font-medium">{service.image}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our core services, we offer additional support to ensure your sourcing success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We'll help you find the right suppliers and ensure quality from start to finish.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
