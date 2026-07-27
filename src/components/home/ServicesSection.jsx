import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Search',
    desc: 'We identify and evaluate suppliers across China that match your product requirements, quality standards, and budget.',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'We visit factories in person, verify business licenses, check production capabilities, and assess real operating conditions.',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet agreed specifications.',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and keep you informed so delays are caught early and managed.',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'We arrange freight forwarding, handle customs documentation, and coordinate delivery from factory to your warehouse.',
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-title" className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            What We Do
          </h2>
          <p id="services-subtitle" className="text-neutral-500 text-lg max-w-2xl mx-auto">
            End-to-end sourcing support — from finding suppliers to delivering your goods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-primary-500 hover:text-primary-600 font-medium text-sm inline-flex items-center gap-1 transition-colors"
          >
            Learn more about our services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
