import { CheckCircle2 } from 'lucide-react'
import PageIntro from '../components/common/PageIntro'
import ServicesGrid from '../components/sections/ServicesGrid'
import CTASection from '../components/sections/CTASection'
import { services } from '../data'

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="Services" title="China sourcing services for practical buying decisions" text="Choose focused support for one stage of your project, or use an end-to-end workflow from supplier search to shipment coordination." />
      <ServicesGrid showHeader={false} />
      <section className="bg-stone-50 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-sky-700" />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">Best for buyers who need documented information, clearer supplier communication, and practical follow-through before making commitments.</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
