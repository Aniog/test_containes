import { AlertTriangle, Clock, DollarSign, Eye, Globe, FileX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable suppliers',
    solution:
      'We vet every factory with on-site audits, checking licenses, capacity, and track record before you spend a dollar.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Eye,
    problem: 'No visibility on production',
    solution:
      'We provide regular production updates, photos, and milestone reports so you always know where your order stands.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FileX,
    problem: 'Quality issues on arrival',
    solution:
      'Pre-shipment inspections and during-production checks catch defects before goods leave the factory.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: Globe,
    problem: 'Language and cultural barriers',
    solution:
      'Our bilingual team communicates directly with suppliers in Chinese, eliminating misunderstandings.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for products',
    solution:
      'We negotiate pricing on your behalf using local market knowledge and established supplier relationships.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Clock,
    problem: 'Delayed shipments',
    solution:
      'We monitor production timelines and coordinate with freight forwarders to keep your delivery on schedule.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
];

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Problems We Solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Common Challenges When Buying from China
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Sourcing from China comes with real risks. Here's how we help you avoid them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, problem, solution, color, bg }) => (
            <div key={problem} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-card-hover transition-shadow">
              <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{problem}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
