import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const caseStudies = [
  {
    title: 'Home goods importer',
    category: 'Quality Improvement',
    challenge: 'Frequent defects and inconsistent packaging from multiple suppliers.',
    result: 'Reduced defect rate from 18% to under 3% in 2 orders.',
    actions: ['Factory verification', 'Pre-shipment inspection', 'Supplier consolidation'],
  },
  {
    title: 'Electronics brand',
    category: 'Sourcing Speed',
    challenge: 'Slow supplier onboarding and unclear production capacity.',
    result: 'Shortened supplier onboarding from 6 weeks to 10 days.',
    actions: ['Supplier shortlisting', 'Factory audit', 'Sample approval workflow'],
  },
  {
    title: 'Furniture retailer',
    category: 'Supplier Consolidation',
    challenge: 'Managing 3 suppliers with inconsistent lead times and quality.',
    result: 'Consolidated 3 suppliers into 1 reliable partner.',
    actions: ['Factory visits', 'Quality benchmarking', 'Logistics coordination'],
  },
  {
    title: 'Apparel buyer',
    category: 'Compliance & Shipping',
    challenge: 'Unclear compliance documentation and delayed shipments.',
    result: 'Improved documentation accuracy and reduced shipping delays.',
    actions: ['Compliance review', 'Export documentation', 'Freight coordination'],
  },
];

const CaseStudies = () => {
  return (
    <div className="flex-1">
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white hover:bg-white/20">Case Studies</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real outcomes from real sourcing projects
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            These examples show how we helped buyers improve quality, speed, and supplier reliability.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white">
              <div className="p-6">
                <Badge variant="outline" className="border-slate-200 text-slate-700">{item.category}</Badge>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{item.challenge}</p>
                <div className="mt-4 rounded-md bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">Result</p>
                  <p className="mt-1 text-sm text-slate-700">{item.result}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {item.actions.map((action) => (
                    <li key={action} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-slate-900" /> {action}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
                    <Link to="/contact">
                      Discuss a similar project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
