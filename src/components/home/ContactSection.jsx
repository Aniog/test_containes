import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-steel-50 py-16 text-machine-900 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 text-machine-900 shadow-soft md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brass-700">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-machine-950 md:text-5xl">Ready to discuss your folding machine needs?</h2>
          <p className="mt-5 text-base leading-7 text-machine-600">
            Tell us about your production requirements and we will help position the right ARTITECT MACHINERY solution.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-machine-700"><Phone className="h-5 w-5 text-brass-700" /> Speak with sales support</div>
            <div className="flex items-center gap-3 text-machine-700"><Mail className="h-5 w-5 text-brass-700" /> Request machine details and pricing</div>
            <div className="flex items-center gap-3 text-machine-700"><MapPin className="h-5 w-5 text-brass-700" /> Global industrial equipment inquiries</div>
          </div>
        </div>
        <form className="rounded-[2rem] border border-steel-200 bg-white p-6 text-machine-900 shadow-soft md:p-8" aria-label="Quote request form">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-machine-800">
              Name
              <input className="mt-2 w-full rounded-2xl border border-steel-300 bg-steel-50 px-4 py-3 text-machine-900 outline-none transition placeholder:text-machine-400 focus:border-brass-500 focus:bg-white" placeholder="Your name" />
            </label>
            <label className="block text-sm font-semibold text-machine-800">
              Email
              <input type="email" className="mt-2 w-full rounded-2xl border border-steel-300 bg-steel-50 px-4 py-3 text-machine-900 outline-none transition placeholder:text-machine-400 focus:border-brass-500 focus:bg-white" placeholder="you@company.com" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-machine-800">
            Product interest
            <select className="mt-2 w-full rounded-2xl border border-steel-300 bg-steel-50 px-4 py-3 text-machine-900 outline-none transition focus:border-brass-500 focus:bg-white" defaultValue="Double folding machine">
              <option>Double folding machine</option>
              <option>Double folder</option>
              <option>Sheet metal folder</option>
              <option>Metal folding machine</option>
            </select>
          </label>
          <label className="mt-5 block text-sm font-semibold text-machine-800">
            Message
            <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-steel-300 bg-steel-50 px-4 py-3 text-machine-900 outline-none transition placeholder:text-machine-400 focus:border-brass-500 focus:bg-white" placeholder="Tell us your material type, sheet length, thickness, and target output." />
          </label>
          <button type="button" className="mt-6 w-full rounded-full bg-machine-950 px-6 py-3 text-sm font-semibold text-steel-50 shadow-soft transition hover:bg-machine-800">
            Request a quote
          </button>
          <p className="mt-4 text-center text-sm text-machine-500">This demo form is ready for your preferred contact details.</p>
        </form>
      </div>
    </section>
  )
}
