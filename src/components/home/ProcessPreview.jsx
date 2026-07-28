import { Section, SectionHeader } from "@/components/shared/Section"
import { processSteps } from "@/data/content"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Button from "@/components/ui/button"

export default function ProcessPreview() {
  const steps = processSteps.slice(0, 4)
  return (
    <Section id="process" className="bg-bg-alt">
      <SectionHeader
        eyebrow="How It Works"
        title="A Clear Process From Inquiry to Delivery"
        subtitle="No black boxes. You always know where your order stands and what happens next."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <div
              key={step.step}
              className="relative rounded-2xl border border-line bg-surface p-6 shadow-sm"
            >
              <span className="absolute -top-3 -right-3 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-bold">
                {step.step}
              </span>
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-primary mb-4">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="text-base font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <Button as={Link} to="/how-it-works" variant="secondary">
          See the Full 8-Step Process <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Section>
  )
}
