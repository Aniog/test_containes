import { Mail, MapPin, Phone } from 'lucide-react'

const contactItems = [
  { icon: Mail, label: 'Email', value: 'sales@artitect-machinery.com' },
  { icon: Phone, label: 'Sales support', value: 'Request technical consultation' },
  { icon: MapPin, label: 'Serving', value: 'Manufacturers and metal workshops' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 px-6 py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 md:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Start a conversation</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Tell us what you need to fold.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share your material type, production volume, and preferred machine style. We will help you compare double folding machines, sheet metal folders, and metal folder machines clearly.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex gap-4 rounded-2xl bg-slate-50 p-4 text-slate-950">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-amber-500 text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                    <p className="text-sm leading-6 text-slate-600">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="rounded-3xl bg-slate-950 p-6 text-slate-50 md:p-8">
          <h3 className="text-2xl font-bold text-slate-50">Quick inquiry checklist</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Prepare these details and our team can recommend the right folding machine faster.</p>
          <div className="mt-6 space-y-4">
            {['Material and thickness range', 'Required folding length', 'Daily production quantity', 'Preferred machine type'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-sm font-medium text-slate-100">
                {item}
              </div>
            ))}
          </div>
          <a href="mailto:sales@artitect-machinery.com" className="mt-7 inline-flex w-full justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">
            Email ARTITECT MACHINERY
          </a>
        </div>
      </div>
    </section>
  )
}
