import { workflowSteps } from './home-content'

const HomeWorkflow = () => {
  return (
    <section id="workflow" className="px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
            Smooth buyer journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            A simple path from interest to machine discussion.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            The page can guide visitors through a clear process, helping them connect
            their production needs to the right folding machine category without friction.
          </p>
        </div>

        <div className="space-y-5">
          {workflowSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeWorkflow
