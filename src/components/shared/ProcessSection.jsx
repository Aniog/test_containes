import { processSteps } from '../../data/siteContent'
import SectionHeader from './SectionHeader'

const ProcessSection = () => (
  <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="How it works"
        title="A clear sourcing process for overseas buyers"
        description="Each step is designed to reduce uncertainty, improve communication, and keep supplier, quality, and shipping details connected."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {processSteps.map((item) => (
          <article className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm" key={item.step}>
            <p className="text-sm font-semibold text-blue-700">{item.step}</p>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProcessSection
