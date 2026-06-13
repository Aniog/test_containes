import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero.jsx'
import ContentCard from '../components/shared/ContentCard.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import SectionShell from '../components/shared/SectionShell.jsx'
import { processSteps } from '../siteContent.js'

const HowItWorks = () => {
  return (
    <main>
      <PageHero
        eyebrow="How It Works"
        title="A sourcing workflow built around buyer visibility"
        titleId="how-it-works-hero-title"
        description="SSourcing China follows a practical sourcing process so buyers know what information is needed, when suppliers are being checked, and how quality or timing issues are escalated."
        descriptionId="how-it-works-hero-description"
        secondaryHref="/services"
        secondaryLabel="View Services"
      />

      <SectionShell>
        <SectionHeading
          eyebrow="Process"
          title="Five stages from brief to shipment readiness"
          description="Each sourcing project is different, but the overall workflow stays structured so communication remains clear for overseas teams."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step) => (
            <ContentCard key={step.step} className="h-full">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-amber">Step {step.step}</p>
              <h2 className="mt-4 text-xl font-semibold text-brand-navy">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <section className="bg-surface-muted">
        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Built for cross-border teams"
                title="What overseas buyers usually want from the process"
                description="Most buyers want clear next steps, timely updates, less uncertainty about suppliers, and earlier warnings if quality or timing risks appear."
              />
              <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-700">
                <li>• Clear supplier comparison instead of scattered quotations</li>
                <li>• Better visibility before deposits and production approvals</li>
                <li>• Follow-up support when factory communication slows down</li>
                <li>• Practical reporting before shipment is released</li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
                >
                  Get a Free Sourcing Quote
                </Link>
              </div>
            </div>

            <div
              className="min-h-[420px] rounded-3xl border border-surface-border bg-white bg-cover bg-center shadow-soft"
              data-strk-bg-id="how-it-works-visual-9f3a7b"
              data-strk-bg="[how-it-works-hero-description] [how-it-works-hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1000"
            />
          </div>
        </SectionShell>
      </section>
    </main>
  )
}

export default HowItWorks
