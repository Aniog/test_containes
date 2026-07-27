import { AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  'Suppliers disappear after receiving deposits',
  'Product quality does not match samples',
  'Production delays with no communication',
  'Hidden costs and unexpected fees',
  'Language barriers and miscommunication',
  'No way to verify factory claims',
]

const solutions = [
  'Verified supplier network with on-site audits',
  'Pre-shipment & in-process quality inspections',
  'Weekly production reports and factory visits',
  'Transparent pricing with no hidden charges',
  'Bilingual project managers for clear communication',
  'Detailed factory verification reports with photos',
]

export default function ProblemsSection() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Problems We Help You Solve
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Sourcing from China comes with real risks. Here is how we protect your business at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Problems */}
          <div className="bg-navy-800/50 rounded-lg p-6 border border-navy-700">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-semibold text-red-300">Common Sourcing Risks</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-navy-800/50 rounded-lg p-6 border border-navy-700">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-semibold text-emerald-300">How We Solve Them</h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
