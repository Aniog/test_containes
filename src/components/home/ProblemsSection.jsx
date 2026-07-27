import { XCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  {
    problem: 'Finding real manufacturers, not trading companies',
    solution: 'We visit every factory in person and verify business licenses, production lines, and export history.',
  },
  {
    problem: 'Language barriers and time zone differences',
    solution: 'Our bilingual team bridges communication gaps and handles negotiations in real time.',
  },
  {
    problem: 'Uncertain product quality and missed deadlines',
    solution: 'Our QC inspectors enforce AQL standards at every stage and track production progress weekly.',
  },
  {
    problem: 'Complex logistics and customs procedures',
    solution: 'We manage freight, documentation, and customs clearance from factory to your destination.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-xl overflow-hidden"
              data-strk-bg-id="problems-img-a7b8c9"
              data-strk-bg="[problems-subtitle] [problems-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="h-80 lg:h-96 bg-brand-gray-100" />
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
              Problems We Solve
            </h2>
            <p id="problems-subtitle" className="text-lg text-brand-gray-600 mb-10">
              Sourcing from China comes with challenges. We eliminate the risks so you can focus on growing your business.
            </p>

            <div className="space-y-6">
              {problems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5 text-brand-red/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brand-red/80">{item.problem}</p>
                    <div className="flex items-start gap-2 mt-1.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-brand-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
