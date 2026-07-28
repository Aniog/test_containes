import SectionHeader from '@/components/site/SectionHeader.jsx'
import StockImage from '@/components/site/StockImage.jsx'
import { processSteps } from '@/content.js'

const ProcessSection = () => (
  <section className="bg-brand-mist py-16 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div>
        <SectionHeader align="left" eyebrow="How it works" title="A clear sourcing process with practical checkpoints" description="Each step is designed to make supplier selection, ordering, inspection, and shipment easier to manage from overseas." />
        <div className="mt-8 overflow-hidden rounded-3xl border border-brand-border bg-white p-3 shadow-card">
          <StockImage imgId="process-supplier-meeting-7k2p9" query="[process-image-caption] [process-title]" ratio="4x3" width="900" alt="Sourcing agent reviewing factory documents with supplier" className="h-80 w-full rounded-2xl object-cover" />
          <p id="process-image-caption" className="px-3 pt-4 text-sm font-medium text-brand-slate">Document review, supplier communication, production follow-up, and quality checkpoints.</p>
        </div>
      </div>
      <div id="process-title" className="grid gap-4">
        {processSteps.map(([number, title, text]) => (
          <article key={number} className="grid gap-4 rounded-2xl border border-brand-border bg-white p-6 shadow-sm sm:grid-cols-[72px_1fr]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold text-white">{number}</div>
            <div><h3 className="text-lg font-semibold text-brand-navy">{title}</h3><p className="mt-2 text-sm leading-7 text-brand-muted">{text}</p></div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProcessSection
