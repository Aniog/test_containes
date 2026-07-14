import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, Package } from 'lucide-react';

const problems = [
  {
    icon: Search,
    problem: 'Can\'t find reliable suppliers',
    solution: 'We maintain a vetted network of 500+ manufacturers across China, pre-screened for quality and reliability.',
  },
  {
    icon: ShieldOff,
    problem: 'Worried about factory fraud',
    solution: 'Our team conducts on-site audits and verifies business licenses, certifications, and production capacity.',
  },
  {
    icon: Package,
    problem: 'Received poor quality goods',
    solution: 'We perform pre-shipment inspections and during-production checks to catch defects before they ship.',
  },
  {
    icon: Clock,
    problem: 'Production delays and missed deadlines',
    solution: 'A dedicated project manager monitors your order timeline and escalates issues before they become problems.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying due to language barriers',
    solution: 'Our bilingual team negotiates directly with factories in Chinese, securing better pricing and terms.',
  },
  {
    icon: AlertTriangle,
    problem: 'Confused by shipping and customs',
    solution: 'We handle freight coordination, export documentation, and customs clearance so you don\'t have to.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">Common Challenges</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Problems We Solve for Importers
          </h2>
          <p className="text-blue-200 text-lg mt-4 max-w-2xl mx-auto">
            Sourcing from China comes with real risks. Here's how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2">{item.problem}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{item.solution}</p>
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
