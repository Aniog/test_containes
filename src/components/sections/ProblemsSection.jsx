import { SectionHeading } from "@/components/ui/section-heading"
import { problems } from "@/data/content"

export default function ProblemsSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="Common sourcing risks, handled"
          description="Buying directly from China is full of hidden risks. Here's how we address the ones that cost buyers the most."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  The risk
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.problem}</p>
              </div>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Our approach
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{p.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
