import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { processSteps } from '@/data/siteContent'

const inputsNeeded = [
  'Target product description or reference images',
  'Quantity target, MOQ expectations, or shipment estimate',
  'Quality requirements, certifications, or test standards',
  'Packaging expectations and target market information',
]

const deliverables = [
  'Supplier comparison with practical notes',
  'Risk observations before you commit further',
  'Progress updates during sourcing or production follow-up',
  'Clearer coordination around inspection and shipment readiness',
]

const HowItWorks = () => {
  return (
    <main>
      <PageHero
        slug="how-it-works"
        eyebrow="How it works"
        title="A clear sourcing workflow from supplier search to shipment readiness"
        description="The process is designed to help overseas buyers move step by step, with better supplier visibility and stronger follow-up in China."
        secondaryTo="/services"
        secondaryLabel="View services"
        imageAlt="China sourcing process, supplier selection, and production follow-up"
        imageCaption="A practical workflow covering supplier search, sampling, production follow-up, and shipping coordination."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="Five practical stages"
            description="The exact workflow depends on your product and project stage, but most sourcing projects follow the same operational logic."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Step {step.step}</p>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <SectionHeader
              eyebrow="What we need"
              title="Useful information to start faster"
              description="A clearer product brief leads to better supplier matching and fewer avoidable delays."
            />
            <div className="mt-8 grid gap-4">
              {inputsNeeded.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <SectionHeader
              eyebrow="What you receive"
              title="Clearer decisions and better coordination"
              description="The goal is to help buyers make informed decisions with practical information from the China side."
            />
            <div className="mt-8 grid gap-4">
              {deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowItWorks
