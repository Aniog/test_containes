import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Clock, Truck, Headphones,
  ArrowRight, CheckCircle2, FileText, Camera, MessageSquare
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist suppliers matching your product specifications, MOQ requirements, and target budget from our vetted network across China.',
    details: [
      'Product-specific supplier search across manufacturing hubs',
      'Initial screening for capability and reliability',
      'Price comparison from 3-5 qualified suppliers',
      'Sample coordination and evaluation',
    ],
    imgId: 'svc-sourcing-e1f2g3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and real operating conditions before you place an order.',
    details: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Quality management system evaluation',
      'Worker conditions and compliance review',
    ],
    imgId: 'svc-verify-h4i5j6',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Comprehensive product inspections at every production stage based on your AQL standards and specific product requirements.',
    details: [
      'Pre-production inspection (PPI)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Detailed photo and video reports',
    ],
    imgId: 'svc-inspect-k7l8m9',
    titleId: 'svc-inspect-title',
    descId: 'svc-inspect-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track key milestones, and keep you informed with regular updates to avoid delays and surprises.',
    details: [
      'Production schedule monitoring',
      'Weekly progress reports with photos',
      'Early warning for potential delays',
      'Direct communication with factory management',
    ],
    imgId: 'svc-follow-n1o2p3',
    titleId: 'svc-follow-title',
    descId: 'svc-follow-desc',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics coordination including consolidation, freight booking, customs documentation, and door-to-door delivery for sea and air shipments.',
    details: [
      'Sea freight and air freight booking',
      'Cargo consolidation for cost savings',
      'Customs documentation and compliance',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-ship-q4r5s6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    desc: 'Dedicated account manager, dispute resolution assistance, and continuous communication throughout your entire sourcing journey.',
    details: [
      'Dedicated bilingual account manager',
      'Dispute resolution and negotiation support',
      'Payment method guidance and risk management',
      'Long-term supplier relationship management',
    ],
    imgId: 'svc-support-t7u8v9',
    titleId: 'svc-support-title',
    descId: 'svc-support-desc',
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            End-to-End China Sourcing Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we handle every step of the sourcing process so you can import with confidence.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-3">{svc.title}</h2>
                <p id={svc.descId} className="text-slate-500 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-3">
                  {svc.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-slate-500 mb-8">
            Tell us about your requirements and we'll design a sourcing plan tailored to your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
