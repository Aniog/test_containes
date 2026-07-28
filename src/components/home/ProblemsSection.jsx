import { XCircle, Shield, AlertTriangle, Clock, DollarSign, MessageSquare } from 'lucide-react'

const problems = [
  {
    icon: XCircle,
    problem: 'Unreliable suppliers',
    solution: 'We verify each supplier through factory visits, license checks, and reference validation.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor product quality',
    solution: 'Our inspectors conduct thorough QC checks at every stage of production.',
  },
  {
    icon: Clock,
    problem: 'Production delays',
    solution: 'We monitor production timelines and proactively address bottlenecks.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden costs & fees',
    solution: 'Transparent pricing with no hidden charges. We provide detailed cost breakdowns.',
  },
  {
    icon: MessageSquare,
    problem: 'Language & cultural barriers',
    solution: 'Our bilingual team bridges the communication gap between you and suppliers.',
  },
  {
    icon: Shield,
    problem: 'Supplier fraud or scams',
    solution: 'We conduct background checks and verify business licenses to protect your interests.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Problems We Solve</h2>
        <p className="section-subtitle">
          Sourcing from China comes with challenges. We handle the risks so you can focus on your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {problems.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.problem}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}