import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import { problemsWeSolve } from "@/data/problems.js"

export default function ProblemsWeSolve() {
  return (
    <Section className="bg-brand-50">
      <SectionHeader
        eyebrow="Problems we solve"
        title="If any of these sound familiar, we can help"
        description="These are the conversations we have most often with first-time buyers sourcing from China."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {problemsWeSolve.map((p) => (
          <div key={p.id} className="card p-6 md:p-7">
            <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
              {p.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
