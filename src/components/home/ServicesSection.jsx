import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget — saving you weeks of research.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits covering production capacity, certifications, workforce, and compliance — before you commit.',
    color: 'bg-indigo-50 text-indigo-700',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet spec.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor your order from sample approval through mass production, keeping you updated at every milestone.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'We coordinate freight forwarding, customs documentation, and delivery to your warehouse — by sea, air, or express.',
    color: 'bg-sky-50 text-sky-700',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            End-to-End China Sourcing Services
          </h2>
          <p className="text-slate-500 text-lg">
            From finding the right supplier to delivering goods to your door — we manage every step of the sourcing process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-slate-100 rounded-xl p-7 hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-blue-700 rounded-xl p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Ready to start sourcing?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Tell us what you need and we'll send you a free sourcing plan within 24 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-3 rounded-lg text-sm hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
