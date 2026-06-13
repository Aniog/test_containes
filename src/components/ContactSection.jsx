import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 px-6 py-20 text-slate-950 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
            <p id="contact-eyebrow" className="text-sm font-semibold uppercase tracking-widest text-amber-300">Get started</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to discuss your folding machine requirements?
            </h2>
            <p id="contact-subtitle" className="mt-5 text-lg leading-8 text-slate-300">
              Tell us what you need to fold and we will help you choose a reliable ARTITECT MACHINERY solution for your production line or workshop.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: 'sales@artitect-machinery.com' },
                { icon: Phone, label: 'Request a callback for pricing' },
                { icon: MapPin, label: 'Global machinery supply support' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-slate-100">
                  <item.icon className="h-5 w-5 text-amber-300" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-5 p-8 text-slate-950 sm:p-10 lg:p-12" aria-label="Quote request form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Name
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" placeholder="Your name" type="text" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Email
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" placeholder="you@company.com" type="email" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Product interest
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100" defaultValue="">
                <option value="" disabled>Select a machine type</option>
                <option>Double folding machine</option>
                <option>Double folder</option>
                <option>Sheet metal folder</option>
                <option>Metal folding machine</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Message
              <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" placeholder="Tell us about material type, thickness, folding length, and production goals." />
            </label>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300">
              Send Inquiry
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-sm leading-6 text-slate-500">
              This elegant starter site is ready for your real contact details, product specifications, and inquiry workflow.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
