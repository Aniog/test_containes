import { Mail, Phone, Send } from 'lucide-react'

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/80 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-slate-950 p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-300">Request a Quote</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let’s find the right folding machine for your line.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Tell us what you want to fold and our team can guide you toward the right ARTITECT MACHINERY solution.
            </p>
            <div className="mt-10 space-y-4 text-slate-100">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-300" aria-hidden="true" />
                sales@artitectmachinery.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-300" aria-hidden="true" />
                Product consultation available
              </p>
            </div>
          </div>

          <form className="grid gap-5 p-8 text-slate-950 md:p-12" aria-label="Machinery quote request form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Name
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-200" type="text" name="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Email
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-200" type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Product interest
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-200" name="product">
                <option>Double folding machine</option>
                <option>Double folder</option>
                <option>Sheet metal folder</option>
                <option>Sheet metal folding machine</option>
                <option>Metal folder machine</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Project details
              <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-200" name="message" placeholder="Tell us about material thickness, bend length, and production goals." />
            </label>

            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-bold text-white shadow-xl shadow-slate-300 transition hover:bg-slate-800">
              Send Inquiry
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
            <p className="text-sm leading-6 text-slate-600">
              This demo form is ready for your preferred email or CRM connection.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
