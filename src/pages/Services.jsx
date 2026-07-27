import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ShieldCheck, Ship, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and match you with reliable manufacturers and suppliers across China based on your product specifications, quality requirements, and budget.',
    details: ['Supplier database and market research', 'Request for quotation management', 'Supplier comparison and shortlisting', 'Communication and negotiation support'],
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, production capacity, certifications, and business registration before you commit.',
    details: ['Business license verification', 'Factory capacity assessment', 'Quality management system review', 'Reference and history checks'],
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'Independent inspections at key production stages to ensure products meet your standards and specifications.',
    details: ['Pre-production checks', 'During-production monitoring', 'Pre-shipment inspection', 'Container loading supervision'],
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including consolidation, customs documentation, and freight forwarding.',
    details: ['Freight forwarding', 'Customs documentation', 'Insurance and risk management', 'Door-to-door delivery options'],
    icon: Ship,
  },
  {
    title: 'Order Management',
    description: 'Ongoing support during production to keep your order on track and aligned with agreed timelines.',
    details: ['Production monitoring', 'Schedule management', 'Issue escalation and resolution', 'Progress reporting'],
    icon: ClipboardCheck,
  },
];

const Services = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Sourcing Services</h1>
          <p className="mt-4 text-slate-600">Practical, end-to-end support for buyers who want to source from China with less risk and more clarity.</p>
        </div>

        <div className="mt-12 space-y-10">
          {services.map((service) => (
            <div key={service.title} className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <service.icon className="h-8 w-8 text-slate-900" />
                  <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                </div>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Request this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="lg:col-span-8">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-900">What’s included</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.details.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Need a custom sourcing plan?</h3>
          <p className="mt-2 text-sm text-slate-600">Tell us your product, timeline, and budget. We’ll propose a practical approach.</p>
          <div className="mt-4">
            <Button asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
