import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify and evaluate manufacturers based on your product specifications, quality requirements, and commercial terms.',
      deliverables: ['Supplier shortlist with comparison matrix', 'Contact details and production capabilities', 'Initial pricing and MOQ information', 'Sample request coordination'],
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification to confirm legitimacy, production capacity, quality systems, and compliance with international standards.',
      deliverables: ['Physical factory inspection report', 'Equipment and capacity verification', 'Quality management system review', 'Social compliance assessment'],
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Systematic inspection at key production stages to identify and address issues before shipment.',
      deliverables: ['Pre-production sample approval', 'During-production inspection', 'Pre-shipment inspection (AQL standard)', 'Loading supervision'],
    },
    {
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of manufacturing progress with regular status updates and milestone verification.',
      deliverables: ['Weekly production status reports', 'Photo and video documentation', 'Timeline tracking and alerts', 'Issue escalation and resolution'],
    },
    {
      title: 'Logistics & Shipping Coordination',
      desc: 'End-to-end freight management including booking, documentation, customs clearance support, and delivery tracking.',
      deliverables: ['Freight quote comparison', 'Bill of lading and documentation', 'Customs declaration support', 'Final mile coordination'],
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'Long-term relationship management for repeat orders and continuous improvement initiatives.',
      deliverables: ['Supplier performance tracking', 'Price negotiation support', 'Quality improvement programs', 'New product development liaison'],
    },
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Sourcing Services</h1>
          <p className="text-xl text-slate-300">Comprehensive support across the entire sourcing lifecycle, from supplier discovery to delivery.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid md:grid-cols-5 gap-8 border-b border-slate-200 pb-16 last:border-none last:pb-0">
              <div className="md:col-span-2">
                <div className="text-teal-600 font-mono text-sm mb-2">0{idx + 1}</div>
                <h2 className="text-3xl font-semibold text-slate-900 mb-4">{service.title}</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg text-slate-600 mb-6">{service.desc}</p>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="text-sm font-semibold text-slate-900 mb-4">Typical Deliverables</div>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <Check className="text-teal-600 mt-1 flex-shrink-0" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Need a custom service package?</h3>
          <p className="text-slate-600 mb-8">We tailor our approach based on product complexity, order volume, and compliance requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Discuss Your Requirements <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services