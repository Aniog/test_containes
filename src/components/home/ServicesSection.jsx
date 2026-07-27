import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Truck, BarChart3, Headphones } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We search and shortlist qualified suppliers from our verified network and market research to match your exact product requirements and budget.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits including business license checks, production capacity assessment, equipment inspection, and social compliance review.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections (PSI), during-production checks (DUPRO), and container loading supervision to ensure product quality meets your standards.',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    description: 'Real-time production tracking, milestone reporting, and proactive issue resolution to keep your orders on schedule and within spec.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight forwarding, customs documentation, and delivery coordination to your warehouse or FBA.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account manager, bilingual communication with suppliers, dispute resolution, and continuous supplier relationship management.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Full-Service China Sourcing
          </h2>
          <p className="text-slate-600 text-lg">
            From supplier discovery to final delivery, we handle every step of the sourcing process so you do not have to worry about language barriers, quality risks, or logistics headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-7 border border-slate-200 rounded-xl hover:shadow-lg hover:border-primary-200 transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors">
                <service.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;