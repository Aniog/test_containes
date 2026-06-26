import { Section, Container } from "@/components/ui/Section"
import { TRUST_POINTS } from "@/data/site"

export default function HomeTrust() {
  return (
    <Section className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 rounded-2xl border border-slate-200 bg-[#F5F7FA] p-8 md:grid-cols-4 md:p-12">
          {TRUST_POINTS.map((point) => (
            <div key={point.label} className="text-center">
              <p className="text-3xl font-bold text-[#0B2545] md:text-4xl">
                {point.stat}
              </p>
              <p className="mt-2 text-sm leading-snug text-slate-600">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
