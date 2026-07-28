import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find and evaluate reliable manufacturers matching your product requirements, budget, and quality standards.',
    link: '/services#supplier-sourcing',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality systems, and working conditions.',
    link: '/services#factory-verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    link: '/services#quality-inspection',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular updates and factory visits to track production progress and catch issues before they become problems.',
    link: '/services#production-monitoring',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs clearance, and delivery to your warehouse.',
    link: '/services#shipping-coordination',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="section-header">
          <h2 id="services-title" className="section-title">Our Sourcing Services</h2>
          <p id="services-subtitle" className="section-subtitle">
            End-to-end sourcing support from supplier discovery to delivery at your door.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
