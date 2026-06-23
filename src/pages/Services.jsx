import { ClipboardCheck, Factory, PackageCheck, SearchCheck, ShieldCheck, Ship, TrendingUp } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import { services } from '../data/siteContent.js'

const icons = [SearchCheck, ShieldCheck, ClipboardCheck, TrendingUp, Ship, PackageCheck]

export default function Services() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">China sourcing services for practical buying decisions</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">SSourcing China supports overseas buyers through supplier search, factory checks, quality inspection, production follow-up, and shipping coordination.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What we do" title="Services matched to your sourcing stage" description="Choose focused support for one step, or use us as a local coordination partner through the whole purchasing cycle." centered />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index] || Factory
              return (
                <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
                  <h2 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
