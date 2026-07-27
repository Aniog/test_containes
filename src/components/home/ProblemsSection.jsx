import React from 'react';
import { AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    problem: 'You find suppliers online but cannot tell if they are real manufacturers or trading companies.',
    solution: 'We verify every supplier with on-site audits, business license checks, and production capacity assessments.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    problem: 'Products arrive with defects, wrong materials, or do not match the approved samples.',
    solution: 'Our QC team inspects at every stage — raw materials, during production, pre-shipment, and container loading.',
  },
  {
    icon: AlertTriangle,
    title: 'Communication Barriers',
    problem: 'Language gaps and time zone differences lead to misunderstandings and costly mistakes.',
    solution: 'Bilingual project managers handle all supplier communication with clear, documented reporting.',
  },
  {
    icon: XCircle,
    title: 'Hidden Costs & Delays',
    problem: 'Unexpected fees, shipping delays, and customs issues eat into your margins.',
    solution: 'Transparent quoting and end-to-end logistics coordination including customs documentation.',
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Why Clients Come to Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Problems We Solve
          </h2>
          <p className="text-slate-600 text-lg">
            Sourcing from China without local support is risky. Here is how we eliminate the most common pain points.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-3">
                    <span className="font-medium text-red-500">Problem:</span> {item.problem}
                  </p>
                  <p className="text-slate-600 text-sm">
                    <span className="font-medium text-green-600 inline-flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> Solution:
                    </span>{' '}
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;