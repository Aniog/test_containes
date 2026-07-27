import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, BarChart3, Ship, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    desc: 'We leverage our extensive database and network to identify manufacturers that match your exact requirements. Each supplier is pre-screened for production capability, export experience, and reliability.',
    details: [
      'Product specification analysis',
      'Supplier database search & screening',
      'Shortlist of 3-5 pre-qualified suppliers',
      'Initial quotation comparison',
      'Communication facilitation',
    ],
    imgId: 'service-detail-sourcing-z1a2b3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    subtitle: 'Know who you are working with',
    desc: 'Before you sign any contract, we conduct comprehensive on-site factory audits. We verify business licenses, tour production facilities, assess quality systems, and check financial health.',
    details: [
      'Business license verification',
      'On-site factory tour & assessment',
      'Production capacity evaluation',
      'Quality management system audit',
      'Financial health check',
      'Certification verification (ISO, CE, UL, etc.)',
    ],
    imgId: 'service-detail-verify-c4d5e6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    subtitle: 'Ensure your products meet specifications',
    desc: 'Our multi-stage QC process catches issues before they become problems. From raw material inspection to final pre-shipment checks, we ensure every batch meets your quality standards.',
    details: [
      'Pre-production sample inspection',
      'In-process quality control (IPC)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed QC reports with photos',
      'AQL-based sampling standards',
    ],
    imgId: 'service-detail-qc-f7g8h9',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-Up',
    subtitle: 'Stay informed on your order status',
    desc: 'We track production milestones and provide regular updates so you always know where your order stands. If delays occur, we identify them early and help resolve issues.',
    details: [
      'Production schedule monitoring',
      'Weekly progress reports',
      'Milestone tracking & alerts',
      'Issue identification & resolution',
      'Timeline management',
    ],
    imgId: 'service-detail-production-i0j1k2',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    subtitle: 'Get your goods delivered reliably',
    desc: 'We coordinate freight forwarding, prepare shipping documentation, and manage customs clearance. Whether by sea, air, or express, we ensure your shipment arrives on time.',
    details: [
      'Freight forwarder selection',
      'Shipping documentation preparation',
      'Customs clearance coordination',
      'Cargo insurance arrangement',
      'Real-time shipment tracking',
      'Warehouse delivery coordination',
    ],
    imgId: 'service-detail-shipping-l3m4n5',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    subtitle: 'Your long-term sourcing partner',
    desc: 'Beyond individual orders, we provide ongoing support including market intelligence, supplier relationship management, and continuous improvement of your supply chain.',
    details: [
      'Dedicated account manager',
      'Market trend updates',
      'Supplier performance monitoring',
      'Cost optimization recommendations',
      'New product development support',
    ],
    imgId: 'service-detail-support-o6p7q8',
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
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Sourcing Services</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Complete supply chain management from supplier identification to final delivery. We handle the details so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, i) => (
        <section key={service.title} className={`py-16 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 0 ? '' : 'md:order-2'}>
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">{service.title}</h2>
                <p className="text-brand-500 font-medium mb-4">{service.subtitle}</p>
                <p className="text-neutral-500 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 0 ? '' : 'md:order-1'}>
                <div className="aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-title-${service.title.replace(/\s+/g, '-').toLowerCase()}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="hidden" id={`service-title-${service.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    {service.title} {service.subtitle} China factory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-neutral-200 mb-8 max-w-xl mx-auto">
            Tell us about your product requirements and we&apos;ll create a tailored sourcing plan for your business.
          </p>
          <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}