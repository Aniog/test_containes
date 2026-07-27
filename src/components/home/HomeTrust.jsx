import { Section, SectionHeader } from '@/components/ui/Section'
import Icon from '@/components/ui/Icon'
import { TRUST_POINTS } from '@/content'

export default function HomeTrust() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why Buyers Trust Us"
        title="A local team you can rely on"
        description="We are based in China and work as your eyes and ears on the ground, with clear communication at every step."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_POINTS.map((point) => (
          <div key={point.title} className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
              <Icon name={point.icon} className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">
                {point.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
