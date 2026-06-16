const steps = [
  {
    number: '01',
    title: 'Define your application',
    description: 'Start with material type, folding length, thickness range, and the output expectations of your production line.',
  },
  {
    number: '02',
    title: 'Match the right machine family',
    description: 'Move confidently across double folders, sheet metal folders, and metal folding machine options.',
  },
  {
    number: '03',
    title: 'Review key advantages',
    description: 'Focus on usability, machine presentation, and how the equipment supports reliable industrial work.',
  },
  {
    number: '04',
    title: 'Prepare the next conversation',
    description: 'Use the clearer product structure to begin faster, more informed sales and specification discussions.',
  },
]

function ProcessSection() {
  return (
    <section id="process" className="bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Buyer journey</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">A simple path from product discovery to serious inquiry.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">The layout is intentionally structured to help visitors understand your machinery faster, without making the experience feel overwhelming or overly technical.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">{step.number}</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
