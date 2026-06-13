const steps = [
  {
    title: 'Consult the production need',
    description:
      'We begin with your material flow, output goals, and preferred folding configuration.',
  },
  {
    title: 'Match the right machine class',
    description:
      'From double folder systems to versatile sheet metal folding machines, the lineup stays focused and clear.',
  },
  {
    title: 'Support installation and operation',
    description:
      'The result is a machine that looks refined, works hard, and remains comfortable to use every day.',
  },
]

function ProcessSection() {
  return (
    <section className="bg-stone-50 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              A buyer-friendly path to the right folding solution.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-stone-50 p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-amber-300">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
