import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Eye, Truck, FileCheck, Headphones } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Find verified manufacturers and suppliers across China that match your product requirements and quality standards.',
    link: '/services#supplier-sourcing',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify capabilities, certifications, production capacity, and business legitimacy.',
    link: '/services#factory-verification',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to ensure products meet your specifications.',
    link: '/services#quality-inspection',
  },
  {
    icon: FileCheck,
    title: 'Production Monitoring',
    description: 'Track production progress, timelines, and milestones to keep your orders on schedule.',
    link: '/services#production-monitoring',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'Manage logistics from factory to destination with competitive freight rates and customs clearance.',
    link: '/services#shipping',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account manager providing regular updates, reports, and responsive communication.',
    link: '/services#support',
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Sourcing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From finding suppliers to delivering products, we handle every step of your China sourcing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="card group">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <service.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
