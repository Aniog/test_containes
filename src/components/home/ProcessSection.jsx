import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { PROCESS_STEPS } from "@/data/content"

export default function ProcessSection() {
  return (
    <Section id="process" className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="How it works"
              title="A clear five-step process from inquiry to delivery"
              description="Each step is owned by a named team member who keeps you updated in English. Nothing is hidden behind a Chinese-only chat thread."
            />
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <Button as={Link} to="/how-it-works" variant="darkOutline" size="lg">
              Read the full process
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.step}
              className="relative h-full rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="text-xs font-semibold tracking-widest text-amber-600 uppercase">
                Step {step.step}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {step.body}
              </p>
              {i < PROCESS_STEPS.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300"
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}