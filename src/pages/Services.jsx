import { serviceDetails, serviceSupportAreas } from '@/content/siteContent'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'

const Services = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Services"
        title="Supplier search, verification, quality control, and shipping support"
        description="We help buyers manage the practical sourcing tasks that sit between an initial inquiry and a shipment that is ready to move."
        titleId="services-hero-title"
        descriptionId="services-hero-description"
        visualId="services-hero-bg-52bf3e"
        visualBadge="Supplier search, factory checks, inspection, and shipment coordination"
        visualNote="A service scope built to reduce uncertainty in supplier selection, production follow-up, quality checks, and shipment preparation."
        chips={serviceDetails.map((item) => item.title)}
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'See How It Works', to: '/how-it-works' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Service scope"
          title="What SSourcing China can help you manage"
          description="These services can be used separately or combined into one sourcing workflow depending on your stage, product complexity, and internal buying resources."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceDetails.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <SectionHeading
            eyebrow="Who this helps"
            title="Useful for different B2B buyer situations"
            description="The exact sourcing support needed depends on whether you are launching a new product, replacing a supplier, scaling orders, or coordinating a multi-factory buying project."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceSupportAreas.map((area) => {
              const Icon = area.icon
              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{area.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{area.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
