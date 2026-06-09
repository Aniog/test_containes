export default function WorkflowSection({ workflowSteps }) {
  return (
    <section className="bg-stone-100 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-5 md:max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-600">
            Simple buying journey
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A user-friendly path from machine selection to daily production.
          </h2>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            We keep the process straightforward so your team can focus on the right
            folding solution instead of sorting through unnecessary complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-stone-50">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
