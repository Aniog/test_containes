import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Ship, FileCheck, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify manufacturers that match your product requirements, quality standards, and budget. We do not just search online; we verify capacity, certifications, and client references before presenting options.',
    benefits: ['Shortlist of vetted suppliers', 'Price benchmarking', 'MOQ and lead time analysis'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'Before you place a large order, we visit the factory to confirm it is legitimate, properly registered, and capable of meeting your volume and timeline.',
    benefits: ['On-site audit', 'Business license verification', 'Production capacity check'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'We inspect products at key stages: before production starts, during production, and before shipment. This reduces defects, returns, and reputational risk.',
    benefits: ['Pre-production check', 'During-production inspection', 'Pre-shipment inspection'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We manage logistics from the factory to your warehouse or distribution center, including consolidation, customs documentation, and freight forwarding.',
    benefits: ['Freight forwarding', 'Customs documentation', 'Consolidation services'],
  },
  {
    icon: FileCheck,
    title: 'Product Compliance',
    description: 'We help ensure your products meet the regulatory requirements of your target market, including CE, FCC, RoHS, and other relevant standards.',
    benefits: ['Regulatory guidance', 'Documentation review', 'Testing coordination'],
  },
  {
    icon: Truck,
    title: 'Order Follow-Up',
    description: 'We monitor production schedules, follow up on delays, and keep you informed so you are not chasing updates across time zones.',
    benefits: ['Production monitoring', 'Delay management', 'Regular status updates'],
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Services
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive sourcing support designed to reduce risk, improve quality, and save you time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-slate-800"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
