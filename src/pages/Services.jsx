import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify and shortlist manufacturers that match your product specifications, quality requirements, and budget parameters.',
      details: ['Product requirement analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist presentation with pricing']
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification of supplier legitimacy, production capabilities, and compliance with international standards.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Social compliance check']
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Comprehensive quality assurance throughout production to ensure products meet your specifications before shipment.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Lab testing coordination']
    },
    {
      title: 'Production Follow-Up',
      desc: 'Ongoing monitoring of production schedules, milestone tracking, and proactive issue resolution.',
      details: ['Production timeline tracking', 'Weekly progress reports', 'Issue identification & resolution', 'Sample approval coordination']
    },
    {
      title: 'Logistics & Shipping Coordination',
      desc: 'End-to-end logistics management from factory to your destination, including customs documentation.',
      details: ['Freight forwarding quotes', 'Customs documentation', 'Container booking', 'Delivery tracking']
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Our Services</h1>
        <p className="text-[#475569] max-w-2xl mx-auto">Comprehensive support for every stage of your China sourcing process</p>
      </div>

      <div className="space-y-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg border border-[#E2E8F0]">
            <h2 className="text-2xl font-semibold text-[#0F2942] mb-3">{service.title}</h2>
            <p className="text-[#475569] mb-4">{service.desc}</p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#475569]">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">• {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center bg-white p-8 rounded-lg border border-[#E2E8F0]">
        <h3 className="text-xl font-semibold text-[#0F2942] mb-3">Need a customized service package?</h3>
        <p className="text-[#475569] mb-6">We tailor our services to your specific sourcing requirements.</p>
        <Link to="/contact"><Button size="lg">Get a Free Quote</Button></Link>
      </div>
    </div>
  )
}

export default Services