import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification',
      desc: 'We identify suppliers that match your product specifications, quality requirements, and business objectives.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist presentation']
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits and background verification to confirm supplier legitimacy and production capabilities.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Site visit reports']
    },
    {
      title: 'Quality Inspection',
      desc: 'Comprehensive quality control services at various production stages to ensure product standards.',
      details: ['Pre-production inspection', 'In-process quality checks', 'Pre-shipment inspection', 'Loading supervision']
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular production tracking to ensure timelines are met and issues are addressed promptly.',
      details: ['Production schedule tracking', 'Progress reporting', 'Issue identification', 'Timeline management']
    },
    {
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping coordination including documentation, customs, and delivery arrangements.',
      details: ['Freight forwarding coordination', 'Export documentation', 'Customs clearance support', 'Delivery tracking']
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'Continued relationship management and support for repeat orders and supplier development.',
      details: ['Supplier performance tracking', 'Price negotiation support', 'Order coordination', 'Communication management']
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-xl text-[#94A3B8]">Comprehensive sourcing support for international buyers.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="border-l-4 border-[#0D9488] pl-8">
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-[#64748B] mb-4">{service.desc}</p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#0D9488]">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-[#64748B] mb-6">We can tailor our services to your specific sourcing requirements.</p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Services