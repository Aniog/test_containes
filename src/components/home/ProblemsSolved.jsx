import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, FileX } from 'lucide-react';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We audit every factory before recommending them — checking licenses, capacity, and past performance.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our inspectors check goods at multiple stages: pre-production, during production, and before shipment.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'We follow up with factories weekly and escalate issues early so your delivery schedule stays on track.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'We negotiate directly with manufacturers using local market knowledge to get you competitive pricing.',
  },
  {
    icon: Search,
    problem: 'Difficulty Finding Suppliers',
    solution: 'We tap into our network of 500+ verified suppliers across Shenzhen, Yiwu, Guangzhou, and beyond.',
  },
  {
    icon: FileX,
    problem: 'Customs & Documentation Issues',
    solution: 'We prepare accurate export documents and coordinate with freight forwarders to prevent clearance delays.',
  },
];

export default function ProblemsSolved() {
  return (
    <section className="py-16 md:py-24 bg-lightblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Why Work With Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Problems We Solve for Global Buyers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Sourcing from China without local expertise can be costly and risky. Here's how we protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-base mb-1.5">{item.problem}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
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
