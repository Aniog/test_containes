import { AlertTriangle, CheckCircle } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    problem: 'Receiving goods that don\'t match the sample',
    solution: 'We conduct pre-shipment inspections and during-production checks against your approved sample specifications.',
  },
  {
    problem: 'Dealing with unreliable or fraudulent suppliers',
    solution: 'Every supplier in our network is verified through on-site audits, business license checks, and reference reviews.',
  },
  {
    problem: 'Communication barriers and time zone differences',
    solution: 'Your dedicated sourcing manager handles all supplier communication in Chinese, keeping you updated in English.',
  },
  {
    problem: 'Unexpected delays and missed deadlines',
    solution: 'We monitor production milestones and flag issues early, so you can adjust plans before problems escalate.',
  },
  {
    problem: 'Overpaying due to lack of local market knowledge',
    solution: 'We negotiate directly with factories using our knowledge of local pricing benchmarks and supplier relationships.',
  },
  {
    problem: 'Confusion around shipping, customs, and documentation',
    solution: 'We coordinate with freight forwarders and ensure all export documents are accurate and compliant.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common Sourcing Challenges — Handled"
          subtitle="Importing from China comes with real risks. Here's how we address the most common issues our clients face."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-dark font-semibold text-sm">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
