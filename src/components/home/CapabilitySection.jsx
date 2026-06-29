import { capabilities, metrics } from './content'

function CapabilitySection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-sm ring-1 ring-slate-200">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Why choose us</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Premium machine presentation with user-friendly clarity.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The brand experience is built around confidence: strong product positioning, easy scanning, and clear value
          communication for buyers evaluating professional sheet metal folder equipment.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {capabilities.map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-stone-100 p-6 text-slate-950">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CapabilitySection
