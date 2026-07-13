import React from 'react';
import { Search, Shield, Eye, Truck, FileCheck, Users, Package, Globe } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet qualified suppliers from our extensive network of 500+ verified manufacturers across China.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify licenses, capabilities, production capacity, and business legitimacy.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: FileCheck,
    title: 'Production Monitoring',
    description: 'Regular updates and progress tracking throughout the manufacturing process to keep you informed.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including customs clearance, freight forwarding, and door-to-door delivery.',
  },
  {
    icon: Users,
    title: 'Supplier Management',
    description: 'Ongoing supplier relationship management, performance evaluation, and dispute resolution.',
  },
  {
    icon: Package,
    title: 'Product Development',
    description: 'Custom product development, prototyping, and sample coordination with qualified manufacturers.',
  },
  {
    icon: Globe,
    title: 'Market Intelligence',
    description: 'Industry insights, pricing benchmarks, and competitive analysis to optimize your sourcing strategy.',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Comprehensive Sourcing Solutions
          </h2>
          <p className="text-lg text-text-secondary">
            From initial supplier identification to final delivery, we handle every aspect of your China sourcing needs with professionalism and transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-bg-light rounded-xl p-6 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
