import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do you charge for sourcing services?",
    answer: "We typically charge a transparent service fee based on the project scope and order value. There are no hidden commissions from suppliers, so our recommendations remain unbiased.",
  },
  {
    question: "How long does it take to receive a supplier shortlist?",
    answer: "For most products, we deliver an initial shortlist with quotations within 5–7 business days after receiving your full requirements.",
  },
  {
    question: "Can you handle small trial orders?",
    answer: "Yes. We support businesses at different stages, from small trial orders to ongoing production programs. Minimum order flexibility depends on the product category.",
  },
  {
    question: "Do you visit factories in person?",
    answer: "Yes. Our local teams conduct on-site factory audits, inspections, and production follow-ups in key manufacturing regions across China.",
  },
  {
    question: "What quality standards do you follow?",
    answer: "We follow internationally recognized inspection standards, including ANSI/ASQ Z1.4 sampling and AQL levels, tailored to your product and acceptance criteria.",
  },
  {
    question: "Do you arrange shipping and customs documentation?",
    answer: "Yes. We coordinate freight forwarding, consolidation, export documentation, and delivery tracking to your nominated destination.",
  },
]

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion defaultValue={[]}>{faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}</Accordion>
        </div>
      </div>
    </section>
  )
}
