import { faqs } from "@/data/faqs"
import { Container, SectionHeader } from "@/components/shared/Section"
import FaqAccordion from "@/components/shared/FaqAccordion"

export default function HomeFaq() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions about working with a sourcing agent"
          description="Straight answers to the questions buyers ask before they start."
        />
        <div className="mt-12">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  )
}
