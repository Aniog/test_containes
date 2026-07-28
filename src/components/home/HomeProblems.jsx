import { AlertTriangle, Clock, DollarSign, Eye, Globe, FileX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    solution: 'We vet every supplier through document checks and on-site audits before you place an order.',
  },
  {
    icon: Eye,
    problem: 'No Visibility on Production',
    solution: 'Our team provides regular production updates and on-site monitoring so you always know the status.',
  },
  {
    icon: FileX,
    problem: 'Poor Product Quality',
    solution: 'Structured QC inspections at multiple stages catch defects before goods leave the factory.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'Proactive follow-up and supplier accountability measures keep your production on schedule.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'Our local market knowledge and negotiation experience help you get fair, competitive pricing.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team bridges communication gaps and ensures your requirements are clearly understood.',
  },
];

export default function HomeProblems() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-red-50 text-brand-red text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Problems We Solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Common Sourcing Challenges We Eliminate
          </h2>
          <p className="text-brand-mid text-lg max-w-2xl mx-auto">
            Importing from China comes with real risks. Here's how we protect your business at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="flex gap-4 p-6 rounded-xl border border-brand-border hover:border-brand-blue/30 hover:shadow-md transition-all bg-white">
                <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1.5 text-sm">{item.problem}</h3>
                  <p className="text-brand-mid text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
