import { ClipboardCheck, Factory, PackageCheck, Search, Ship, TimerReset } from 'lucide-react'
import { services } from '../../data'
import SectionHeader from '../common/SectionHeader'

const icons = [Search, Factory, ClipboardCheck, TimerReset, Ship, PackageCheck]

export default function ServicesGrid({ showHeader = true }) {
  return (
    <section className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && <SectionHeader eyebrow="Services" title="Local sourcing execution from supplier search to shipment" text="Use SSourcing China when you need clear supplier information, practical quality control, and hands-on coordination across the China supply chain." align="center" />}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl transition hover:-translate-y-1 hover:shadow-lg md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-sky-700"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
