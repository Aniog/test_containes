import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Eye, Ship } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, quality standards, and budget requirements.',
    imgId: 'service-sourcing-bg-a1b2c3',
    queryIds: { title: 'svc-sourcing-title', desc: 'svc-sourcing-desc' },
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits including production capacity assessment, equipment inspection, certifications check, and financial background review.',
    imgId: 'service-factory-bg-d4e5f6',
    queryIds: { title: 'svc-factory-title', desc: 'svc-factory-desc' },
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during production, and pre-shipment inspections to ensure your products meet specifications before they leave the factory.',
    imgId: 'service-qc-bg-g7h8i9',
    queryIds: { title: 'svc-qc-title', desc: 'svc-qc-desc' },
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'Regular production status updates with photos and reports, ensuring your orders stay on schedule and issues are flagged immediately.',
    imgId: 'service-production-bg-j0k1l2',
    queryIds: { title: 'svc-prod-title', desc: 'svc-prod-desc' },
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Full logistics management including freight booking, customs documentation, consolidation, and delivery to your destination port or warehouse.',
    imgId: 'service-shipping-bg-m3n4o5',
    queryIds: { title: 'svc-ship-title', desc: 'svc-ship-desc' },
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            End-to-End Sourcing Solutions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            From finding the right supplier to delivering products to your warehouse,
            we handle every step so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <svc.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 id={svc.queryIds.title} className="text-xl font-bold text-slate-900 mb-3">
                {svc.title}
              </h3>
              <p id={svc.queryIds.desc} className="text-slate-500 leading-relaxed mb-5">
                {svc.desc}
              </p>

              <div
                className="aspect-[16/9] rounded-lg overflow-hidden bg-slate-100"
                data-strk-bg-id={svc.imgId}
                data-strk-bg={`[${svc.queryIds.desc}] [${svc.queryIds.title}]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors"
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
