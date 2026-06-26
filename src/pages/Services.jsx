import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  Search, Factory, ClipboardCheck, HardHat, Ship, Shield,
  ArrowRight, FileSearch, Scale, Cog, BarChart3, Truck
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    desc: 'We leverage our extensive network and research capabilities to identify manufacturers that match your specific product requirements, quality standards, and budget constraints.',
    features: [
      'Custom supplier shortlists based on your criteria',
      'Company registration and background verification',
      'Capability and capacity assessment',
      'Industry-specific expertise across categories',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Audits & Verification',
    desc: 'Our experienced auditors conduct thorough on-site inspections to verify factory capabilities, production capacity, certifications, and compliance with international standards.',
    features: [
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Social compliance and labor practice audits',
      'Environmental and safety compliance checks',
      'Detailed audit reports with photo documentation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    desc: 'Comprehensive inspection services at every stage of production, following international AQL standards to ensure your products meet specifications.',
    features: [
      'Raw material inspection at factory',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
      'Random sampling and defect analysis',
    ],
  },
  {
    icon: HardHat,
    title: 'Production Monitoring',
    desc: 'Regular on-site visits and progress tracking throughout the production cycle to ensure your orders stay on schedule and meet quality standards.',
    features: [
      'Weekly production progress reports',
      'Real-time photo and video updates',
      'Production timeline tracking',
      'Early warning system for delays',
      'Corrective action coordination',
    ],
  },
  {
    icon: Scale,
    title: 'Price Negotiation',
    desc: 'We leverage our market knowledge and relationships to negotiate competitive pricing, favorable payment terms, and optimal shipping conditions on your behalf.',
    features: [
      'Market price benchmarking',
      'Volume discount negotiation',
      'Payment term optimization',
      'Incoterms advisory',
      'Long-term contract negotiation',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination from factory to your destination, handling all documentation, customs clearance, and freight arrangements.',
    features: [
      'Freight booking and rate negotiation',
      'Export documentation and customs clearance',
      'Cargo consolidation and warehousing',
      'Insurance arrangement',
      'Door-to-door delivery options',
    ],
  },
  {
    icon: Shield,
    title: 'Supplier Risk Assessment',
    desc: 'Comprehensive due diligence to identify and mitigate risks before you commit to a supplier partnership.',
    features: [
      'Legal and registration verification',
      'Financial health assessment',
      'Past performance references',
      'Intellectual property risk evaluation',
      'Ongoing supplier monitoring',
    ],
  },
  {
    icon: BarChart3,
    title: 'Sample Development',
    desc: 'Coordinate sample development and revisions between you and suppliers to ensure product specifications are met before mass production.',
    features: [
      'Sample request coordination',
      'Design and specification review',
      'Sample quality evaluation',
      'Revision management',
      'Approval workflow facilitation',
    ],
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
      <section className="bg-gradient-to-br from-slate-900 via-brand-blue to-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Comprehensive sourcing support covering every stage of your procurement journey. 
              Each service is designed to reduce risk, improve quality, and save you time.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={service.title} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-slate-50 rounded-xl p-8 border border-slate-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Need This Service?</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Contact us to discuss how we can help with your specific requirements.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get a Free Quote
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Tell us about your project and we will recommend the right approach. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function CheckCircle(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}