import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product requirements, budget, and quality standards.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory credentials, production capacity, quality management systems, and business legitimacy.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications and standards.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep you informed throughout the manufacturing process.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery to your destination.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Complete Sourcing Solutions from China
          </h2>
          <p id="services-subtitle" className="text-lg text-slate-600">
            From finding the right supplier to delivering products to your door, we handle every step of the sourcing process.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                <service.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-blue-700 font-medium text-sm hover:text-blue-800 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
