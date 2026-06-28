import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and qualify suppliers based on your product specifications, volume requirements, and quality standards.',
      details: ['Product specification analysis', 'Supplier database matching', 'Initial capability screening', 'Request for quotation management'],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits to confirm supplier legitimacy, production capacity, and compliance with international standards.',
      details: ['Business license verification', 'Production capacity assessment', 'Quality system review', 'Compliance documentation check'],
    },
    {
      title: 'Quality Inspection',
      desc: 'Pre-shipment and in-process inspections to ensure products meet agreed specifications before delivery.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Loading supervision'],
    },
    {
      title: 'Production Monitoring',
      desc: 'Real-time tracking of production progress with proactive issue identification and resolution.',
      details: ['Production schedule tracking', 'Issue escalation protocols', 'Progress reporting', 'Corrective action coordination'],
    },
    {
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping management including documentation, customs clearance, and delivery scheduling.',
      details: ['Freight forwarding coordination', 'Export documentation', 'Customs clearance support', 'Last-mile delivery arrangement'],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-slate-300">Comprehensive support for sourcing from China.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-16">
        {services.map((service, idx) => (
          <div key={idx} className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight mb-3">{service.title}</h2>
              <p className="text-slate-600">{service.desc}</p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-6">We tailor our services to your specific sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;