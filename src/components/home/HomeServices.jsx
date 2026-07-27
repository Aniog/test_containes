import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      "We identify and shortlist qualified manufacturers from our verified network across China's key industrial regions.",
    link: '/services#sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description:
      'On-site factory audits to confirm production capacity, certifications, working conditions, and business legitimacy.',
    link: '/services#verification',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    description:
      'Pre-shipment, in-line, and final inspections carried out by our local QC team to your product specifications.',
    link: '/services#inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description:
      'Regular updates and milestone checks during manufacturing to keep your order on schedule and on spec.',
    link: '/services#production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description:
      'We coordinate with freight forwarders, handle export documentation, and track your shipment to destination.',
    link: '/services#shipping',
  },
];

export default function HomeServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">What We Do</span>
          <h2 className="section-heading">End-to-End Sourcing Services</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            From finding the right supplier to getting goods delivered, we manage every step
            of the China sourcing process on your behalf.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, link }) => (
            <div key={title} className="card group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-200">
                <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-brand-dark mb-2">{title}</h3>
              <p className="text-brand-mid text-sm leading-relaxed mb-4">{description}</p>
              <Link
                to={link}
                className="text-brand-blue text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-brand-navy rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Need a Custom Solution?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Tell us about your product and sourcing requirements. We'll put together a tailored plan.
              </p>
            </div>
            <Link
              to="/contact#quote"
              className="mt-6 bg-white text-brand-navy font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
