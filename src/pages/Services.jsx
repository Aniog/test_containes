import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and shortlist qualified manufacturers based on your product specifications, quality requirements, and volume needs.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist presentation with comparison']
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits to confirm supplier legitimacy, production capacity, quality management systems, and export compliance.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Export compliance check']
    },
    {
      title: 'Quality Inspection',
      desc: 'Pre-shipment and in-process inspections to ensure products meet agreed specifications before goods leave the factory.',
      details: ['Pre-production inspection', 'During-production checks', 'Pre-shipment inspection', 'Corrective action follow-up']
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and milestone verification throughout the manufacturing cycle to keep orders on schedule.',
      details: ['Production schedule review', 'Weekly progress reports', 'Photo and video documentation', 'Issue escalation management']
    },
    {
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping management including freight booking, customs documentation, and delivery scheduling.',
      details: ['Freight rate comparison', 'Booking and documentation', 'Customs clearance support', 'Final mile coordination']
    },
    {
      title: 'Order Management',
      desc: 'Comprehensive coordination of purchase orders, payment tracking, and issue resolution throughout the sourcing process.',
      details: ['PO preparation and review', 'Payment milestone tracking', 'Communication management', 'Problem resolution support']
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
        <p className="text-lg text-slate-600">Comprehensive support for every stage of the China sourcing process. Each service can be engaged independently or as part of a full project.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {services.map((service, idx) => (
          <div key={idx} className="border border-slate-200 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-slate-600 mb-6">{service.desc}</p>
            <ul className="space-y-2 text-sm">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-600 mt-1">•</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
        <h3 className="font-semibold text-xl mb-3">Need a custom solution?</h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">We can tailor our services to your specific sourcing requirements and internal processes.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
          Discuss Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}