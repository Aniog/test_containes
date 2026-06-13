import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Package, Ship, Settings, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    shortDesc: 'Find the right manufacturers that match your specifications.',
    fullDesc: 'We leverage our network of 3,000+ factories and proprietary research tools to identify suppliers that meet your product, price, and capacity requirements. We shortlist candidates based on your criteria and present detailed supplier profiles including pricing, MOQs, certifications, and lead times.',
    features: ['Factory database of 3,000+ manufacturers', 'Initial price and MOQ negotiation', 'Supplier capability assessment', 'Competitive benchmarking'],
    imgId: 'svc-detail-sourcing-a1',
    titleId: 'svc-detail-title-0',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    shortDesc: 'Confirm a factory is legitimate before you place an order.',
    fullDesc: 'Our bilingual team visits factories in person to verify legitimacy. We check business licenses, inspect production lines, review quality management systems, and assess financial stability. You receive a comprehensive report with photos, scores, and recommendations.',
    features: ['On-site factory audit', 'Business license verification', 'Production capability assessment', 'Quality system review', 'Reference checks'],
    imgId: 'svc-detail-verify-b2',
    titleId: 'svc-detail-title-1',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    shortDesc: 'Inspection services at every stage of production.',
    fullDesc: 'Quality control is not optional. We offer pre-production, in-process, and pre-shipment inspections using internationally accepted AQL sampling standards. Every inspection includes a detailed report with photos, defect classification, and a pass/fail recommendation.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection (AQL)', 'Container loading supervision', 'Defect reports with photos'],
    imgId: 'svc-detail-qc-c3',
    titleId: 'svc-detail-title-2',
  },
  {
    icon: Package,
    title: 'Production Monitoring',
    shortDesc: 'Stay updated with real-time production progress.',
    fullDesc: 'We track your orders from raw material arrival to final packaging. Weekly updates include production milestone photos, timeline variance reports, and early warning flags. This prevents surprises and ensures your goods ship on time.',
    features: ['Weekly progress reports', 'Photo documentation', 'Timeline tracking', 'Capacity utilization monitoring', 'Early risk alerts'],
    imgId: 'svc-detail-prod-d4',
    titleId: 'svc-detail-title-3',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    shortDesc: 'End-to-end logistics management from factory to door.',
    fullDesc: 'We manage the entire shipping process: freight negotiation, booking, customs documentation, consolidation, and delivery tracking. We work with sea, air, and express options and can arrange door-to-door delivery to your warehouse.',
    features: ['Freight rate negotiation', 'Customs documentation', 'Cargo consolidation', 'Delivery tracking', 'Insurance coordination'],
    imgId: 'svc-detail-ship-e5',
    titleId: 'svc-detail-title-4',
  },
  {
    icon: Settings,
    title: 'Custom Manufacturing',
    shortDesc: 'From concept to mass production for OEM/ODM projects.',
    fullDesc: 'For businesses developing custom products, we manage the full product development lifecycle. This includes design coordination, prototype development, mold and tooling management, sample approvals, packaging design, and production oversight.',
    features: ['Design coordination', 'Prototype development', 'Mold/tooling management', 'Sample approval process', 'Packaging design', 'Production oversight'],
    imgId: 'svc-detail-custom-f6',
    titleId: 'svc-detail-title-5',
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
      <section className="relative py-20 md:py-28 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            What We Do
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            End-to-end sourcing support for businesses importing from China. From finding suppliers to delivering goods to your door.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const isReversed = i % 2 === 1
              return (
                <div
                  key={svc.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-[#F5EDE3] rounded-lg flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#C27A3E]" />
                    </div>
                    <span className="text-[#C27A3E] text-xs font-bold tracking-wider uppercase mb-2 block">
                      Service 0{i + 1}
                    </span>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">{svc.title}</h2>
                    <p className="text-[#64748B] text-base leading-relaxed mb-6">{svc.fullDesc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {svc.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-sm text-[#1E293B]">
                          <div className="w-1.5 h-1.5 bg-[#C27A3E] rounded-full shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors"
                    >
                      Request This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`bg-slate-50 rounded-lg overflow-hidden ${isReversed ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">Need a Custom Service Package?</h2>
          <p className="text-[#64748B] mb-6">
            Every business is different. Contact us for a tailored sourcing solution that fits your needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
