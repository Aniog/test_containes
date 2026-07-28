import SectionHeader from "@/components/ui/SectionHeader"
import Accordion from "@/components/ui/Accordion"

const faqItems = [
  {
    question: "What does a China sourcing agent actually do?",
    answer: "We act as your local representative in China. That includes finding suppliers, verifying factories, negotiating terms, monitoring production, inspecting quality, and arranging shipping — based on the service level you choose.",
  },
  {
    question: "How do you charge for your services?",
    answer: "We typically charge a service fee based on order value or a fixed project fee for audits and inspections. We disclose all costs upfront and do not take hidden commissions from factories.",
  },
  {
    question: "Can you work with small businesses or startups?",
    answer: "Yes. We support businesses of all sizes. For smaller volumes we focus on supplier discovery, sampling, and pre-shipment inspection to reduce risk without a large upfront commitment.",
  },
  {
    question: "How long does it take to find a supplier?",
    answer: "Initial shortlists are usually ready within 5–10 business days, depending on product complexity. Samples and factory audits add another 1–3 weeks.",
  },
  {
    question: "Do you guarantee product quality?",
    answer: "No agent can guarantee a factory's output, but we reduce risk through verification, inspections, and clear reporting. Our goal is to catch issues before goods ship.",
  },
]

export default function FAQ() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-site max-w-4xl">
        <SectionHeader
          label="FAQ"
          title="Common questions about sourcing from China"
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}
