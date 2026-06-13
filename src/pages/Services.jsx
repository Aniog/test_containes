import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    headline: 'Find the Right Manufacturer, Not Just Any Manufacturer',
    desc: 'We do not simply search Alibaba and send you a list. Our team leverages a proprietary database of verified suppliers, industry contacts, and on-the-ground intelligence to identify factories that genuinely match your product specifications, quality standards, MOQ requirements, and budget.',
    features: [
      'Custom supplier shortlists based on your specs',
      'Initial pricing and MOQ negotiation',
      'Background checks on company registration',
      'Comparison reports across multiple suppliers',
    ],
    imgId: 'svc-detail-sourcing',
    titleId: 'svc-d-title-1',
    descId: 'svc-d-desc-1',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    headline: 'Know Who You Are Doing Business With',
    desc: 'Before you transfer a single dollar, we visit the factory in person. Our verification audits cover business licenses, production capacity, equipment, quality management systems, and past performance. You get a detailed report with photos and recommendations.',
    features: [
      'On-site factory audits with photo documentation',
      'Verification of business licenses and certifications',
      'Assessment of production capacity and equipment',
      'Social compliance and workplace safety checks',
    ],
    imgId: 'svc-detail-verify',
    titleId: 'svc-d-title-2',
    descId: 'svc-d-desc-2',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    headline: 'Catch Problems Before They Leave the Factory',
    desc: 'Quality failures are expensive. We conduct during-production and pre-shipment inspections based on internationally accepted AQL standards. Every inspection includes detailed photo reports, defect classifications, and pass/fail recommendations.',
    features: [
      'During-production inspections (DUPRO)',
      'Pre-shipment inspections (PSI)',
      'Container loading supervision',
      'Detailed photo reports with AQL standards',
    ],
    imgId: 'svc-detail-qc',
    titleId: 'svc-d-title-3',
    descId: 'svc-d-desc-3',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    headline: 'Keep Your Order on Track',
    desc: 'Production delays are common in China. We monitor timelines, raw material arrivals, and milestone completion to catch delays early. When issues arise, we push for solutions before they become critical.',
    features: [
      'Weekly production status updates',
      'Raw material arrival verification',
      'Milestone tracking and timeline management',
      'Proactive issue identification and resolution',
    ],
    imgId: 'svc-detail-followup',
    titleId: 'svc-d-title-4',
    descId: 'svc-d-desc-4',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    headline: 'From Factory Floor to Your Door',
    desc: 'We handle the logistics so you do not have to. From booking freight to preparing export documentation and customs clearance, we coordinate every step of the shipping process.',
    features: [
      'Freight forwarding and booking management',
      'Export documentation and customs clearance',
      'Door-to-door or port-to-port coordination',
      'Insurance and cargo protection options',
    ],
    imgId: 'svc-detail-shipping',
    titleId: 'svc-d-title-5',
    descId: 'svc-d-desc-5',
  },
  {
    icon: FileText,
    title: 'Contract Negotiation',
    headline: 'Terms That Protect Your Interests',
    desc: 'We negotiate pricing, payment terms, lead times, and quality guarantees on your behalf. Our bilingual contracts are reviewed by legal professionals to ensure you are protected.',
    features: [
      'Transparent price benchmarking and negotiation',
      'Payment term structuring (T/T, L/C, D/P)',
      'Quality guarantee and warranty clauses',
      'NNN agreements for IP protection',
    ],
    imgId: 'svc-detail-contract',
    titleId: 'svc-d-title-6',
    descId: 'svc-d-desc-6',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2b4a] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            End-to-end sourcing support from supplier discovery to delivery. Every service is designed to reduce risk, save money, and save time.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="space-y-16 md:space-y-24">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2 overflow-hidden rounded-xl">
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#c4951a]/10">
                      <svc.icon className="w-5 h-5 text-[#c4951a]" />
                    </div>
                    <h2
                      id={svc.titleId}
                      className="text-xl md:text-2xl font-bold text-[#1a2b4a]"
                    >
                      {svc.title}
                    </h2>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4a] mb-3">
                    {svc.headline}
                  </h3>
                  <p
                    id={svc.descId}
                    className="text-[#64748b] leading-relaxed mb-5"
                  >
                    {svc.desc}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#1e293b]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#c4951a] hover:text-[#a67c14] transition-colors"
                  >
                    Request a quote for this service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f7f9] py-16 md:py-20">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2b4a] mb-4">
            Not Sure Which Services You Need?
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto mb-8">
            Tell us about your product and we will recommend a custom sourcing plan tailored to your needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
