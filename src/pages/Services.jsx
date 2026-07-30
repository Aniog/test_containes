import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Search, Factory, ClipboardCheck, Eye, Ship, FileCheck,
  Shield, Globe, CheckCircle, Phone, Users, BarChart3, Clock
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    subtitle: 'Find the Right Manufacturing Partner',
    description: 'We identify, vet, and verify Chinese suppliers that match your exact requirements. Our comprehensive verification process ensures you work only with reliable, capable manufacturers.',
    features: [
      'Supplier identification from our verified network of 500+ factories',
      'Background checks including business license verification',
      'Production capability and capacity assessment',
      'Financial stability evaluation',
      'Reference checks with existing international clients',
      'Initial price and MOQ comparison analysis',
    ],
    benefits: [
      'Access to pre-vetted suppliers without the legwork',
      'Reduced risk of working with unreliable manufacturers',
      'Multiple supplier options for competitive pricing',
      'Verified production capabilities matching your needs',
    ],
    imageQuery: 'factory meeting business negotiation China',
    imageId: 'service-sourcing-img',
  },
  {
    id: 'factory-audits',
    icon: Factory,
    title: 'Factory Audits & Inspections',
    subtitle: 'On-Site Verification You Can Trust',
    description: 'Our experienced team conducts thorough on-site factory audits to verify production capabilities, quality systems, and compliance standards before you commit to an order.',
    features: [
      'Comprehensive facility inspection and assessment',
      'ISO certification and quality management system review',
      'Production line capability and capacity verification',
      'Worker skill level and training assessment',
      'Environmental and safety compliance check',
      'Detailed audit report with photos and recommendations',
    ],
    benefits: [
      'Confidence in your supplier selection decision',
      'Identification of potential risks before production',
      'Documented evidence of supplier capabilities',
      'Peace of mind from independent third-party verification',
    ],
    imageQuery: 'factory inspection quality control auditor',
    imageId: 'service-audit-img',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection Services',
    subtitle: 'Protect Your Investment with Rigorous QC',
    description: 'We implement multi-stage quality inspections throughout the production process to ensure every product meets your specifications before it leaves the factory.',
    features: [
      'Pre-production sample evaluation and approval',
      'In-line production inspection at key milestones',
      'Pre-shipment inspection with AQL sampling',
      'Container loading supervision',
      'Defect classification and detailed reporting',
      'Corrective action management with suppliers',
    ],
    benefits: [
      'Catch defects before shipment, not after delivery',
      'Documented quality records for every order',
      'Reduced returns and customer complaints',
      'Consistent product quality across all shipments',
    ],
    imageQuery: 'quality inspection product testing',
    imageId: 'service-qc-img',
  },
  {
    id: 'production-monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    subtitle: 'Real-Time Visibility Into Your Orders',
    description: 'We provide ongoing production monitoring with regular updates, milestone tracking, and proactive issue management to keep your orders on schedule.',
    features: [
      'Production schedule creation and tracking',
      'Weekly progress reports with photos',
      'Milestone-based quality checkpoints',
      'Proactive issue identification and resolution',
      'Timeline risk assessment and mitigation',
      'Direct communication channel with factory management',
    ],
    benefits: [
      'Complete visibility into production status',
      'Early warning of potential delays or issues',
      'Confidence that deadlines will be met',
      'Reduced need for direct factory communication',
    ],
    imageQuery: 'production planning factory management',
    imageId: 'service-monitoring-img',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'End-to-End Delivery Solutions',
    description: 'We manage the entire shipping process from factory pickup to final delivery, including freight forwarding, customs clearance, and documentation.',
    features: [
      'Sea freight, air freight, and express shipping options',
      'Freight cost comparison and optimization',
      'Export and import customs documentation',
      'Cargo insurance coordination',
      'Real-time shipment tracking',
      'Door-to-door delivery coordination',
    ],
    benefits: [
      'Competitive shipping rates through volume partnerships',
      'Hassle-free customs clearance',
      'Reduced shipping delays and complications',
      'Single point of contact for all logistics needs',
    ],
    imageQuery: 'container shipping port logistics',
    imageId: 'service-shipping-img',
  },
  {
    id: 'documentation-compliance',
    icon: FileCheck,
    title: 'Documentation & Compliance',
    subtitle: 'Complete Trade Documentation Support',
    description: 'We handle all trade documentation including contracts, invoices, certificates, and compliance requirements to ensure smooth transactions.',
    features: [
      'Supplier contract drafting and review',
      'Commercial invoice and packing list preparation',
      'Certificate of origin and other trade certificates',
      'Product certification and testing coordination',
      'Import/export compliance documentation',
      'Intellectual property protection guidance',
    ],
    benefits: [
      'Legally sound agreements protecting your interests',
      'Accurate documentation reducing customs delays',
      'Compliance with destination country regulations',
      'Professional documentation for your records',
    ],
    imageQuery: 'business documents contract paperwork',
    imageId: 'service-documentation-img',
  },
]

const additionalServices = [
  { icon: Shield, title: 'Product Safety Testing', description: 'Coordination with accredited labs for CE, FCC, UL, and other certifications.' },
  { icon: Users, title: 'Translation & Interpretation', description: 'Professional bilingual support for all factory communications and meetings.' },
  { icon: BarChart3, title: 'Market Research', description: 'Competitive analysis and pricing research for your product category.' },
  { icon: Clock, title: 'Urgent Order Support', description: 'Expedited sourcing and production management for time-sensitive orders.' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-full mb-6 text-sm font-medium">
              <Shield className="w-4 h-4" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              From supplier discovery to final delivery, we provide end-to-end sourcing solutions 
              tailored to your business needs. Every service is designed to reduce risk and maximize value.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-4 text-sm font-medium">
                    <service.icon className="w-4 h-4" />
                    Service {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-lg text-red-600 mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Do:</h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <ArrowRight className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} bg-gray-100 rounded-2xl overflow-hidden`}>
                  <img
                    data-strk-img-id={service.imageId}
                    data-strk-img={`[service-title-${service.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <span id={`service-title-${service.id}`} className="sr-only">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complementary services to support your complete sourcing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Customized Sourcing Solution?
          </h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us to discuss your specific requirements 
            and get a tailored sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8612345678900"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
