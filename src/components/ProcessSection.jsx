import { ArrowRight } from 'lucide-react'

const steps = [
  ['01', 'Share your material', 'Tell us sheet type, thickness, width, and expected production volume.'],
  ['02', 'Match the machine', 'We recommend the right double folding or metal folder machine configuration.'],
  ['03', 'Plan production', 'Review operation needs, support, delivery, and long-term maintenance.'],
]

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Easy buying path</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                A simple way to choose the right folding machine.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Clear product guidance makes it easier for engineers, owners, and purchasing teams to move from inquiry to confident selection.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map(([number, title, text], index) => (
                <article key={title} className="relative rounded-3xl bg-slate-950 p-6 text-white">
                  <span className="text-sm font-semibold text-amber-300">{number}</span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-amber-400 p-1 text-slate-950 md:block" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
