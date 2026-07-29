import { AlertTriangle, ShieldOff, Clock, Globe, DollarSign, Languages } from 'lucide-react'

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every factory on-site before you place an order.',
  },
  {
    icon: AlertTriangle,
    problem: 'Quality Issues',
    solution: 'Professional QC inspections at every production stage.',
  },
  {
    icon: Clock,
    problem: 'Delayed Shipments',
    solution: 'We track production timelines and push for on-time delivery.',
  },
  {
    icon: Languages,
    problem: 'Language Barriers',
    solution: 'Our bilingual team handles all communication with factories.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying',
    solution: 'Local market knowledge ensures you get competitive pricing.',
  },
  {
    icon: Globe,
    problem: 'Logistics Complexity',
    solution: 'We manage freight, customs, and documentation end-to-end.',
  },
]

const ProblemsWeSolve = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Problems We Solve
          </h2>
          <p className="mt-4 text-text-body text-lg">
            Sourcing from China comes with real challenges. Here's how we address them.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{item.problem}</h3>
                    <p className="mt-1 text-text-body text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemsWeSolve
