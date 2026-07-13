import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification',
      desc: 'We identify and shortlist manufacturers that match your product specifications, quality standards, and commercial requirements.',
      details: ['Product specification matching', 'Capacity and capability assessment', 'Price benchmarking', 'MOQ and lead time analysis'],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits and background checks to confirm legitimacy, production capacity, and compliance with international standards.',
      details: ['Business license verification', 'Production facility inspection', 'Equipment and capability review', 'Management and quality system assessment'],
    },
    {
      title: 'Quality Inspection',
      desc: 'Systematic inspection services at key production stages to ensure products meet agreed specifications before shipment.',
      details: ['Pre-production inspection', 'During production inspection', 'Pre-shipment inspection', 'Container loading supervision'],
    },
    {
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of production schedules, milestone tracking, and proactive issue resolution.',
      details: ['Production timeline tracking', 'Progress reporting', 'Issue identification and escalation', 'Corrective action coordination'],
    },
    {
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping management including freight booking, documentation, and customs clearance support.',
      details: ['Freight forwarder coordination', 'Export documentation', 'Customs clearance assistance', 'Delivery tracking to destination'],
    },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-lg text-slate-300">Comprehensive sourcing support from supplier discovery through final delivery.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {services.map((service, idx) => (
          <div key={idx} className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-slate-600">{service.desc}</p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need a custom sourcing solution?</h3>
          <p className="text-slate-600 mb-6">We tailor our services to your specific requirements and industry.</p>
          <Button asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services