import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import FAQ from "@/components/shared/FAQ.jsx"
import { faqs } from "@/data/faq.js"

export default function HomeFAQ() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="FAQ"
        title="Common questions from first-time buyers"
        description="A few of the things buyers ask most often. Have a question that's not here? Just ask in the contact form."
        align="center"
      />
      <div className="max-w-3xl mx-auto">
        <FAQ items={faqs} />
      </div>
    </Section>
  )
}
