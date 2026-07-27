import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { processSteps } from "@/data/content"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

export default function ProcessPreview() {
  const preview = processSteps.slice(0, 4)
  return (
    <Section background="light" id="process">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Sourcing Process
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
            A clear, repeatable process from brief to delivered goods
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            We follow a seven-step process that gives you predictable timelines
            and a clear line of accountability at every stage.
          </p>
          <div className="mt-6">
            <Button to="/how-it-works" variant="navy" size="md">
              See the full process
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="space-y-5">
            {preview.map((step) => (
              <li
                key={step.step}
                className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-lg bg-navy-600 text-white font-bold text-sm">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-600">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm text-slate-500">
            Steps 05-07 cover production follow-up, inspection, and shipping.
            <Link
              to="/how-it-works"
              className="ml-1 font-medium text-navy-600 hover:text-accent-500"
            >
              Read the full process →
            </Link>
          </p>
        </div>
      </div>
    </Section>
  )
}
