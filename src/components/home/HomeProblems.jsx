import { PROBLEMS } from "@/data/content"
import SectionHeading from "@/components/common/SectionHeading"

export default function HomeProblems() {
  return (
    <section className="bg-brand-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Common challenges when buying from China"
          description="Importing from China is rewarding but complex. Here is how we help buyers avoid the most common pitfalls."
          light
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.id}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">
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
