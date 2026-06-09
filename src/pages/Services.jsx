import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Supplier Identification & Sourcing',
      description: 'We identify and evaluate suppliers based on your product specifications, quality requirements, and target pricing.',
      details: [
        'Product specification analysis and supplier matching',
        'Market research and supplier database access',
        'Initial capability screening and shortlisting',
        'Competitive pricing analysis and negotiation support',
      ],
    },
    {
      title: 'Factory Verification & Audits',
      description: 'On-site verification confirms supplier legitimacy, production capacity, and operational standards.',
      details: [
        'Business license and registration verification',
        'Production facility inspection and capacity assessment',
        'Quality management system review',
        'Reference checks with existing clients',
      ],
    },
    {
      title: 'Quality Control & Inspection',
      description: 'Systematic inspection processes ensure products meet your specifications before shipment.',
      details: [
        'Pre-production sample evaluation',
        'During-production quality monitoring',
        'Pre-shipment inspection and testing',
        'Defect documentation and corrective action tracking',
      ],
    },
    {
      title: 'Production Monitoring',
      description: 'Regular factory engagement tracks progress and addresses issues proactively.',
      details: [
        'Production schedule verification and tracking',
        'Material and component quality verification',
        'Issue identification and resolution coordination',
        'Progress reporting and timeline updates',
      ],
    },
    {
      title: 'Logistics & Shipping Coordination',
      description: 'We manage export logistics and documentation for reliable delivery.',
      details: [
        'Freight forwarder coordination and booking',
        'Export documentation preparation',
        'Container loading supervision',
        'Shipping schedule monitoring and updates',
      ],
    },
    {
      title: 'Ongoing Account Management',
      description: 'Continuous support ensures smooth operations throughout the sourcing relationship.',
      details: [
        'Regular communication and status updates',
        'Issue resolution and problem escalation',
        'Supplier performance tracking',
        'Process improvement recommendations',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300">
            End-to-end sourcing support designed for international buyers sourcing from China.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-slate-600">{service.description}</p>
              </div>
              <div className="md:col-span-3">
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-8">
            We tailor our services to match your specific sourcing requirements and project scope.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;