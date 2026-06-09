import CTASection from '@/components/site/CTASection'
import PageIntro from '@/components/site/PageIntro'
import { processSteps } from '@/data/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

const buyerInputs = [
  'Product details, specifications, or sample references',
  'Target order quantity, budget range, and required timeline',
  'Quality expectations, certifications, or destination-market needs',
  'Known supplier issues or sourcing concerns you want reviewed',
]

const HowItWorksPage = () => {
  usePageMeta(
    'How It Works | SSourcing China',
    'Learn the sourcing process used by SSourcing China, from inquiry and supplier screening to QC and shipment coordination.'
  )

  return (
    <main>
      <PageIntro
        description="A sourcing project works better when the process is transparent. We keep the workflow structured so buyers know what is being checked, when feedback is needed, and how decisions move forward."
        eyebrow="How it works"
        idPrefix="how-it-works"
        points={[
          'Clear stages and decision points',
          'Visibility during production and quality checks',
          'Practical handover into shipment readiness',
        ]}
        title="A step-by-step sourcing workflow for overseas buyers"
      />

      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {processSteps.map((step) => (
            <article
              className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 text-white shadow-sm"
              key={step.number}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Step {step.number}
              </p>
              <h2 className="mt-5 text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              A stronger inquiry helps
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              What buyers should prepare before the sourcing process begins
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Better inputs usually lead to faster supplier screening, clearer comparisons, and fewer misunderstandings later.
            </p>
          </div>

          <div className="grid gap-4">
            {buyerInputs.map((item) => (
              <div
                className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base leading-7 text-slate-700"
                key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default HowItWorksPage
