import { Mail, PhoneCall } from 'lucide-react'

function ContactCta() {
  return (
    <section id="contact" className="bg-stone-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/60 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
              Start the conversation
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Tell buyers that ARTITECT MACHINERY is ready to discuss the right folding machine for their production goals.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              This launch version gives you a polished starting point for product inquiries, distributor outreach, and future catalog expansion.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="mailto:sales@artitectmachinery.com"
              className="inline-flex items-center gap-3 rounded-full bg-stone-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              <Mail className="h-4 w-4 text-amber-400" />
              sales@artitectmachinery.com
            </a>
            <a
              href="tel:+18005550199"
              className="inline-flex items-center gap-3 rounded-full border border-stone-300 px-6 py-4 text-sm font-semibold text-slate-900 transition hover:border-stone-400 hover:bg-stone-100"
            >
              <PhoneCall className="h-4 w-4 text-amber-600" />
              +1 (800) 555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCta
