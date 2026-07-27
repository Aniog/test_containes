import { PROBLEMS } from "@/data/content"
import { SectionHeading } from "@/components/ui/section-heading"

export function HomeProblems() {
  return (
    <section className="bg-brand-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Common risks when importing from China"
          description="Most sourcing problems come from information gaps. We close those gaps with on-the-ground verification and clear reporting."
          light
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-400/20 text-accent-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeProblems
