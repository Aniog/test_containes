import { AlertTriangle } from "lucide-react"
import { problems } from "@/data/problems"
import { Container, SectionHeader } from "@/components/shared/Section"

export default function HomeProblems() {
  return (
    <section className="py-16 md:py-24 bg-brand-dark text-white">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Problems We Solve
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Sourcing from China is full of hidden risks. We manage them for you.
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
            Most buyers lose money not on price, but on the problems that appear
            between the quote and the delivery. Here is where we add value.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <AlertTriangle className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
