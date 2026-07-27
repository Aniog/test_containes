import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Search, ClipboardCheck, Truck, FileCheck, Users, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'verification',
    icon: <Search className="w-10 h-10" />,
    title: 'Supplier Verification',
    description: 'We verify supplier legitimacy through comprehensive checks, ensuring you only work with reliable, established manufacturers.',
    features: [
      'Business license verification',
      'On-site factory audits',
      'Certification and compliance checks',
      'Financial stability assessment',
      'Production capability evaluation',
      'Reference checks from existing clients',
    ],
    image: 'supplier verification factory audit',
  },
  {
    id: 'inspection',
    icon: <Shield className="w-10 h-10" />,
    title: 'Quality Inspection',
    description: 'Our experienced inspectors conduct thorough quality checks at every production stage to ensure your products meet specifications.',
    features: [
      'Pre-production material inspection',
      'During production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Defect classification and reporting',
      'Corrective action coordination',
    ],
    image: 'quality inspection warehouse',
  },
  {
    id: 'monitoring',
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: 'Production Monitoring',
    description: 'We track your orders from start to finish, providing regular updates and ensuring production stays on schedule.',
    features: [
      'Order tracking and management',
      'Timeline and milestone monitoring',
      'Weekly progress reports',
      'Issue identification and resolution',
      'Communication bridge with suppliers',
      'Document and specification management',
    ],
    image: 'production monitoring factory',
  },
  {
    id: 'shipping',
    icon: <Truck className="w-10 h-10" />,
    title: 'Shipping Coordination',
    description: 'We handle all logistics — from customs clearance to freight forwarding — ensuring smooth delivery to your destination.',
    features: [
      'Customs documentation preparation',
      'Freight forwarding coordination',
      'Container booking and management',
      'Shipment tracking and updates',
      'Insurance coordination',
      'Last-mile delivery arrangement',
    ],
    image: 'shipping container port logistics',
  },
  {
    id: 'sourcing',
    icon: <Users className="w-10 h-10" />,
    title: 'Product Sourcing',
    description: 'We find the right suppliers for your specific products, negotiating competitive prices while maintaining quality standards.',
    features: [
      'Market research and supplier identification',
      'Price negotiation and comparison',
      'Sample coordination and evaluation',
      'Specification documentation',
      'Contract negotiation support',
      'OEM/ODM coordination',
    ],
    image: 'product sourcing negotiation',
  },
  {
    id: 'documentation',
    icon: <FileCheck className="w-10 h-10" />,
    title: 'Documentation & Compliance',
    description: 'We ensure all products meet regulatory requirements and handle necessary certifications and documentation.',
    features: [
      'Regulatory compliance verification',
      'Certification coordination (CE, FDA, etc.)',
      'Test report management',
      'Labeling and packaging compliance',
      'Import/export documentation',
      'Country-specific requirement guidance',
    ],
    image: 'documentation compliance certification',
  },
]

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-primary py-20 md:py-28">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From finding suppliers to delivering products, we provide end-to-end solutions 
            for sourcing from China.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center 
                                text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-navy mb-4">{service.title}</h2>
                  <p className="text-navy-500 text-lg mb-8">{service.description}</p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-navy-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-80 
                                flex items-center justify-center">
                    <span className="text-primary text-lg font-medium">{service.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="section-title mb-6">Ready to Start Sourcing?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Tell us about your product requirements and get a free sourcing quote within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
