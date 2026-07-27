import SectionHeader from "@/components/ui/SectionHeader"
import { Accordion, AccordionItem } from "@/components/ui/Accordion"

const faqs = [
  {
    value: "cost",
    question: "How much does your sourcing service cost?",
    answer:
      "We typically charge a transparent commission based on order value or a fixed project fee for sourcing and verification. You receive a clear quote before any work begins, with no hidden fees.",
  },
  {
    value: "suppliers",
    question: "How do you find suppliers?",
    answer:
      "We use a mix of industry databases, trade-show networks, on-the-ground research, and our existing verified supplier base. Every recommendation is matched to your product specs and quality standards.",
  },
  {
    value: "verification",
    question: "Can you verify a factory I already found?",
    answer:
      "Yes. We offer standalone factory verification and audit services, including license checks, production capability review, and on-site inspection reports.",
  },
  {
    value: "minimums",
    question: "Do you work with small order quantities?",
    answer:
      "We work with businesses of different sizes. Smaller orders may have higher per-unit service costs, but we will be upfront about what is feasible and help you plan for scale.",
  },
  {
    value: "time",
    question: "How long does the sourcing process take?",
    answer:
      "Initial supplier shortlists are usually ready within 5–10 business days. Full order timelines depend on product complexity, sample approvals, and production schedules.",
  },
  {
    value: "language",
    question: "How do you handle communication and language barriers?",
    answer:
      "Our bilingual team manages all supplier communication in Mandarin and English, translating requirements, negotiating terms, and resolving issues on your behalf.",
  },
]

export default function FAQSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container-main max-w-4xl">
        <SectionHeader
          badge="FAQ"
          title="Frequently asked questions"
          description="Quick answers to common questions about working with SSourcing China."
        />

        <Accordion defaultValue="cost">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
