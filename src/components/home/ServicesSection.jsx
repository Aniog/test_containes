import React from 'react';
import { Search, Building2, ClipboardCheck, Eye, Ship, Headphones } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, budget, and certification requirements.',
  },
  {
    id: 'factory-verification',
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy before you commit.',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections following AQL standards to protect your order.',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports during manufacturing to keep your order on schedule and on spec.',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle freight booking, customs documentation, and logistics coordination from factory door to your warehouse.',
  },
  {
    id: 'ongoing-support',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account manager for communication, negotiation, sample management, and long-term supplier relationship building.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">Our Services</span>
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Full-Service China Sourcing Support
          </h2>
          <p id="services-subtitle" className="text-neutral-600 text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering goods at your door — we cover every step of the sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
