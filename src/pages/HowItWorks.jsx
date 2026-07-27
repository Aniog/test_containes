import { PROCESS_STEPS } from "@/data/content"
import { PageHeader } from "@/components/shared/PageHeader"
import { SectionHeading } from "@/components/ui/section-heading"
import { CtaSection } from "@/components/shared/CtaSection"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Clock, FileText, MessageSquare } from "lucide-react"

const TIMELINE = [
  { label: "Day 1", text: "You submit your requirements and we confirm scope." },
  { label: "Week 1-2", text: "We research and present a supplier shortlist." },
  { label: "Week 2-4", text: "On-site audits and sample coordination." },
  { label: "Week 4+", text: "Order placed, production tracked, QC run." },
  { label: "On completion", text: "Final inspection, consolidation, and shipping." },
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        bgId="howitworks-header-bg-4d5e6f"
        eyebrow="How it works"
        title="From request to delivery, step by step"
        description="A transparent process designed to give you visibility and control at every stage of sourcing from China."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The process"
            title="Six steps to sourced goods"
            description="Each step has a clear deliverable, so you always know what happens next."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.id}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-2xl font-extrabold text-slate-200">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Timeline"
            title="What to expect and when"
            description="Timelines vary by product and factory, but here is a typical flow."
          />
          <div className="mt-12 space-y-4">
            {TIMELINE.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="w-28 flex-shrink-0 text-sm font-bold text-brand-600">
                  {item.label}
                </span>
                <span className="text-sm text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Working with us"
            title="How we keep you informed"
            description="Clear communication is part of the service, not an extra."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "A dedicated coordinator",
                text: "One person who knows your project and replies in your time zone.",
              },
              {
                icon: FileText,
                title: "Written reports",
                text: "Audit and inspection reports delivered with photos and clear verdicts.",
              },
              {
                icon: Clock,
                title: "Regular updates",
                text: "Progress updates on a schedule you agree to, with no long silences.",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Button as={Link} to="/contact" variant="accent" size="lg">
              Start your sourcing project
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
