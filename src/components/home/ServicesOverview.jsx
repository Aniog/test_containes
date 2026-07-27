import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    color: 'bg-blue-50 text-brand-blue',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm business legitimacy, production capacity, certifications, and working conditions.',
    color: 'bg-orange-50 text-brand-orange',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections by our trained QC team to ensure products meet your standards.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and milestone checks throughout the manufacturing process to keep your order on track.',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure smooth delivery to your destination.',
    color: 'bg-teal-50 text-teal-700',
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            End-to-End China Sourcing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-brand-blue rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Need a Custom Solution?</h3>
              <p className="text-sm text-blue-200 leading-relaxed">
                Every sourcing project is different. Tell us what you need and we'll build a tailored plan.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
