const steps = [
  {
    number: '01',
    title: 'Discuss your production goals',
    copy: 'Share your part sizes, materials, workflow priorities, and output targets with our team.',
  },
  {
    number: '02',
    title: 'Match the right folding solution',
    copy: 'We help identify the best double folding or metal folder configuration for your operation.',
  },
  {
    number: '03',
    title: 'Move into confident production',
    copy: 'Receive machinery designed to support smooth installation, operator adoption, and lasting performance.',
  },
]

const ProcessSection = () => {
  return (
    <section id="process" className="bg-stone-100 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Simple buying journey</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            A clear process from machine selection to production readiness.
          </h2>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            We keep the path straightforward so your team can evaluate machinery with clarity and move forward with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-amber-600">{step.number}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
