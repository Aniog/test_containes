import { CheckCircle2 } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import CtaBanner from "@/components/sections/CtaBanner"
import { useStrkImages } from "@/lib/useStrkImages"
import { processSteps } from "@/data/content"

function ProcessTimeline() {
  const ref = useStrkImages([])
  return (
    <Section ref={ref}>
      <SectionHeader
        eyebrow="The Process"
        title="From request to shipment, step by step"
        description="Every project follows the same structured path, with a clear deliverable at each stage."
      />
      <div className="mt-12 space-y-6">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="grid gap-6 rounded-xl border border-line bg-white p-6 shadow-sm lg:grid-cols-[auto_1fr_2fr] lg:items-center lg:p-8"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-xl font-extrabold text-white">
              {step.no}
            </span>
            <h3 className="heading-3">{step.title}</h3>
            <p className="text-body">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Deliverables() {
  const items = [
    {
      title: "Supplier shortlist",
      desc: "3–5 qualified suppliers with quotes, capability notes, and a recommendation.",
    },
    {
      title: "Factory audit report",
      desc: "On-site or desktop audit with photos, capacity data, and a go/no-go call.",
    },
    {
      title: "Approved sample & PO",
      desc: "Signed-off sample and a clear purchase order locking specs and terms.",
    },
    {
      title: "Production updates",
      desc: "Weekly progress reports with photos throughout production.",
    },
    {
      title: "Inspection report",
      desc: "AQL pre-shipment inspection report with pass/fail and defect detail.",
    },
    {
      title: "Shipping documents",
      desc: "Booked freight, consolidated cargo, and complete export documentation.",
    },
  ]
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="What You Receive"
        title="A deliverable at every stage"
        description="You're never left guessing about progress. Each step produces a tangible output you can act on."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title}>
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            <h3 className="heading-3 mt-4">{it.title}</h3>
            <p className="mt-2 text-body">{it.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function Timeline() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Typical Timeline"
        title="What to expect, and when"
        description="Timelines vary by product and complexity, but most first-time projects follow this rough shape."
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="space-y-4">
          {[
            { week: "Week 1", text: "Request review and supplier search begins" },
            { week: "Week 2–3", text: "Supplier shortlist and quotes delivered" },
            { week: "Week 3–4", text: "Factory audits and sample coordination" },
            { week: "Week 4–6", text: "Sample approval, PO, and production start" },
            { week: "Production", text: "Weekly updates and staged QC inspections" },
            { week: "Pre-shipment", text: "AQL inspection and freight booking" },
            { week: "Shipping", text: "Consolidation, export docs, and dispatch" },
          ].map((row) => (
            <div
              key={row.week}
              className="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="w-32 shrink-0 text-sm font-bold text-primary">
                {row.week}
              </span>
              <span className="text-body">{row.text}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Indicative only. Your project timeline is confirmed after the initial
          request review.
        </p>
      </div>
    </Section>
  )
}

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A structured sourcing process you can follow"
        description="No black boxes. Each stage has a defined input, action, and deliverable, so you always know where your order stands."
      />
      <ProcessTimeline />
      <Deliverables />
      <Timeline />
      <CtaBanner />
    </>
  )
}
