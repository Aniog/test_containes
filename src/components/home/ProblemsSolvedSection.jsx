import { AlertTriangle, Clock, Search, DollarSign, FileX, Globe } from 'lucide-react';

const problems = [
  {
    icon: Search,
    problem: 'Can\'t find reliable suppliers',
    solution:
      'We maintain a vetted network of 500+ verified factories across China, matched to your product category and quality standards.',
  },
  {
    icon: AlertTriangle,
    problem: 'Worried about product quality',
    solution:
      'Our local QC inspectors check goods at every stage — during production, before shipment, and at the port.',
  },
  {
    icon: FileX,
    problem: 'Scammed by fake factories',
    solution:
      'We conduct on-site factory audits and verify business licenses, certifications, and production capabilities before you commit.',
  },
  {
    icon: Clock,
    problem: 'Production delays and missed deadlines',
    solution:
      'Our production follow-up team monitors your order timeline and escalates issues before they become costly delays.',
  },
  {
    icon: DollarSign,
    problem: 'Paying too much for sourcing',
    solution:
      'We negotiate directly with factories on your behalf, leveraging our relationships to secure competitive pricing.',
  },
  {
    icon: Globe,
    problem: 'Language and communication barriers',
    solution:
      'Our bilingual team handles all supplier communication in Chinese, translating everything clearly for you.',
  },
];

const ProblemsSolvedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Problems We Solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common Challenges We Help You Avoid
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Importing from China comes with real risks. Here's how we protect your business at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.problem}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-600 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-900 bg-opacity-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-400 mb-2">❌ {item.problem}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <span className="text-green-400 font-medium">✓ </span>
                      {item.solution}
                    </p>
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

export default ProblemsSolvedSection;
