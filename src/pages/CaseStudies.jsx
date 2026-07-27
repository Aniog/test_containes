import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'Reducing Lead Time for an EU Electronics Importer',
    client: 'Electronics Importer — Netherlands',
    challenge: 'Long supplier lead times and inconsistent quality on Bluetooth accessories.',
    actions: ['Identified 3 alternative factories in Guangdong', 'Conducted pre-shipment inspection on 2 production runs', 'Negotiated revised delivery terms and penalties'],
    results: [
      { label: 'Lead time reduction', value: '18%' },
      { label: 'First-pass quality rate', value: '96%' },
      { label: 'Cost savings', value: '12%' },
    ],
  },
  {
    title: 'Quality Stabilization for a US Home Goods Brand',
    client: 'Home Goods Brand — United States',
    challenge: 'High defect rate on kitchenware shipments and unclear root cause.',
    actions: ['Performed during-production inspection', 'Identified material and process gaps', 'Worked with supplier on corrective actions'],
    results: [
      { label: 'Defect rate reduction', value: 'From 8% to 1.2%' },
      { label: 'On-time shipments', value: '94%' },
      { label: 'Customer returns', value: 'Down 40%' },
    ],
  },
  {
    title: 'New Supplier Onboarding for a UK Retailer',
    client: 'Retail Buyer — United Kingdom',
    challenge: 'Needed new suppliers for seasonal product lines with tight timelines.',
    actions: ['Shortlisted 5 qualified factories', 'Verified business licenses and capacity', 'Managed sample approval and production follow-up'],
    results: [
      { label: 'Time to first shipment', value: '6 weeks' },
      { label: 'Supplier approval rate', value: '4 of 5' },
      { label: 'Order accuracy', value: '99.1%' },
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Case Studies</h1>
          <p className="mt-4 text-slate-600">Real examples of how we helped buyers reduce risk, improve quality, and achieve better sourcing outcomes.</p>
        </div>

        <div className="mt-12 space-y-10">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="text-xs font-semibold text-slate-500">{cs.client}</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">{cs.title}</h2>
                  <p className="mt-3 text-sm text-slate-600">{cs.challenge}</p>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">What we did</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {cs.actions.map((action) => (
                        <li key={action} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-slate-700" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-sm font-semibold text-slate-900">Results</h3>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                      {cs.results.map((result) => (
                        <div key={result.label}>
                          <p className="text-xl font-bold text-slate-900">{result.value}</p>
                          <p className="text-xs text-slate-600">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Want similar results?</h3>
          <p className="mt-2 text-sm text-slate-600">Tell us your sourcing challenge. We’ll propose a practical approach.</p>
          <div className="mt-4">
            <Button asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
