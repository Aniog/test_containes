import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify manufacturers that match your product specifications, quality requirements, and commercial terms.',
      details: ['Product requirement analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist presentation with comparison']
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification confirms supplier legitimacy, production capacity, and operational standards.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Financial stability check']
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Systematic inspection services ensure products meet agreed specifications before shipment.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Loading supervision']
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular oversight and reporting throughout manufacturing to maintain schedule and quality.',
      details: ['Production schedule tracking', 'Progress reporting', 'Issue identification and resolution', 'Sample coordination']
    },
    {
      title: 'Shipping & Logistics Coordination',
      desc: 'End-to-end logistics management from factory to your destination.',
      details: ['Freight booking and coordination', 'Export documentation', 'Customs clearance support', 'Delivery scheduling']
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'Continued support for repeat orders and supplier relationship development.',
      details: ['Reorder coordination', 'Price negotiation support', 'Quality improvement tracking', 'Supplier performance reviews']
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive sourcing support from supplier identification through delivery.</p>
      </div>

      <div className="space-y-12">
        {services.map((service, i) => (
          <div key={i} className="border-l-4 border-sky-600 pl-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h2>
            <p className="text-slate-600 mb-4 text-lg">{service.desc}</p>
            <ul className="grid md:grid-cols-2 gap-2 text-slate-600">
              {service.details.map((detail, j) => (
                <li key={j} className="flex items-start gap-2">• {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-slate-50 p-12 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Need a custom service package?</h3>
        <p className="text-slate-600 mb-6">We tailor our services to your specific sourcing requirements.</p>
        <Link to="/contact"><Button size="lg">Request a Consultation</Button></Link>
      </div>
    </div>
  )
}

export default Services