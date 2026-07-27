const ProcessTimeline = ({ steps }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {steps.map((step) => (
        <article
          key={step.step}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
              {step.step}
            </span>
            <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">{step.description}</p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {step.deliverables.map((item) => (
              <li key={item} className="rounded-2xl bg-slate-100 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default ProcessTimeline
