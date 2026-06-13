import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, PackageCheck, Truck, ShieldCheck, FileText, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We leverage our extensive database and trade networks to find manufacturers that match your exact product specifications, quality requirements, and budget. You receive a shortlist of 3-5 pre-qualified suppliers with detailed profiles.',
    details: [
      'Product specification analysis',
      'Supplier database search & trade network outreach',
      'Initial supplier screening & capability assessment',
      'Shortlist report with factory profiles and comparison',
    ],
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before you commit to any supplier, we conduct comprehensive on-site factory audits. We verify business licenses, assess production capacity, review quality management systems, and check financial stability.',
    details: [
      'Business license & certification verification',
      'Production line & equipment inspection',
      'Quality management system assessment (ISO, BSCI, etc.)',
      'Financial health & export history review',
      'Detailed audit report with photos and scoring',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    desc: 'Our QC engineers conduct inspections at every critical stage: incoming materials, during production, and before shipment. We use international standards (AQL) and your specific requirements as the benchmark.',
    details: [
      'Pre-production inspection (raw materials, components)',
      'During-production inspection (DPI / DUPRO)',
      'Pre-shipment inspection (final random sampling per AQL)',
      'Container loading supervision',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production progress through regular factory visits, ensuring timelines are met and issues are caught early. You receive weekly progress updates with photos from the production floor.',
    details: [
      'Production schedule monitoring',
      'Weekly factory visits & progress reports',
      'Issue identification & resolution',
      'Milestone tracking against agreed timeline',
      'Real-time communication via WeChat/WhatsApp',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    desc: 'From factory floor to your warehouse — we manage freight forwarding, customs documentation, and consolidated shipping. We work with trusted logistics partners to get the best rates.',
    details: [
      'Freight forwarding (FCL, LCL, air freight, express)',
      'Customs documentation & clearance support',
      'Consolidated shipping for multi-supplier orders',
      'Cargo insurance arrangement',
      'Shipment tracking until final delivery',
    ],
  },
  {
    icon: FileText,
    title: 'Product Development Support',
    desc: 'Need custom products or OEM manufacturing? We help with design translation, prototyping, mold development, and packaging design — bridging the gap between your concept and mass production.',
    details: [
      'Technical drawing & specification translation',
      'Prototype development & sampling',
      'Mold & tooling management',
      'Packaging design & compliance review',
      'Cost engineering & value analysis',
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
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 id="services-page-heading" className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight">
              Our Services
            </h1>
            <p id="services-page-subtitle" className="mt-4 text-lg text-gray-600">
              Complete sourcing solutions — from supplier discovery to final delivery. Every service is backed by our on-the-ground team in China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-3">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`aspect-[4/3] rounded-xl overflow-hidden shadow-md ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  data-strk-bg-id={`service-img-${i}-${service.title.replace(/\s+/g, '-').toLowerCase().slice(0, 20)}`}
                  data-strk-bg={`[services-page-subtitle] [services-page-heading]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to start sourcing?</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Tell us about your product and we&apos;ll provide a tailored sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}