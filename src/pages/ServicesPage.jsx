import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Shield,
  ClipboardCheck,
  TrendingUp,
  Ship,
  FileText,
  ArrowRight,
  CheckCircle,
  MessageSquare,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product requirements, budget, and quality standards. Our team has an extensive network of verified suppliers across all major manufacturing regions.',
    features: [
      'Product-specific supplier matching',
      'RFQ management and price comparison',
      'Supplier capability assessment',
      'Background checks and reference verification',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance. We visit factories in person and provide detailed reports with photos and videos.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance audit',
      'Photo and video documentation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications. Our inspectors follow international standards and provide detailed inspection reports.',
    features: [
      'Pre-production inspection',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your production on schedule and address issues early. We act as your eyes and ears on the factory floor.',
    features: [
      'Production schedule tracking',
      'Regular progress updates',
      'Issue identification and resolution',
      'Timeline management',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Complete logistics support including freight forwarding, customs documentation, and door-to-door delivery. We work with trusted freight forwarders to get your goods delivered safely and on time.',
    features: [
      'Freight forwarding (sea and air)',
      'Customs documentation',
      'Cargo insurance',
      'Door-to-door delivery',
      'Consolidation services',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We collect, evaluate, and ship product samples so you can verify quality before placing bulk orders. We also help with sample modifications and improvements.',
    features: [
      'Sample collection from multiple suppliers',
      'Quality evaluation and comparison',
      'Sample shipping and tracking',
      'Feedback communication with suppliers',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2b46]">
        <div className="container-custom text-center">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From supplier discovery to final delivery, we provide end-to-end support for your China sourcing needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-[#0f2b46]/5 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#0f2b46]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-[#4a5568] leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#c8963e] flex-shrink-0 mt-0.5" />
                        <span className="text-[#4a5568]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="aspect-[4/3] rounded-2xl bg-[#f5f7fa] overflow-hidden"
                    data-strk-bg-id={`service-bg-${index}`}
                    data-strk-bg={`[${service.title.toLowerCase().replace(/\s+/g, '-')}-service]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with Your Sourcing Project?</h2>
          <p className="text-[#4a5568] text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss your requirements. We will recommend the right services for your needs.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
