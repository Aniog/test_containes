import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and vet reliable manufacturers in China based on your product requirements, budget, and quality standards.',
      details: [
        'Product specification review and sourcing strategy',
        'Supplier database search and shortlisting',
        'Initial capability and capacity assessment',
        'Price negotiation and terms review',
        'Sample coordination and feedback tracking',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance.',
      details: [
        'Business license and registration verification',
        'Factory layout and capacity assessment',
        'Quality management system review',
        'Social compliance and ethical standards check',
        'Detailed audit report with photos and findings',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
      details: [
        'Pre-production inspection of raw materials',
        'During-production line checks',
        'Pre-shipment final inspection',
        'Container loading supervision',
        'Inspection reports with photos, videos, and pass/fail criteria',
      ],
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support including freight forwarding, customs clearance, and door-to-door delivery.',
      details: [
        'Freight forwarding and carrier selection',
        'Export documentation and customs clearance',
        'Cargo insurance and risk management',
        'Shipment tracking and status updates',
        'Last-mile coordination to your warehouse',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Services</h1>
            <p className="mt-4 text-slate-600 text-lg">
              Comprehensive sourcing support designed to reduce risk, save time, and improve your supply chain performance.
            </p>
          </div>
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6">
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors">
                      Request this service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">What is included</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
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

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Need a custom sourcing plan?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Tell us about your product and goals. We will put together a tailored proposal with timelines, costs, and risk mitigation steps.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
