import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Shield, Eye, Truck, FileCheck, Users } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers from our network of 5,000+ factories across China.',
    features: ['Factory background checks', 'Capability assessment', 'Price negotiation'],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify legitimacy, capacity, and compliance with international standards.',
    features: ['License verification', 'Production capacity', 'Quality certifications'],
  },
  {
    icon: Eye,
    title: 'Quality Control',
    description: 'Rigorous inspection processes to ensure your products meet specifications before shipping.',
    features: ['Pre-production samples', 'During production checks', 'Pre-shipment inspection'],
  },
  {
    icon: FileCheck,
    title: 'Production Monitoring',
    description: 'Regular factory visits and updates throughout the production process to ensure timelines.',
    features: ['Progress tracking', 'Timeline management', 'Issue resolution'],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory to your destination port or warehouse.',
    features: ['Freight forwarding', 'Customs clearance', 'Documentation'],
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Your personal sourcing manager handles all communication and coordination in China.',
    features: ['Single point of contact', 'Bilingual team', '24/7 availability'],
  },
]

export default function ServicesOverview() {
  return (
    <section className="section bg-white" id="services">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Sourcing Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to simplify your China sourcing journey
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            View All Services
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
