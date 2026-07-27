import PageHero from '@/components/shared/PageHero.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import { processSteps } from '@/content/siteContent.js'

function HowItWorksPage() {
  return (
    <div>
      <PageHero
        eyebrow="How It Works"
        title="A practical sourcing workflow from brief to shipment"
        titleId="how-hero-title"
        description="We keep the sourcing process structured, documented, and easier to follow so overseas buyers can move forward with better visibility."
        descriptionId="how-hero-desc"
        primaryAction={{ label: 'Get a Free Sourcing Quote', to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'View Services', to: '/services' }}
        imageId="how-hero-bg-c2f4a1"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Process"
          title="Five key steps buyers can expect"
          description="Each sourcing project is different, but a clear structure helps keep supplier selection, production follow-up, inspection, and shipment coordination aligned."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {processSteps.map((step) => (
            <article key={step.step} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-700">
                  {step.step}
                </div>
                <h2 className="text-xl font-semibold text-slate-950">{step.title}</h2>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-700">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage
