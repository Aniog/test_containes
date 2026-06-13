import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Package, Ship, Settings } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet manufacturers across China, matching you with suppliers that meet your quality, price, and capacity requirements.',
    imgId: 'svc-sourcing-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits including legal checks, production capability assessment, and quality system evaluation to reduce risk.',
    imgId: 'svc-verify-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-production, in-process, and pre-shipment inspections with detailed reports and photos. Defect rates minimized before shipment.',
    imgId: 'svc-qc-g7h8i9',
  },
  {
    icon: Package,
    title: 'Production Monitoring',
    desc: 'Real-time tracking of production milestones, timeline adherence, and capacity utilization to keep your orders on schedule.',
    imgId: 'svc-prod-j0k1l2',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management: customs documentation, freight negotiation, consolidation, and delivery to your door.',
    imgId: 'svc-ship-m3n4o5',
  },
  {
    icon: Settings,
    title: 'Custom Manufacturing',
    desc: 'From prototype to mass production. We manage mold creation, sample approvals, and tooling oversight for OEM/ODM projects.',
    imgId: 'svc-custom-p6q7r8',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#F5EDE3] text-[#C27A3E] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Full-Service Sourcing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Services We Provide</h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            From finding the right supplier to coordinating international shipping, we handle every step of your sourcing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#C27A3E]/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <img
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[svc-title-${i}] [svc-desc-${i}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={svc.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#F5EDE3] rounded-lg flex items-center justify-center group-hover:bg-[#C27A3E] transition-colors">
                    <Icon className="w-5 h-5 text-[#C27A3E] group-hover:text-white transition-colors" />
                  </div>
                  <h3 id={`svc-title-${i}`} className="text-lg font-semibold text-[#1A365D]">{svc.title}</h3>
                </div>
                <p id={`svc-desc-${i}`} className="text-[#64748B] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border-2 border-[#1A365D] text-[#1A365D] text-sm font-semibold rounded-md hover:bg-[#1A365D] hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
