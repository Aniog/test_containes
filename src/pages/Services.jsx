import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and evaluate suppliers based on your product specifications, quality requirements, and commercial terms.',
      details: [
        'Product specification analysis',
        'Supplier database search and outreach',
        'Initial capability assessment',
        'Price and MOQ negotiation support'
      ]
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits to confirm supplier legitimacy, production capacity, and operational standards.',
      details: [
        'Business license and registration verification',
        'Production facility inspection',
        'Equipment and capacity assessment',
        'Quality management system review'
      ]
    },
    {
      title: 'Quality Inspection',
      desc: 'Systematic inspection protocols to verify product quality before shipment.',
      details: [
        'Pre-production inspection',
        'In-process quality checks',
        'Pre-shipment inspection (AQL standards)',
        'Photo and video documentation'
      ]
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular oversight and reporting throughout the manufacturing cycle.',
      details: [
        'Production schedule tracking',
        'Weekly progress reports',
        'Issue identification and escalation',
        'Timeline management'
      ]
    },
    {
      title: 'Shipping Coordination',
      desc: 'End-to-end logistics management from factory to destination.',
      details: [
        'Freight booking and documentation',
        'Customs clearance coordination',
        'Container loading supervision',
        'Delivery timeline tracking'
      ]
    }
  ]

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-16">
        <div className="container">
          <h1 className="text-5xl mb-4 text-white">Our Services</h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl">
            Comprehensive sourcing support from initial inquiry through final delivery.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-2xl mb-4">{service.title}</h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[#64748B] mb-6">{service.desc}</p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#334155]">
                        <span className="text-[#1E40AF] mt-1">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[#E2E8F0]">
        <div className="container text-center">
          <h2 className="text-3xl mb-4">Need a Custom Solution?</h2>
          <p className="text-[#64748B] mb-6 max-w-xl mx-auto">
            We can tailor our services to match your specific sourcing requirements.
          </p>
          <Link to="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services