import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist verified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits covering production capacity, certifications, workforce, and compliance with international standards.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections to ensure every order meets your specifications.',
    link: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    description: 'We monitor your order from raw material procurement through production milestones to final packaging.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'Coordination of sea freight, air freight, and express delivery with trusted forwarders. Door-to-door or port-to-port.',
    link: '/services',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    description: 'We help you develop custom products, private label packaging, and OEM manufacturing with Chinese factories.',
    link: '/services',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-3">
            End-to-End China Sourcing Services
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your door — we manage every step of the sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-primary text-sm font-semibold hover:text-primary-dark inline-flex items-center gap-1 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
