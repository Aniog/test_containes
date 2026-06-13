import { ClipboardCheck, MessageSquareText, PackageCheck } from 'lucide-react'

const steps = [
  {
    title: 'Tell us your folding needs',
    description: 'Share your materials, bending profiles, production volume, and workshop requirements.',
    icon: MessageSquareText,
  },
  {
    title: 'Choose the right folder',
    description: 'We help match double folding machines, sheet metal folders, or metal folder machines to your workflow.',
    icon: ClipboardCheck,
  },
  {
    title: 'Install with confidence',
    description: 'Your team receives practical guidance for setup, operation, and everyday production readiness.',
    icon: PackageCheck,
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-slate-950 px-6 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p id="process-eyebrow" className="text-sm font-semibold uppercase tracking-widest text-amber-300">Simple buying process</p>
            <h2 id="process-title" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              From machine selection to production, we keep every step clear.
            </h2>
          </div>
          <p id="process-subtitle" className="text-lg leading-8 text-slate-300">
            Whether you search for a double folder, sheet metal folding machine, metal folder, or metal folding machine, our team helps you identify the most suitable solution without confusion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-3xl border border-white/10 bg-white/10 p-8 text-white shadow-xl shadow-slate-950/20">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="text-5xl font-semibold text-white/10">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
