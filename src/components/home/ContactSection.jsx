import { Mail, MapPin, Phone } from 'lucide-react'

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    text: 'sales@artitectmachinery.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    text: 'Request a callback from our machinery team',
  },
  {
    icon: MapPin,
    title: 'Applications',
    text: 'Sheet metal workshops, fabrication lines, and industrial suppliers',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-stone-50 py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-900/20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">Get a quote</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Let’s match your workshop with the right folding machine.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Tell us what you fold, your material needs, and your production goals. ARTITECT MACHINERY will help you compare double folding machines, sheet metal folders, and metal folder machines.
              </p>

              <div className="mt-8 grid gap-4">
                {contactCards.map((card) => {
                  const Icon = card.icon
                  return (
                    <div key={card.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-white">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-slate-950">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-black text-white">{card.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-300">{card.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <form className="bg-white p-8 text-slate-950 lg:p-12" aria-label="Quote request form">
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="text-sm font-bold text-slate-900">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-bold text-slate-900">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
                  </div>
                  <div>
                    <label htmlFor="product" className="text-sm font-bold text-slate-900">Product interest</label>
                    <select id="product" name="product" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100">
                      <option>Double folding machine</option>
                      <option>Sheet metal folder</option>
                      <option>Metal folding machine</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-bold text-slate-900">Project details</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us about your material, length, thickness, and production needs." className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
                </div>
                <button type="button" className="rounded-full bg-amber-500 px-7 py-4 text-base font-black text-slate-950 transition hover:bg-amber-400">
                  Send quote request
                </button>
                <p className="text-sm leading-6 text-slate-600">
                  This demo form is ready for a future contact integration. For now, it presents a clear sales path for visitors.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
