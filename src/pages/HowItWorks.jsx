import PageHero from '@/components/site/PageHero'
import SectionHeading from '@/components/site/SectionHeading'
import ProcessTimeline from '@/components/site/ProcessTimeline'
import InquiryForm from '@/components/site/InquiryForm'
import { processSteps } from '@/content/siteContent'

const HowItWorks = () => {
  return (
    <div>
      <PageHero
        eyebrow="How it works"
        title="A sourcing workflow built for remote buyers"
        description="Our process is designed to help overseas buyers move from inquiry to supplier decision, order execution, and shipment readiness with clearer factory-side visibility."
      />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Workflow"
            title="Six practical stages from brief to shipment"
            description="We keep each stage focused so decisions are easier to make and action points are easier to track with suppliers."
            align="center"
          />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="bg-brand-surface py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Before you order',
              copy: 'Clarify product details, target pricing, supplier fit, samples, and commercial terms before committing to production.',
            },
            {
              title: 'During production',
              copy: 'Track milestone progress, packaging approval, and inspection planning so delays or quality issues are identified earlier.',
            },
            {
              title: 'Before shipment',
              copy: 'Confirm packing, final inspection status, and shipment readiness so the handover to logistics runs more smoothly.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-brand-line bg-white p-6 shadow-card md:p-7">
              <h3 className="text-xl font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-brand-slate">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <InquiryForm compact />
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
