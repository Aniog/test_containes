import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import { howItWorksSteps } from "@/data/howItWorks.js"

export default function HowItWorksPreview() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="How it works"
        title="A clear 6-step process, from brief to shipment"
        description="Most projects follow the same path. We share a written plan and a transparent quote before any work begins."
        align="center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {howItWorksSteps.map((step) => (
          <div key={step.id} className="card p-6 md:p-7 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brand-800 font-bold text-sm tracking-wider">
                {step.number}
              </span>
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                {step.duration}
              </span>
            </div>
            <h3 className="h-card">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/how-it-works" className="btn-secondary">
          See the full process
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </Section>
  )
}
