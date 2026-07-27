import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Search, ClipboardCheck, Truck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Supplier Verification',
    description: 'We verify factory licenses, certifications, production capabilities, and business history to ensure you work with legitimate suppliers.',
    features: ['Business license verification', 'Factory audits', 'Certification checks', 'Financial stability assessment'],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Quality Inspection',
    description: 'Our team conducts on-site inspections at every production stage — from raw materials to final packaging — to meet your quality standards.',
    features: ['Pre-production inspection', 'During production check', 'Pre-shipment inspection', 'Container loading supervision'],
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Production Monitoring',
    description: 'We track your orders from placement to completion, providing regular updates and ensuring timelines are met.',
    features: ['Order tracking', 'Timeline management', 'Progress reports', 'Issue resolution'],
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Shipping Coordination',
    description: 'We handle all logistics — from customs clearance to freight forwarding — ensuring your goods arrive safely and on time.',
    features: ['Customs documentation', 'Freight forwarding', 'Container booking', 'Delivery tracking'],
  },
]

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="section-title">End-to-End Sourcing Solutions</h2>
          <p className="section-subtitle mx-auto">
            From finding the right supplier to delivering products to your door, 
            we handle every step of the sourcing process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-hover group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center 
                              text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-navy-500 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-navy-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
