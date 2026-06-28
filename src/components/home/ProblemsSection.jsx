import { ShieldAlert, XCircle, MessageSquare, TrendingDown } from 'lucide-react'
import { problems } from '@/data/site-data'

const iconMap = { ShieldAlert, XCircle, MessageSquare, TrendingDown }

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            Problems We Solve for You
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Sourcing from China comes with risks. We help you navigate them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem) => {
            const Icon = iconMap[problem.icon] || ShieldAlert
            return (
              <div key={problem.title} className="flex gap-4 bg-white rounded-xl border border-border p-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">{problem.title}</h3>
                  <p className="text-sm text-secondary-text leading-relaxed">{problem.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}