import PageHero from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { services, trustPoints } from '@/data/siteContent.js'

function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for supplier selection, verification, QC, and shipping support"
        description="Choose focused support for one stage of the sourcing process or combine services when your project needs broader coordination."
      >
        <div className="space-y-4 text-sm leading-7 text-ink">
          <p>
            SSourcing China supports overseas buyers that want clearer supplier validation, better order visibility, and more controlled sourcing execution.
          </p>
          <p className="text-muted">
            Our work is practical and process-driven, designed to help buying teams make informed decisions and reduce avoidable risk.
          </p>
        </div>
      </PageHero>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="What SSourcing China can support"
            description="Each service can be used on its own or combined into a broader sourcing workflow depending on your product and buying stage."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.id} className="rounded-3xl border border-border-soft bg-surface p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight text-ink">{service.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{service.summary}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-ink">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent-strong" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Why buyers use us"
              title="Useful when your team needs local execution support in China"
              description="Support is typically most valuable when supplier choice is unclear, communication is inconsistent, or the order needs stronger QC and follow-up discipline."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">For new supplier searches</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Useful when your team is comparing suppliers and wants a more grounded view of capability and reliability.
                </p>
              </article>
              <article className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">For existing supplier control</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Useful when you already have a supplier but need verification, inspection, production tracking, or shipment coordination.
                </p>
              </article>
            </div>
          </div>
          <div className="rounded-3xl border border-border-soft bg-canvas p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-ink">Trust points</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink">
              {trustPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-strong" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
