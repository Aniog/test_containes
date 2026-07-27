import { Link } from 'react-router-dom'
import PageHero from '@/components/site/PageHero'
import ProcessTimeline from '@/components/site/ProcessTimeline'
import SectionHeading from '@/components/site/SectionHeading'
import { primaryCtaLabel, processSteps } from '@/data/siteContent'

const HowItWorks = () => {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A structured sourcing process from inquiry to shipment readiness"
        description="We keep the sourcing process practical and transparent so buyers understand the purpose of each step, what is being checked, and when action is required."
        actions={[
          <Link
            key="contact"
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            {primaryCtaLabel}
          </Link>,
        ]}
        visual={
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Communication approach
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <li>Clear requirement review before supplier outreach begins</li>
              <li>Structured updates during search, sampling, and production</li>
              <li>Escalation when quality, timing, or factory issues appear</li>
              <li>Practical reporting for overseas procurement teams</li>
            </ul>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: 'For new product sourcing',
              description:
                'Expect more time on supplier search, screening, sampling, and initial communication alignment.',
            },
            {
              title: 'For existing suppliers',
              description:
                'The process may focus more on verification, inspection, production follow-up, or shipment preparation.',
            },
            {
              title: 'For repeat orders',
              description:
                'Support is often lighter and centered on consistency, lead time tracking, and final readiness checks.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Next step"
            title="Ready to discuss your sourcing brief?"
            description="Send the product details, quantity, market, and service scope so we can review fit and the right next steps."
            align="center"
          />
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              {primaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
