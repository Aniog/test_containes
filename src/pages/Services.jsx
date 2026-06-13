import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import SectionShell from '../components/shared/SectionShell.jsx'
import ContentCard from '../components/shared/ContentCard.jsx'
import { services, trustPoints } from '../siteContent.js'

const Services = () => {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Sourcing support designed for practical buying decisions"
        description="We help overseas buyers evaluate suppliers, check factory credibility, inspect quality, follow production, and coordinate shipment preparation with clearer communication from China."
        secondaryHref="/contact"
        secondaryLabel="Discuss Your Requirement"
      />

      <SectionShell>
        <SectionHeading
          eyebrow="What we do"
          title="Services across the sourcing cycle"
          description="Buyers can use one service or combine several depending on the stage of the sourcing project and the level of local support needed."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <ContentCard key={service.title} className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-brand-navy">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </ContentCard>
            )
          })}
        </div>
      </SectionShell>

      <section className="bg-surface-muted">
        <SectionShell>
          <SectionHeading
            eyebrow="Trust points"
            title="Why buyers use a sourcing partner in China"
            description="A sourcing partner becomes most useful when supplier comparison is unclear, follow-up is slow, or factory-side visibility matters before money and timing are committed."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon
              return (
                <ContentCard key={item.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </ContentCard>
              )
            })}
          </div>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </SectionShell>
      </section>
    </main>
  )
}

export default Services
