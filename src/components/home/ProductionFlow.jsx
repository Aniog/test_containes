const steps = [
  {
    id: '01',
    title: 'Share your production goals',
    description:
      'Tell us about your materials, production rhythm, and preferred machine capabilities.',
  },
  {
    id: '02',
    title: 'Match the right folding solution',
    description:
      'We help position the right machine category for your output, workflow, and operator needs.',
  },
  {
    id: '03',
    title: 'Move toward confident deployment',
    description:
      'The result is a machinery solution shaped for efficient installation, adoption, and long-term use.',
  },
]

const ProductionFlow = () => {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
              Simple process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A clear path from enquiry to production readiness.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-200 md:text-base">
            We keep the journey easy to understand so teams can move forward quickly and make confident purchasing decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.id} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-300">
                {step.id}
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductionFlow
