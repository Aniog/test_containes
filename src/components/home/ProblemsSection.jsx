import React from 'react';
import { AlertTriangle, XCircle, Clock, DollarSign, ShieldAlert, MessageSquare } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Many online suppliers exaggerate their capabilities. We verify every factory before you commit.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    description: 'Without proper inspection, defective products can reach your warehouse. Our QC team catches problems early.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Language differences and time zones slow down negotiations. We bridge the gap with bilingual support.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees for samples, shipping, and customs can blow your budget. We provide transparent pricing upfront.',
  },
  {
    icon: ShieldAlert,
    title: 'IP & Compliance Risks',
    description: 'Protecting your designs and ensuring regulatory compliance is critical. We help you navigate these risks.',
  },
  {
    icon: MessageSquare,
    title: 'Lack of Visibility',
    description: 'Not knowing your order status causes stress. We provide regular updates and production reports.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Problems We Solve</span>
          <h2 id="problems-title" className="text-3xl md:text-4xl font-bold mb-4">
            Common Challenges When Sourcing from China
          </h2>
          <p id="problems-subtitle" className="text-lg text-slate-400">
            We understand the risks and frustrations overseas buyers face. Here is how we help.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-slate-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
