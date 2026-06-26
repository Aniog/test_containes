import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, Globe } from 'lucide-react';

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We vet every supplier through background checks, factory audits, and reference verification before recommending them.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our in-line and pre-shipment inspections catch defects before goods leave the factory, saving you costly returns.',
  },
  {
    icon: Clock,
    problem: 'Production Delays',
    solution: 'We monitor production schedules and communicate directly with factories to keep your orders on track.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'Our local market knowledge and supplier relationships help you negotiate fair prices without sacrificing quality.',
  },
  {
    icon: Search,
    problem: 'Difficulty Finding Suppliers',
    solution: 'We have an established network across Guangdong, Zhejiang, Fujian, and other key manufacturing regions.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team bridges communication gaps, ensuring your requirements are clearly understood by suppliers.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f4f6f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Why Work With Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">
            Problems We Solve for Importers
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base leading-relaxed">
            Sourcing from China comes with real challenges. Here's how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white rounded-xl border border-[#dde3ec] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0d2340] mb-2">{item.problem}</h3>
                    <p className="text-[#5a6a7e] text-sm leading-relaxed">{item.solution}</p>
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
