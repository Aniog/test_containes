function ProcessTimeline({ steps }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {steps.map((step) => (
        <article
          key={step.step}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Step {step.step}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
        </article>
      ))}
    </div>
  )
}

export default ProcessTimeline
