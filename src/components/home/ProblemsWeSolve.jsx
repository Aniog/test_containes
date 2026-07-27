import React from 'react';
import { AlertTriangle, DollarSign, Clock, ShieldOff, Truck } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Many overseas buyers struggle to find trustworthy suppliers. Fake companies, poor communication, and mismatched capabilities waste time and money.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    description: 'Without local market knowledge, buyers often pay more than necessary or face unexpected costs for tooling, shipping, and customs.',
  },
  {
    icon: ShieldOff,
    title: 'Quality Issues',
    description: 'Products that don\'t match samples, inconsistent quality across batches, and no one on-site to catch problems before shipment.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Suppliers miss deadlines without warning. Without someone following up regularly, delays cascade and disrupt your business.',
  },
  {
    icon: Truck,
    title: 'Logistics Complexity',
    description: 'Navigating freight options, customs regulations, and documentation is complex. Mistakes lead to delays, extra fees, or lost shipments.',
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Sourcing from China without local support creates real risks. Here are the common challenges our clients face — and how we address them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white rounded-lg border border-slate-200 p-6 md:p-8">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
