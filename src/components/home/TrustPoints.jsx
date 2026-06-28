import { Section, SectionContainer } from "@/components/ui/Section"
import { TRUST_POINTS } from "@/data/content"

export default function TrustPoints() {
  return (
    <Section className="bg-primary py-16 md:py-20">
      <SectionContainer>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <div key={point.id} className="text-center">
              <div className="text-4xl font-extrabold text-amber-400 md:text-5xl">
                {point.stat}
              </div>
              <div className="mt-2 text-sm font-medium leading-snug text-slate-300">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
