import SectionHeading from '@/components/shared/SectionHeading'
import { problemsWeSolve } from '@/data/siteData'
import { AlertTriangle } from 'lucide-react'

export default function ProblemsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={{ text: 'Problems We Solve' }}
          title="Sourcing Risks We Help You Avoid"
          description="International sourcing comes with real challenges. Our process is designed to reduce the risks buyers face most often."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problemsWeSolve.map((problem) => (
            <div
              key={problem.title}
              className="flex gap-4 rounded-xl border-l-4 border-primary bg-gray-50 p-6"
            >
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
