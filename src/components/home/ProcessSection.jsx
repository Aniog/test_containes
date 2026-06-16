import { workflowSteps } from './content'

const ProcessSection = () => {
  return (
    <section id="process" className="bg-slate-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">Process</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            A simple path from product inquiry to machine direction.
          </h2>
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            The presentation is intentionally clear so buyers can move from interest to action without confusion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article key={step.title} className="rounded-[2rem] border border-white/60 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Step {index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
