import React from 'react';
import { Target, Factory, ClipboardCheck, Ship } from 'lucide-react';

const steps = [
  {
    title: 'Requirement Analysis',
    desc: 'We analyze your product specifications, target prices, and quality requirements.',
    icon: Target
  },
  {
    title: 'Supplier Selection',
    desc: 'We shortlist verified suppliers and negotiate the best terms for your business.',
    icon: Factory
  },
  {
    title: 'Quality Inspection',
    desc: 'Our QC team performs on-site inspections to ensure compliance with standards.',
    icon: ClipboardCheck
  },
  {
    title: 'Logistics Control',
    desc: 'We manage shipping logistics, documentation, and final delivery coordination.',
    icon: Ship
  }
];

const HomeProcess = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold">Our Sourcing Process</h2>
          <p id="process-subtitle" className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A proven, transparent workflow that minimizes risk and maximizes value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-700">
                  <step.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[1px] bg-slate-700"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
