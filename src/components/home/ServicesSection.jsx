import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Factory, Ship, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable suppliers from our verified network across China based on your product specifications and budget.',
    id: 'svc-sourcing-1a2b',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Our team conducts on-site factory audits to verify business licenses, production capacity, equipment, and working conditions.',
    id: 'svc-verify-2b3c',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your products meet specifications.',
    id: 'svc-qc-3c4d',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We track production timelines, visit factories regularly, and report progress so you stay informed at every stage.',
    id: 'svc-prod-4d5e',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From booking freight to customs documentation, we manage the logistics to get your goods delivered on time and on budget.',
    id: 'svc-ship-5e6f',
  },
  {
    icon: FileCheck,
    title: 'Contract Negotiation',
    description: 'We help negotiate pricing, payment terms, lead times, and quality standards directly with suppliers on your behalf.',
    id: 'svc-negotiate-6f7g',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">End-to-End Sourcing Support</h2>
          <p className="text-lg text-slate-600">
            From finding the right supplier to delivering goods to your door, we handle every step of the sourcing process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-teal-50 rounded-lg mb-4 group-hover:bg-teal-700 transition-colors">
                  <Icon className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
