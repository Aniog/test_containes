import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Truck, ShieldCheck, Globe } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We find pre-screened, reliable suppliers matched to your product specifications and budget.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    desc: 'On-site audits to verify factory capabilities, certifications, and production capacity.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'In-line and pre-shipment inspections to ensure products meet your exact specifications.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination—FCL, LCL, air freight, and customs clearance support.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: ShieldCheck,
    title: 'Contract & Compliance',
    desc: 'Secure contracts, IP protection, and regulatory compliance support for safe transactions.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Globe,
    title: 'Supply Chain Management',
    desc: 'Ongoing production follow-up and supplier relationship management at no extra cost.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Our Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-steel-900">
            Everything You Need to Source from China
          </h2>
          <p className="mt-4 text-lg text-steel-500 leading-relaxed">
            From finding the right factory to delivering products to your warehouse, we handle every step.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-steel-200 bg-white p-8 hover:shadow-lg hover:border-brand-200 transition-all"
            >
              <div className={`inline-flex rounded-lg p-3 ${service.color}`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-steel-900">{service.title}</h3>
              <p className="mt-2 text-sm text-steel-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
