import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, Globe } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We pre-screen and audit every supplier before you commit to an order, checking licenses, certifications, and production capacity.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our inspectors check goods at multiple stages — during production, pre-shipment, and at container loading — to catch defects early.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'We monitor production schedules weekly and escalate issues immediately, keeping your orders on track.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'With local market knowledge and supplier relationships, we negotiate competitive prices on your behalf.',
  },
  {
    icon: Search,
    problem: 'Difficulty Finding Suppliers',
    solution: 'We tap into our established network across Guangdong, Zhejiang, Jiangsu, and other key manufacturing regions.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team handles all supplier communication in Chinese, eliminating misunderstandings and delays.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0d2340]" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Problems We Solve"
          title="Common Sourcing Challenges — Solved"
          subtitle="Importing from China comes with real risks. Here's how we address the most common pain points our clients face."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white/8 border border-white/10 rounded-xl p-6 hover:bg-white/12 transition-colors">
                <div className="w-10 h-10 bg-[#e8621a]/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#e8621a]" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.problem}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.solution}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
