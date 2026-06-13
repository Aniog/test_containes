import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers matched to your product specs, MOQ, and budget.',
    imgId: 'svc-supplier-sourcing',
    titleId: 'svc-title-1',
    descId: 'svc-desc-1',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to verify factory legitimacy, capacity, certifications, and production capabilities.',
    imgId: 'svc-factory-verify',
    titleId: 'svc-title-2',
    descId: 'svc-desc-2',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment and during-production inspections to catch defects before goods leave the factory.',
    imgId: 'svc-qc-inspection',
    titleId: 'svc-title-3',
    descId: 'svc-desc-3',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    desc: 'We monitor timelines, materials, and milestones to keep your order on schedule.',
    imgId: 'svc-production-follow',
    titleId: 'svc-title-4',
    descId: 'svc-desc-4',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We handle logistics, customs documentation, and freight forwarding to your door.',
    imgId: 'svc-shipping',
    titleId: 'svc-title-5',
    descId: 'svc-desc-5',
  },
  {
    icon: FileText,
    title: 'Contract Negotiation',
    desc: 'Transparent price negotiation and contract terms that protect your interests.',
    imgId: 'svc-contract',
    titleId: 'svc-title-6',
    descId: 'svc-desc-6',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-[#f6f7f9] section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a2b4a] mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we handle the entire sourcing process so you do not have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white rounded-xl border border-[#e2e8f0] p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={svc.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#c4951a]/10">
                  <svc.icon className="w-5 h-5 text-[#c4951a]" />
                </div>
                <h3
                  id={svc.titleId}
                  className="text-lg font-bold text-[#1a2b4a]"
                >
                  {svc.title}
                </h3>
              </div>
              <p
                id={svc.descId}
                className="text-sm text-[#64748b] leading-relaxed mb-4"
              >
                {svc.desc}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#c4951a] hover:text-[#a67c14] transition-colors"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
