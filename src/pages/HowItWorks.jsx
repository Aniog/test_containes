import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import StockImage from '@/components/shared/StockImage'
import { processSteps } from '@/data/content'

const expectations = [
  {
    title: 'You will always know what is happening',
    description:
      'Every project has a single point of contact and a shared update schedule. No chasing, no guessing.',
  },
  {
    title: 'Decisions stay with you',
    description:
      'We present options, recommend a path, and wait for your go-ahead before spending money on your behalf.',
  },
  {
    title: 'Numbers and timelines are real',
    description:
      'We quote, sample, and deliver based on what factories can actually do — not on optimistic forecasts.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A clear, six-step sourcing process"
        description="From your first inquiry to goods arriving at your warehouse, each step is defined and tracked. Here is what to expect when you work with us."
        image={{
          imgId: 'how-hero-bg-4c8b2a',
          query: '[how-hero-title]',
        }}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="The Process"
            title="Six steps, end to end"
            description="A predictable workflow so you always know what comes next."
          />

          <div className="mt-12 md:mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-line hidden md:block" />
            <ol className="space-y-8 md:space-y-12">
              {processSteps.map((step, idx) => {
                const isEven = idx % 2 === 1
                return (
                  <li
                    key={step.step}
                    className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                      isEven ? '' : ''
                    }`}
                  >
                    <div className={`hidden md:block ${isEven ? 'md:order-2' : ''}`}>
                      <StockImage
                        imgId={`how-step-${step.step}-img-${idx}`}
                        query={`[how-step-${step.step}-title]`}
                        ratio="4x3"
                        width={700}
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div className={`${isEven ? 'md:order-1' : ''}`}>
                      <div className="bg-white border border-brand-line rounded-xl p-6 md:p-8 relative">
                        <div className="absolute -left-3 top-8 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent text-white text-xs font-bold ring-4 ring-white">
                          {step.step}
                        </div>
                        <h3
                          id={`how-step-${step.step}-title`}
                          className="text-xl md:text-2xl font-bold text-brand-ink"
                        >
                          {step.title}
                        </h3>
                        <p className="mt-3 text-base md:text-lg text-brand-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-mist">
        <div className="container-page">
          <SectionHeader
            eyebrow="What You Can Expect"
            title="Three things we commit to on every project"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {expectations.map((e) => (
              <div
                key={e.title}
                className="bg-white border border-brand-line rounded-xl p-6 md:p-7"
              >
                <h3 className="text-lg md:text-xl font-semibold text-brand-ink">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-ink text-white">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto">
            Ready to start your sourcing project?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Send us your product details. A sourcing manager will reply within
            one business day.
          </p>
          <div className="mt-8">
            <Button as={Link} to="/contact" size="xl">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}