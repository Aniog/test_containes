import { AlertTriangle, CheckCircle } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    problem: 'Received goods that don\'t match the sample',
    solution: 'Pre-shipment inspection with photo/video report before goods leave the factory',
  },
  {
    problem: 'Supplier disappeared after payment',
    solution: 'We verify business licenses, trade history, and financial standing before any order',
  },
  {
    problem: 'No visibility into production progress',
    solution: 'Weekly production updates and milestone photos from our on-site team',
  },
  {
    problem: 'Unexpected shipping delays and costs',
    solution: 'We coordinate freight, customs, and documentation with vetted logistics partners',
  },
  {
    problem: 'Language and communication barriers',
    solution: 'Bilingual team handles all supplier communication in Chinese on your behalf',
  },
  {
    problem: 'Difficulty finding suppliers for niche products',
    solution: 'Access to our network of 500+ verified factories across 20+ industries',
  },
];

export default function ProblemSolveSection() {
  return (
    <section className="section-gray">
      <div className="container-xl">
        <SectionHeader
          label="Problems We Solve"
          title="Common Sourcing Challenges — Solved"
          subtitle="Importing from China comes with real risks. Here's how we protect your business at every step."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 font-semibold text-sm">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
