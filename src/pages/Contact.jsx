import { Mail, MapPin, MessageSquare } from 'lucide-react'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionShell from '../components/SectionShell.jsx'

export default function Contact() {
  return (
    <>
      <SectionShell className="bg-slate-950 text-white" eyebrow="Contact" title="Get a Free Sourcing Quote" intro="Tell us what you want to source from China. We will review your requirements and reply with a practical next step.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [Mail, 'Business inquiry', 'Use the form below for product and sourcing details.'],
            [MapPin, 'China-side support', 'Supplier communication, verification, QC, and shipment coordination.'],
            [MessageSquare, 'Clear response', 'We reply with practical questions, scope, and recommended next steps.'],
          ].map(([Icon, title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-6 text-white">
              <Icon className="h-6 w-6 text-cyan-200" />
              <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="text-slate-950">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Inquiry form</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">What to include</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>Product name, photos, drawings, or specifications if available.</li>
              <li>Target quantity, packaging requirements, destination country, and timeline.</li>
              <li>Whether you need supplier search, verification, inspection, production follow-up, or shipping coordination.</li>
            </ul>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  )
}
