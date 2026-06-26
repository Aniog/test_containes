import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { PROCESS_STEPS } from '@/data/siteContent'

export default function HomeProcess() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear, six-step sourcing process"
          description="No black boxes. You always know where your order stands and what happens next."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-4xl font-extrabold text-accent/15">{step.step}</span>
              <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
          >
            See the full process in detail
            <Icon name="ArrowRight" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
