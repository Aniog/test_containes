import { AlertCircle, Check } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/Section"
import { problems } from "@/data/content"

export function ProblemsSection() {
  return (
    <Section bg="navy" id="problems" className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Problems we solve"
            title="The same issues cost overseas buyers time and money every week"
            subtitle="These are the most common problems we hear from new clients — and the way we prevent or fix each one in our standard workflow."
            align="left"
            invert
            className="!max-w-none"
          />
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-navy-800 border border-navy-700 text-sm text-navy-50">
            <Check className="w-4 h-4 text-accent-300" />
            Practical solutions, not promises.
          </div>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <li
                key={i}
                className="rounded-lg bg-navy-800/60 border border-navy-700 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md bg-navy-900/60 border border-navy-700">
                    <AlertCircle className="w-4 h-4 text-accent-300" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-navy-100 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default ProblemsSection
