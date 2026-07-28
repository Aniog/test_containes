import { Link } from 'react-router-dom'
import { 
  Search, ShieldCheck, Eye, Truck, PackageCheck, Globe, ArrowRight,
  FileCheck, Users, ClipboardCheck, BarChart3, MessageSquare, 
  Warehouse, Ship, FileText, Phone
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import InquiryForm from '@/components/shared/InquiryForm'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Discovery',
    description: 'We leverage our extensive network and market knowledge to identify the best suppliers for your specific product requirements.',
    features: [
      'Market research and supplier identification',
      'RFQ management and price comparison',
      'Supplier shortlisting based on your criteria',
      'Initial communication and qualification',
      'Sample coordination and evaluation',
    ],
    color: 'bg-royal-50 border-royal-200',
    iconColor: 'text-royal-600 bg-royal-100',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audits',
    description: 'Our on-ground team conducts thorough factory audits to verify legitimacy, capabilities, and compliance before you commit.',
    features: [
      'Business license and registration verification',
      'On-site facility inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Worker conditions and compliance check',
      'Detailed audit report with photos',
    ],
    color: 'bg-trust-50 border-trust-200',
    iconColor: 'text-trust-600 bg-trust-100',
  },
  {
    icon: Eye,
    title: 'Quality Control & Inspection',
    description: 'Multi-stage quality inspections ensure your products meet specifications before they leave the factory.',
    features: [
      'Pre-production sample verification',
      'During production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Defect classification and reporting',
      'Corrective action follow-up',
    ],
    color: 'bg-cta-50 border-cta-200',
    iconColor: 'text-cta-600 bg-cta-100',
  },
  {
    icon: PackageCheck,
    title: 'Production Management',
    description: 'We monitor the entire production process to keep your orders on track and resolve issues proactively.',
    features: [
      'Production schedule monitoring',
      'Milestone tracking and reporting',
      'Issue identification and resolution',
      'Communication bridge with factory',
      'Timeline management and updates',
      'Change order coordination',
    ],
    color: 'bg-navy-50 border-navy-200',
    iconColor: 'text-navy-600 bg-navy-100',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory floor to your warehouse, including all documentation and customs clearance.',
    features: [
      'Freight forwarding (sea, air, rail)',
      'Customs clearance and documentation',
      'Container loading supervision',
      'Shipping schedule optimization',
      'Insurance arrangement',
      'Door-to-door delivery coordination',
    ],
    color: 'bg-royal-50 border-royal-200',
    iconColor: 'text-royal-600 bg-royal-100',
  },
  {
    icon: Globe,
    title: 'Trade Consulting',
    description: 'Expert guidance on navigating China trade regulations, tariffs, and procurement best practices.',
    features: [
      'Tariff and duty consultation',
      'Import/export regulation guidance',
      'Trade compliance advice',
      'Cost optimization strategies',
      'Market entry consulting',
      'Supplier relationship management',
    ],
    color: 'bg-trust-50 border-trust-200',
    iconColor: 'text-trust-600 bg-trust-100',
  },
]

const additionalServices = [
  { icon: FileCheck, title: 'Product Compliance Testing', description: 'Arrange third-party lab testing for certifications like CE, FCC, UL, and more.' },
  { icon: Warehouse, title: 'Warehousing & Consolidation', description: 'Consolidate orders from multiple suppliers in our China warehouse before shipping.' },
  { icon: FileText, title: 'Document Preparation', description: 'Complete preparation of all trade documents including invoices, packing lists, and certificates.' },
  { icon: MessageSquare, title: 'Translation Services', description: 'Professional translation of specifications, contracts, and technical documents.' },
]

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cta-500/20 text-cta-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-lg text-navy-200 max-w-3xl mx-auto">
            From finding the right supplier to delivering products to your door, we provide end-to-end 
            sourcing solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`${service.color} border rounded-2xl p-8 lg:p-10`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className={`w-14 h-14 ${service.iconColor} rounded-xl flex items-center justify-center mb-5`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-navy-900 mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <ShieldCheck className="w-5 h-5 text-trust-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Also Available"
            title="Additional Services"
            subtitle="Supplementary services to support your complete sourcing needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-cta-500 to-cta-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-cta-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team will assess your requirements and recommend the right services for your sourcing project. 
            The initial consultation is free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-cta-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+8613800138000"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}
