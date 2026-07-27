import PageHero from '@/components/shared/PageHero.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import { services } from '@/content/siteContent.js'

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="China sourcing services built for overseas buyers"
        titleId="services-hero-title"
        description="Choose support for supplier search, verification, factory audit, quality inspection, production follow-up, and shipping coordination based on your sourcing stage."
        descriptionId="services-hero-desc"
        primaryAction={{ label: 'Get a Free Sourcing Quote', to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'See How It Works', to: '/how-it-works' }}
        imageId="services-hero-bg-b3f1d0"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Focused support for each stage of the sourcing process"
          description="You can use SSourcing China for one specific task or combine services across supplier qualification, quality control, and shipment coordination."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-700">{service.summary}</p>
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 ring-1 ring-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
