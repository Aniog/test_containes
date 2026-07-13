import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist qualified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description:
      'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    description:
      'Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet agreed standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description:
      'Regular updates and milestone tracking throughout the production cycle so you always know the status of your order.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description:
      'We coordinate with freight forwarders, handle export documentation, and ensure your goods are shipped on time and correctly.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything You Need to Source from China"
          subtitle="From finding the right supplier to delivering goods to your door — we manage the entire sourcing process on your behalf."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                  <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-brand-navy rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Need a Custom Solution?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Every sourcing project is different. Tell us what you need and we'll put together a tailored plan.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
