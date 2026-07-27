import { Mail, MapPin, MessageSquare, Ship } from 'lucide-react'
import Container from '../components/site/Container.jsx'
import InquiryForm from '../components/site/InquiryForm.jsx'

const Contact = () => (
  <>
    <section className="bg-brand-navy py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-sky">Contact</p>
            <h1 id="contact-title" className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Request a China sourcing quote
            </h1>
            <p id="contact-desc" className="mt-5 text-lg leading-8 text-slate-200">
              Tell SSourcing China what you need to buy, verify, inspect, produce, or ship. We will review your requirements and suggest practical next steps.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white">
                <MapPin className="h-6 w-6 text-brand-amber" />
                <p className="mt-3 text-sm font-semibold">China-based coordination</p>
                <p className="mt-1 text-sm text-slate-200">Factory, QC, and shipping follow-up support.</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white">
                <Mail className="h-6 w-6 text-brand-amber" />
                <p className="mt-3 text-sm font-semibold">Business inquiry review</p>
                <p className="mt-1 text-sm text-slate-200">Share specs, quantities, timelines, and destination.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-2xl bg-white p-5 text-brand-navy">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Project handover checklist</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {['Supplier file', 'Sample status', 'QC report', 'Packing list', 'Carton data', 'Forwarder notes'].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-brand-navy">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-brand-sky p-4 text-sm leading-6 text-slate-700">
                A practical view of the information we coordinate before production release and shipping handover.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="bg-brand-sky py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="space-y-5 lg:col-span-1">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <MessageSquare className="h-7 w-7 text-brand-blue" />
              <h2 className="mt-4 text-xl font-semibold text-brand-navy">What to include</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Product photos, target quantity, preferred materials, certifications, current supplier quotes, inspection concerns, and shipping destination.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <Ship className="h-7 w-7 text-brand-blue" />
              <h2 className="mt-4 text-xl font-semibold text-brand-navy">Shipping details</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">If available, share Incoterms, destination port, delivery deadline, carton requirements, and forwarder contact information.</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <InquiryForm />
          </div>
        </div>
      </Container>
    </section>
  </>
)

export default Contact
