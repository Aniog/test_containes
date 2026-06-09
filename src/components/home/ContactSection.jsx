import { Mail, PhoneCall } from 'lucide-react'
import SectionHeading from './SectionHeading'

const ContactSection = () => (
  <section id="contact" className="bg-stone-50 py-16 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Start the conversation with confidence"
          description="Invite buyers to reach out for product details, machine recommendations, or tailored quotations based on their folding requirements."
        />
      </div>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/80">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
            <Mail className="h-5 w-5 text-amber-300" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
            <p className="mt-2 text-lg text-white">sales@artitect-machinery.com</p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
            <PhoneCall className="h-5 w-5 text-cyan-300" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">Call</p>
            <p className="mt-2 text-lg text-white">+86 400 000 0000</p>
          </div>
        </div>
        <div className="mt-6 rounded-[1.5rem] bg-stone-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">What buyers can ask for</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            <li>Machine comparisons between double folder and sheet metal folder options</li>
            <li>Workflow recommendations for fabrication needs</li>
            <li>Quotation support for metal folding machine requirements</li>
          </ul>
          <a
            href="mailto:sales@artitect-machinery.com"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Email ARTITECT MACHINERY
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default ContactSection
