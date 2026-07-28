import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const problems = [
  {
    id: 'problem-1',
    problem: 'Unreliable suppliers who disappear after payment',
    solution: 'We verify every factory on-site before you place an order',
  },
  {
    id: 'problem-2',
    problem: 'Quality issues discovered only after goods arrive',
    solution: 'We inspect at multiple stages — during and before shipment',
  },
  {
    id: 'problem-3',
    problem: 'Communication barriers and timezone differences',
    solution: 'Bilingual team on the ground handles all supplier communication',
  },
  {
    id: 'problem-4',
    problem: 'No visibility into production progress',
    solution: 'Weekly photo/video updates and milestone reports from the factory',
  },
  {
    id: 'problem-5',
    problem: 'Shipping delays and documentation errors',
    solution: 'We coordinate logistics and ensure all export docs are correct',
  },
  {
    id: 'problem-6',
    problem: 'Overpaying due to lack of market knowledge',
    solution: 'We negotiate fair prices based on real market data and relationships',
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">Why Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Sourcing from China comes with real risks. Here's how we protect your business at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md transition">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-neutral-700 font-medium">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-0 md:pl-8">
                <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <p className="text-neutral-600 text-sm">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
