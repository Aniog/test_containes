import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify manufacturers that match your product specifications, quality requirements, and budget parameters.',
      details: ['Product specification analysis', 'Supplier database search', 'Initial capability screening', 'Shortlist presentation with comparison']
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits and background verification to confirm supplier legitimacy and production capacity.',
      details: ['Business license verification', 'Production facility inspection', 'Equipment and capacity assessment', 'Management and quality system review']
    },
    {
      title: 'Quality Inspection',
      desc: 'Systematic inspection at key production stages to identify and address issues before shipment.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Loading supervision']
    },
    {
      title: 'Production Monitoring',
      desc: 'Ongoing oversight of manufacturing progress with regular reporting and milestone tracking.',
      details: ['Production schedule tracking', 'Weekly progress reports', 'Issue identification and escalation', 'Timeline management']
    },
    {
      title: 'Logistics Coordination',
      desc: 'End-to-end shipping management including documentation, freight booking, and customs support.',
      details: ['Freight forwarder coordination', 'Export documentation', 'Container booking and tracking', 'Customs clearance assistance']
    },
    {
      title: 'Ongoing Supplier Management',
      desc: 'Long-term relationship management for repeat orders and continuous improvement.',
      details: ['Supplier performance tracking', 'Price negotiation support', 'Quality improvement initiatives', 'New product development']
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold mb-4">Sourcing Services</h1>
        <p className="text-lg text-slate-600">Comprehensive support for every stage of the China sourcing process. Select the services that match your needs.</p>
      </div>

      <div className="space-y-12">
        {services.map((service, i) => (
          <div key={i} className="border-l-4 border-slate-900 pl-8">
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-slate-600 mb-4 max-w-3xl">{service.desc}</p>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-1 text-sm text-slate-600">
              {service.details.map((detail, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center border-t pt-12">
        <p className="text-slate-600 mb-6">Need a customized service package?</p>
        <Link to="/contact"><Button size="lg">Discuss Your Requirements</Button></Link>
      </div>
    </div>
  );
};

export default Services;