import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, TrendingUp, FileText, Users, Handshake } from 'lucide-react'
import CTAButton from '../components/shared/CTAButton'
import SectionHeading from '../components/shared/SectionHeading'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We search our database and industry networks to find manufacturers that match your exact product specifications, quality standards, and budget.',
    details: ['Product matching based on specs & MOQ', 'Multiple supplier options for comparison', 'Background verification included', 'Pricing and lead time analysis'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'Our team conducts on-site factory audits to verify legitimacy, production capacity, quality management systems, and working conditions.',
    details: ['Business license verification', 'Production capacity assessment', 'Quality system evaluation (ISO, BSCI)', 'Photo & video documentation'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Professional inspectors check your products at every stage — from raw materials to final packaging — using AQL sampling standards.',
    details: ['Pre-production inspection (PPI)', 'During-production inspection (DPI)', 'Pre-shipment inspection (PSI)', 'Detailed photo reports within 24 hours'],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We visit the factory regularly during production to monitor progress, catch issues early, and keep your order on schedule.',
    details: ['Weekly progress reports', 'Timeline tracking & alerts', 'Issue resolution on-site', 'Direct communication with factory'],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics coordination from factory door to your warehouse, including freight booking, customs, and delivery tracking.',
    details: ['Sea, air, and rail freight options', 'Customs documentation support', 'Consolidation & warehousing', 'Real-time shipment tracking'],
  },
  {
    icon: TrendingUp,
    title: 'Price Negotiation',
    desc: 'Leverage our local market expertise and supplier relationships to secure the best possible pricing and payment terms.',
    details: ['Market price benchmarking', 'Volume discount negotiation', 'Payment term optimization', 'Cost breakdown analysis'],
  },
  {
    icon: FileText,
    title: 'Contract & Compliance',
    desc: 'We help draft supplier agreements and ensure your products meet destination country regulations and certification requirements.',
    details: ['Purchase agreement drafting', 'Regulatory compliance check', 'Certification guidance (CE, FCC, FDA)', 'IP protection support'],
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a dedicated bilingual account manager who serves as your single point of contact throughout the sourcing journey.',
    details: ['Bilingual (English + Mandarin)', 'Available across time zones', 'Regular project updates', 'Cultural & business guidance'],
  },
  {
    icon: Handshake,
    title: 'Ongoing Supplier Management',
    desc: 'For repeat orders, we manage your supplier relationships, monitor quality consistency, and handle reorders efficiently.',
    details: ['Supplier performance tracking', 'Quality consistency monitoring', 'Reorder management', 'Alternative supplier backup'],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-[#0f2a4a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="services-page-title" className="text-3xl md:text-5xl font-bold text-white mb-4">Our Sourcing Services</h1>
            <p id="services-page-subtitle" className="text-lg text-slate-300">
              Comprehensive support at every stage of your China sourcing journey — from finding the right supplier to delivering goods at your door.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div key={service.title} className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-[#0f2a4a] rounded-lg flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">{service.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-[#e86c2b] rounded-full shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-lg text-slate-600 mb-8">Every project is different. Tell us your requirements and we'll create a tailored plan.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
