import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/site'

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          label="How It Works"
          title="A Simple, Transparent Sourcing Process"
          description="Our six-step process is designed to reduce risk, save time, and give you visibility at every stage."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="relative flex gap-5">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                {step.step}
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-12 w-full h-px bg-neutral-200 -z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
          >
            See the full process <span className="ml-1">→</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
