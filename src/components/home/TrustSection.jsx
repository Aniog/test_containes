import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { trustPoints } from '@/data/site'

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          label="Why SSourcing China"
          title="Trust Built on Transparency"
          description="We work as an extension of your team, with clear processes and honest communication."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white border border-neutral-200 p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{point.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
