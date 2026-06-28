import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'
import { processSteps } from '@/data/siteContent'

const HowItWorks = () => {
  return (
    <>
      <PageHeader
        baseId="how-it-works-page"
        eyebrow="How it works"
        title="A sourcing workflow built around visibility, control, and practical follow-up"
        description="From the first inquiry to supplier comparison, production follow-up, and shipment readiness, the process stays focused on execution."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="Five stages buyers can follow clearly"
            description="The process is flexible, but these stages reflect how most sourcing and supplier support projects progress in practice."
          />
          <div className="mt-12 space-y-5">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-[120px_1fr] md:p-8"
              >
                <div className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                  Step {step.step}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
