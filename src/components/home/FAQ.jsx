import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does SSourcing China charge?",
    answer:
      "We typically charge a service fee based on project complexity, or a commission on successfully placed orders. We provide a clear quote before starting, with no hidden factory commissions.",
  },
  {
    question: "How long does it take to receive supplier quotes?",
    answer:
      "Most buyers receive an initial shortlist and quotation within 3–7 business days, depending on product complexity and market availability.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We support businesses of all sizes and can adjust our service level to match your budget, MOQ needs, and experience with China sourcing.",
  },
  {
    question: "Can you visit factories on my behalf?",
    answer:
      "Absolutely. Our team is based in Shenzhen and regularly conducts factory visits, audits, and inspections across Guangdong, Zhejiang, Jiangsu, and other manufacturing regions.",
  },
  {
    question: "What if I already have a supplier but need QC support?",
    answer:
      "We offer standalone inspection and quality-control services, including pre-shipment inspection, during-production inspection, and container loading supervision.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
          <p id="faq-subtitle" className="section-subtitle">
            Quick answers about how we work with overseas buyers.
          </p>
        </div>

        <div className="mt-10">
          <Accordion type="single" defaultValue="0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={String(index)}>
                <AccordionTrigger value={String(index)}>{faq.question}</AccordionTrigger>
                <AccordionContent value={String(index)}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
