import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processSteps, site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function HowItWorks() {
  const containerRef = useStrkImages()

  return (
    <div ref={containerRef}>
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-wide text-accent font-semibold text-sm mb-4">
              Process
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">How SSourcing China Works</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              A clear, repeatable process built to reduce risk and keep your order moving forward.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            label="Step by Step"
            title="From Inquiry to Delivery"
            description="Each step includes documented checks, photos, and direct communication with your project manager."
          />

          <div className="mt-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 md:items-center ${
                    idx !== 0 ? 'md:mt-16' : ''
                  }`}
                >
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <div
                      className="rounded-xl bg-neutral-100 h-56 md:h-72 bg-cover bg-center shadow-sm"
                      data-strk-bg-id={`process-bg-step-${step.step}-c1d2e3`}
                      data-strk-bg={`[process-step-${step.step}-title] [process-step-${step.step}-desc]`}
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="800"
                    />
                  </div>
                  <div className={`mt-6 md:mt-0 ${idx % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold mb-4 ${
                        idx % 2 === 1 ? 'md:ml-auto' : ''
                      }`}
                    >
                      {step.step}
                    </div>
                    <h2
                      id={`process-step-${step.step}-title`}
                      className="text-2xl font-bold text-neutral-900 mb-3"
                    >
                      {step.title}
                    </h2>
                    <p
                      id={`process-step-${step.step}-desc`}
                      className="text-neutral-600 leading-relaxed"
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button as={Link} to="/contact" variant="accent" size="lg">
              {site.cta}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
