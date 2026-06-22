import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, Package } from 'lucide-react';

const problems = [
  {
    icon: Search,
    problem: 'Can\'t find reliable suppliers',
    solution: 'We maintain a vetted network of 500+ verified manufacturers across China, matched to your product category.',
  },
  {
    icon: ShieldOff,
    problem: 'Worried about factory fraud',
    solution: 'Our on-site factory audits verify business registration, production capacity, and certifications before you pay.',
  },
  {
    icon: Package,
    problem: 'Received poor quality goods',
    solution: 'We conduct pre-shipment inspections against your approved samples and specifications — no surprises on arrival.',
  },
  {
    icon: Clock,
    problem: 'Orders delayed without notice',
    solution: 'Our production follow-up team monitors your order weekly and escalates issues before they become delays.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying due to language barriers',
    solution: 'Our bilingual team negotiates directly with factories in Chinese, securing better prices and terms for you.',
  },
  {
    icon: AlertTriangle,
    problem: 'Confused by shipping & customs',
    solution: 'We coordinate with freight forwarders, prepare export documents, and guide you through import requirements.',
  },
];

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-light-blue text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Problems We Solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Common Sourcing Challenges — Solved
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Importing from China comes with real risks. Here's how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">❌ {item.problem}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="text-green-600 font-medium">✓ </span>
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
}
