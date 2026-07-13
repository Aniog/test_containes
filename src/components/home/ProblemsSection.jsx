import { AlertTriangle, CheckCircle } from 'lucide-react';

const problems = [
  {
    problem: 'Received goods that don\'t match the sample',
    solution: 'Pre-shipment inspection with detailed photo/video reports before payment release.',
  },
  {
    problem: 'Supplier disappeared after receiving payment',
    solution: 'We only work with verified, audited factories and use secure payment structures.',
  },
  {
    problem: 'Production delays with no communication',
    solution: 'Weekly production updates and direct factory contact throughout the order.',
  },
  {
    problem: 'No idea if the factory is real or a trading company',
    solution: 'On-site factory visits with audit reports, photos, and business license verification.',
  },
  {
    problem: 'Goods stuck at customs due to wrong documentation',
    solution: 'We prepare and review all export documents to ensure compliance with your country\'s import requirements.',
  },
  {
    problem: 'Paying too much because you can\'t negotiate in Chinese',
    solution: 'Our bilingual team negotiates directly with factories to get competitive pricing.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-brand-dark">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Problems We Solve
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Importing from China comes with real risks. Here's how we protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 font-medium text-sm">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
