import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Factory, Ship, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    industry: 'Home Goods',
    client: 'US-based home goods importer',
    challenge: 'High defect rate and inconsistent quality from multiple suppliers.',
    solution: 'Introduced pre-shipment inspections, supplier scorecards, and a single QC contact.',
    result: 'Defect rate dropped from 18% to 2.1% within 6 months.',
    metrics: ['18% to 2.1% defect rate', '3 suppliers consolidated to 2', 'Return costs reduced by 60%'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    industry: 'Electronics',
    client: 'European electronics distributor',
    challenge: 'Long sourcing cycles and unclear factory capabilities.',
    solution: 'Structured factory audits, sample approval workflow, and weekly production updates.',
    result: 'Sourcing time reduced by 35% and first-pass yield improved.',
    metrics: ['35% faster sourcing cycle', 'First-pass yield up 22%', '2 new reliable suppliers added'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    industry: 'Furniture',
    client: 'Australian furniture retailer',
    challenge: 'Rising shipping costs and fragmented supplier base.',
    solution: 'Negotiated better FOB terms, consolidated shipments, and optimized packaging.',
    result: 'Saved approximately $120K in the first year.',
    metrics: ['$120K first-year savings', 'Shipping cost down 18%', 'Lead time reduced by 1 week'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    industry: 'Textiles',
    client: 'UK fashion brand',
    challenge: 'Fabric quality variations and delayed shipments.',
    solution: 'Added fabric lab tests, in-line inspections, and freight tracking.',
    result: 'Customer complaints dropped and on-time delivery improved.',
    metrics: ['Customer complaints down 40%', 'On-time delivery at 94%', 'Fabric rejection rate down 12%'],
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1200&q=80',
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Case studies</h1>
            <p className="mt-4 text-lg text-slate-600">
              Real examples of how we helped buyers reduce risk, improve quality, and save money.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {caseStudies.map((study) => (
              <div key={study.id} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="order-2 lg:order-1">
                  <div className="text-sm font-medium text-blue-600">{study.industry}</div>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{study.client}</h2>
                  <div className="mt-4 space-y-4 text-sm text-slate-600">
                    <div>
                      <div className="font-semibold text-slate-900">Challenge</div>
                      <p className="mt-1">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Solution</div>
                      <p className="mt-1">{study.solution}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Result</div>
                      <p className="mt-1">{study.result}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {study.metrics.map((metric) => (
                      <li key={metric} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
                    <img alt={study.industry} className="h-full w-full object-cover" src={study.image} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Discuss your project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Factory, title: 'Factory verification', description: 'Confirm supplier capability before you commit.' },
              { icon: ShieldCheck, title: 'Quality control', description: 'Inspection reports that help you make decisions.' },
              { icon: Ship, title: 'Shipping support', description: 'Logistics coordination from factory to destination.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
