import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PROCESS_STEPS } from "@/data/content"
import { Section, SectionHeader } from "@/components/shared/Section"

export default function ProcessOverview() {
  return (
    <Section id="process" className="bg-page">
      <div className="container-x">
        <SectionHeader
          eyebrow="Sourcing process"
          title="A clear, six-step process from inquiry to delivery"
          subtitle="You talk to one project manager in English. We coordinate the rest in China. No ambiguity, no surprise invoices."
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.id}
              id={`step-${step.id}`}
              className="card relative flex flex-col gap-3 p-6"
            >
              <span
                id={`step-${step.id}-num`}
                className="absolute -top-3 left-6 inline-flex h-7 items-center rounded-full bg-navy px-2.5 text-xs font-semibold text-white"
              >
                {step.step}
              </span>
              <h3
                id={`step-${step.id}-title`}
                className="mt-1 text-lg font-semibold text-ink-900"
              >
                {step.title}
              </h3>
              <p
                id={`step-${step.id}-desc`}
                className="text-sm text-ink-700"
              >
                {step.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link to="/how-it-works" className="btn-ghost">
            Read the full step-by-step process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
