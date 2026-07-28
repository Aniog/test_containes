import { AlertTriangle, XCircle, Clock, DollarSign, Shield, CheckCircle } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    description: 'Many online suppliers exaggerate capabilities or are trading companies posing as factories.',
    solution: 'We conduct on-site factory audits to verify real production capacity and business credentials.',
  },
  {
    icon: XCircle,
    problem: 'Quality Issues',
    description: 'Products may not match samples or specifications, leading to costly returns and delays.',
    solution: 'Multi-stage quality inspections catch defects before shipment, protecting your investment.',
  },
  {
    icon: Clock,
    problem: 'Communication Barriers',
    description: 'Language differences and time zones make it hard to manage production effectively.',
    solution: 'Our bilingual team bridges the gap with clear, timely communication and regular updates.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden Costs',
    description: 'Unexpected fees for tooling, packaging, or logistics can blow your budget.',
    solution: 'Transparent pricing with detailed cost breakdowns before you commit to any order.',
  },
];

export default function ProblemsWeSolve() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Problems We Solve</h2>
          <p className="section-subtitle mx-auto">
            Sourcing from China comes with challenges. We handle the hard parts so you can focus on growing your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.problem}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <div className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
