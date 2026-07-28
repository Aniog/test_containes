import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers that match your product specifications, MOQ, and budget requirements.',
    link: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business legitimacy, production capacity, certifications, and working conditions.',
    link: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and final inspections by our trained QC team to ensure your standards are met.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description: 'Regular updates and on-site monitoring throughout the production cycle to prevent delays and quality issues.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods arrive on time.',
    link: '/services',
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Everything You Need to Source from China
          </h2>
          <p className="text-brand-mid text-lg max-w-2xl mx-auto">
            From finding the right supplier to getting goods delivered, we manage the entire sourcing process on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-brand-border p-7 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors">
                  <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-brand-blue rounded-xl p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Ready to Start Sourcing?</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Tell us what you need and we'll provide a free, no-obligation sourcing assessment within 24 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold px-6 py-3 rounded-lg text-sm hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
