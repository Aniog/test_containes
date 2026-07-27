import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Eye, Ship, Shield, FileText, Award, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    desc: 'We tap into our network of 5,000+ pre-screened factories across China to find the best match for your product. We don\'t just send you a list—we provide detailed comparison reports covering pricing, MOQ, lead times, certifications, and export experience.',
    benefits: ['Access to 5,000+ verified factories', 'Detailed supplier comparison reports', 'Competitive price negotiation in Mandarin', 'Supplier shortlisting based on your specs'],
    imgId: 'svc-detail-sourcing-a9b8c7',
    titleId: 'svc-detail-sourcing-title',
    descId: 'svc-detail-sourcing-desc',
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audits',
    desc: 'Before you commit, we visit the factory in person. Our audit covers business license verification, production capacity, equipment condition, quality management systems, workforce stability, and financial health. We provide a detailed report with photos.',
    benefits: ['On-site factory audits with photo reports', 'Business license & certification verification', 'Production capacity & equipment assessment', 'Financial background & export history check'],
    imgId: 'svc-detail-factory-d6e5f4',
    titleId: 'svc-detail-factory-title',
    descId: 'svc-detail-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Quality issues can destroy your business. Our QC team conducts inspections at every critical stage: pre-production (raw materials check), during production (inline inspection), and pre-shipment (final random sampling). We use AQL standards and provide detailed reports.',
    benefits: ['Pre-production, inline & pre-shipment inspections', 'AQL-based random sampling', 'Detailed inspection reports with photos', 'Defect classification & corrective actions'],
    imgId: 'svc-detail-qc-g3h2i1',
    titleId: 'svc-detail-qc-title',
    descId: 'svc-detail-qc-desc',
  },
  {
    icon: Eye,
    title: 'Production Monitoring & Follow-up',
    desc: 'We act as your eyes on the ground, providing regular production updates with photos, tracking progress against milestones, and flagging any issues immediately. You always know exactly where your order stands.',
    benefits: ['Weekly production status reports', 'Photo documentation of progress', 'Milestone tracking & delay alerts', 'Immediate issue escalation & resolution'],
    imgId: 'svc-detail-production-j6k5l4',
    titleId: 'svc-detail-prod-title',
    descId: 'svc-detail-prod-desc',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'From factory to your warehouse—we manage the entire logistics chain. This includes freight booking (sea/air/express), customs documentation, cargo consolidation (LCL/FCL), and shipment tracking until delivery.',
    benefits: ['FCL & LCL sea freight management', 'Air freight & express shipping options', 'Customs documentation & clearance', 'End-to-end shipment tracking'],
    imgId: 'svc-detail-shipping-m9n8o7',
    titleId: 'svc-detail-ship-title',
    descId: 'svc-detail-ship-desc',
  },
]

const offerings = [
  { icon: Shield, title: 'Supplier Background Checks', desc: 'Comprehensive due diligence before you commit to any supplier.' },
  { icon: FileText, title: 'Contract Review', desc: 'Review and drafting of bilingual supply agreements with favorable terms.' },
  { icon: Award, title: 'Certification Support', desc: 'Guidance on CE, FDA, RoHS, REACH, and other required certifications.' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Our Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end sourcing solutions that give you confidence in your China supply chain.
            From finding the right factory to delivering products to your door.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div key={svc.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <svc.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                  <p id={svc.descId} className="text-slate-500 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-lg"
                    data-strk-bg-id={svc.imgId}
                    data-strk-bg={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Offerings */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Complementary services that give you complete peace of mind.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {offerings.map((o) => (
              <div key={o.title} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <o.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{o.title}</h3>
                <p className="text-sm text-slate-500">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-surface border border-slate-200 rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to Start Sourcing?</h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">Tell us about your product and we'll create a tailored sourcing plan—free and with no obligation.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cta text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

