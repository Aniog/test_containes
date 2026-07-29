import { Search, ClipboardCheck, Eye, Package, Ship, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers based on your product specifications, budget, and quality requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory capabilities, certifications, production capacity, and legal compliance.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to ensure your products meet standards.',
  },
  {
    icon: Package,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports to keep your orders on schedule and within specifications.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle logistics, documentation, customs clearance, and coordinate with freight forwarders.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account manager available throughout the sourcing process and beyond for continued assistance.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Full-Service China Sourcing
          </h2>
          <p className="text-text-secondary text-lg">
            From finding the right supplier to delivering goods to your warehouse — we manage the entire process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-surface rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
