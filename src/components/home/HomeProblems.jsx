import SectionHeading from '@/components/ui/SectionHeading'
import { problems } from '@/data/site'

export default function HomeProblems() {
  return (
    <section className="bg-brand-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="The risks of sourcing from China — handled"
          description="Buying direct from factories overseas is full of hidden risk. Here is how we remove the most common ones."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.id}
                className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
