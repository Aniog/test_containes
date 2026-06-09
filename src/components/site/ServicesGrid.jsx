import { ClipboardCheck, Factory, PackageCheck, SearchCheck, ShipWheel, TimerReset } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/site/SectionHeading'
import { services } from '@/data/siteContent'

const icons = {
  'supplier-search': SearchCheck,
  'supplier-verification': ClipboardCheck,
  'factory-audits': Factory,
  'quality-control': PackageCheck,
  'production-follow-up': TimerReset,
  'shipping-support': ShipWheel,
}

const ServicesGrid = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Sourcing support that covers the key operational stages"
          description="From finding suppliers to preparing shipments, we help buyers manage the important checks and follow-up work needed for smoother sourcing from China."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.slug]

            return (
              <article
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm"
                key={service.slug}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-700">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-8">
          <Link className="text-sm font-semibold text-sky-700 hover:text-sky-800" to="/services">
            Explore all service details
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
