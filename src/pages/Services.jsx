import { ClipboardCheck, Factory, PackageCheck, Search, ShipWheel, ShieldCheck } from 'lucide-react'
import CTASection from '../components/common/CTASection.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { services } from '../siteContent.js'
import { usePageMeta } from '../lib/usePageMeta.js'

const icons = [Search, ShieldCheck, Factory, ClipboardCheck, PackageCheck, ShipWheel]

const Services = () => {
  usePageMeta(
    'Services | SSourcing China',
    'Explore supplier search, verification, factory audit, quality inspection, production follow-up, and shipping coordination services from SSourcing China.',
  )

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sourcing services designed for practical B2B buying support"
        description="Choose support for one stage or across the full sourcing cycle, from supplier search and verification to inspection and shipping coordination."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="What we do"
            title="Structured support across supplier selection, quality control, and order follow-through"
            description="These services are intended for overseas buyers who need a reliable local partner in China to help assess suppliers and keep orders moving."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = icons[index]

              return (
                <article key={service.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="mt-5 text-base leading-8 text-slate-600">{service.summary}</p>
                  <ul className="mt-6 grid gap-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default Services
