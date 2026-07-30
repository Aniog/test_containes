import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, FileCheck, Eye, Truck, Shield, Package, CheckCircle,
  ArrowRight, Users, Globe, Award, Clock, Zap
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    description: 'We identify suppliers that match your exact product requirements, quality standards, and budget.',
    details: [
      'Product requirement analysis and specification review',
      'Supplier database search across major manufacturing regions',
      'Initial qualification screening (business license, certifications)',
      'Competitive pricing comparison from multiple suppliers',
      'Shortlist presentation with detailed supplier profiles',
    ],
    imgQuery: 'supplier sourcing factory search business meeting',
    imgId: 'service-sourcing-2f3a4b',
  },
  {
    icon: Factory,
    title: 'Factory Audits & Verification',
    description: 'Comprehensive on-site factory inspections to verify capabilities, legitimacy, and compliance.',
    details: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review (ISO, BSCI, etc.)',
      'Working conditions and social compliance check',
      'Financial stability and reference verification',
    ],
    imgQuery: 'factory audit inspection production line manufacturing',
    imgId: 'service-audit-5c6d7e',
  },
  {
    icon: FileCheck,
    title: 'Quality Inspection',
    description: 'Rigorous product inspections at multiple production stages using international AQL standards.',
    details: [
      'Pre-production sample approval and benchmarking',
      'In-line inspections during manufacturing',
      'Pre-shipment final random inspection (AQL 2.5)',
      'Detailed inspection reports with photos and measurements',
      'Defect classification and corrective action follow-up',
    ],
    imgQuery: 'quality control inspection product testing laboratory',
    imgId: 'service-qc-8f9g0h',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Ongoing oversight of your orders to ensure production stays on schedule and meets specifications.',
    details: [
      'Production schedule tracking and milestone reporting',
      'Regular factory visits during critical production phases',
      'Real-time progress updates via email and photos',
      'Early warning system for potential delays or issues',
      'Raw material and component verification',
    ],
    imgQuery: 'production monitoring factory floor manufacturing progress',
    imgId: 'service-monitor-1j2k3l',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory floor to your warehouse door.',
    details: [
      'Freight forwarding (sea, air, rail, express)',
      'Customs documentation and export compliance',
      'Container loading supervision and verification',
      'Import duty and tariff consultation',
      'Door-to-door delivery coordination',
    ],
    imgQuery: 'shipping logistics container port cargo freight',
    imgId: 'service-shipping-4m5n6o',
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'We collect, evaluate, and ship product samples so you can make informed sourcing decisions.',
    details: [
      'Sample request coordination with multiple suppliers',
      'On-site sample evaluation against specifications',
      'Photographic documentation of samples',
      'International sample shipping and tracking',
      'Sample revision management and follow-up',
    ],
    imgQuery: 'product samples quality review inspection',
    imgId: 'service-sample-7p8q9r',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-primary pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              End-to-End China Sourcing Services
            </h1>
            <p className="mt-5 text-lg text-blue-100 leading-relaxed">
              From initial supplier identification to final delivery, we provide comprehensive 
              sourcing services so you can import from China with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-lg bg-brand-light-bg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[svc-title-${service.imgId}] ${service.imgQuery}`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                    <div id={`svc-title-${service.imgId}`} className="sr-only">{service.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Advantage"
            title="Why Work With SSourcing China"
            subtitle="We combine local expertise with international standards to deliver reliable sourcing results."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Dedicated Team', desc: 'A bilingual account manager assigned to your project.' },
              { icon: Globe, title: 'Local Presence', desc: 'Based in Guangzhou, near major manufacturing hubs.' },
              { icon: Award, title: 'Proven Track Record', desc: '500+ successful projects across 40+ countries.' },
              { icon: Clock, title: 'Fast Response', desc: '24-hour response time on all inquiries and issues.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-light-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your product needs and we will prepare a customized sourcing plan with competitive quotes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-semibold rounded-lg text-base transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
