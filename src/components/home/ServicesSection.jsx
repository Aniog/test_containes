import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description:
      'On-site factory audits to confirm production capacity, certifications, working conditions, and compliance with your standards.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'Pre-shipment, during-production, and final inspections by our local QC team to catch defects before goods leave China.',
    link: '/services',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description:
      'We monitor your order from raw material to finished goods, keeping you updated at every stage of the production process.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description:
      'We coordinate sea freight, air freight, and express delivery, handling customs documentation and consolidation.',
    link: '/services',
  },
  {
    icon: Package,
    title: 'Private Label & OEM',
    description:
      'From product design to branded packaging, we help you develop private label products with reliable OEM factories.',
    link: '/services',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-End China Sourcing Support
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your door, we manage every step
            of the sourcing process on your behalf.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                  <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
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
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
