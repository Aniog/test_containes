import { Section, SectionHeader } from '@/components/ui/Section'
import Icon from '@/components/ui/Icon'
import { PROBLEMS } from '@/content'

export default function HomeProblems() {
  return (
    <Section muted>
      <SectionHeader
        eyebrow="Problems We Solve"
        title="Common risks when sourcing from China"
        description="Buying overseas is full of hidden risks. Here are the problems we help you avoid."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem) => (
          <div
            key={problem.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon name={problem.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">
              {problem.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
