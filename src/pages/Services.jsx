import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, Shield, Eye, FileCheck, Truck, Users, 
  CheckCircle, ArrowRight, Phone, Mail 
} from 'lucide-react'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers from our extensive network of 5,000+ factories across China.',
    details: [
      'Market research and supplier identification',
      'Factory background and license verification',
      'Production capability assessment',
      'Price comparison and negotiation',
      'Supplier shortlisting and recommendation',
    ],
    benefits: [
      'Access to pre-vetted suppliers',
      'Competitive pricing through negotiation',
      'Reduced risk of unreliable suppliers',
    ],
  },
  {
    id: 'verification',
    icon: Shield,
    title: 'Factory Verification',
    description: 'Comprehensive on-site factory audits to verify legitimacy, capacity, and compliance.',
    details: [
      'Business license verification',
      'Factory facility inspection',
      'Production line assessment',
      'Quality management system review',
      'Compliance certification check',
      'Worker welfare evaluation',
    ],
    benefits: [
      'Confidence in supplier legitimacy',
      'Understanding of production capabilities',
      'Compliance with international standards',
    ],
  },
  {
    id: 'quality-control',
    icon: Eye,
    title: 'Quality Control',
    description: 'Multi-stage inspection process to ensure products meet your specifications.',
    details: [
      'Pre-production sample approval',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Defect classification and reporting',
      'Corrective action follow-up',
    ],
    benefits: [
      'Reduced defect rates',
      'Consistent product quality',
      'Fewer returns and complaints',
    ],
  },
  {
    id: 'production',
    icon: FileCheck,
    title: 'Production Monitoring',
    description: 'Regular factory visits and updates throughout the manufacturing process.',
    details: [
      'Production schedule tracking',
      'Raw material verification',
      'Progress reporting and updates',
      'Timeline management',
      'Issue identification and resolution',
      'Communication facilitation',
    ],
    benefits: [
      'On-time delivery',
      'Visibility into production status',
      'Proactive problem solving',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory to your destination.',
    details: [
      'Freight forwarding (sea, air, rail)',
      'Customs documentation',
      'Import/export compliance',
      'Insurance arrangement',
      'Tracking and updates',
      'Delivery coordination',
    ],
    benefits: [
      'Streamlined logistics',
      'Cost-effective shipping options',
      'Reduced customs delays',
    ],
  },
  {
    id: 'support',
    icon: Users,
    title: 'Dedicated Support',
    description: 'Your personal sourcing manager handles all communication and coordination.',
    details: [
      'Single point of contact',
      'Bilingual communication',
      'Regular progress updates',
      '24/7 availability for urgent matters',
      'Cultural and business guidance',
      'Post-delivery support',
    ],
    benefits: [
      'Clear communication',
      'Time zone convenience',
      'Ongoing partnership',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive solutions to simplify your China sourcing journey. 
              From supplier discovery to delivery, we handle every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#services"
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-white" id="services">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div 
                    className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center"
                    data-strk-bg-id={`service-${service.id}-bg`}
                    data-strk-bg={`[service-${service.id}-title] [services-hero-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  >
                    <service.icon className="w-20 h-20 text-gray-400" />
                  </div>
                </div>
                
                {/* Hidden elements for interpolation */}
                <h2 id={`service-${service.id}-title`} className="sr-only">
                  {service.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden element for interpolation */}
      <h1 id="services-hero-title" className="sr-only">Our Sourcing Services</h1>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your sourcing needs and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center justify-center gap-6">
              <a href="tel:+8612345678900" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
