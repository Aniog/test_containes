import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquare,
  Globe,
  Package,
  Truck,
  Award,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China that match your product requirements, quality standards, and budget. Our team uses industry databases, trade show networks, and local knowledge to find the right suppliers for your business.',
    features: [
      'Product-specific supplier identification',
      'Initial capability assessment',
      'Quotation comparison and analysis',
      'Shortlist presentation with recommendations',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Before you commit to any supplier, we conduct thorough on-site audits to verify their legitimacy, production capacity, and quality management systems. This protects you from fraud and ensures you are working with a real manufacturer.',
    features: [
      'Business license and registration verification',
      'Production facility inspection',
      'Quality management system review',
      'Social compliance and working conditions check',
      'Detailed audit report with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality control team conducts inspections at every critical stage of production. We check products against your specifications and industry standards, providing detailed reports so you can make informed decisions before shipment.',
    features: [
      'Pre-production inspection (raw materials)',
      'During-production inspection (early stage)',
      'Pre-shipment inspection (finished goods)',
      'Container loading supervision',
      'Detailed inspection reports with photos and measurements',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We keep you informed throughout the manufacturing process with regular factory visits, progress updates, and early issue detection. This proactive approach prevents costly delays and quality problems.',
    features: [
      'Regular factory visit schedule',
      'Production progress reports',
      'Early issue identification and resolution',
      'Timeline management and updates',
      'Direct communication with factory management',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From factory floor to your warehouse, we manage the entire logistics process. Our experienced team handles freight forwarding, customs documentation, and delivery coordination to ensure your goods arrive safely and on time.',
    features: [
      'Freight forwarding (sea and air)',
      'Customs documentation preparation',
      'Cargo insurance arrangement',
      'Delivery tracking and updates',
      'Door-to-door or port-to-port options',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate the entire sample process — from requesting samples from suppliers to quality checking and shipping them to you. This ensures you evaluate the right product before committing to full production.',
    features: [
      'Sample request coordination',
      'Sample quality evaluation',
      'Sample shipping arrangement',
      'Feedback communication with supplier',
      'Sample revision management',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Communication & Translation',
    description: 'Language and cultural barriers can lead to misunderstandings and costly mistakes. Our bilingual team handles all communication with suppliers, ensuring your requirements are clearly understood and properly executed.',
    features: [
      'Bilingual communication (English/Chinese)',
      'Technical specification translation',
      'Contract review and negotiation support',
      'Meeting arrangement and interpretation',
      'Ongoing project communication management',
    ],
  },
  {
    icon: Package,
    title: 'Packaging & Labeling',
    description: 'We ensure your products are properly packaged and labeled according to your specifications and destination country requirements. This includes custom packaging design coordination, barcode application, and compliance labeling.',
    features: [
      'Custom packaging coordination',
      'Label and barcode application',
      'Destination country compliance check',
      'Packaging quality inspection',
      'Retail-ready packaging options',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Comprehensive sourcing support from supplier identification to final delivery. Every service is tailored to your specific product and business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-slate-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Need Help Sourcing from China?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us for a free consultation. We will assess your needs and recommend the right services for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-base font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
