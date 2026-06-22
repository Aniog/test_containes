import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers matching your product specs, MOQ, and budget from our verified supplier network.',
    path: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions before you commit.',
    path: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections to ensure your goods meet agreed specifications.',
    path: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    desc: 'Regular updates and on-site visits during manufacturing to keep your order on schedule and resolve issues early.',
    path: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure smooth delivery to your destination.',
    path: '/services',
  },
];

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-light-blue text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            End-to-End Sourcing Support
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From finding the right supplier to getting goods delivered, we manage every step of your China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-primary rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Need a Custom Solution?</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Every sourcing project is different. Tell us what you need and we'll build a tailored plan for your business.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-[#a93226] text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
