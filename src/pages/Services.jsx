import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Supplier Sourcing',
    description:
      'We identify manufacturers that match your product requirements, target price, and order volume. Our team evaluates capabilities, certifications, and export experience before recommending partners.',
    benefits: ['Verified supplier shortlists', 'Price benchmarking', 'MOQ and lead-time clarity'],
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description:
      'We visit factories, review business licenses, check production lines, and assess management systems. This helps reduce the risk of unreliable or unsuitable suppliers.',
    benefits: ['On-site factory visits', 'Business-license verification', 'Capability and capacity review'],
    icon: ShieldCheck,
  },
  {
    title: 'Quality Inspection',
    description:
      'We perform pre-production, in-line, and pre-shipment inspections with clear pass/fail criteria. Reports include photos, videos, and actionable findings.',
    benefits: ['Pre-production checks', 'In-line monitoring', 'Pre-shipment verification'],
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping Coordination',
    description:
      'We coordinate freight, prepare export documents, and work with customs brokers to help move goods from factory to your warehouse or distribution center.',
    benefits: ['Sea, air, rail, and express options', 'Export documentation', 'Customs coordination support'],
    icon: Ship,
  },
];

const Services = () => {
  return (
    <div className="flex-1">
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white hover:bg-white/20">Services</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            End-to-end sourcing support from China
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            From finding suppliers to delivering goods, we provide practical support at every stage of the import process.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border-slate-200 bg-white">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <service.icon className="h-7 w-7 text-slate-900" />
                  <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
                </div>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-slate-900" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
                    <Link to="/contact">
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">How we work with buyers</h2>
          <p className="mt-2 text-sm text-slate-600">
            Most engagements start with a short requirements call, followed by a written proposal and timeline.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 1</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">Share requirements</h3>
                <p className="mt-2 text-sm text-slate-600">Product specs, target price, volume, and timeline.</p>
              </div>
            </Card>
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 2</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">We execute</h3>
                <p className="mt-2 text-sm text-slate-600">Sourcing, verification, inspection, and shipping support.</p>
              </div>
            </Card>
            <Card className="border-slate-200 bg-white">
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step 3</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">You approve and receive</h3>
                <p className="mt-2 text-sm text-slate-600">Review reports, approve shipments, and receive goods.</p>
              </div>
            </Card>
          </div>
          <div className="mt-8">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
              <Link to="/contact">Start a project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
