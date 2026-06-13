import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'We identify and qualify manufacturers that match your product specifications, volume requirements, and quality standards.',
      details: [
        'Product specification analysis and supplier matching',
        'RFQ distribution and response evaluation',
        'Sample coordination and comparison',
        'Pricing negotiation support',
      ],
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits confirm supplier legitimacy, production capacity, quality systems, and compliance with your requirements.',
      details: [
        'Business license and registration verification',
        'Production capacity and equipment assessment',
        'Quality management system review',
        'Financial stability evaluation',
      ],
    },
    {
      title: 'Quality Inspection',
      desc: 'Systematic inspection at key production stages ensures products meet specifications before shipment.',
      details: [
        'Pre-production material inspection',
        'During-production process checks',
        'Pre-shipment final inspection',
        'Container loading supervision',
      ],
    },
    {
      title: 'Production Monitoring',
      desc: 'Regular production updates and milestone tracking help identify and resolve issues before they impact delivery.',
      details: [
        'Production schedule establishment',
        'Weekly progress reporting',
        'Issue identification and escalation',
        'Corrective action coordination',
      ],
    },
    {
      title: 'Shipping Coordination',
      desc: 'We manage logistics documentation, freight booking, and customs requirements to ensure smooth delivery.',
      details: [
        'Freight forwarder coordination',
        'Export documentation preparation',
        'Customs clearance support',
        'Delivery timeline tracking',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-slate-300">Comprehensive sourcing support from supplier identification through delivery.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600">{service.desc}</p>
              </div>
              <div className="space-y-3">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-8">We tailor our services to your specific sourcing requirements and industry.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded font-medium hover:bg-slate-800 transition-colors">
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;