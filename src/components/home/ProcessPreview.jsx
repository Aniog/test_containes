import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { processSteps } from '@/data/content'

export default function ProcessPreview() {
  return (
    <section id="process" className="py-20 md:py-24 bg-brand-mist">
      <div className="container-page">
        <SectionHeader
          eyebrow="Sourcing Process"
          title="A clear, repeatable workflow"
          description="Six steps from inquiry to delivery. You stay informed at each stage with scheduled updates and written reports."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-white border border-brand-line rounded-xl p-6 md:p-7"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-accent">
                STEP {step.step}
              </p>
              <h3 className="mt-3 text-lg md:text-xl font-semibold text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-2"
          >
            See the full process with examples
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}