import { CheckCircle2 } from "lucide-react"
import { problems } from "@/data/content"
import Section from "@/components/ui/Section"

export default function ProblemsSection() {
  return (
    <Section background="light" id="problems">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          Problems We Solve
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
          The most common pain points we hear from overseas buyers
        </h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          If any of these sound familiar, we have probably solved a similar
          problem for another buyer this quarter.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {problems.map((p) => (
          <li
            key={p.title}
            className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-card"
          >
            <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent-500" />
            <div>
              <h3 className="text-base font-semibold text-navy-600">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
