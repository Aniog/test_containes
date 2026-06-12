import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/sections/PageHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import VisualBand from '@/components/sections/VisualBand'
import { services } from '@/data/siteData'

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="China sourcing services for practical buying decisions"
        text="Choose targeted support for supplier search, factory verification, inspection, production follow-up, shipping coordination, or a complete sourcing workflow."
      />
      <ServicesGrid compact />
      <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-blue-700">Service {String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <VisualBand />
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
