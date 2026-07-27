import SectionHeader from '@/components/shared/SectionHeader.jsx'
import { processSteps } from '@/data/siteData.js'

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 text-sourcing-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A practical sourcing process with clear checkpoints"
          description="The process is designed to help buyers compare suppliers carefully, reduce avoidable mistakes, and keep production visible."
          centered
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((item) => (
            <article key={item.step} className="relative rounded-2xl border border-sourcing-line bg-sourcing-card p-6 text-sourcing-ink shadow-sm">
              <span className="text-sm font-bold text-sourcing-blue">{item.step}</span>
              <h3 className="mt-4 text-lg font-bold text-sourcing-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-sourcing-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
