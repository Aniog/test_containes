import { Section, SectionHeading, Container } from "@/components/ui/section"
import FaqAccordion from "@/components/shared/FaqAccordion"
import { faqs } from "@/data/content"

export default function HomeFaq() {
  return (
    <Section id="faq">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions buyers often ask"
          description="Straight answers about how we work, what we cover, and how pricing works."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </Section>
  )
}
