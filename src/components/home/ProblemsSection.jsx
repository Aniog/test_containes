import { AlertTriangle, DollarSign, Clock, Search, ShieldOff, Globe } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We audit every factory before recommending them — checking licenses, capacity, and past client references.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our QC inspectors check goods at multiple stages: pre-production, during production, and before shipment.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'We negotiate directly with factories in Mandarin, leveraging our local relationships to get fair prices.',
  },
  {
    icon: Clock,
    problem: 'Delayed Shipments',
    solution: 'We monitor production timelines and coordinate with freight forwarders to keep your delivery on schedule.',
  },
  {
    icon: Search,
    problem: 'Difficulty Finding Suppliers',
    solution: 'We tap into verified supplier databases, trade shows, and our own network to find the right match quickly.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team handles all supplier communication in Chinese, eliminating misunderstandings.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Problems We Solve"
          title="Common Sourcing Challenges We Eliminate"
          subtitle="Importing from China comes with real risks. Here's how we protect your business at every step."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 text-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">{item.problem}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
