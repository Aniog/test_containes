import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      desc: 'We identify manufacturers that match your product specifications, quality requirements, and volume needs. Our database covers verified suppliers across all major manufacturing regions.',
      details: ['Product requirement analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist presentation with comparison']
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification confirms that suppliers have the stated capabilities, legitimate operations, and appropriate quality systems before you commit.',
      details: ['Production capacity assessment', 'Equipment and facility review', 'Quality management evaluation', 'Financial and compliance checks']
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Systematic inspection at key production stages ensures products meet your specifications before shipment.',
      details: ['Pre-production sample review', 'In-process quality checks', 'Pre-shipment inspection (AQL)', 'Corrective action coordination']
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and milestone reporting keep you informed throughout the manufacturing cycle.',
      details: ['Production schedule tracking', 'Weekly status updates', 'Issue identification and escalation', 'Photo and documentation reports']
    },
    {
      title: 'Shipping & Logistics Coordination',
      desc: 'We manage the logistics process from factory to destination port, handling documentation and carrier coordination.',
      details: ['Freight quote comparison', 'Booking and documentation', 'Customs clearance support', 'Delivery timeline tracking']
    },
    {
      title: 'Ongoing Account Management',
      desc: 'Dedicated support for repeat orders, quality improvements, and supplier relationship management.',
      details: ['Reorder coordination', 'Price negotiation support', 'Quality improvement tracking', 'Supplier performance reviews']
    }
  ]

  return (
    <div>
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-[#475569]">
            Comprehensive support for every stage of the China sourcing process.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[#475569] mb-6">{service.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-[#1E40AF] mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC] text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-[#475569] mb-8 max-w-xl mx-auto">
            Contact us for a free consultation about your sourcing requirements.
          </p>
          <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  )
}

export default Services