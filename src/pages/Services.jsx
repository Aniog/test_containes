import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify and qualify suppliers that match your product specifications, quality requirements, and budget parameters.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Competitive quote collection']
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification ensures suppliers have the capacity, equipment, and processes to meet your production needs.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Financial stability checks']
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Independent quality inspections at key production stages to catch issues before shipment.',
      details: ['Pre-production inspection', 'During-production checks', 'Pre-shipment inspection', 'Loading supervision']
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular production updates and timeline management to keep your orders on track.',
      details: ['Production schedule tracking', 'Milestone reporting', 'Issue escalation', 'Timeline adjustments']
    },
    {
      title: 'Logistics & Shipping Coordination',
      desc: 'End-to-end logistics management from factory to your warehouse.',
      details: ['Freight forwarding quotes', 'Customs documentation', 'Shipping schedule coordination', 'Delivery tracking']
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'Long-term supplier relationship management for repeat orders and continuous improvement.',
      details: ['Performance tracking', 'Price negotiation support', 'Quality improvement plans', 'Capacity planning']
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300">Comprehensive sourcing support from initial inquiry through final delivery.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-8">We tailor our services to your specific sourcing requirements and business model.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">
            Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services