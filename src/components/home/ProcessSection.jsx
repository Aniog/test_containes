import { processSteps } from '@/lib/siteData'
import SectionHeader from '@/components/shared/SectionHeader'

const ProcessSection = () => (
  <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="Sourcing process"
        title="A clear workflow for overseas buyers"
        description="Each step is designed to make supplier selection, production, inspection, and shipment easier to manage from outside China."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((item) => (
          <article key={item.step} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="text-5xl font-semibold tracking-tight text-slate-200">{item.step}</span>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProcessSection
