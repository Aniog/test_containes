import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, TrendingUp, Package, Ship, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right suppliers for your products',
    description: 'We leverage our extensive network of vetted Chinese manufacturers to identify suppliers that match your specific product requirements, quality standards, and budget parameters.',
    features: [
      'Targeted supplier search based on product specifications',
      'Multi-supplier comparison with detailed profiles',
      'Business license and certification verification',
      'Trade history and reputation assessment',
      'Capacity and capability evaluation',
      'Confidentiality protection for your product designs',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Audits & Verification',
    subtitle: 'Know exactly who you are working with',
    description: 'Our trained auditors conduct comprehensive on-site factory assessments to verify capabilities, working conditions, and compliance with international standards before you commit.',
    features: [
      'On-site production facility inspection',
      'Equipment and technology capability assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Workforce size and skill verification',
      'Safety and compliance documentation review',
      'Social compliance and ethical standards check',
      'Detailed audit report with photos and recommendations',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection Services',
    subtitle: 'Catch issues before shipment',
    description: 'Independent quality inspections at critical production milestones, following internationally recognized AQL standards, with detailed reports and photographic evidence.',
    features: [
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
      'AQL sampling following ISO 2859 standards',
      'Custom inspection checklists per product type',
      'Functional testing and measurement verification',
      'Photo and video documentation',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-Up',
    subtitle: 'Stay informed throughout production',
    description: 'Regular monitoring and progress reporting during the manufacturing cycle ensures your order stays on track and any issues are identified and resolved early.',
    features: [
      'Weekly production progress updates',
      'Raw material verification at factory',
      'Production timeline tracking against milestones',
      'Early warning system for potential delays',
      'Photo and video progress documentation',
      'Direct communication with factory management',
      'Expedited resolution of production issues',
    ],
  },
  {
    icon: Package,
    title: 'Sample Management',
    subtitle: 'Efficient sample development and logistics',
    description: 'We manage the entire sample process from coordinating development with suppliers to collecting, evaluating, and shipping samples to your location.',
    features: [
      'Sample requirement communication to suppliers',
      'Coordination of sample development timeline',
      'Multiple supplier sample collection',
      'Sample quality review and comparison',
      'Feedback consolidation and iteration management',
      'Sample shipping and customs documentation',
      'Pre-production sample approval management',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory to your destination',
    description: 'End-to-end logistics management covering freight booking, export documentation, customs clearance, and final delivery to your warehouse or distribution center.',
    features: [
      'Sea freight (FCL/LCL) and air freight booking',
      'Export customs declaration and documentation',
      'Bill of lading and commercial invoice preparation',
      'Cargo insurance coordination',
      'Real-time shipment tracking',
      'Destination clearance support',
      'Last-mile delivery coordination',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive sourcing solutions designed to reduce risk, improve quality, and streamline your supply chain operations in China.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={service.title} id={service.title.toLowerCase().replace(/\s+/g, '-')} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}>
                <div className="lg:w-1/3">
                  <div className="sticky top-24">
                    <div className="w-14 h-14 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-brand-navy" />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-navy mb-2">{service.title}</h2>
                    <p className="text-gray-500 font-medium mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                    <h3 className="font-bold text-brand-navy mb-4 text-lg">What We Deliver</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Need a Custom Sourcing Plan?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Tell us about your product requirements and we will create a tailored sourcing proposal with pricing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}