import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Icon } from "@/components/shared/icons"
import { TRUST_POINTS } from "@/data/content"

export default function TrustSection() {
  return (
    <Section id="trust" className="bg-navy-950 text-white">
      <Container>
        <SectionHeading
          eyebrow="Why buyers choose us"
          title="Practical reasons to work with our team"
          description="We don't make grand promises. These are the practical reasons overseas buyers stay with us across multiple orders."
          align="center"
          className="mb-12 [&_*]:text-white [&_.eyebrow]:text-amber-300"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
                <Icon name={t.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}