import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers that match your product specifications, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, equipment, and compliance certifications.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container-loading inspections to ensure your goods meet agreed standards.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular production updates, milestone tracking, and problem resolution to keep your orders on schedule.',
    link: '/services',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including customs documentation, freight booking, and delivery tracking.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 id="services-title" className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            End-to-End Sourcing Services
          </h2>
          <p id="services-subtitle" className="text-lg text-text-secondary max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your warehouse — we manage every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-surface rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-primary transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
