import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { PROCESS_STEPS } from "@/data/content"

export default function ProcessPreview() {
  return (
    <Section id="process" className="bg-slate-50">
      <SectionContainer>
        <SectionHeading
          eyebrow="How It Works"
          title="A clear process from request to delivery"
          description="Six practical steps that keep your project visible and on track. You stay in control at every decision point."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.id}
              className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-7"
            >
              <span className="text-3xl font-extrabold text-primary/15">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/how-it-works" variant="secondary">
            See the Full Process
          </Button>
        </div>
      </SectionContainer>
    </Section>
  )
}
