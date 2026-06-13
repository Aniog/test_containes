import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Search, Shield, ClipboardCheck, Factory, Truck, FileCheck, Users, Globe, BarChart3, Award, Eye, Phone } from 'lucide-react'
import { SectionHeader, CTAButton } from '@/components/common/SharedComponents'

const services = [
  {
    id: 'supplier-verification',
    icon: Shield,
    title: 'Supplier Verification',
    desc: 'Before you commit to any supplier, we conduct thorough verification to confirm their legitimacy and capabilities.',
    details: [
      'Business license and registration verification',
      'On-site factory visits and facility assessment',
      'Production capacity and equipment evaluation',
      'Financial stability background checks',
      'Reference checks with existing clients',
      'Certification and compliance documentation review',
    ],
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Audit',
    desc: 'Comprehensive factory assessments to evaluate manufacturing capabilities, quality systems, and compliance standards.',
    details: [
      'ISO 9001 quality management system audit',
      'Social compliance and working conditions check',
      'Environmental and safety standards assessment',
      'Production capacity and machinery inventory',
      'Raw material sourcing and storage evaluation',
      'Detailed audit report with photo documentation',
    ],
  },
  {
    id: 'product-sourcing',
    icon: Search,
    title: 'Product Sourcing',
    desc: 'Finding the right supplier is the foundation of successful sourcing. We leverage our network to match you with the best factories for your products.',
    details: [
      'Requirements analysis and specifications review',
      'Supplier shortlisting from our verified network',
      'Price negotiation and cost optimization',
      'Sample arrangement and evaluation support',
      'MOQ negotiation for startup-friendly quantities',
      'Multiple supplier comparison with transparent pricing',
    ],
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Multi-stage quality inspections at every production phase to catch issues early and ensure products meet your specifications.',
    details: [
      'Pre-production sample approval',
      'Initial production check (IPC)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL-based sampling with detailed reports and photos',
    ],
  },
  {
    id: 'production-follow',
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'Stay informed throughout the production cycle with regular updates, milestone tracking, and real-time progress reports.',
    details: [
      'Weekly production status reports',
      'Photo and video documentation of progress',
      'Milestone tracking and timeline management',
      'Issue identification and proactive resolution',
      'Raw material and component status monitoring',
      'Direct communication bridge with factory management',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'From factory to your door, we handle all logistics including freight forwarding, customs clearance, and final-mile delivery.',
    details: [
      'Sea freight, air freight, and rail transport options',
      'Freight rate comparison and negotiation',
      'Customs documentation and export declarations',
      'Import compliance and tariff classification',
      'Warehouse consolidation and container loading',
      'Door-to-door delivery tracking',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Complete China Sourcing Solutions
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From initial supplier identification to final delivery, we provide end-to-end sourcing services tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-brand-navy" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-content-primary">{service.title}</h2>
                  </div>
                  <p className="text-content-secondary text-base md:text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-trust-green shrink-0 mt-0.5" />
                        <span className="text-content-secondary text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} bg-surface-light rounded-2xl overflow-hidden`}>
                  <img
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                    data-strk-img-id={`service-${service.id}`}
                    data-strk-img={`[${service.id}-desc] ${service.title} china sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span id={`${service.id}-desc`} className="sr-only">{service.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-surface-light py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Advantage"
            title="Why Choose SSourcing China"
            description="We combine local expertise with international business standards to deliver reliable sourcing results."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Local Expertise', desc: 'Based in Shenzhen, we have direct access to the largest manufacturing hub in the world.' },
              { icon: Users, title: 'English-Speaking Team', desc: 'No language barriers. Our project managers communicate clearly in English throughout.' },
              { icon: BarChart3, title: 'Data-Driven Decisions', desc: 'We provide transparent pricing data and market analysis so you can make informed choices.' },
              { icon: Award, title: 'Proven Track Record', desc: '10,000+ orders completed for clients in 40+ countries across diverse industries.' },
              { icon: Shield, title: 'Risk Mitigation', desc: 'Multi-stage quality checks and supplier verification reduce your sourcing risk significantly.' },
              { icon: Phone, title: 'Dedicated Support', desc: 'Each project gets a dedicated account manager who understands your specific requirements.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
                <item.icon className="w-8 h-8 text-brand-navy mb-4" />
                <h3 className="font-semibold text-content-primary mb-2">{item.title}</h3>
                <p className="text-content-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Need a Customized Sourcing Solution?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us about your project and we will create a tailored sourcing plan with transparent pricing.
          </p>
          <CTAButton className="text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
