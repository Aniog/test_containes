import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section"
import Icon from "@/components/ui/Icon"
import { PROBLEMS } from "@/data/content"

export default function ProblemsWeSolve() {
  return (
    <Section id="problems" className="bg-slate-50">
      <SectionContainer>
        <SectionHeading
          eyebrow="Problems We Solve"
          title="The risks of sourcing from China — handled"
          description="Most importers run into the same issues. Here's how we keep them from becoming your problems."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.id}
              className="rounded-xl border border-slate-200 bg-white p-6 md:p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-accent-dark">
                <Icon name={problem.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
