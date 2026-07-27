import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Matching',
    desc: 'We identify and match you with vetted suppliers that meet your product specifications, quality standards, and budget requirements.',
    details: [
      'Product-specific supplier identification from our verified network',
      'Multi-supplier comparison with pricing, capacity, and quality analysis',
      'Background checks on business licenses and export history',
      'Initial communication and relationship setup with suppliers',
    ],
    imgId: 'service-search-s1t2',
    titleId: 'service-search-title',
    descId: 'service-search-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities.',
    details: [
      'On-site factory visits with detailed audit reports',
      'Verification of business licenses, certifications, and registrations',
      'Production capacity and equipment assessment',
      'Worker conditions and management quality evaluation',
      'Photo and video documentation of factory facilities',
    ],
    imgId: 'service-verify-u3v4',
    titleId: 'service-verify-title',
    descId: 'service-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to protect your orders.',
    details: [
      'Pre-production inspection (PPI) to verify materials and components',
      'During-production inspection (DPI) to catch issues early',
      'Pre-shipment inspection (PSI) with AQL sampling methodology',
      'Detailed inspection reports with photos and measurements',
      'Defect classification and corrective action recommendations',
    ],
    imgId: 'service-inspect-w5x6',
    titleId: 'service-inspect-title',
    descId: 'service-inspect-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular progress tracking, schedule monitoring, and proactive communication to keep your production on track and on time.',
    details: [
      'Weekly production status updates with photos',
      'Schedule monitoring and milestone tracking',
      'Proactive issue identification and resolution',
      'Direct communication with factory management',
      'Production delay early warning system',
    ],
    imgId: 'service-follow-y7z8',
    titleId: 'service-follow-title',
    descId: 'service-follow-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight booking, customs documentation, logistics coordination, and door-to-door delivery arrangements for your shipments.',
    details: [
      'Air, sea, and rail freight booking and rate comparison',
      'Customs documentation preparation and compliance review',
      'Cargo insurance arrangement',
      'Consolidation and warehousing services',
      'Door-to-door delivery tracking and coordination',
    ],
    imgId: 'service-ship-a9b0',
    titleId: 'service-ship-title',
    descId: 'service-ship-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Our Services</h1>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Full-service China sourcing support — from finding suppliers to delivering goods at your door.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 items-center mb-16 md:mb-20 last:mb-0`}>
              <div className="lg:w-1/2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-50">
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.descId}] [${s.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-navy-600" />
                </div>
                <h3 id={s.titleId} className="text-2xl font-bold text-navy-600 mb-3">{s.title}</h3>
                <p id={s.descId} className="text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-1.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Every buyer's needs are different. Tell us about your project and we'll design a sourcing plan that fits.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
