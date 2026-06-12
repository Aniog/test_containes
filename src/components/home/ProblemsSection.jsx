import { AlertTriangle, Clock, DollarSign, Eye, Globe, FileX } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Receiving defective or off-spec goods',
    solution: 'Pre-shipment inspections and sample approvals before production begins.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Clock,
    problem: 'Delayed shipments with no updates',
    solution: 'Dedicated production follow-up with regular status reports and factory visits.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying due to lack of market knowledge',
    solution: 'We benchmark prices across multiple suppliers and negotiate on your behalf.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Eye,
    problem: 'No visibility into factory conditions',
    solution: 'On-site audits with photo and video documentation of every facility we recommend.',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: Globe,
    problem: 'Language and communication barriers',
    solution: 'Our bilingual team handles all supplier communication in Chinese and English.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: FileX,
    problem: 'Compliance and certification confusion',
    solution: 'We verify CE, RoHS, FDA, and other certifications before you commit to a supplier.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Problems We Solve"
          title="Common Challenges We Eliminate"
          subtitle="Importing from China without local support is risky. Here is how we protect your business."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">The Problem</p>
                <h3 className="text-white font-semibold text-base mb-3">{item.problem}</h3>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">Our Solution</p>
                <p className="text-white/70 text-sm leading-relaxed">{item.solution}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
