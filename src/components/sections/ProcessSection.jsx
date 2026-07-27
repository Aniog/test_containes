import { processSteps } from '../../data'
import SectionHeader from '../common/SectionHeader'

export default function ProcessSection() {
  return (
    <section className="bg-stone-50 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader eyebrow="How it works" title="A clear sourcing process for overseas buyers" text="The workflow is designed to reduce uncertainty before deposits, during production, and before goods leave China." />
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article key={step.step} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:grid-cols-[5rem_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-lg font-black text-white">{step.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
