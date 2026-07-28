import SectionHeading from '@/components/common/SectionHeading.jsx?ssourcing=20260728'
import { processSteps } from '@/data/siteContent.js'

const ProcessSection = () => (
  <section className="bg-white py-16 text-slate-950 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <SectionHeading
          eyebrow="How it works"
          title="A clear sourcing process with local execution in China"
          description="We keep the workflow practical: define requirements, compare options, verify suppliers, follow production, inspect goods, and coordinate shipment handoff."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-950">
              <span className="text-sm font-bold text-blue-700">{item.step}</span>
              <h3 className="mt-3 text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default ProcessSection
