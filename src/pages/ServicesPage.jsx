import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Cog, Truck, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We don\'t just search Alibaba. We leverage 10+ years of trade relationships, industry databases, and on-the-ground presence in China\'s manufacturing hubs to identify suppliers that match your exact specifications. Each candidate is pre-screened for export capability, production capacity, and quality certifications.',
    features: ['Trade database search across 15,000+ supplier records', 'Pre-screening of export licenses and certifications', 'Detailed candidate comparison matrix', 'Sample coordination and evaluation', 'Price benchmarking against market rates'],
    imgId: 'svc-page-sourcing-z1y2x3',
    titleId: 'svc-page-title-sourcing',
    descId: 'svc-page-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    subtitle: 'Know exactly who you\'re working with',
    desc: 'Our on-site factory audits go beyond paperwork. We send experienced engineers to physically inspect production facilities, verify equipment condition, assess workforce capability, and confirm the supplier is the actual manufacturer — not a trading company posing as one.',
    features: ['Business license verification with government records', 'On-site facility inspection with photo documentation', 'Production equipment and capacity assessment', 'Quality management system evaluation', 'Labor conditions and compliance review'],
    imgId: 'svc-page-factory-w4v5u6',
    titleId: 'svc-page-title-factory',
    descId: 'svc-page-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure every shipment meets your standards',
    desc: 'Quality defects can destroy your brand reputation. Our QC engineers conduct inspections at critical production milestones using AQL sampling standards. You receive detailed reports with photos, measurements, and functional test results before products leave the factory.',
    features: ['Initial production check (IPC) at start of manufacturing', 'During production inspection (DPI) at 30-60% completion', 'Pre-shipment inspection (PSI) with AQL sampling', 'Container loading supervision', 'Lab testing coordination for certifications (CE, FCC, FDA, ROHS)'],
    imgId: 'svc-page-qc-t3s2r1',
    titleId: 'svc-page-title-qc',
    descId: 'svc-page-desc-qc',
  },
  {
    icon: Cog,
    title: 'Production Management',
    subtitle: 'Keep your order on track from start to finish',
    desc: 'Chinese factory production schedules can drift without consistent oversight. We provide weekly progress reports, flag potential delays early, and maintain constant communication with factory production managers to ensure your deadlines are met.',
    features: ['Weekly production status reports with photos', 'Milestone tracking against agreed timeline', 'Issue escalation and resolution management', 'Raw material inspection and verification', 'Production capacity monitoring during peak seasons'],
    imgId: 'svc-page-production-m0n1o2',
    titleId: 'svc-page-title-prod',
    descId: 'svc-page-desc-prod',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory floor to your warehouse door',
    desc: 'Navigating international shipping, customs clearance, and freight documentation is complex. We manage the entire logistics chain, compare rates across multiple forwarders, and ensure your goods arrive on time with proper documentation.',
    features: ['Sea freight (FCL/LCL), air freight, rail, and express options', 'Multi-forwarder rate comparison', 'Customs documentation and clearance', 'Cargo insurance arrangement', 'Door-to-door delivery coordination'],
    imgId: 'svc-page-shipping-p3q4r5',
    titleId: 'svc-page-title-ship',
    descId: 'svc-page-desc-ship',
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">Our Services</p>
            <h1 id="services-page-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Complete Sourcing Solutions from China
            </h1>
            <p id="services-page-sub" className="text-lg text-slate-300 leading-relaxed">
              From supplier identification to final delivery, we offer a full suite of services
              that give you end-to-end control over your China supply chain.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
                    <svc.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h2 id={svc.titleId} className="text-3xl font-extrabold text-navy-900 mb-2">{svc.title}</h2>
                  <p className="text-lg text-gold-500 font-semibold mb-4">{svc.subtitle}</p>
                  <p id={svc.descId} className="text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-slate-200">
                    <img
                      alt={svc.title}
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-page-heading]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-4">Not Sure Which Services You Need?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing challenge, and we'll recommend the right service package for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/25"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
