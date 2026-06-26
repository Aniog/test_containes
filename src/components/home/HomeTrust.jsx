import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { TRUST_POINTS } from '@/data/siteContent'

export default function HomeTrust() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SSourcing China"
          title="A partner you can trust on the ground"
          description="We are not a middleman taking commissions. We are your team in China, working transparently in your interest."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name={t.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
