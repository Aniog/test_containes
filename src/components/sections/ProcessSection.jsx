import { processSteps } from '@/data/siteData'
import SectionHeading from './SectionHeading'

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sourcing process"
          title="A clear workflow for overseas buyers"
          text="Our process is designed to make each purchasing decision more visible, documented, and easier to coordinate across distance and time zones."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
