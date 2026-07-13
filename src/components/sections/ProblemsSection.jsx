import { PROBLEMS } from '@/data/content'
import { Section, SectionHeader } from '@/components/ui/Section'

export default function ProblemsSection() {
  return (
    <Section id="problems" className="bg-slate-50">
      <SectionHeader
        eyebrow="Problems We Solve"
        title="Common risks when sourcing from China"
        description="Importing remotely is risky. Here are the problems we help buyers avoid."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p) => {
          const Icon = p.icon
          return (
            <div key={p.title} className="card p-6 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
