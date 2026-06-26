import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Icon } from "@/components/shared/icons"
import { PROBLEMS } from "@/data/content"

export default function ProblemsSection() {
  return (
    <Section id="problems" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Problems we solve"
          title="The issues overseas buyers run into — and how we handle them"
          description="We've spent 10+ years sourcing from China. These are the same problems showing up again and again — and they're exactly what our service is built to address."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROBLEMS.map((p) => (
            <div
              key={p.problem}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold text-sm">
                  !
                </span>
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  {p.problem}
                </h3>
              </div>
              <div className="mt-4 flex items-start gap-3 border-t border-slate-200 pt-4">
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 text-amber-500 shrink-0"
                />
                <p className="text-sm leading-relaxed text-slate-700">
                  {p.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}