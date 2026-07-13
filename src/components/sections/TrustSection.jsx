import { TRUST_POINTS } from '@/data/content'
import { Section, SectionHeader } from '@/components/ui/Section'

export default function TrustSection() {
  return (
    <Section id="trust" className="bg-white">
      <SectionHeader
        eyebrow="Why SSourcing China"
        title="A sourcing partner you can trust"
        description="We work for you, not the factory. Our job is to protect your interests at every step."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TRUST_POINTS.map((t) => {
          const Icon = t.icon
          return (
            <div key={t.title} className="flex gap-4 p-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {t.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
