import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Factory, ShieldCheck, ClipboardCheck, Ship, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify manufacturers that match your product specs, quality requirements, and budget. Our network covers multiple industries and regions in China.',
    details: ['Supplier shortlisting', 'Price and MOQ negotiation support', 'Capability and capacity checks', 'Sample coordination'],
    icon: Factory,
  },
  {
    title: 'Factory Verification',
    description: 'Before you place a large order, we verify the factory on site to reduce supplier risk.',
    details: ['Business license review', 'Factory layout and capacity audit', 'Quality management system check', 'Social compliance screening'],
    icon: ShieldCheck,
  },
  {
    title: 'Quality Inspection',
    description: 'Inspection services at key production stages help you catch issues early.',
    details: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision'],
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'We help manage freight, documentation, and delivery so your goods move smoothly.',
    details: ['Freight forwarding support', 'Document preparation', 'Customs clearance guidance', 'Shipment tracking'],
    icon: Ship,
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Services</h1>
            <p className="mt-3 text-slate-600">Practical sourcing support from discovery to delivery, built around reducing risk and improving control.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="h-8 w-8 text-slate-900" />
                <h2 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.details.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white">
                        <span className="text-[10px]">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                  Request this service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Need a custom sourcing plan?</h3>
            <p className="mt-2 text-sm text-slate-600">Tell us your product, volume, and timeline. We will propose a practical next step.</p>
            <div className="mt-4">
              <Link to="/contact"><Button>Get a Free Sourcing Quote</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
