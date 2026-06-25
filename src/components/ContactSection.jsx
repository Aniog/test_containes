import { Mail, MapPin, PhoneCall } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Ready to discuss your sheet metal folding needs?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Send your required product type, sheet thickness, working length, and application. ARTITECT MACHINERY will help you identify a suitable machine direction.
          </p>

          <div className="mt-10 space-y-4 text-slate-700">
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-slate-950 p-3 text-amber-300"><Mail className="h-5 w-5" /></span>
              <span className="font-medium">sales@artitect-machinery.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-slate-950 p-3 text-amber-300"><PhoneCall className="h-5 w-5" /></span>
              <span className="font-medium">Request a callback for pricing and specifications</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-slate-950 p-3 text-amber-300"><MapPin className="h-5 w-5" /></span>
              <span className="font-medium">Global supply for industrial metalworking teams</span>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm md:p-8" aria-label="Product inquiry form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-800">
              Name
              <input className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-200" type="text" placeholder="Your name" />
            </label>
            <label className="block text-sm font-semibold text-slate-800">
              Email
              <input className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-200" type="email" placeholder="you@example.com" />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold text-slate-800">
            Product interest
            <select className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-200" defaultValue="Double folding machine">
              <option>Double folding machine</option>
              <option>Double folder</option>
              <option>Sheet metal folder</option>
              <option>Metal folding machine</option>
              <option>Metal folder machine</option>
            </select>
          </label>

          <label className="mt-5 block text-sm font-semibold text-slate-800">
            Project details
            <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-200" placeholder="Tell us your material, thickness, working length, and production goals." />
          </label>

          <button type="button" className="mt-6 w-full rounded-full bg-slate-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-amber-300">
            Send inquiry
          </button>
          <p className="mt-4 text-center text-sm leading-6 text-slate-500">
            This sample form is ready for future database or email integration.
          </p>
        </form>
      </div>
    </section>
  )
}
