import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Accordion from "@/components/ui/Accordion"
import { FAQS } from "@/data/site"

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="sm">
        <SectionHeader
          eyebrow="Frequently asked"
          title="Answers to the questions we hear most often"
          subtitle="If your question is not here, just send us a message. We usually reply within a few hours during China business days."
          align="center"
          className="mb-10"
        />
        <Accordion items={FAQS.slice(0, 6)} />
      </Container>
    </section>
  )
}

export default FaqSection
