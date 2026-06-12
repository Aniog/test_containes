import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, Package } from 'lucide-react';

const problems = [
  {
    icon: Search,
    problem: 'Can\'t find reliable suppliers',
    solution: 'We maintain a vetted network of 2,000+ factories across China, pre-screened for quality and reliability.',
  },
  {
    icon: ShieldOff,
    problem: 'Worried about factory fraud',
    solution: 'Our on-site factory audits verify business licenses, production capacity, and compliance before you pay.',
  },
  {
    icon: Package,
    problem: 'Received poor-quality goods',
    solution: 'Our QC inspectors check products against your specs before shipment — with photo and video reports.',
  },
  {
    icon: Clock,
    problem: 'Production delays with no updates',
    solution: 'We follow up with factories weekly and send you milestone reports throughout production.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying due to language barriers',
    solution: 'Our bilingual team negotiates directly with suppliers to get you competitive pricing.',
  },
  {
    icon: AlertTriangle,
    problem: 'Shipping and customs confusion',
    solution: 'We handle freight booking, export documentation, and customs clearance coordination end-to-end.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Why Buyers Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Common Sourcing Problems We Solve
          </h2>
          <p className="text-slate-400 text-lg">
            Importing from China comes with real risks. Here's how we protect your business at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.problem} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-600/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-2">"{item.problem}"</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.solution}</p>
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
