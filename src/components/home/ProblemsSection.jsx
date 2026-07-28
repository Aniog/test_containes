import { AlertTriangle } from "lucide-react"
import { problems } from "@/data/problems"
import { SectionHeading } from "@/components/ui/section-heading"

export default function ProblemsSection() {
  return (
    <section className="bg-primary-900 py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-400">
            Problems We Solve
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Common risks when buying from China - and how we handle them
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-200 sm:text-lg">
            Most import problems come from the same few gaps. Here's what goes
            wrong and how our process closes each one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="rounded-xl border border-primary-800 bg-primary-800/50 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-200">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
