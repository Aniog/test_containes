import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, Container, SectionHeading } from "@/components/ui/Section"
import { PROCESS_STEPS } from "@/data/site"
import { ShieldCheck, MessageSquare, FileText } from "lucide-react"

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="From first brief to delivered goods"
        description="A transparent, stage-by-stage process that keeps you informed and in control at every step of sourcing from China."
      />

      <Section className="bg-white">
        <Container>
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-slate-200 lg:block" />
            <div className="space-y-8">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="relative grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[auto_1fr] lg:gap-8 lg:pl-0"
                >
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2545] text-base font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B2545]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#F5F7FA]">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Working With Us"
            title="What you get at every stage"
            description="Clear communication and documented deliverables throughout your project."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "A dedicated specialist",
                text: "One point of contact who understands your product and manages the project end to end.",
              },
              {
                icon: FileText,
                title: "Documented reporting",
                text: "Supplier comparisons, audit reports, inspection reports, and shipping updates — all in writing.",
              },
              {
                icon: ShieldCheck,
                title: "Decisions stay yours",
                text: "We present options and recommendations, but you approve every supplier, sample, and shipment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <item.icon className="h-7 w-7 text-[#1B6CA8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0B2545]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
