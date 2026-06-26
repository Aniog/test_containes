import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, FileText, MessageSquare, PackageCheck, Truck } from "lucide-react"
import PageHero from "@/components/shared/PageHero"
import PageShell from "@/components/shared/PageShell"
import Faq from "@/components/shared/Faq"
import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { PROCESS_STEPS } from "@/data/content"

const DELIVERABLES = [
  {
    icon: FileText,
    title: "Sourcing report",
    body:
      "A written shortlist with 3–5 factories, prices, MOQs, lead times, certifications and our honest recommendation.",
  },
  {
    icon: MessageSquare,
    title: "Weekly production updates",
    body:
      "Photo and video updates from the factory floor so you know what's happening between inspections.",
  },
  {
    icon: PackageCheck,
    title: "Inspection reports",
    body:
      "Detailed AQL-based reports at pre-production, during production (DUPRO) and pre-shipment (PSI), with photos.",
  },
  {
    icon: Truck,
    title: "Shipping documents",
    body:
      "Commercial invoice, packing list, certificate of origin and any product-specific certificates you need.",
  },
]

export default function HowItWorks() {
  useEffect(() => {
    document.title =
      "How It Works | Our China Sourcing Process | SSourcing China"
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="How it works"
        title="A clear, five-step process from inquiry to delivery"
        description="Each step has a clear owner and a written deliverable. No mystery, no missing updates, no chasing suppliers yourself."
      />

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="The process"
            title="Step by step"
            className="mb-12"
          />
          <ol className="space-y-6">
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.step}
                className="grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-12 md:p-8"
              >
                <div className="md:col-span-3">
                  <div className="text-5xl md:text-6xl font-bold text-navy-900/15 leading-none">
                    {step.step}
                  </div>
                  <div className="mt-2 text-xs font-semibold tracking-widest text-amber-600 uppercase">
                    Step {step.step}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-base text-slate-700 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-slate-100">
        <Container>
          <SectionHeading
            eyebrow="What you receive"
            title="Written deliverables at every stage"
            description="Every step ends with a document you can keep — for your records, your finance team, or your customers."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {DELIVERABLES.map((d) => (
              <div
                key={d.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                  <d.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about the process"
            className="mb-10"
          />
          <Faq
            id="how-faq"
            items={[
              {
                q: "How quickly can I get a factory shortlist?",
                a: "For most categories we deliver a shortlist of 3–5 verified factories within 3–5 business days. Complex or specialty items can take a little longer — we'll tell you up front if that's the case.",
              },
              {
                q: "Who owns the supplier relationships?",
                a: "You do. After the project is delivered, you can continue working with the factories directly or through us. We hand over all supplier contact details and quotation records.",
              },
              {
                q: "Can you work with our existing supplier?",
                a: "Yes. Many buyers come to us for QC, production follow-up or shipping support on suppliers they've already chosen. We're happy to step in where it adds value.",
              },
              {
                q: "What happens if a quality issue is found?",
                a: "We document the issue with photos, share the report with the factory, agree on a corrective action plan and re-inspect at the right milestone. The goal is to solve the issue before it reaches your warehouse.",
              },
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-navy-950 text-white">
        <Container className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to start with a written proposal?
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Send your inquiry and we'll come back within one business day
            with a fixed-fee proposal.
          </p>
          <Button
            as={Link}
            to="/contact"
            variant="accent"
            size="lg"
            className="mt-6"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </Section>
    </PageShell>
  )
}