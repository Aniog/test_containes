import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Shield, Eye, Truck, BarChart3, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'supplier-verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'We thoroughly vet suppliers to ensure they meet your quality standards and can deliver on their promises.',
    features: [
      'Business license verification',
      'Factory ownership confirmation',
      'Production capability assessment',
      'Financial stability check',
      'Reference checks from existing clients',
    ],
    image: 'factory verification inspection',
  },
  {
    id: 'quality-control',
    icon: Shield,
    title: 'Quality Control',
    description: 'Our experienced QC team conducts rigorous inspections at every stage of production to protect your investment.',
    features: [
      'Pre-production sample approval',
      'During production inspection',
      'Pre-shipment inspection',
      'Container loading supervision',
      'Defect analysis and reporting',
    ],
    image: 'quality control inspection factory',
  },
  {
    id: 'production-monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'We keep a close eye on your orders to ensure they stay on schedule and meet specifications.',
    features: [
      'Weekly production updates',
      'Milestone tracking',
      'Issue identification and resolution',
      'Timeline management',
      'Direct factory communication',
    ],
    image: 'factory production line manufacturing',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'From factory to your door, we handle all logistics to ensure smooth and cost-effective delivery.',
    features: [
      'Freight forwarding coordination',
      'Customs documentation',
      'Container booking and tracking',
      'Consolidation services',
      'Door-to-door delivery options',
    ],
    image: 'shipping container logistics freight',
  },
  {
    id: 'factory-audits',
    icon: BarChart3,
    title: 'Factory Audits',
    description: 'Comprehensive audits to assess factory capabilities, working conditions, and compliance standards.',
    features: [
      'Social compliance audits',
      'Production capacity evaluation',
      'Equipment and technology assessment',
      'Workforce evaluation',
      'Detailed audit reports',
    ],
    image: 'factory audit assessment evaluation',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-h1 text-white mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-body-lg text-primary-light/90 max-w-3xl mx-auto">
              Comprehensive sourcing solutions to help you source with confidence from China. 
              From supplier discovery to delivery, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-neutral-100">
                    <img
                      data-strk-img-id={`service-${service.id}-img`}
                      data-strk-img={`[${service.id}-desc] ${service.title} China sourcing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-h3 text-neutral-900">{service.title}</h2>
                  </div>
                  <p id={`${service.id}-desc`} className="text-body-lg text-neutral-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-body text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    Request this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 text-neutral-900 mb-6">
            Ready to Source with Confidence?
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Tell us about your sourcing needs and our team will create a customized solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-button bg-accent px-8 py-4 text-body font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-dark hover:shadow-xl"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
