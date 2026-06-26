import { XCircle, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const problems = [
  {
    pain: 'Suppliers disappear after payment',
    fix: 'We verify business licenses, factory ownership, and production capacity before you commit.',
  },
  {
    pain: 'Quality does not match the sample',
    fix: 'Our inspectors check materials, workmanship, and packaging against your specifications.',
  },
  {
    pain: 'Production delays kill your launch',
    fix: 'We monitor every milestone and escalate issues early to keep your timeline intact.',
  },
  {
    pain: 'Shipping and customs are confusing',
    fix: 'We coordinate freight, documentation, and consolidation so goods arrive on time.',
  },
]

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="The risks of sourcing from China — managed for you"
          description="Buying directly from overseas suppliers can be unpredictable. We remove the common pain points before they cost you money."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl border border-slate-200 bg-slate-50"
            >
              <div className="shrink-0 mt-0.5">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {item.pain}
                </h3>
                <div className="mt-3 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {item.fix}
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
