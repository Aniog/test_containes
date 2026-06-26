import { AlertTriangle, ThumbsUp, Shield, Clock, DollarSign, MessageSquare } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    solution: 'We verify factories in person, checking licenses, capacity, and track records before introduction.',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    icon: Shield,
    problem: 'Quality Concerns',
    solution: 'Rigorous inspections at multiple stages ensure products meet agreed specifications and standards.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Clock,
    problem: 'Delayed Production',
    solution: 'Regular on-site monitoring and milestone tracking keep production on schedule.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: MessageSquare,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team bridges communication gaps between you and Chinese manufacturers.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: DollarSign,
    problem: 'Hidden Costs',
    solution: 'Transparent pricing with clear fee structure — no surprises, no markups on factory quotes.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: ThumbsUp,
    problem: 'Scam & Fraud Risk',
    solution: 'We mitigate risk through thorough due diligence, verified payments, and legal documentation support.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sourcing from China comes with challenges. Here is how we address the most common ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white rounded-xl border border-slate-200 p-6">
              <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-3`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{item.problem}</h3>
              <p className="text-sm text-slate-600">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}