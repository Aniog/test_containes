import { XCircle, AlertTriangle, TrendingDown, Clock, MessageSquare, DollarSign } from 'lucide-react'

const problems = [
  {
    icon: XCircle,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every factory in person before engagement.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Rigorous inspections at every production stage.',
  },
  {
    icon: TrendingDown,
    problem: 'Missed Deadlines',
    solution: 'Real-time production tracking and proactive updates.',
  },
  {
    icon: Clock,
    problem: 'Communication Barriers',
    solution: 'English-speaking account managers bridge the gap.',
  },
  {
    icon: MessageSquare,
    problem: 'Hidden Costs',
    solution: 'Transparent pricing with no surprise fees.',
  },
  {
    icon: DollarSign,
    problem: 'Payment Risks',
    solution: 'Secure payment terms and escrow options available.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="problems-section-title">
            Problems We Solve
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sourcing from China comes with challenges. We handle the risks so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="bg-white rounded-xl p-6 border border-neutral-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.problem}</h3>
                  <p className="text-sm text-neutral-600">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}