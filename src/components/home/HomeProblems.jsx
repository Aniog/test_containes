import { AlertTriangle, Clock, DollarSign, Eye, Globe, FileX } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    solution:
      'We pre-screen and audit every supplier before recommending them, so you only work with verified, capable factories.',
  },
  {
    icon: Eye,
    problem: 'No Visibility on Quality',
    solution:
      'Our inspectors are on the ground in China, checking products at every stage — not just before shipment.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution:
      'We track production milestones and escalate issues early, keeping your orders on schedule.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution:
      'Our local team negotiates directly with factories in Mandarin, securing competitive prices you cannot get remotely.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution:
      'We bridge the communication gap between you and Chinese suppliers, preventing costly misunderstandings.',
  },
  {
    icon: FileX,
    problem: 'Shipping & Customs Issues',
    solution:
      'We prepare accurate export documentation and coordinate with freight forwarders to avoid delays at customs.',
  },
];

export default function HomeProblems() {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common Challenges We Eliminate"
          subtitle="Sourcing from China without local support is risky. Here's how we protect your business."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, problem, solution }) => (
            <div key={problem} className="bg-blue-900 bg-opacity-50 rounded-xl p-6 border border-blue-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{problem}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
