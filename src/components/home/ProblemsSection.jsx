import { AlertTriangle, Clock, DollarSign, Globe, ShieldOff, TrendingDown } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We pre-screen and audit every factory before recommending them. You only work with verified manufacturers.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our QC team inspects goods during and after production, catching defects before they reach your warehouse.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'We monitor production timelines and escalate issues early, keeping your orders on schedule.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'We negotiate directly with factories in Chinese and leverage our network to get competitive pricing.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team handles all supplier communication, so nothing gets lost in translation.',
  },
  {
    icon: TrendingDown,
    problem: 'Shipping Delays & Errors',
    solution: 'We coordinate freight, prepare export documents, and track shipments to ensure smooth delivery.',
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common Sourcing Challenges We Eliminate"
          subtitle="Importing from China comes with real risks. Here's how we protect your business at every stage."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{item.problem}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
