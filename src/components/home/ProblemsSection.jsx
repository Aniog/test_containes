import React from 'react';
import { AlertTriangle, DollarSign, Clock, ShieldOff, FileX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Finding suppliers online is easy — verifying they can actually deliver quality products on time is the real challenge.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    desc: 'Without local knowledge, you risk paying more than you should, or encountering unexpected fees during production or shipping.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Communication gaps and lack of on-site monitoring lead to missed deadlines and disrupted supply chains.',
  },
  {
    icon: ShieldOff,
    title: 'Quality Failures',
    desc: "Products that don't match samples or specifications result in returns, rework, and damaged customer trust.",
  },
  {
    icon: FileX,
    title: 'Shipping & Documentation Errors',
    desc: 'Incorrect customs paperwork, missed compliance requirements, and logistics missteps can stall or block deliveries.',
  },
];

const ProblemsSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="problems-title" className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            Problems We Solve
          </h2>
          <p id="problems-subtitle" className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Sourcing from China without local support creates real risks. Here's what we help you avoid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white border border-neutral-200 rounded-lg p-6 md:p-8">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{problem.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
