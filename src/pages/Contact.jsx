import React from 'react'
import { Mail, MapPin, MessageSquare, PackageSearch } from 'lucide-react'
import InquiryForm from '@/components/sections/InquiryForm'
import SectionHeading from '@/components/sections/SectionHeading'

export default function Contact() {
  return (
    <main>
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Contact</p>
            <h1 id="contact-title" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Get a Free Sourcing Quote</h1>
            <p id="contact-desc" className="mt-5 text-lg leading-8 text-slate-300">Tell us what you need to source from China. Include product specifications, quantity, destination country, and current supplier status for a more useful response.</p>
            <div className="mt-8 grid gap-4 text-sm text-slate-200">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-amber-300" /> China-based sourcing coordination</div>
              <div className="flex gap-3"><PackageSearch className="h-5 w-5 text-amber-300" /> Supplier search, verification, QC, and shipping support</div>
              <div className="flex gap-3"><MessageSquare className="h-5 w-5 text-amber-300" /> Clear communication for overseas procurement teams</div>
              <div className="flex gap-3"><Mail className="h-5 w-5 text-amber-300" /> Response workflow can be connected after frontend approval</div>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3">
              <img alt="Sourcing agent reviewing production details" className="h-64 w-full rounded-2xl object-cover" data-strk-img-id="contact-sourcing-agent-7f2a10" data-strk-img="[contact-desc] [contact-title]" data-strk-img-ratio="16x9" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" title="Helpful details to include" description="The more specific your brief is, the easier it is to identify suitable factories and quote realistic sourcing support." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {['Product photos or drawings', 'Materials and quality standards', 'Target quantity and price range', 'Destination country and timeline'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-semibold text-slate-800">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
