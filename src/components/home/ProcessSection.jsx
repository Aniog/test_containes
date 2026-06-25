import { processSteps } from './content'

const ProcessSection = () => {
  return (
    <section className="bg-slate-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Simple next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A user-friendly path from enquiry to machine fit.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
            Whether you are evaluating a double folder or a broader sheet metal folding
            machine solution, the process stays focused, direct, and easy to understand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
                {item.step}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
