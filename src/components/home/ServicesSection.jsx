import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers that match your product specifications, budget, and quality requirements using our extensive factory network and databases.',
    href: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory credentials, production capacity, certifications, and compliance with international standards before you place any orders.',
    href: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Independent QC checks at pre-production, during production, and pre-shipment stages to ensure your products meet agreed specifications and quality standards.',
    href: '/services',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We monitor manufacturing timelines, track milestones, and communicate with factories to prevent delays and keep your production on schedule.',
    href: '/services',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, consolidation, and delivery tracking to your destination warehouse.',
    href: '/services',
  },
  {
    icon: FileText,
    title: 'Order Management',
    desc: 'Comprehensive order administration from sample approval and contract review to payment terms negotiation and invoice verification.',
    href: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-light-blue text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            End-to-End Sourcing Support
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From finding the right supplier to delivering goods at your door, we
            handle every step of the sourcing process so you can focus on growing
            your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand transition-colors duration-300">
                <s.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {s.desc}
              </p>
              <Link
                to={s.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
