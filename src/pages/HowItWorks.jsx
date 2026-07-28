import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import InfoCard from '@/components/shared/InfoCard'
import Seo from '@/components/shared/Seo'
import { processSteps, painPoints } from '@/data/siteContent'

function HowItWorks() {
  return (
    <main>
      <Seo
        title="How China Sourcing Works | Supplier Screening to Shipping | SSourcing China"
        description="See the sourcing workflow from project brief and supplier screening to verification, inspections, production follow-up, and shipment coordination."
      />
      <PageHero
        eyebrow="How It Works"
        title="A structured sourcing workflow for supplier selection, quality control, and shipment readiness"
        description="Our process helps buyers move from product brief to supplier screening, verification, quality control, production tracking, and shipment coordination."
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
        theme="dark"
        idPrefix="process-hero"
        visualCue="production follow up quality inspection factory meeting packaging line warehouse export cartons"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Process"
            title="Five steps that make sourcing easier to control"
            description="The exact scope depends on your project, but the process below reflects how we support most buyer engagements."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <InfoCard key={step.step} title={step.title} description={step.description} index={step.step} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What buyers gain"
              title="More practical control over supplier decisions"
              description="A structured workflow helps your team compare options, understand risks, and spot execution issues earlier."
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <ul className="grid gap-4 text-base leading-7 text-slate-700">
                <li>Clearer supplier comparisons before commitment</li>
                <li>Better alignment between samples, approvals, and production</li>
                <li>Earlier warning when timelines or quality are drifting</li>
                <li>More confidence before shipment handover</li>
              </ul>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Typical friction points"
              title="Why many buyers need local follow-through"
              description="These issues are common when sourcing is managed across countries without enough on-the-ground support."
            />
            <div className="mt-8 grid gap-4">
              {painPoints.map((point) => (
                <div key={point} className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-base leading-7 text-slate-700 shadow-sm">
                  {point}
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
