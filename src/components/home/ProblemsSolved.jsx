import { AlertTriangle, Clock, DollarSign, Eye, Globe, ShieldOff } from 'lucide-react';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier through background checks, business license review, and on-site factory audits before you commit.',
  },
  {
    icon: Eye,
    problem: 'No Visibility on Production',
    solution: 'Our team provides regular production updates, milestone photos, and reports so you always know the status of your order.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'We conduct pre-production, during-production, and pre-shipment inspections to catch defects before goods leave China.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'Our local market knowledge and supplier relationships help you negotiate fair prices without sacrificing quality.',
  },
  {
    icon: Clock,
    problem: 'Delayed Shipments',
    solution: 'We monitor production timelines and coordinate with freight partners to keep your delivery schedule on track.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team handles all supplier communication in Chinese, eliminating misunderstandings and saving you time.',
  },
];

const ProblemsSolved = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Why Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Problems We Solve for Global Buyers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Sourcing from China comes with real challenges. Here's how SSourcing China helps you navigate them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1.5 text-base">{item.problem}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.solution}</p>
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

export default ProblemsSolved;
