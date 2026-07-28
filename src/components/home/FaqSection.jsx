import { faqs } from "@/data/siteData"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion"

export function FaqSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            FAQ
          </span>
          <h2 className="mt-2 section-title">Common questions</h2>
          <p className="section-subtitle mx-auto">
            Quick answers about how we work, pricing, and what to expect.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion defaultValue={faqs[0].id}>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger value={faq.id}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={faq.id}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
