import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const problems = [
  'Received products that do not match the samples',
  'Paid deposits to suppliers that disappeared',
  'Factories missed deadlines with no explanation',
  'Communication barriers causing costly errors',
  'No visibility into production progress',
  'Unexpected quality issues discovered after shipping',
];

const solutions = [
  'On-site inspections at every production stage',
  'Supplier verification before any payment',
  'Regular factory visits with photo/video reports',
  'Bilingual project managers bridging the gap',
  'Real-time production tracking dashboards',
  'Pre-shipment inspection with pass/fail reports',
];

const ProblemsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Why Clients Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Problems We Solve</h2>
          <p className="text-lg text-slate-600">
            Buying from China without local support comes with real risks. Here is how we protect you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-white rounded-lg border border-red-100 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-red-700">Common Sourcing Risks</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-sm text-slate-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-lg border border-teal-100 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-semibold text-teal-700">How We Protect You</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-sm text-slate-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
