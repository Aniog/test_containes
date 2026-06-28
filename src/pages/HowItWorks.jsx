import PageHeader from "@/components/shared/PageHeader"
import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section"
import CtaBand from "@/components/shared/CtaBand"
import { PROCESS_STEPS } from "@/data/content"

const DELIVERABLES = [
  "3–5 vetted supplier shortlist with price and MOQ comparison",
  "On-site factory verification report with photos",
  "Sample coordination and order contract support",
  "Weekly production status updates",
  "AQL pre-shipment inspection report within 24 hours",
  "Freight booking, customs documents, and door-to-door tracking",
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="From request to delivery, step by step"
        description="A transparent process designed to keep you informed and in control at every decision point."
      />

      <Section className="bg-white">
        <SectionContainer>
          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-slate-200 md:block" />
            <ol className="space-y-8">
              {PROCESS_STEPS.map((step) => (
                <li
                  key={step.id}
                  className="relative grid gap-4 md:grid-cols-[56px_1fr] md:gap-8"
                >
                  <div className="flex md:block">
                    <span className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-primary text-lg font-bold text-white shadow-sm">
                      {step.step}
                    </span>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-7">
                    <h2 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </SectionContainer>
      </Section>

      <Section className="bg-slate-50">
        <SectionContainer>
          <SectionHeading
            eyebrow="What You Get"
            title="Deliverables at each stage"
            description="Concrete outputs you can rely on — not just promises."
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <ul className="grid gap-3 sm:grid-cols-2">
              {DELIVERABLES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </SectionContainer>
      </Section>

      <CtaBand />
    </>
  )
}
