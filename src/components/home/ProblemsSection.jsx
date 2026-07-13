import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    problem: 'Unreliable suppliers who miss deadlines or deliver poor quality',
    solution: 'We pre-vet every supplier with on-site audits and only work with verified manufacturers.',
  },
  {
    problem: 'Language and communication barriers causing misunderstandings',
    solution: 'Our bilingual team handles all supplier communication in Chinese and English.',
  },
  {
    problem: 'Receiving goods that don\'t match samples or specifications',
    solution: 'We conduct pre-shipment inspections and during-production checks at every stage.',
  },
  {
    problem: 'Overpaying due to lack of local market knowledge',
    solution: 'We negotiate directly with factories using our established relationships and market data.',
  },
  {
    problem: 'Shipping delays and customs documentation errors',
    solution: 'We coordinate with freight forwarders and prepare all export documents correctly.',
  },
  {
    problem: 'No visibility into what\'s happening at the factory',
    solution: 'Regular production updates, photos, and milestone reports keep you fully informed.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common Challenges When Sourcing from China"
          subtitle="Sourcing from China without local expertise can be costly and risky. Here's how we help."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm font-medium">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
