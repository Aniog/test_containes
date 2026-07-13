import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Truck, Eye, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified Chinese manufacturers that match your product specifications, MOQ, and budget requirements.',
    path: '/services',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm production capacity, certifications, working conditions, and compliance with your standards.',
    path: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and final inspections with detailed photo and video reports — before goods leave China.',
    path: '/services',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'Regular updates on production progress, timeline adherence, and early identification of any issues before they escalate.',
    path: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We coordinate with freight forwarders, handle export documentation, and ensure your goods are shipped on time and correctly.',
    path: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-brand-body text-lg max-w-2xl mx-auto">
            From finding the right supplier to getting goods delivered — we manage every step
            of the China sourcing process on your behalf.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                to={service.path}
                className="card group flex flex-col gap-4 hover:border-brand-navy/30"
              >
                <div className="w-12 h-12 bg-brand-light-blue rounded-xl flex items-center justify-center group-hover:bg-brand-navy transition-colors">
                  <Icon className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">{service.title}</h3>
                  <p className="text-brand-body text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-brand-navy text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}

          {/* CTA Card */}
          <div className="card bg-brand-navy border-brand-navy flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Need a Custom Solution?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Every sourcing project is different. Tell us what you need and we'll put together
                a tailored plan.
              </p>
            </div>
            <Link to="/contact" className="btn-primary text-sm text-center">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
