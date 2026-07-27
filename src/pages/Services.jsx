import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and qualify manufacturers that match your product specifications, volume requirements, and quality standards.',
      details: ['Requirement analysis and specification review', 'Supplier database search and outreach', 'Initial capability screening', 'Sample coordination and evaluation'],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits confirm that suppliers are legitimate, capable, and compliant with your requirements.',
      details: ['Business license and registration verification', 'Facility inspection and capacity assessment', 'Quality management system review', 'Reference and financial stability checks'],
    },
    {
      title: 'Quality Inspection',
      desc: 'Independent inspections at key production stages ensure products meet agreed specifications before shipment.',
      details: ['Pre-production inspection', 'During-production monitoring', 'Pre-shipment inspection', 'Container loading supervision'],
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and issue resolution throughout the manufacturing process.',
      details: ['Production schedule verification', 'Milestone reporting and updates', 'Issue identification and escalation', 'Corrective action coordination'],
    },
    {
      title: 'Shipping Coordination',
      desc: 'End-to-end logistics management from factory to your destination port or warehouse.',
      details: ['Freight forwarder coordination', 'Export documentation preparation', 'Customs compliance guidance', 'Delivery timeline management'],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4">Our Services</h1>
          <p className="text-xl text-slate-300">End-to-end support for sourcing from China.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {services.map((service, i) => (
            <div key={i} className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-slate-600">{service.desc}</p>
              </div>
              <div className="md:col-span-3">
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex gap-2 text-slate-700">
                      <span className="text-emerald-600 mt-1">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-slate-600 mb-6">We tailor our services to your specific sourcing requirements.</p>
          <Link to="/contact"><Button>Get a Free Sourcing Quote</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default Services;