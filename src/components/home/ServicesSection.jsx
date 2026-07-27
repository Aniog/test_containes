import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
    link: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet specifications.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description: 'Regular updates and on-site monitoring throughout the production cycle to keep your order on schedule and on spec.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, handle export documentation, and manage logistics from factory gate to your destination port.',
    link: '/services',
  },
  {
    icon: Search,
    title: 'OEM & Private Label',
    description: 'Support for custom product development, packaging design, and private label manufacturing with vetted Chinese factories.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2 mb-4">
            End-to-End China Sourcing Support
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            From finding the right supplier to getting goods delivered, we manage every step of the sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-brand-gray rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow border border-brand-border group"
              >
                <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors">
                  <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-brand-text mb-3">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-brand-navy transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
