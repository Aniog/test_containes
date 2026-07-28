import { AlertTriangle, XCircle, Clock, DollarSign, ShieldAlert, MessageCircle } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Trading companies posing as factories, fake certifications, and suppliers who disappear after payment.',
    solution: 'We verify business licenses, conduct on-site audits, and only work with confirmed manufacturers.',
  },
  {
    icon: XCircle,
    title: 'Quality Issues',
    description: 'Products that don\'t match samples, defective batches, and inconsistent quality across orders.',
    solution: 'Multi-stage inspections with detailed reports before you approve shipment.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Missed deadlines, poor communication, and no visibility into production status.',
    solution: 'Regular factory visits and progress updates so you always know where your order stands.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees, price changes after ordering, and unclear pricing structures.',
    solution: 'Transparent pricing with detailed cost breakdowns before you commit.',
  },
  {
    icon: ShieldAlert,
    title: 'IP & Compliance Risks',
    description: 'Design copying, regulatory non-compliance, and lack of proper documentation.',
    solution: 'NDA agreements, compliance checks, and proper export documentation.',
  },
  {
    icon: MessageCircle,
    title: 'Communication Barriers',
    description: 'Language differences, time zone challenges, and cultural misunderstandings.',
    solution: 'Bilingual team that bridges the gap between you and Chinese suppliers.',
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 id="problems-title" className="section-title">Problems We Solve for Buyers</h2>
          <p id="problems-subtitle" className="section-subtitle">
            Sourcing from China comes with real challenges. Here's how we help you avoid common pitfalls.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="card">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{problem.description}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-sm font-medium">{problem.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
