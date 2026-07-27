import { SectionLabel } from "@/components/ui/SectionLabel"
import { Accordion } from "@/components/ui/Accordion"

const faqs = [
  {
    question: "What does a sourcing agent actually do?",
    answer:
      "We act as your local representative in China. We find suppliers, verify factories, negotiate terms, manage samples, inspect quality, monitor production, and coordinate shipping.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We typically charge a service fee based on the project value or a fixed fee per order. The first sourcing quote request is free, and we explain pricing before any work begins.",
  },
  {
    question: "Can you help with small trial orders?",
    answer:
      "Yes. We support businesses of different sizes, including startups looking for small first orders or sample runs before scaling up.",
  },
  {
    question: "Do you own the factories?",
    answer:
      "No. We are independent, which lets us choose the best factory for each product and represent your interests during negotiations and production.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the inquiry form with your product details. Our team will reply within one business day to discuss your needs and next steps.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-title" className="text-3xl font-bold sm:text-4xl">
            Common Questions
          </h2>
        </div>
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}
