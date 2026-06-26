import { Section, Container, SectionHeading } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { PROCESS_STEPS } from "@/data/site"
import { ArrowRight } from "lucide-react"

export default function HomeProcess() {
  return (
    <Section className="bg-[#F5F7FA]">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="A clear process from brief to delivery"
          description="Six structured stages keep your sourcing project transparent, on schedule, and under control."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl font-bold text-[#1B6CA8]/30">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-[#0B2545]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/how-it-works" variant="primary" size="lg">
            See the full process
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
