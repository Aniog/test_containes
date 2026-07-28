import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify and shortlist manufacturers that match your product specifications, quality requirements, and volume needs.',
      items: ['Requirement analysis and supplier matching', 'Initial outreach and capability screening', 'Sample coordination and evaluation', 'Price negotiation support']
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification ensures suppliers are legitimate, capable, and aligned with your standards before placing orders.',
      items: ['Business license and registration checks', 'Production capacity assessment', 'Equipment and facility inspection', 'Management and quality system review']
    },
    {
      title: 'Quality Inspection & Control',
      desc: 'Independent quality checks at key production stages reduce the risk of defects and non-conformance.',
      items: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection (PSI)', 'Container loading supervision']
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and communication keep your orders on schedule and within specification.',
      items: ['Weekly production status reports', 'Timeline and milestone tracking', 'Issue identification and escalation', 'Photo and video documentation']
    },
    {
      title: 'Logistics & Shipping Coordination',
      desc: 'We manage the end-to-end shipping process so goods reach your destination on time and in good condition.',
      items: ['Freight forwarder coordination', 'Export documentation preparation', 'Customs clearance assistance', 'Delivery tracking and updates']
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">WHAT WE OFFER</div>
          <h1 className="text-5xl font-semibold mb-6">Sourcing Services</h1>
          <p className="text-xl text-slate-300">End-to-end support for companies importing from China.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {services.map((service, index) => (
          <div key={index} className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="text-sm text-slate-500 mb-2">0{index + 1}</div>
                <h2 className="text-3xl font-semibold text-slate-900 leading-tight">{service.title}</h2>
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-lg text-slate-600 mb-8">{service.desc}</p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Need a custom solution?</h2>
          <p className="text-lg text-slate-600 mb-8">We can tailor our services to your specific sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services