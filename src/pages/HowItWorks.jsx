import CTAButton from '../components/CTAButton.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { processSteps } from '../data/siteData.js'

const HowItWorks = () => {
  return (
    <main>
      <PageHero
        heroId="process-hero"
        eyebrow="How it works"
        title="A clear sourcing process from request to shipment"
        description="SSourcing China keeps supplier research, verification, samples, production tracking, inspection, and shipping coordination organized in a step-by-step workflow."
        imageId="process-production-line-followup-84de31"
        visualHint="production line follow up factory manager checking manufacturing schedule and product samples"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Workflow"
            title="Five practical stages"
            description="The process can be adjusted for new product development, supplier replacement, repeat orders, or urgent QC support."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.number} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm">
                <p className="text-3xl font-bold text-blue-700/20">{step.number}</p>
                <h2 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">Communication</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">You receive structured updates, not vague promises</h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              We focus on specific supplier answers, practical risk notes, photos when relevant, and clear next steps so overseas buyers can make informed decisions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Supplier comparison notes', 'Factory verification checklist', 'Sample and packaging comments', 'Production milestone updates', 'Inspection coordination', 'Shipment handover details'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-10 text-center shadow-soft sm:px-10">
          <h2 className="text-3xl font-bold text-slate-900">Ready to review a sourcing project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Send your product information, quantity, target market, and any supplier links or sample references you already have.
          </p>
          <div className="mt-7">
            <CTAButton />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowItWorks
