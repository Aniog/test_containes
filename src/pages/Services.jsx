import React from 'react'
import { ClipboardCheck, Factory, PackageCheck, Search, ShieldCheck, Ship } from 'lucide-react'
import SectionHeading from '@/components/sections/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import { services } from '@/data'

const icons = [Search, ShieldCheck, ClipboardCheck, PackageCheck, Factory, Ship]

export default function Services() {
  return (
    <main>
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Services</p>
            <h1 id="services-hero-title" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">China sourcing services for reliable procurement</h1>
            <p id="services-hero-desc" className="mt-5 text-lg leading-8 text-slate-300">Get practical support for supplier search, factory verification, quotation comparison, quality inspection, production follow-up, and shipping coordination.</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3">
            <img alt="Factory quality inspection and supplier verification" className="h-80 w-full rounded-2xl object-cover" data-strk-img-id="services-hero-factory-2c9d6g" data-strk-img="[services-visual-query] [services-hero-desc] [services-hero-title]" data-strk-img-ratio="16x9" data-strk-img-width="1000" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            <p id="services-visual-query" className="sr-only" aria-hidden="true">quality control inspector checking manufactured products inside Chinese factory production line supplier audit</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="What we can handle for your team" description="Use SSourcing China as an on-the-ground extension of your procurement team. We keep the work focused on facts, timing, and quality requirements." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index]
              return (
                <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-900 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
                  <h2 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                    <li>• Clear requirements review</li>
                    <li>• Supplier communication support</li>
                    <li>• Practical written feedback</li>
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
