import { AlertTriangle, DollarSign, Clock, ShieldOff, Globe, FileX } from 'lucide-react';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We pre-screen and audit every supplier before recommending them, so you only deal with verified, capable factories.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our inspection team checks goods at multiple stages — during production and before shipment — to catch issues early.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'We negotiate directly with factories in Mandarin, leveraging local market knowledge to get you competitive pricing.',
  },
  {
    icon: Clock,
    problem: 'Delayed Deliveries',
    solution: 'We monitor production timelines and follow up with factories regularly to keep your orders on schedule.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team bridges the communication gap, ensuring your requirements are clearly understood by suppliers.',
  },
  {
    icon: FileX,
    problem: 'Customs & Compliance Issues',
    solution: 'We prepare accurate shipping documentation and advise on import regulations to avoid costly customs delays.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Why Use a Sourcing Agent</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Problems We Solve for Buyers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Sourcing from China without local support carries real risks. Here's how we protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1.5">{item.problem}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
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
