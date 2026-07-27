import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify and qualify manufacturers that match your product specifications, quality requirements, and budget.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist of 3-5 suppliers']
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification of supplier legitimacy, production capacity, and compliance with international standards.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Social compliance checks']
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Comprehensive inspection services at every stage of production to ensure product quality meets your standards.',
      details: ['Pre-production inspection', 'During-production checks', 'Pre-shipment inspection', 'Container loading supervision']
    },
    {
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of manufacturing schedules, milestone tracking, and proactive issue resolution.',
      details: ['Production timeline tracking', 'Material quality verification', 'Progress reporting', 'Issue escalation management']
    },
    {
      title: 'Logistics & Shipping Coordination',
      desc: 'End-to-end logistics management from factory to your warehouse, including customs documentation.',
      details: ['Freight forwarding coordination', 'Customs documentation', 'Shipping schedule management', 'Delivery tracking']
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'Long-term relationship management with your Chinese suppliers for repeat orders and continuous improvement.',
      details: ['Supplier performance reviews', 'Price negotiation support', 'Contract management', 'Communication facilitation']
    }
  ]

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300">Comprehensive support for every stage of your China sourcing journey.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-slate-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-emerald-500 mt-1">•</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">We tailor our services to your specific sourcing requirements and business model.</p>
          <Button asChild>
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services