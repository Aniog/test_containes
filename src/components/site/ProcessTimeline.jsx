const ProcessTimeline = ({ steps }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {steps.map((step) => (
        <article
          key={step.step}
          className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Step {step.step}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {step.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export default ProcessTimeline
