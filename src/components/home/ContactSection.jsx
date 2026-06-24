import { Mail, PhoneCall } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300 md:p-12">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.22),transparent_55%)] lg:block" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Request a quote</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to discuss your sheet metal folding machine?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us what you need to fold, and ARTITECT MACHINERY will help you identify a practical double folder or metal folding machine option.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-slate-100 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-300" href="mailto:sales@artitectmachinery.com">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  sales@artitectmachinery.com
                </a>
                <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-amber-300 hover:text-amber-200" href="tel:+10000000000">
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  Call Sales
                </a>
              </div>
            </div>

            <form className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl md:p-8" aria-label="Quote request form">
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Name
                  <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" type="text" name="name" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Email
                  <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" type="email" name="email" placeholder="you@company.com" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Product interest
                  <select className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100" name="product" defaultValue="">
                    <option value="" disabled>Select a machine type</option>
                    <option>Double folding machine</option>
                    <option>Sheet metal folder</option>
                    <option>Metal folding machine</option>
                    <option>Metal folder machine</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-800">
                  Project details
                  <textarea className="min-h-32 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" name="message" placeholder="Material, thickness, bending length, and production goals" />
                </label>
                <a
                  href="mailto:sales@artitectmachinery.com?subject=ARTITECT%20MACHINERY%20Quote%20Request"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
                >
                  Send Inquiry
                </a>
                <p className="text-sm leading-6 text-slate-600">
                  Prefer direct contact? Email us with your material, thickness, bending length, and target output.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
