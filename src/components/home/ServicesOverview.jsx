import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate suppliers across China that match your product requirements, quality standards, and budget.',
    color: 'navy',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities.',
    color: 'navy',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet agreed specifications.',
    color: 'navy',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress, material procurement, and timeline adherence to prevent delays.',
    color: 'navy',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking to your destination.',
    color: 'navy',
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Our Sourcing Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering quality products, we cover every step of your China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
                <service.icon className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-800 transition-colors"
          >
            Learn More About Our Services
            <span className="text-amber-500">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
