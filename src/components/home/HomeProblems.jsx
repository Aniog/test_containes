import { AlertTriangle, DollarSign, Clock, Eye, Globe, FileX } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Receiving defective or off-spec goods',
    solution: 'Our pre-shipment inspections catch quality issues before goods leave China.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying due to lack of market knowledge',
    solution: 'We benchmark prices across multiple suppliers and negotiate on your behalf.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Clock,
    problem: 'Delayed shipments with no visibility',
    solution: 'We monitor production milestones and provide regular status updates.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Eye,
    problem: 'Working with unverified or fraudulent suppliers',
    solution: 'Every supplier we recommend is physically audited and background-checked.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Globe,
    problem: 'Language and communication barriers',
    solution: 'Our bilingual team handles all factory communication in Chinese and English.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: FileX,
    problem: 'Missing compliance documents or certifications',
    solution: 'We ensure all required certificates and export documents are in order.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
];

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common Sourcing Challenges We Eliminate"
          subtitle="Importing from China carries real risks. We exist to remove them — so you can source with confidence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.bg}`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <p className="font-semibold text-slate-800 mb-2 text-sm">{item.problem}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
