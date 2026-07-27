import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Truck, BarChart2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits to verify factory capabilities, certifications, production capacity, and compliance before you commit to an order.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to ensure your goods meet agreed specifications.',
    link: '/services',
  },
  {
    icon: BarChart2,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site monitoring throughout the production cycle to keep your order on schedule and on spec.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'We coordinate freight forwarding, customs documentation, and delivery to your warehouse — by sea, air, or express.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            From finding the right supplier to delivering goods to your door, we manage every step of the China sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-brand-blue/20 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-blue-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                  <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-brand-orange transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-brand-blue rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-3">Get Started</p>
              <h3 className="text-xl font-bold text-white mb-3">Not sure where to start?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Tell us what you need to source and we'll send you a free, no-obligation sourcing plan within 24 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-700 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
