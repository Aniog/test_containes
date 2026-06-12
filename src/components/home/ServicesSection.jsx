import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist manufacturers that match your product specs, MOQ, and budget — from our vetted network and direct market research.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'On-site audits covering production capacity, certifications, workforce, and compliance. You receive a detailed report with photos and video.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and container loading inspections. We check against your specifications and international standards.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress reports keep your order on schedule. We flag issues early so you can act before it is too late.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We work with freight forwarders to arrange sea, air, or express shipments, handle export documentation, and track your cargo.',
    color: 'text-brand-sky',
    bg: 'bg-brand-sky/10',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="What We Do"
          title="End-to-End China Sourcing Services"
          subtitle="From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process on your behalf."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-neutral-900 font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-brand-navy rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Custom Sourcing
              </p>
              <h3 className="text-white font-bold text-lg mb-2">
                Have a specific product in mind?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Tell us what you need and we will find the right supplier, negotiate pricing, and manage the entire process.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-brand-gold text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Start a Sourcing Request
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-sky transition-colors"
          >
            View all services in detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
