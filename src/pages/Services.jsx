import { ClipboardCheck, Factory, PackageCheck, Search, ShipWheel, ShieldCheck } from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import SectionHeading from '@/components/common/SectionHeading'
import { services } from '@/content/siteContent'

const serviceIcons = [Search, ShieldCheck, ClipboardCheck, Factory, PackageCheck, ShipWheel]

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Practical sourcing services for overseas buyers working with China"
        description="SSourcing China helps buyers control sourcing execution with supplier search, verification, inspection, production follow-up, and shipment coordination support."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Built around the real tasks that make sourcing work"
            description="Each service supports a different stage of buyer decision-making and supplier execution."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index]
              return (
                <article key={service.title} className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700/75">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
