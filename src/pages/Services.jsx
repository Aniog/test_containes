import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Eye, Ship, Box, CheckCircle, ArrowRight } from 'lucide-react'

const servicesList = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Finding the right supplier is the foundation of a successful sourcing project. We take a systematic approach to identify manufacturers that match your specific requirements.',
    features: [
      'Market research and supplier identification based on your product specifications',
      'Verification of business licenses, export qualifications, and certifications',
      'Assessment of production capacity, lead times, and minimum order quantities',
      'Price negotiation and terms coordination',
      'Shortlist of qualified suppliers with detailed comparison reports',
    ],
    imgId: 'services-sourcing-7b3d1f',
    imgQuery: '[services-sourcing-title] [services-heading]',
  },
  {
    id: 'audits',
    icon: Factory,
    title: 'Factory Audits',
    description: 'We conduct thorough in-person factory audits to evaluate suppliers before you commit to a partnership. Our audits provide an accurate picture of a factory\'s capabilities.',
    features: [
      'On-site inspection of production facilities and equipment',
      'Evaluation of quality management systems and processes',
      'Assessment of workforce size, skills, and working conditions',
      'Verification of certifications (ISO, BSCI, FDA, CE, etc.)',
      'Detailed audit report with photos and recommendations',
    ],
    imgId: 'services-audits-9c4e2a',
    imgQuery: '[services-audits-title] [services-heading]',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality control team ensures your products meet the agreed specifications before shipment. We follow internationally recognized AQL sampling standards.',
    features: [
      'Pre-production inspection of raw materials and components',
      'During-production inspection to catch issues early',
      'Pre-shipment inspection with random sampling (AQL 2.5)',
      'Container loading supervision',
      'Detailed inspection reports with photos and measurements',
    ],
    imgId: 'services-inspection-5d8f3b',
    imgQuery: '[services-inspection-title] [services-heading]',
  },
  {
    id: 'monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'We keep your production on track with regular monitoring and progress reporting. Early detection of issues prevents costly delays.',
    features: [
      'Weekly production progress reports with photos',
      'Real-time communication with factory management',
      'Early warning system for potential delays or quality issues',
      'Coordination of sample approvals and revisions',
      'Final quality sign-off before shipment release',
    ],
    imgId: 'services-monitoring-2a7c4d',
    imgQuery: '[services-monitoring-title] [services-heading]',
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'We handle the entire logistics process from factory to port, ensuring your goods are shipped efficiently and all documentation is in order.',
    features: [
      'Freight forwarding coordination (sea, air, express)',
      'Export documentation and customs clearance',
      'Consolidation and warehousing services',
      'Cargo tracking and shipment updates',
      'Insurance coordination for peace of mind',
    ],
    imgId: 'services-shipping-6e1f8c',
    imgQuery: '[services-shipping-title] [services-heading]',
  },
  {
    id: 'samples',
    icon: Box,
    title: 'Sample Management',
    description: 'Samples are critical for validating product quality before mass production. We manage the entire sample process to ensure accuracy.',
    features: [
      'Sample request coordination with suppliers',
      'Tracking and follow-up on sample delivery timelines',
      'Review of samples against your specifications',
      'Feedback communication and revision management',
      'Approval documentation for production sign-off',
    ],
    imgId: 'services-samples-8d4e2b',
    imgQuery: '[services-samples-title] [services-heading]',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="section-container text-center">
          <h1 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive sourcing support from supplier discovery to final delivery. 
            We manage the details so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="section-container space-y-20">
          {servicesList.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 id={`services-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={service.imgQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Tell us about your product requirements and we will create a customized sourcing plan for you.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}