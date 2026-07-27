import React from 'react';
import { Search, ShieldCheck, ClipboardCheck, Ship, Headphones, TrendingUp } from 'lucide-react';

const homeServices = [
  {
    title: 'Product Sourcing',
    description: 'We find the best-matched suppliers for your products based on your requirements, quality standards, and budget.',
    icon: Search,
  },
  {
    title: 'Supplier Verification',
    description: 'Protect your business from scams. We perform on-site audits and background checks to verify factory legitimacy.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Control',
    description: 'In-process and pre-shipment inspections to ensure products meet your quality standards before leaving China.',
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'Consolidation, freight forwarding, and logistics management to ensure your goods arrive safely and on time.',
    icon: Ship,
  },
  {
    title: 'Production Following',
    description: 'We monitor production timelines and solve potential issues directly with the factory to avoid delays.',
    icon: TrendingUp,
  },
  {
    title: 'Ongoing Support',
    description: 'A dedicated team that acts as your office in China, communicating your needs clearly to manufacturers.',
    icon: Headphones,
  },
];

const HomeServices = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Sourcing Solutions</h2>
          <p id="services-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need for successful sourcing from China, handled by our experienced local team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
