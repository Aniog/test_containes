import InquiryForm from '@/components/home/InquiryForm'
import SectionHeading from '@/components/home/SectionHeading'
import ServiceGrid from '@/components/home/ServiceGrid'
import { services } from '@/lib/pageData'

export default function Services() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="China sourcing services for overseas buyers"
            text="Choose focused support for one stage of your project or request full sourcing coordination from supplier search through shipment handover."
          />
        </div>
      </section>
      <ServiceGrid compact />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-950 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-700">{service.text}</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                <li className="rounded-xl bg-slate-50 p-3">Clear scope before work begins</li>
                <li className="rounded-xl bg-slate-50 p-3">Practical updates and documented findings</li>
                <li className="rounded-xl bg-slate-50 p-3">Coordination with suppliers, buyers, and logistics partners</li>
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Request support</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Not sure which service fits your project?</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">Send the product details and current sourcing stage. We will help identify whether you need supplier search, verification, inspection, follow-up, shipping coordination, or a combined service.</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
