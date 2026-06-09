import PageMeta from '@/components/shared/PageMeta'
import SectionHeading from '@/components/shared/SectionHeading'
import PageIntro from '@/components/site/PageIntro'
import QuoteBanner from '@/components/site/QuoteBanner'
import { processSteps } from '@/content/siteContent'

const HowItWorksPage = () => {
  return (
    <>
      <PageMeta
        title="How It Works | SSourcing China"
        description="Learn how SSourcing China supports global buyers through supplier search, verification, quality control, production follow-up, and shipping coordination."
      />
      <main>
        <PageIntro
          eyebrow="How it works"
          title="A clear process from sourcing brief to shipment readiness"
          description="Our role is to help buyers stay better informed, better organized, and better supported while working with suppliers in China."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Process"
              title="How a typical sourcing project moves forward"
              description="The exact flow depends on your product and current stage, but these are the core steps most buyers need."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-5">
              {processSteps.map((step) => (
                <article key={step.number} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{step.number}</p>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <QuoteBanner />
      </main>
    </>
  )
}

export default HowItWorksPage
