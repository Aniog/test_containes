import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and screen manufacturers based on your product specifications, volume requirements, and quality standards.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Sample coordination', 'Price negotiation support'],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits verify supplier legitimacy, production capacity, quality systems, and compliance with your requirements.',
      details: ['Business license verification', 'Facility inspection', 'Equipment assessment', 'Staff capability review', 'Certification validation'],
    },
    {
      title: 'Quality Inspection',
      desc: 'Systematic inspection protocols ensure products meet agreed specifications before shipment.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Container loading supervision', 'AQL-based sampling'],
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular production status updates and milestone tracking help identify and resolve issues early.',
      details: ['Production schedule tracking', 'Material sourcing verification', 'Progress reporting', 'Issue escalation', 'Timeline adjustments'],
    },
    {
      title: 'Logistics Coordination',
      desc: 'We manage shipping arrangements, documentation, and coordinate with freight partners for timely delivery.',
      details: ['Freight forwarder coordination', 'Export documentation', 'Customs clearance support', 'Shipping schedule monitoring', 'Delivery confirmation'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-slate-900 mb-4">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive support for every stage of the sourcing process.
        </p>
      </div>

      <div className="space-y-12">
        {services.map((service, idx) => (
          <div key={idx} className="border-l-4 border-blue-800 pl-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h2>
            <p className="text-slate-600 mb-4 text-lg">{service.desc}</p>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-slate-700">
              {service.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2">
                  <span className="text-blue-800 mt-1">•</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-slate-50 p-10 rounded-lg">
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Need a custom solution?</h3>
        <p className="text-slate-600 mb-6">We can tailor our services to match your specific sourcing requirements.</p>
        <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Services;
