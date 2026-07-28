import { AlertTriangle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Difficulty finding trustworthy suppliers in China',
    solution: 'We verify every supplier through on-site factory audits, license checks, and reference verification.',
  },
  {
    problem: 'Receiving poor-quality products that don\'t match samples',
    solution: 'Our QC team inspects products at multiple stages — from raw materials to finished goods — before shipping.',
  },
  {
    problem: 'Communication barriers with Chinese factories',
    solution: 'Our bilingual team handles all supplier communication, ensuring nothing is lost in translation.',
  },
  {
    problem: 'Unpredictable shipping delays and customs issues',
    solution: 'We manage the entire logistics chain, including documentation, customs clearance, and freight coordination.',
  },
  {
    problem: 'Unfair pricing and hidden costs from middlemen',
    solution: 'We negotiate directly with factories and provide transparent pricing with no hidden markups.',
  },
  {
    problem: 'No visibility into production progress',
    solution: 'We provide regular production updates with photos and reports so you always know the status of your order.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Why Choose Us</span>
          <h2 id="problems-title" className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Common Sourcing Problems We Solve
          </h2>
          <p id="problems-subtitle" className="mt-4 text-lg text-gray-400">
            Sourcing from China can be risky without local expertise. Here is how we protect your business.
          </p>
        </div>
        
        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/5 border border-white/10 p-6 hover:border-brand-orange/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-400 leading-relaxed">{item.solution}</p>
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
