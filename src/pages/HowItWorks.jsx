import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardCheck, Factory, Ship, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Share your requirements',
    description: 'Tell us the product, target price, order volume, and timeline. The more detail you provide, the faster we can shortlist the right suppliers.',
    icon: ClipboardCheck,
  },
  {
    title: 'We source and verify suppliers',
    description: 'We search our network, review factory credentials, and share a shortlist with profiles, capabilities, and estimated pricing.',
    icon: Factory,
  },
  {
    title: 'Inspect quality and approve production',
    description: 'We conduct inspections at the right stages and share reports so you can make informed decisions before shipment.',
    icon: ShieldCheck,
  },
  {
    title: 'Coordinate shipping and delivery',
    description: 'We manage freight, documentation, and tracking so your goods arrive on schedule and within budget.',
    icon: Ship,
  },
];

const expectations = [
  'Clear milestones and timelines',
  'Regular status updates',
  'Documented inspection reports',
  'Transparent cost breakdowns',
  'Single point of contact',
];

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h1>
            <p className="mt-3 text-slate-600">A straightforward process designed to keep you informed and in control.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">{index + 1}</div>
                  <item.icon className="h-6 w-6 text-slate-900" />
                  <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                </div>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-semibold text-slate-900">What to expect</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white">
                      <span className="text-[10px]">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Typical timelines</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Supplier shortlisting: 3-7 business days</li>
                <li>Factory verification: 5-10 business days</li>
                <li>Sample review: 1-3 weeks depending on product</li>
                <li>Production and inspection: varies by order size</li>
                <li>Shipping coordination: 1-4 weeks depending on route</li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/contact"><Button size="lg">Start Your Sourcing Project</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
