import { processSteps } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading'

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear process from first message to delivered goods"
          subtitle="Six defined steps with checkpoints, so you always know what is happening with your order."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.id} className="relative rounded-xl border border-slate-200 bg-canvas p-6">
              <span className="text-4xl font-bold text-amber/30">{step.no}</span>
              <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
