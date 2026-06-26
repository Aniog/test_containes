import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  Factory,
  FileCheck2,
  PackageCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify manufacturers that match your product requirements, quality expectations, and budget. Our network covers electronics, home goods, textiles, furniture, auto parts, and industrial equipment.',
    benefits: ['Shortlist of vetted suppliers', 'Price benchmarking', 'Capability and capacity checks'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description:
      'Before you place a large order, we confirm the factory is legitimate, properly registered, and capable of delivering consistent quality.',
    benefits: ['Business license verification', 'On-site management interviews', 'Production line assessment'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'Structured inspections at key production stages help you catch defects early and avoid costly returns or chargebacks.',
    benefits: ['Pre-production checks', 'In-line monitoring', 'Pre-shipment random sampling'],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description:
      'We manage consolidation, documentation, and freight forwarding so your cargo moves from factory to warehouse smoothly.',
    benefits: ['Incoterms guidance', 'Customs documentation support', 'Freight forwarding coordination'],
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description:
      'We track production schedules, communicate with factories on your behalf, and alert you to delays or material issues.',
    benefits: ['Weekly progress updates', 'Issue escalation', 'Schedule risk monitoring'],
  },
  {
    icon: FileCheck2,
    title: 'Compliance & Documentation',
    description:
      'We help you gather product certifications, test reports, and supplier documentation required by your market.',
    benefits: ['CE, FCC, ISO support', 'Supplier questionnaires', 'Audit-ready documentation'],
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Sourcing services built for international buyers</h1>
            <p className="mt-4 text-lg text-slate-600">
              We combine local presence, structured processes, and transparent reporting to make China sourcing predictable and lower risk.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.benefits.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">Request a service quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-it-works">Review our process</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why buyers work with us</h2>
              <p className="mt-3 text-lg text-slate-600">
                We focus on outcomes: better suppliers, fewer defects, and smoother logistics. Our clients keep coming back because we make sourcing less stressful.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Local team in China with English-speaking support',
                  'Structured inspection reports with photos and measurements',
                  'Clear fees with no hidden charges',
                  'Flexible support for small and large orders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <img
                  alt="Quality inspection in a Chinese factory"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Our inspectors work across major manufacturing regions to give you consistent coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
