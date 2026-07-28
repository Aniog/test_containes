import { Section, SectionHeader, Card } from "@/components/shared/Section"
import { problems } from "@/data/content"

export default function ProblemsSection() {
  return (
    <Section id="problems" className="bg-bg-alt">
      <SectionHeader
        eyebrow="Problems We Solve"
        title="The Risks of Sourcing from China Alone"
        subtitle="Importing directly sounds simple until something goes wrong. Here are the problems we help buyers avoid."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem) => {
          const Icon = problem.icon
          return (
            <Card key={problem.title} className="border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-amber-50 text-accent shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{problem.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
