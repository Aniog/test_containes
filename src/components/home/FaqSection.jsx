import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import Faq from "@/components/shared/Faq"
import { FAQS } from "@/data/content"

export default function FaqSection() {
  return (
    <Section id="faq" className="bg-slate-100">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers ask us most often"
          description="If your question isn't here, just include it in the inquiry form and we'll answer in our reply."
          align="center"
          className="mb-10"
        />
        <Faq items={FAQS} id="home-faq" />
      </Container>
    </Section>
  )
}