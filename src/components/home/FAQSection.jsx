import { Accordion } from "@/components/ui/Accordion"

const faqItems = [
  {
    question: "How much do your sourcing services cost?",
    answer:
      "We typically charge a commission based on order value, or a flat project fee depending on complexity. There are no upfront fees for the initial supplier search and quotation. We will provide a clear fee structure before you commit.",
  },
  {
    question: "How long does it take to find suppliers?",
    answer:
      "For most product categories, we deliver an initial shortlist of 3–5 verified suppliers within 3–5 business days. Complex industrial products may take slightly longer.",
  },
  {
    question: "Do you handle small orders or only large volumes?",
    answer:
      "We work with a range of order sizes. While larger volumes give you more leverage with factories, we also support smaller buyers and startups with flexible MOQ requirements.",
  },
  {
    question: "Can you help with product customization or OEM?",
    answer:
      "Yes. We regularly manage OEM/ODM projects, including mold development, packaging design, and branding. We coordinate samples, revisions, and approvals with the factory.",
  },
  {
    question: "What if the goods arrive damaged or with quality issues?",
    answer:
      "Our pre-shipment inspection is designed to catch issues before goods leave China. In the rare event of a problem, we act as your local representative to negotiate rework, replacements, or compensation with the supplier.",
  },
  {
    question: "Do you arrange shipping and customs clearance?",
    answer:
      "Yes. We coordinate freight forwarding, documentation, and customs clearance. You can choose sea freight, air freight, or express courier depending on your timeline and budget.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 id="faq-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
            Frequently Asked Questions
          </h2>
          <p id="faq-desc" className="mt-4 text-text-secondary leading-relaxed">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}
