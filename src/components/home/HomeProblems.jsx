import { AlertTriangle, Clock, DollarSign, Eye, Globe, ShieldOff } from 'lucide-react';
import { SectionHeader } from '@/components/shared';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier through on-site audits, business license checks, and production capacity assessments.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our QC team inspects goods at multiple stages — during production, pre-shipment, and at container loading.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'We follow up with factories at every production milestone and escalate issues before they become delays.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'We negotiate directly with manufacturers in Chinese and leverage our network to get competitive pricing.',
  },
  {
    icon: Eye,
    problem: 'No Visibility on Orders',
    solution: 'Regular progress reports, photos, and updates keep you informed throughout the entire production cycle.',
  },
  {
    icon: Globe,
    problem: 'Complex Shipping & Customs',
    solution: 'We coordinate with freight forwarders, prepare export documents, and guide you through import requirements.',
  },
];

const HomeProblems = () => (
  <section className="py-16 md:py-24 bg-blue-navy">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Why Buyers Choose Us"
        title="Common Sourcing Problems We Solve"
        subtitle="Sourcing from China without local support is risky. Here's how we protect your business."
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map(({ icon: Icon, problem, solution }) => (
          <div key={problem} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-china/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-red-china" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">{problem}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeProblems;
