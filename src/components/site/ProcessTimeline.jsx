const ProcessTimeline = ({ steps }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {steps.map((step) => (
        <article key={step.step} className="rounded-3xl border border-brand-line bg-white p-6 shadow-card md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Step {step.step}</p>
          <h3 className="mt-4 text-xl font-semibold text-brand-ink">{step.title}</h3>
          <p className="mt-3 text-base leading-7 text-brand-slate">{step.description}</p>
        </article>
      ))}
    </div>
  )
}

export default ProcessTimeline
