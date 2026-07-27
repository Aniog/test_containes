import { Link } from 'react-router-dom'
import PageHero from '@/components/site/PageHero'
import SectionHeading from '@/components/site/SectionHeading'
import ServiceCard from '@/components/site/ServiceCard'
import InquiryForm from '@/components/site/InquiryForm'
import { primaryCtaLabel, services } from '@/data/siteContent'

const Services = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="China sourcing services built for overseas buyers who need local follow-up"
        description="Choose support at the stage you need it most: supplier search, supplier verification, factory audit, quality inspection, production follow-up, or shipping coordination."
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
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              alt="Supplier meeting and product review"
              className="h-full min-h-[340px] w-full object-cover"
              data-strk-img-id="services-hero-image-7fa31b"
              data-strk-img="[services-hero-visual-context] [services-hero-description] [services-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-6">
              <p id="services-hero-visual-context" className="sr-only">
                China supplier meeting factory review product samples and sourcing discussion
              </p>
              <h2 id="services-hero-title" className="text-lg font-semibold text-slate-900">
                Practical support where sourcing decisions carry risk
              </h2>
              <p id="services-hero-description" className="mt-3 text-sm leading-7 text-slate-600">
                Use one service or combine several depending on supplier maturity,
                product complexity, and shipment urgency.
              </p>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core support"
            title="What SSourcing China can handle on your behalf"
            description="Each service is designed to improve clarity and control without overstating what a sourcing agent should promise."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: 'Before order placement',
              description:
                'Supplier search, verification, and factory checks help buyers compare the right options before committing.',
            },
            {
              title: 'During production',
              description:
                'Production follow-up and in-process communication help reduce blind spots, especially across time zones.',
            },
            {
              title: 'Before shipment',
              description:
                'Final inspection and shipment readiness coordination support a cleaner handoff before goods leave China.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <InquiryForm compact />
        </div>
      </section>
    </>
  )
}

export default Services
