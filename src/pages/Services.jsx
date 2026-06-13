import { CheckCircle2, ClipboardCheck, Factory, PackageCheck, SearchCheck, ShipWheel } from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import SectionHeader from '@/components/common/SectionHeader'
import { serviceItems, trustPoints } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

const icons = [SearchCheck, Factory, ClipboardCheck, CheckCircle2, ShipWheel, PackageCheck]

const Services = () => {
  usePageMeta({
    title: 'Services | SSourcing China',
    description:
      'Explore supplier search, factory verification, quality inspection, production follow-up, and shipping coordination services from SSourcing China.',
  })

  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for buyers who need clearer control"
        description="SSourcing China supports overseas buyers with practical supplier evaluation, quality oversight, production follow-up, and shipment coordination from China."
        titleId="services-page-title"
        descriptionId="services-page-description"
        visual={
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-sm">
            <div
              className="absolute inset-0 opacity-0"
              data-strk-bg-id="services-page-bg-b29d1a"
              data-strk-bg="[services-page-description] [services-page-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <div className="relative min-h-[360px] rounded-[1.5rem] bg-slate-900/35 p-8">
              <div className="flex h-full items-end">
                <p className="max-w-md text-sm leading-7 text-white/90">
                  Supplier screening, factory visits, inspection planning, and clearer production communication from China.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="Core support areas"
            description="Choose focused support for a specific task or combine services when you need a broader sourcing partner in China."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((item, index) => {
              const Icon = icons[index % icons.length]
              return (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">How buyers use us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Flexible support based on your sourcing stage
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p>Some buyers need help finding and checking new suppliers before ordering.</p>
              <p>Others already have factories and want better inspection coverage, production follow-up, or shipment coordination.</p>
              <p>We adapt the support to your sourcing gap rather than forcing a one-size-fits-all process.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">What we focus on</p>
            <ul className="mt-6 space-y-4">
              {[
                'Clear communication with suppliers and factories',
                'Practical checks before larger commitments are made',
                'Inspection timing that matches production reality',
                'Better visibility on packaging, schedules, and shipment readiness',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why this matters"
            title="Service value beyond getting quotations"
            description="Strong sourcing support is about decision quality, production visibility, and risk reduction throughout the buying cycle."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point) => (
              <article key={point.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
