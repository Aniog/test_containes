import { processSteps } from './siteData'

export default function ProcessSection() {
  return (
    <section id="process" className="bg-slate-950 px-6 py-16 text-slate-50 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">How we help</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">A smoother path to the right metal folder machine.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Whether you call it a double folder, metal folder, sheet metal folder, or metal folding machine, we focus on the same goal: dependable folding performance that fits your workflow.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-50">
              <span className="text-sm font-bold text-amber-300">{step.number}</span>
              <h3 className="mt-8 text-xl font-bold text-slate-50">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
