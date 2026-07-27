import React from 'react';
import { AlertTriangle, DollarSign, Clock, ShieldOff, FileX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    desc: 'Many online supplier directories list companies that cannot actually deliver on their claims. Working with the wrong supplier wastes time and money.',
  },
  {
    icon: ShieldOff,
    title: 'No Factory Verification',
    desc: 'Without visiting the factory, you cannot confirm production capacity, working conditions, or whether the supplier is a real manufacturer or just a trading company.',
  },
  {
    icon: FileX,
    title: 'Quality Issues',
    desc: 'Products that do not match samples or specifications lead to returns, refunds, and damaged reputation with your customers.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Late deliveries disrupt your sales plans and inventory management. Without local follow-up, delays often go unreported until it is too late.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    desc: 'Unexpected fees for shipping, customs, packaging, or rework can significantly increase your total cost beyond the quoted unit price.',
  },
];

const ProblemsSection = () => {
  return (
    <section className="bg-neutral-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="problems-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
            Problems We Solve
          </h2>
          <p id="problems-subtitle" className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Sourcing from China without local support creates real risks. Here are the common challenges our clients face before working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p) => (
            <div key={p.title} className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 md:p-8">
              <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
