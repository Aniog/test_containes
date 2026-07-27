import { PROCESS_STEPS } from "@/data/content"
import PageHeader from "@/components/common/PageHeader"
import CtaBanner from "@/components/common/CtaBanner"

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="A structured path from request to delivery"
        description="Each step has a clear deliverable, so you always know what is happening with your order and what comes next."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-10 border-l border-slate-200 pl-8">
            {PROCESS_STEPS.map((step) => (
              <li key={step.id} className="relative">
                <span className="absolute -left-[2.6rem] flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {step.number}
                </span>
                <h2 className="text-xl font-semibold text-ink md:text-2xl">
                  {step.title}
                </h2>
                <p className="mt-2 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Deliverable
              title="Clear deliverables"
              description="Every step ends with something concrete: a shortlist, an audit report, a sample, an inspection report, or a shipment."
            />
            <Deliverable
              title="Regular updates"
              description="You receive progress updates with photos at key milestones, not just when something goes wrong."
            />
            <Deliverable
              title="One point of contact"
              description="A dedicated coordinator manages suppliers, QC, and logistics so you have one person to talk to."
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want a walkthrough for your product?"
        description="Share your requirements and we will outline the steps, timeline, and deliverables specific to your order."
      />
    </>
  )
}

function Deliverable({ title, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-surface p-6">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  )
}
