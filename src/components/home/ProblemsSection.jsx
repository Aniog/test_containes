import { AlertTriangle, CheckCircle } from 'lucide-react'

const problems = [
  'Found a supplier online but cannot verify if it is real',
  'Language barriers make negotiation difficult and slow',
  'Received samples that look nothing like the final product',
  'Production delays without clear explanations',
  'Quality issues discovered only after shipment arrives',
  'Confusing shipping paperwork and customs procedures',
]

const solutions = [
  'On-site factory audits and license verification',
  'Bilingual negotiation with clear written agreements',
  'Sample management with detailed spec checklists',
  'Weekly progress reports and milestone tracking',
  'Pre-shipment and during-production inspections',
  'End-to-end logistics with full documentation support',
]

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Sourcing from China can be risky. Here is how we protect your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-red-50 rounded-lg border border-red-100 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Common Sourcing Risks</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-red-700">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 rounded-lg border border-green-100 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">How We Help</h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
