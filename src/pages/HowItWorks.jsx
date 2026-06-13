import CTASection from '../components/common/CTASection.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { processSteps } from '../siteContent.js'
import { usePageMeta } from '../lib/usePageMeta.js'

const HowItWorks = () => {
  usePageMeta(
    'How It Works | SSourcing China',
    'Learn how SSourcing China handles sourcing briefs, supplier screening, verification, production follow-up, inspection, and shipping coordination.',
  )

  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A sourcing workflow built around visibility and control"
        description="We organize the sourcing process into clear steps so overseas buyers can move from inquiry to shipment with better supplier visibility and fewer surprises."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Process overview"
            title="From sourcing brief to shipment handover"
            description="Each sourcing project is different, but the same operational checkpoints matter: supplier fit, verification, quality control, timeline follow-up, and shipping readiness."
            align="center"
          />
          <div className="mt-12 space-y-6">
            {processSteps.map((step) => (
              <article key={step.step} className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[120px_1fr] md:p-8">
                <div className="text-sm font-semibold text-blue-700">Step {step.step}</div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{step.title}</h2>
                  <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default HowItWorks
