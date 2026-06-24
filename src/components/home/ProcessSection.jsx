const steps = [
  {
    number: '01',
    title: 'Share your workpieces',
    description: 'Tell us your material type, sheet thickness, bending length, and production goals.',
  },
  {
    number: '02',
    title: 'Match the right folder',
    description: 'We recommend a double folder, sheet metal folder, or metal folding machine configuration.',
  },
  {
    number: '03',
    title: 'Plan setup and delivery',
    description: 'Receive clear product guidance so your team can move toward installation with fewer surprises.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Selection process</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Find the right folding machine without complexity.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Whether you call it a double folding machine, sheet metal folding machine, metal folder, or double folder, we help translate your production needs into a clear machine choice.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-amber-400 text-base font-black text-slate-950">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
