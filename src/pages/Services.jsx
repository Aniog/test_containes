import CTAButton from '../components/CTAButton.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { services, trustPoints } from '../data/siteData.js'

const Services = () => {
  return (
    <main>
      <PageHero
        heroId="services-hero"
        eyebrow="Services"
        title="China sourcing services for practical buying control"
        description="Use SSourcing China for supplier sourcing, factory verification, quotation comparison, sample follow-up, QC inspection, production tracking, and shipping coordination."
        imageId="services-factory-qc-inspection-7c2f19"
        visualHint="factory inspection quality control engineer checking products in China manufacturing workshop"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="Support for every major sourcing stage"
            description="Our services are designed for overseas buyers who need local China coordination without losing visibility over supplier decisions."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-7 text-slate-800 shadow-sm">
                  <Icon className="h-9 w-9 text-blue-700" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-800">
                    <li>• Clear scope before work begins</li>
                    <li>• Written updates and practical notes</li>
                    <li>• Focus on risk, quality, and timing</li>
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Best fit"
              title="When a sourcing agent is useful"
              description="A local sourcing partner is most valuable when product specifications, factory capability, quality risk, or shipment coordination require active follow-up."
            />
            <div className="mt-8">
              <CTAButton />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="h-7 w-7 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{point.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
