import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Factory, ClipboardCheck, PackageCheck, Truck, ShieldCheck, FileText, BarChart3, PhoneCall } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const serviceList = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Selection',
    desc: 'We identify and shortlist manufacturers that meet your product specifications, quality standards, and budget. Our database covers 5,000+ factories across China.',
    details: [
      'Requirements analysis and product specification review',
      'Supplier identification from verified factory database',
      'RFQ management and quotation comparison',
      'Shortlist presentation with factory profiles',
      'Sample coordination and evaluation support',
    ],
    imgId: 'svc-detail-sourcing-1a2b',
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audits',
    desc: 'On-site factory audits verify production capacity, quality management systems, certifications, and business legitimacy before you commit.',
    details: [
      'Business license and export license verification',
      'Production line and equipment assessment',
      'Quality management system audit (ISO 9001)',
      'Social compliance and environmental review',
      'Capacity and lead time evaluation',
    ],
    imgId: 'svc-detail-factory-3c4d',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Third-party inspections throughout production ensure your products meet specifications before they leave the factory.',
    details: [
      'Pre-production inspection (raw materials check)',
      'During production inspection (DPI)',
      'Pre-shipment inspection to AQL 2.5/4.0 standards',
      'Container loading supervision',
      'Detailed photo reports within 24 hours',
    ],
    imgId: 'svc-detail-qc-5e6f',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-up',
    desc: 'We monitor production progress to ensure on-time delivery, flag potential delays early, and keep you informed at every milestone.',
    details: [
      'Weekly production status reports',
      'Milestone tracking and delay alerts',
      'On-site production monitoring for critical orders',
      'Change order management',
      'Final quantity verification before shipment',
    ],
    imgId: 'svc-detail-production-7g8h',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    desc: 'End-to-end logistics management from factory floor to your warehouse, including freight booking, customs, and documentation.',
    details: [
      'Freight forwarding (FCL, LCL, air, rail)',
      'Customs documentation preparation',
      'Incoterms guidance (FOB, CIF, DDP)',
      'Cargo insurance arrangement',
      'Door-to-door delivery tracking',
    ],
    imgId: 'svc-detail-shipping-9i0j',
  },
]

const additional = [
  { icon: ShieldCheck, title: 'IP Protection', desc: 'NDA execution, design protection strategies, and supplier IP compliance monitoring.' },
  { icon: FileText, title: 'Contract Review', desc: 'Bilingual contract review for manufacturing agreements, ensuring fair terms and clear specifications.' },
  { icon: BarChart3, title: 'Market Intelligence', desc: 'Pricing benchmarks, raw material cost trends, and competitive landscape analysis for informed decisions.' },
  { icon: PhoneCall, title: 'Ongoing Support', desc: 'Dedicated account manager available during your business hours for continuous communication.' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="services-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Services
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              Comprehensive sourcing solutions designed to eliminate risk and streamline your supply chain from China.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      {serviceList.map((svc, i) => (
        <section key={i} className={`py-16 md:py-24 ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[svc-detail-${i}-desc] [services-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center">
                    <svc.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-900">{svc.title}</h2>
                </div>
                <p id={`svc-detail-${i}-desc`} className="text-slate-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <ul className="space-y-3">
                  {svc.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-900 text-center mb-12">
            Additional Support Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additional.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <item.icon className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tell Us What You Need to Source
          </h2>
          <p className="text-lg text-blue-200 mb-8">
            Share your product requirements and we will provide a tailored proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
