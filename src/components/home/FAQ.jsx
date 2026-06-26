import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How do you charge for your sourcing services?",
      answer: "We typically charge a service fee ranging from 3% to 5% of the total order value, depending on the volume and complexity. The final percentage is determined and agreed upon before we begin. For smaller orders, we may have a minimum service fee. We do not charge hidden fees."
    },
    {
      question: "Can I use your service if I already have a supplier?",
      answer: "Yes! Many clients use us for standalone services such as Factory Verification/Audits or Quality Control inspections of their existing suppliers to ensure safety and quality."
    },
    {
      question: "What types of products do you source?",
      answer: "We source a wide variety of consumer goods and industrial products, including electronics, apparel, home & garden goods, furniture, hardware, machinery, and promotional items."
    },
    {
      question: "Do you handle shipping and customs clearance?",
      answer: "Yes, we help arrange shipping (Courier, Air freight, or Sea freight) through our reliable network of forwarders and assist with export documentation. We also offer DDP (Delivered Duty Paid) services for certain countries."
    },
    {
      question: "What happens if a product fails the quality inspection?",
      answer: "If products fail our QC inspection, we immediately negotiate with the factory to rework or remake the defective items before authorizing final payment. You are fully informed and decide whether to accept, reject, or negotiate a discount."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Have questions about working with a China sourcing agent? Here are some common answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
