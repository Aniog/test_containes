import PageMeta from '@/components/shared/PageMeta'
import SectionHeading from '@/components/shared/SectionHeading'
import PageIntro from '@/components/site/PageIntro'
import QuoteBanner from '@/components/site/QuoteBanner'
import { services } from '@/content/siteContent'

const ServicesPage = () => {
  return (
    <>
      <PageMeta
        title="Services | SSourcing China"
        description="Supplier search, factory verification, quality inspection, production follow-up, and shipping coordination support from China."
      />
      <main>
        <PageIntro
          eyebrow="Services"
          title="Sourcing support built around practical execution"
          description="Some buyers need a full sourcing workflow. Others only need local verification, inspection, or production follow-up. We support both."
        />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="What we do"
              title="Services that help buyers make better sourcing decisions"
              description="Every product and supplier situation is different, so the right support scope depends on what risk needs to be reduced."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {services.map((service) => (
                <article key={service.slug} className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-900 shadow-sm">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{service.summary}</p>
                  <p className="mt-4 text-base leading-8 text-slate-700">{service.details}</p>
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

export default ServicesPage
