import { Mail, Phone, Send } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-50 py-20 text-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-300/50">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Find the right metal folder for your production line
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Share your material type, sheet size, and folding goals. ARTITECT MACHINERY will help you compare options and plan a machine that fits your workflow.
              </p>

              <div className="mt-8 space-y-4">
                <a href="mailto:sales@artitect-machinery.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100 transition hover:bg-white/10">
                  <Mail className="h-5 w-5 text-amber-300" aria-hidden="true" />
                  sales@artitect-machinery.com
                </a>
                <a href="tel:+10000000000" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100 transition hover:bg-white/10">
                  <Phone className="h-5 w-5 text-amber-300" aria-hidden="true" />
                  Request a consultation call
                </a>
              </div>
            </div>

            <form className="bg-white p-8 text-slate-950 md:p-12" aria-label="Request a quote form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-800">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white" type="text" name="name" placeholder="Your name" />
                </label>
                <label className="block text-sm font-semibold text-slate-800">
                  Email
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white" type="email" name="email" placeholder="you@company.com" />
                </label>
              </div>

              <label className="mt-5 block text-sm font-semibold text-slate-800">
                Product interest
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-amber-500 focus:bg-white" name="product">
                  <option>Double folding machine</option>
                  <option>Double folder</option>
                  <option>Sheet metal folding machine</option>
                  <option>Metal folder machine</option>
                </select>
              </label>

              <label className="mt-5 block text-sm font-semibold text-slate-800">
                Project details
                <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white" name="message" placeholder="Tell us about material thickness, width, production volume, and required bends." />
              </label>

              <button type="button" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-amber-300">
                Send request
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                This preview form is ready for future quote integration.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
