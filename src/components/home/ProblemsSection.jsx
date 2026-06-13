import { AlertTriangle, ShieldCheck, TrendingUp, Clock, Users, ThumbsDown } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Scam suppliers & fraud',
    solution: 'We verify every factory in person before engagement.',
  },
  {
    icon: ThumbsDown,
    problem: 'Poor product quality',
    solution: 'Rigorous QC inspections at every production stage.',
  },
  {
    icon: TrendingUp,
    problem: 'Hidden costs & markups',
    solution: 'Transparent pricing with no hidden fees or commissions.',
  },
  {
    icon: Clock,
    problem: 'Missed deadlines',
    solution: 'Regular production tracking and real-time updates.',
  },
  {
    icon: Users,
    problem: 'Language & cultural barriers',
    solution: 'English-speaking team manages all communication.',
  },
  {
    icon: ShieldCheck,
    problem: 'No legal recourse',
    solution: 'Contracts, documentation, and on-the-ground presence protect your interests.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Common Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sourcing from China comes with risks. Here is how we help you avoid them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{item.problem}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}