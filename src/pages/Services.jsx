import { ClipboardCheck, Factory, PackageCheck, Search, ShieldCheck, Ship } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../content.js'

const icons = [Search, ShieldCheck, ClipboardCheck, PackageCheck, Factory, Ship]

export default function Services() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Services" title="China sourcing services for overseas buyers">
            Use SSourcing China when you need a local team to search suppliers, verify factories, inspect quality, follow production, and coordinate shipment details.
          </SectionHeader>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = icons[index]
              return (
                <article key={service.title} className="rounded-3xl border border-brand-border bg-brand-page p-7 text-brand-ink shadow-sm">
                  <Icon className="h-9 w-9 text-brand-blue" aria-hidden="true" />
                  <h2 className="mt-5 text-2xl font-semibold text-brand-navy">{service.title}</h2>
                  <p className="mt-4 leading-8 text-brand-muted">{service.desc}</p>
                  <ul className="mt-5 grid gap-3 text-sm text-brand-ink">
                    <li className="flex gap-2"><span className="text-brand-green">•</span> Clear scope before work starts</li>
                    <li className="flex gap-2"><span className="text-brand-green">•</span> Practical updates and documentation</li>
                    <li className="flex gap-2"><span className="text-brand-green">•</span> Buyer-controlled decisions at key steps</li>
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
