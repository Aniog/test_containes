const steps = [
  {
    number: '01',
    title: 'Define your workload',
    description:
      'Frame the production environment clearly, from light custom jobs to heavy repeat manufacturing.',
  },
  {
    number: '02',
    title: 'Match the machine type',
    description:
      'Guide buyers toward the right double folder or sheet metal folding machine configuration.',
  },
  {
    number: '03',
    title: 'Move to confident delivery',
    description:
      'Support the sales conversation with a calm, premium presentation that reinforces trust.',
  },
]

const specHighlights = [
  'Smooth operator experience for daily production use',
  'Refined industrial styling aligned with premium machinery brands',
  'Clear product naming for search visibility and buyer clarity',
  'Strong readability across desktop and mobile devices',
]

function ProcessSection() {
  return (
    <section className="bg-stone-950 py-20 text-stone-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
            Selection flow
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A simple path from product interest to machine shortlist.
          </h2>
          <div className="mt-8 space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="rounded-3xl border border-stone-800 bg-stone-950 p-5">
                <p className="text-sm font-semibold text-amber-400">{step.number}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-800 bg-white p-8 text-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Site qualities
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Designed to feel user friendly without losing industrial authority.
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Every section is built to help users compare product types, understand positioning, and take the next step without friction.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {specHighlights.map((item) => (
              <div key={item} className="rounded-3xl border border-stone-200 bg-stone-100 p-5">
                <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
