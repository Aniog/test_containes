import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, BarChart3, Ship, HeadphonesIcon } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, volume requirements, and budget.',
    imgId: 'service-sourcing-a1b2c3',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering production capacity, certifications, quality management systems, and financial stability.',
    imgId: 'service-verification-d4e5f6',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-production, in-process, and pre-shipment inspections to ensure your products meet agreed specifications.',
    imgId: 'service-qc-g7h8i9',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-Up',
    desc: 'Regular production status updates, milestone tracking, and timeline management to keep your orders on schedule.',
    imgId: 'service-production-j0k1l2',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight forwarding, customs documentation, and logistics management to get your goods delivered on time.',
    imgId: 'service-shipping-m3n4o5',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    desc: 'Dedicated account manager providing continuous communication, issue resolution, and market intelligence.',
    imgId: 'service-support-p6q7r8',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Our Sourcing Services</h2>
        <p className="section-subtitle">
          Complete supply chain management from supplier identification to final delivery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-brand-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <service.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}