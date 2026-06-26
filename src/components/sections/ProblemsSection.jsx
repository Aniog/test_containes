import * as Icons from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { problems } from "@/data/site"

export default function ProblemsSection() {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Problems We Solve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Common risks when sourcing from China — and how we handle them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Buying remotely comes with real risks. Here is how our on-the-ground team addresses the ones buyers run into most.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => {
            const Icon = Icons[p.icon] ?? Icons.AlertTriangle
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 md:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/20 text-blue-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
