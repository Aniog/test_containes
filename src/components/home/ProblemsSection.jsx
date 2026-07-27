import { AlertTriangle, XCircle, Clock, DollarSign, CheckCircle } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    description: 'Many buyers struggle to verify if a supplier is legitimate or a trading company posing as a factory.',
    solution: 'We conduct on-site factory audits and verify business licenses, production capacity, and certifications.',
  },
  {
    icon: XCircle,
    problem: 'Quality Issues',
    description: 'Without local inspection, defective products may ship, leading to returns and lost revenue.',
    solution: 'Our QC team performs pre-production, in-process, and pre-shipment inspections with detailed reports.',
  },
  {
    icon: Clock,
    problem: 'Production Delays',
    description: 'Lack of visibility into production progress can cause missed deadlines and stock-outs.',
    solution: 'We provide regular progress updates and timeline monitoring to keep your orders on track.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden Costs',
    description: 'Unexpected fees for shipping, customs, and quality issues can destroy profit margins.',
    solution: 'Transparent pricing with all costs outlined upfront. No surprises, no hidden charges.',
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Problems We Solve for Global Buyers</h2>
          <p className="section-subtitle">
            Sourcing from China can be challenging. We remove the risks and complexities so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.problem}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                </div>
              </div>
              <div className="ml-16 pl-4 border-l-2 border-green-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
