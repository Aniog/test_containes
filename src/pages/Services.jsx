import React from 'react'
import CTAButton from '../components/CTAButton'

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Matching',
      desc: 'We identify manufacturers that match your product specifications, quality requirements, and production volume needs. Our database includes verified suppliers across major industrial regions in China.',
      details: ['Product specification analysis', 'Supplier database matching', 'Initial capability screening', 'Shortlist of 3-5 qualified suppliers'],
    },
    {
      title: 'Factory Verification & Audits',
      desc: 'On-site verification confirms supplier legitimacy, production capacity, quality systems, and compliance with international standards before you commit to orders.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality management review', 'Social compliance checks'],
    },
    {
      title: 'Quality Control & Inspection',
      desc: 'Systematic inspection at key production stages ensures products meet your specifications before they leave the factory.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Sample testing coordination'],
    },
    {
      title: 'Production Management',
      desc: 'We monitor production timelines, communicate progress updates, and address issues as they arise to keep your orders on schedule.',
      details: ['Production schedule tracking', 'Weekly progress reports', 'Issue identification & resolution', 'Timeline management'],
    },
    {
      title: 'Logistics & Shipping Coordination',
      desc: 'We handle export documentation, coordinate with freight forwarders, and ensure smooth customs clearance for your shipments.',
      details: ['Freight booking assistance', 'Export documentation', 'Customs clearance support', 'Delivery scheduling'],
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'For repeat orders, we maintain supplier relationships, track performance, and negotiate terms on your behalf.',
      details: ['Supplier performance tracking', 'Price negotiation support', 'Quality improvement initiatives', 'Long-term relationship management'],
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive support for sourcing from China.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#059669] mt-1">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">We tailor our services to your specific sourcing requirements.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}

export default Services