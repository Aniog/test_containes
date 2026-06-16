const steps = [
  { number: '01', title: 'Tell us your folding needs', text: 'Share material type, thickness range, working length, and the folding results you want to achieve.' },
  { number: '02', title: 'Select the right machine', text: 'We guide you toward the right double folder, sheet metal folder, or metal folding machine configuration.' },
  { number: '03', title: 'Prepare for production', text: 'Receive a clear solution path focused on performance, operator comfort, and dependable output.' },
]

const ProcessSection = () => {
  return (
    <section className="bg-slate-100 py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-end">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Buying made clear</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A straightforward path to the right folding solution.
            </h2>
          </div>
          <p className="text-base leading-8 text-slate-600">
            We keep the experience simple so your team can focus on production results, not complicated purchasing steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-950 shadow-sm">
              <span className="text-sm font-black text-amber-600">{step.number}</span>
              <h3 className="mt-4 text-2xl font-black text-slate-950">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
