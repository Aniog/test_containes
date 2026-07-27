import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist qualified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description:
      'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet specifications.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: BarChart3,
    title: 'Production Follow-up',
    description:
      'Regular updates on production progress, timeline tracking, and proactive issue resolution to keep your order on schedule.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description:
      'We coordinate with freight forwarders, handle export documentation, and manage logistics from factory to your destination port.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Certification',
    description:
      'Guidance on product compliance, CE, FCC, RoHS, and other certifications required for your target market.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
];

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your door — we manage
            every step of the China sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-card-hover transition-shadow group"
              >
                <div className={`w-12 h-12 ${service.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-blue-700 transition-colors"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
