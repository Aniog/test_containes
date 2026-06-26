import SectionHeader from '../SectionHeader'
import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Hard to find trustworthy suppliers online',
    solution: 'We physically verify every factory before recommending them to you.',
  },
  {
    problem: 'Quality issues discovered too late',
    solution: 'Multi-stage inspections catch defects before goods leave the factory.',
  },
  {
    problem: 'Communication gaps and delays',
    solution: 'Bilingual project managers bridge language and time zone barriers.',
  },
  {
    problem: 'Hidden costs and price surprises',
    solution: 'Transparent pricing with detailed quotations and no hidden fees.',
  },
  {
    problem: 'Production delays and missed deadlines',
    solution: 'Weekly progress reports and on-site follow-ups keep schedules on track.',
  },
  {
    problem: 'Complex shipping and customs paperwork',
    solution: 'We handle documentation, freight booking, and logistics coordination.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          caption="Why Clients Choose Us"
          title="Sourcing Problems We Solve"
          subtitle="Buying from China should not be a gamble. Here is how we remove the common risks and headaches."
        />
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-5 lg:p-6 rounded-xl bg-white border border-border hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 mt-0.5">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-text-primary mb-1">
                  {item.problem}
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
