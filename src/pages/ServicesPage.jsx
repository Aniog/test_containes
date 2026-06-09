import CTASection from '@/components/site/CTASection'
import PageIntro from '@/components/site/PageIntro'
import { services } from '@/data/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

const supportScenarios = [
  {
    title: 'Before supplier selection',
    description:
      'Useful when you need help screening suppliers, checking whether a factory is suitable, or understanding which option looks safer.',
  },
  {
    title: 'During sampling and production',
    description:
      'Helpful when you need clearer communication, milestone follow-up, and a more structured view of quality risks before shipment.',
  },
  {
    title: 'Before shipment handover',
    description:
      'Important when you want packing, documentation, inspection timing, and logistics coordination reviewed before goods leave China.',
  },
]

const ServicesPage = () => {
  usePageMeta(
    'Services | SSourcing China',
    'Explore supplier search, verification, factory audit, quality control, production follow-up, and shipping coordination services from SSourcing China.'
  )

  return (
    <main>
      <PageIntro
        description="We support overseas buyers at the stages where sourcing decisions, factory checks, quality control, and production follow-up matter most."
        eyebrow="Services"
        idPrefix="services-page"
        points={[
          'Supplier search and shortlisting',
          'Verification and factory checks',
          'Quality control and shipping coordination',
        ]}
        title="Practical sourcing services for buyers working with China suppliers"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.map((service) => (
            <article
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm md:p-8"
              key={service.slug}>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {service.description}
              </p>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-700">
                {service.points.map((point) => (
                  <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              When buyers use this support
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Support can be used as a full sourcing workflow or for specific tasks
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {supportScenarios.map((scenario) => (
              <article
                className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
                key={scenario.title}>
                <h3 className="text-xl font-semibold text-slate-950">{scenario.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {scenario.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default ServicesPage
