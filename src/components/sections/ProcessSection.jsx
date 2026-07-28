import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { processSteps } from "@/data/content"

export default function ProcessSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear process from request to delivery"
          description="Six structured steps keep your project transparent, on schedule, and under control at every milestone."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="text-3xl font-bold text-slate-200">{step.step}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button as={Link} to="/how-it-works" variant="secondary">
            See the full process
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
