import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { processSteps } from "@/data/process"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"

export default function ProcessPreview() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear process from first message to delivery"
          description="Six defined steps with a dedicated project manager keeping you informed at every milestone."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="text-3xl font-bold text-primary-200">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button as={Link} to="/how-it-works" variant="primary" size="lg">
            See the full process
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
