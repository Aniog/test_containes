import { Link } from 'react-router-dom';
import { Search, Shield, ClipboardCheck, Factory, Truck, Package } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified Chinese manufacturers that match your product specs, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits covering production capacity, certifications, compliance, and working conditions.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections to ensure your goods meet specifications.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor your order progress, communicate with the factory, and flag issues before they become costly problems.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, handle export documentation, and ensure timely delivery to your destination.',
    link: '/services',
  },
  {
    icon: Package,
    title: 'Sample Procurement',
    description: 'We source, evaluate, and ship product samples so you can verify quality before committing to a full order.',
    link: '/services',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            End-to-End China Sourcing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            From finding the right supplier to getting goods delivered to your warehouse — we manage every step of the sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 bg-lightblue rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-primary text-sm font-medium hover:text-accent transition-colors inline-flex items-center gap-1"
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
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
