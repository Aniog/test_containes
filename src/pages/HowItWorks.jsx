import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ClipboardCheck, ShieldCheck, Ship, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Share your requirements',
    description: 'Tell us the product category, target price, quantity, quality standards, and shipping destination. The more detail you provide, the faster we can match the right suppliers.',
    deliverables: ['Requirement checklist', 'Initial feasibility feedback', 'Suggested sourcing regions'],
    icon: Search,
  },
  {
    title: 'We source and shortlist suppliers',
    description: 'We search for manufacturers that meet your criteria, then share factory profiles, certifications, and references. You choose which suppliers to move forward with.',
    deliverables: ['Supplier shortlist', 'Factory profiles', 'Reference checks', 'Sample requests if needed'],
    icon: ClipboardCheck,
  },
  {
    title: 'Verify and inspect',
    description: 'We conduct factory audits and inspections at key production stages. You receive reports with photos, measurements, and pass/fail results.',
    deliverables: ['Factory audit report', 'Inspection reports', 'Issue tracking', 'Approval recommendation'],
    icon: ShieldCheck,
  },
  {
    title: 'Coordinate shipping and delivery',
    description: 'We follow up on production, review shipping options, and coordinate delivery to your destination. You get tracking updates and documentation support.',
    deliverables: ['Production schedule', 'Shipping plan', 'Documentation support', 'Delivery tracking'],
    icon: Ship,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">How It Works</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            A straightforward process designed to give you visibility and control from supplier selection to delivery.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{index + 1}</div>
                  <item.icon className="h-5 w-5 text-slate-900" />
                </div>
                <h2 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">What you receive</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Typical timeline</h3>
              <p className="mt-2 text-sm text-slate-600">Sourcing and verification usually takes 1-3 weeks. Production and shipping timelines depend on product complexity, factory capacity, and destination.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Communication</h3>
              <p className="mt-2 text-sm text-slate-600">We provide regular updates in English, with reports, photos, and tracking information shared through a clear workflow.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Flexibility</h3>
              <p className="mt-2 text-sm text-slate-600">You can use individual services or the full end-to-end package. We adapt to your needs and risk tolerance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Ready to start a sourcing project?</h2>
            <p className="mt-2 text-slate-300">Share your requirements and we will prepare a practical plan and quote.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
