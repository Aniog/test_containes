import React from 'react'
import { 
  AlertTriangle, CheckCircle, XCircle 
} from 'lucide-react'

const problems = [
  {
    problem: 'Unreliable suppliers who disappear after receiving payment',
    solution: 'We verify every supplier with on-site factory visits and background checks before you place any orders.',
    icon: AlertTriangle,
  },
  {
    problem: 'Poor product quality that doesn\'t match samples',
    solution: 'Our QC team inspects products at multiple stages — from raw materials to finished goods — ensuring consistency.',
    icon: AlertTriangle,
  },
  {
    problem: 'Communication barriers and language differences',
    solution: 'Our bilingual team handles all supplier communications, negotiations, and issue resolution on your behalf.',
    icon: AlertTriangle,
  },
  {
    problem: 'Hidden costs and unexpected price increases',
    solution: 'We provide transparent pricing with detailed cost breakdowns and negotiate fixed prices before production begins.',
    icon: AlertTriangle,
  },
  {
    problem: 'Production delays and missed deadlines',
    solution: 'Regular production monitoring and progress tracking ensure your orders ship on time, every time.',
    icon: AlertTriangle,
  },
  {
    problem: 'Complex shipping and customs documentation',
    solution: 'We handle all logistics, paperwork, and customs clearance for smooth door-to-door delivery.',
    icon: AlertTriangle,
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-white">Problems We Solve</h2>
          <p className="text-gray-300">
            Sourcing from China comes with challenges. Here's how we help you 
            overcome them and protect your business.
          </p>
        </div>

        <div className="grid-2 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 mb-4">{item.problem}</p>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <p className="text-white font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
