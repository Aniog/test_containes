import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'
import { serviceCards } from '@/data/siteContent'

const Services = () => {
  return (
    <>
      <PageHeader
        baseId="services-page"
        eyebrow="Services"
        title="Hands-on sourcing support for supplier, quality, and shipment control"
        description="Use individual support services or combine them based on the stage of your sourcing project in China."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service scope"
            title="Support where buyers usually need local execution"
            description="Each service is designed to make sourcing decisions clearer, improve communication with factories, and reduce avoidable surprises later in the process."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
