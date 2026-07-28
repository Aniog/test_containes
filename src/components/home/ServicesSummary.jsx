import React from 'react';
import { Search, CheckCircle, ClipboardList, Package, Send, ShieldAlert } from 'lucide-react';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We find the most reliable manufacturers in China that match your specific product requirements and price target.',
    icon: <Search className="text-secondary" size={32} />,
    id: 'service-sourcing'
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to verify factory capabilities, licenses, and social compliance before you place an order.',
    icon: <ShieldAlert className="text-secondary" size={32} />,
    id: 'service-audit'
  },
  {
    title: 'Quality Inspection',
    description: 'During and post-production quality checks to ensure goods meet your standards before shipping.',
    icon: <ClipboardList className="text-secondary" size={32} />,
    id: 'service-qc'
  },
  {
    title: 'Production Follow-up',
    description: 'We manage the production schedule with the factory to ensure on-time delivery systems.',
    icon: <CheckCircle className="text-secondary" size={32} />,
    id: 'service-followup'
  },
  {
    title: 'Shipping & Logistics',
    description: 'Coordination of sea, air, or rail freight, including customs clearance and door-to-door delivery.',
    icon: <Send className="text-secondary" size={32} />,
    id: 'service-shipping'
  },
  {
    title: 'Private Label & FBA',
    description: 'Custom packaging, labeling and Amazon FBA preparation services for e-commerce sellers.',
    icon: <Package className="text-secondary" size={32} />,
    id: 'service-fba'
  }
];

const ServicesSummary = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-primary mb-4">Complete Sourcing Solutions</h2>
        <p id="services-subtitle" className="text-lg text-gray-600 max-w-3xl mx-auto">
          From the first inquiry to final delivery, we manage every step of your China sourcing journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow bg-gray-50 group">
            <div className="mb-6 bg-white p-4 rounded-lg inline-block shadow-sm group-hover:bg-primary transition-colors group-hover:text-white">
              {React.cloneElement(service.icon, { className: 'group-hover:text-white transition-colors' })}
            </div>
            <h3 id={service.id} className="text-xl font-bold text-primary mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSummary;
